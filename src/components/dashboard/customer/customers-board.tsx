"use client";

import React, { useState, useEffect } from "react";
import CustomersFilters from "./customers-filters";
import { Customer, CustomersTable } from "./customers-table";
import  { ToggleOption } from "./customers-location-toggle";
import GenderToggle from "./customers-location-toggle";

interface CustomerBoardProps {
  customers: Customer[];
}

const CustomerBoard: React.FC<CustomerBoardProps> = ({
  customers,
}: CustomerBoardProps) => {
  const page = 0;
  const rowsPerPage = 5;

  const [filterText, setFilterText] = useState<string>("");
  const [filterGender,setFilterGender] = useState<ToggleOption>(ToggleOption.all)
  const [filteredCustomer, setFilteredCustomer] = useState<Customer[]>([]);

  const handleFilterChange = (newValue: string) => {
    setFilterText(newValue);
  };
  const handleChangeGenderFilter = (newValue: ToggleOption) => {
    setFilterGender(newValue);
  };

  const handleReturnFilter=()=>{
    
    var newFilter : Customer[] =[];
    if(filterGender === ToggleOption.all){
      newFilter = customers
    }else{
      console.log(`filter: ${filterGender}`)
      newFilter = customers.filter((cus:Customer)=>cus.gender === filterGender.toString())
    }

    if(filterText !==""){
       newFilter = newFilter.filter((cus: Customer) =>
        cus.name.includes(filterText))
    }
    
     
    setFilteredCustomer(applyPagination(newFilter,page,rowsPerPage));
  }
  useEffect(() => {
    handleReturnFilter();
   
  }, [filterText,filterGender]);



  return (
    <>
      {/* search bar */}
      <GenderToggle genderValue={filterGender} onChangeValue={handleChangeGenderFilter}/>
      <CustomersFilters
        filterValue={filterText}
        onFilterChange={handleFilterChange}
      />
      {/* Table */}
      {
        
        (
          <CustomersTable
            count={filteredCustomer.length}
            page={page}
            rows={filteredCustomer}
            rowsPerPage={rowsPerPage}
          />
        ) 
      }
    </>
  );
};

function applyPagination(
  rows: Customer[],
  page: number,
  rowsPerPage: number
): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

export default CustomerBoard;
