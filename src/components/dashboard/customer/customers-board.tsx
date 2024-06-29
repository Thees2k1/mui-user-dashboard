"use client";

import React, { useState } from "react";

import { Customer, CustomersTable } from "./customers-table";
import CustomerFilter, { Filter } from "./filter/customer-filter";

interface CustomerBoardProps {
  customers: Customer[];
}

const CustomerBoard: React.FC<CustomerBoardProps> = ({
  customers,
}: CustomerBoardProps) => {
  const page = 0;
  const rowsPerPage = 5;
  const [filteredCustomer, setFilteredCustomer] = useState<Customer[]>([]);

  const handleFilter = (filter : Filter) => {
    var newFilter =customers;
   if(filter.gender && filter.gender !== "all") {
      newFilter = customers.filter(
        (cus: Customer) => cus.gender === filter.gender!
      );
    }

    if (filter.text && filter.text !=="") {
      newFilter = newFilter.filter((cus: Customer) =>
        cus.name.includes(filter.text!)
      );
    }

    setFilteredCustomer(applyPagination(newFilter, page, rowsPerPage));
  };

  return (
    <>
      {/* search bar */}
    <CustomerFilter onFilterApply={handleFilter}/>
      {/* Table */}
      {
        <CustomersTable
          count={filteredCustomer.length}
          page={page}
          rows={filteredCustomer}
          rowsPerPage={rowsPerPage}
        />
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
