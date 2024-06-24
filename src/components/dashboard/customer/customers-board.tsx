"use client"

import React, { useState, useEffect } from 'react';
import CustomersFilters from './customers-filters';
import { Customer, CustomersTable } from './customers-table';

interface CustomerBoardProps {
    customers: Customer[]
}

const CustomerBoard : React.FC<CustomerBoardProps> = ({customers}:CustomerBoardProps) => {
    const page =0;
    const rowsPerPage=5;

    //list of paged customers
    const paginatedCustomers = applyPagination(customers,page,rowsPerPage);

    const [filterText, setFilterText] = useState<string>('');
    const [filteredCustomer, setFilteredCustomer] = useState<Customer[]>([]);

    const handleFilterChange = (newValue: string) => {
      setFilterText(newValue);
    };
    useEffect(()=>{
        const newFilter = customers.filter((cus:Customer)=> cus.name.includes(filterText))
        setFilteredCustomer(newFilter);
    },[filterText])
    
  return (
    <>
        {/* search bar */}
        <CustomersFilters filterValue={filterText} onFilterChange={handleFilterChange}/>
        {/* Table */}
        {console.log(paginatedCustomers)}
        {filteredCustomer.length == 0?
            <CustomersTable
            count={paginatedCustomers.length}
            page={page}
            rows={paginatedCustomers}
            rowsPerPage={rowsPerPage}
        />
        :
        <CustomersTable
        count={filteredCustomer.length}
        page={page}
        rows={filteredCustomer}
        rowsPerPage={rowsPerPage}/>
        }
        
    </>
  )
}

function applyPagination(rows: Customer[], page:number,rowsPerPage: number):Customer[]{
    return rows.slice(page* rowsPerPage, page * rowsPerPage + rowsPerPage);
  }

export default CustomerBoard