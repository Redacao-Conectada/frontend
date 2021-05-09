import React from 'react';
import { OptionsContainer, Option } from './styles';

interface PageStepperProps {
  steps: string[];
  activeStep: number;
  onStepClick: (newActiveStep: number) => void;
}

const PageStepper: React.FC<PageStepperProps> = ({
  steps,
  activeStep,
  onStepClick,
}) => {
  const optionItem = (index: number, isActive: boolean, option: string) => (
    <Option isActive={isActive} key={option}>
      <a onClick={() => onStepClick(index)}>{option}</a>
    </Option>
  );

  return (
    <OptionsContainer>
      {steps.map((option, index) =>
        optionItem(index, index === activeStep, option),
      )}
    </OptionsContainer>
  );
};

export default PageStepper;
