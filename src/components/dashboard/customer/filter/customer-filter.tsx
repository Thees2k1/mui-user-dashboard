import React from "react";
import GenderToggle from "./gender-toggle";
import SearchInput from "./search-input";

export interface CustomerFilterProps {
  onFilterApply: (filter: Filter) => void;
}

export interface Filter {
  text?: string;
  gender?: string;
}

const CustomerFilter : React.FC<CustomerFilterProps> = ({onFilterApply}) => {
  const [filterText, setFilterText] = React.useState<string>("");
  const [filterGender, setFilterGender] = React.useState<string>("all");

  const handleFilterChange = (newValue: string) => {
    setFilterText(newValue);
  };
  const handleChangeGenderFilter = (newValue: string) => {
    setFilterGender(newValue);
  };

  React.useEffect(()=>{
    onFilterApply({text: filterText, gender: filterGender})
  },[filterGender,filterText]);

  return (
    <>
      <GenderToggle
        genderValue={filterGender}
        onChangeValue={handleChangeGenderFilter}
      />
      <SearchInput onFilterChange={handleFilterChange} />
    </>
  );
};

export default CustomerFilter;
