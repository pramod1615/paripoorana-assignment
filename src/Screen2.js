import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService2';
import { FilterMatchMode, FilterOperator } from 'primereact/api';

function Screen2() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const [filters, setFilters] = useState({
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    code: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  return (
    <div className="card">
      <h1 style={{textAlign:'center',color:'green'}}>Screen2</h1>
      
      <DataTable
        value={products}
        tableStyle={{ minWidth: '50rem' }}
        sortField="Code"
        sortOrder={-1}
        filters={filters}
        filterDisplay="row"
      >
        <Column
          field="code"
          header="Code"
          filter
          filterField="code"
          filterPlaceholder="Search by code"
          showFilterMenu={false}
        ></Column>
        <Column
          field="name"
          header="Name"
          sortable
          filter
          filterField="name"
          filterPlaceholder="Search by name"
          showFilterMenu={false}
        ></Column>
        <Column
          field="category"
          header="Category"
          sortable
          showFilterMenu={false}
          filter
          filterField="category"
          filterPlaceholder="Search by Category"
        ></Column>
        <Column
          field="quantity"
          header="Quantity"
          sortable
          filter
          filterField="quantity"
          filterPlaceholder="Search by quantity"
          showFilterMenu={false}
        ></Column>
      </DataTable>
      <button
       style={{marginLeft:'600px'}}
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Screen2;
