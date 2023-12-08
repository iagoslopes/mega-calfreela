export type InputField = {
  id: string;
  label: string;
  inputInfo: string;
};

export type FormDataType = {
  monthlyNetSalary: string,
  workHoursPerDay: string,
  workDaysPerWeek: string,
  vacationWeeksPerYear: string,
  monthlyExpenses: string,
};

export type SalaryDetailsType = {
  hourlyRate: string,
  monthlyGrossIncome: string,
};
