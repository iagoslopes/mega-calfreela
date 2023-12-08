import { FormDataType } from '../@types/types';

export const formatCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function calcIncome({
  monthlyExpenses,
  monthlyNetSalary,
  vacationWeeksPerYear,
  workDaysPerWeek,
  workHoursPerDay,
}: FormDataType) {
  const weelsPerYear = 52 - Number(vacationWeeksPerYear);
  const workDaysPerYear = weelsPerYear * Number(workDaysPerWeek);
  const productiveHoursPerYear = workDaysPerYear * Number(workHoursPerDay) * 0.9;

  const annualNetSalary = Number(monthlyNetSalary) * 12;
  const annualExpenses = Number(monthlyExpenses) * 12;
  const annualTaxes = 70 * 12;

  const annualGrossIncome = annualNetSalary + annualExpenses + annualTaxes;
  const hourlyRate = annualGrossIncome / productiveHoursPerYear;
  const monthlyGrossIncome = annualGrossIncome / 12;

  return {
    hourlyRate,
    monthlyGrossIncome,
  };
}
