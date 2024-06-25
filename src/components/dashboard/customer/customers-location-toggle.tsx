'use client'

import Card from "@mui/material/Card";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React from "react";

// interface CustomersLocationToggleProps {
//   location: string;
//   onFilterChange: (newLocation: string) => void;
// }
 export enum ToggleOption{
    all= 'all',
    male='male',
    female = 'female'
}

interface GenderToggleProps {
    genderValue: string;
    onChangeValue: (newValue: ToggleOption) => void;
  }

const GenderToggle: React.FC<GenderToggleProps>= ({genderValue,onChangeValue}) => {
  const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, value : ToggleOption) => {
    onChangeValue(value)
  };
  return (
    <Card >
      <ToggleButtonGroup
        color="primary"
        value={genderValue}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        fullWidth
        
      >
        <ToggleButton value={ToggleOption.all}>ALL</ToggleButton>
        <ToggleButton value={ToggleOption.male}>Male</ToggleButton>
        <ToggleButton value={ToggleOption.female}>Female</ToggleButton>
      </ToggleButtonGroup>
    </Card>
  );
};

export default GenderToggle;
