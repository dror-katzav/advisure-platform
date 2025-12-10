export interface CalculatorInput {
    initial_investment: number;
    annual_contribution: number;
    years: number;
    annual_return_rate: number;
    fed_tax_rate: number;
    state_tax_rate: number;
    cap_gains_rate: number;
    niit_rate: number;
    turnover_rate: number;
    dividend_yield: number;
    ppli_cost_rate: number;
}

export interface YearResult {
    year: number;
    traditional_value: number;
    ppli_value: number;
    traditional_tax_paid: number;
    ppli_costs: number;
}

export interface CalculatorResponse {
    results: YearResult[];
    total_tax_savings: number;
    final_traditional_value: number;
    final_ppli_value: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function calculatePPLI(data: CalculatorInput): Promise<CalculatorResponse> {
    const response = await fetch(`${API_BASE_URL}/calculate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error('Failed to calculate');
    }

    return response.json();
}
