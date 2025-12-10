from fastapi import APIRouter
from models.calculator import CalculatorInput, CalculatorResponse, YearResult

router = APIRouter()

@router.post("/calculate", response_model=CalculatorResponse)
async def calculate_ppli(data: CalculatorInput):
    results = []
    
    trad_value = data.initial_investment
    ppli_value = data.initial_investment
    
    total_trad_tax = 0.0
    
    # Effective Tax Rates
    income_tax_rate = data.fed_tax_rate + data.state_tax_rate + data.niit_rate
    cap_gains_tax_rate = data.cap_gains_rate + data.niit_rate + data.state_tax_rate # Assuming state taxes cap gains same as income for simplicity, or add specific logic
    
    for year in range(1, data.years + 1):
        # --- Traditional Calculation ---
        # 1. Growth
        gross_growth = trad_value * data.annual_return_rate
        
        # 2. Taxable Events
        # Dividends (Income Tax)
        dividends = trad_value * data.dividend_yield
        dividend_tax = dividends * income_tax_rate
        
        # Realized Gains (Cap Gains Tax)
        # Remaining return is price appreciation. 
        # appreciation = gross_growth - dividends
        # realized_gains = appreciation * data.turnover_rate
        appreciation = gross_growth - dividends
        realized_gains = appreciation * data.turnover_rate
        cap_gains_tax = realized_gains * cap_gains_tax_rate
        
        total_tax = dividend_tax + cap_gains_tax
        total_trad_tax += total_tax
        
        # Update Value
        trad_value = trad_value + gross_growth - total_tax + data.annual_contribution
        
        # --- PPLI Calculation ---
        # 1. Growth (Tax Free)
        ppli_growth = ppli_value * data.annual_return_rate
        
        # 2. Costs
        ppli_costs = ppli_value * data.ppli_cost_rate
        
        # Update Value
        ppli_value = ppli_value + ppli_growth - ppli_costs + data.annual_contribution
        
        results.append(YearResult(
            year=year,
            traditional_value=round(trad_value, 2),
            ppli_value=round(ppli_value, 2),
            traditional_tax_paid=round(total_tax, 2),
            ppli_costs=round(ppli_costs, 2)
        ))
        
    return CalculatorResponse(
        results=results,
        total_tax_savings=round(ppli_value - trad_value, 2), # Simplified metric: Difference in final wealth
        final_traditional_value=round(trad_value, 2),
        final_ppli_value=round(ppli_value, 2)
    )
