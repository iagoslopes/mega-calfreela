import { useState } from 'react';
import { FormDataType, InputField, SalaryDetailsType } from '../@types/types';
import './CalculatorContainer.css';
import FormSection from './FormSection';
import ResultCard from './ResultCard';

const inputFields:InputField[] = [
  {
    id: 'monthlyNetSalary',
    label: 'Quanto você quer ganhar por mês? (líquido)',
    inputInfo: 'R$/mês',
  },
  {
    id: 'workHoursPerDay',
    label: 'Quantas horas você quer trabalhar por dia?',
    inputInfo: 'horas/dia',
  },
  {
    id: 'workDaysPerWeek',
    label: 'Quantos dias você quer trabalhar por semana?',
    inputInfo: 'dias/semana',
  },
  {
    id: 'vacationWeeksPerYear',
    label: 'Quantas semanas por ano você gostaria de tirar férias?',
    inputInfo: 'semanas/ano',
  },
  {
    id: 'monthlyExpenses',
    label: 'Qual os seus custos mensais relacionados ao trabalho? Custo de licenças e sistemas, internet, luz, celular, entre outros',
    inputInfo: 'R$/mês',
  },
];

function CalculatorContainer() {
  // Estado - Valor que quando atualizado, é exibido na tela imeadiatamente
  const [formData, setFormData] = useState({} as FormDataType);
  const [salaryDetails, setSalaryDetails] = useState({} as SalaryDetailsType);

  // Arrow Function, que por ser evento irá sempre ter o parâmetro event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Substituindo um valor por outro
    setFormData({
      ...formData, // Spread operator
      [name]: value, // Computed property names [property]
    });
  };

  const handleSubmit = () => {
    // TODO: Eu preciso criar uma função que calcule o valor da hora de trabalho
  };

  return (
    <div className="calculator__container">
      <div className="container">
        <FormSection
          inputFields={ inputFields }
          onChange={ handleInputChange }
          onSubmit={ handleSubmit }
        />
        <ResultCard>
          <p>O valor mínimo para sua hora de trabalho é:</p>
          <h2>
            0,00
            <span>/hora</span>
          </h2>
          <p>O valor médio bruto que você precisa faturar é:</p>
          <h2>
            0,00
            <span>/mês</span>
          </h2>
        </ResultCard>
      </div>
    </div>
  );
}

export default CalculatorContainer;
