from pydantic import BaseModel
from typing import List

class CalculatorInput(BaseModel):
    initial_investment: float = 5000000.0
    annual_contribution: float = 0.0
    years: int = 20
    annual_return_rate: float = 0.07  # 7%
    
    # Tax Assumptions
    fed_tax_rate: float = 0.37
    state_tax_rate: float = 0.0  # Default 0
    cap_gains_rate: float = 0.20
    niit_rate: float = 0.038
    
    # Portfolio Assumptions
    turnover_rate: float = 0.20  # 20% of portfolio realized annually
    dividend_yield: float = 0.02 # 2% yield (taxed as income)
    
    # PPLI Assumptions
    ppli_cost_rate: float = 0.005 # 0.5% AUM fee

class YearResult(BaseModel):
    year: int
    traditional_value: float
    ppli_value: float
    traditional_tax_paid: float
    ppli_costs: float

class CalculatorResponse(BaseModel):
    results: List[YearResult]
    total_tax_savings: float
    final_traditional_value: float
    final_ppli_value: float
