import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

function Screen1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((data) => setProducts(data));
  }, []);

  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id:{value:null,matchMode:FilterMatchMode.CONTAINS},
    price: { value: null, matchMode: FilterMatchMode.CONTAINS },
    Category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
    rating: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      
      <div className="flex justify-content-end">
        
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
           style={{marginRight:'500px',borderRadius:'20px'}}
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder=" Search hear"
          />
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <h1 style={{textAlign:'center',color:'green'}}>Screen1</h1>
      <DataTable
        style={{backgroundColor:'blue'}}
        value={products}
        tableStyle={{ minWidth: '50rem' }}
        sortField="Code"
        sortOrder={-1}
        dataKey="id"
        paginator
        rows={5}
        filters={filters}
        filterDisplay="row"
        globalFilterFields={[
          'id',
          'price',
          'name',
          'category',
          'quantity',
          'rating',
        ]}
        header={header}
        emptyMessage="No customers found."
      >
        <Column
          field="id"
          header="id"
          sortable
          filter
          filterField="id"
          filterPlaceholder="Search by id"
          showFilterMenu={false}
          style={{minWidth:'10rem'}}
        ></Column>
        <Column
          field="price"
          header="Price"
          sortable
          filter
          filterField="price"
          filterPlaceholder="Search by Price"
          style={{minWidth:'10rem'}}
          showFilterMenu={false}
        ></Column>
        <Column
          field="name"
          header="Name"
          sortable
          filter
          filterField="name"
          showFilterMenu={false}
          filterPlaceholder="Search by Name"
          style={{minWidth:'10rem'}}
        ></Column>
        <Column
          field="category"
          header="Category"
          filter
          sortable
          filterField="category"
          filterPlaceholder="Search by Category"
          showFilterMenu={false}
          style={{minWidth:'10rem'}}
        ></Column>
        <Column
          field="quantity"
          header="Quantity"
          filter
          sortable
          filterField="quantity"
          filterPlaceholder="Search by quantity"
          showFilterMenu={false}
          style={{minWidth:'10rem'}}
        ></Column>
        <Column
          field="rating"
          header="Rating"
          filter
          sortable
          filterField="rating"
          filterPlaceholder="Search by rating"
          showFilterMenu={false}
          style={{minWidth:'10rem'}}
        ></Column>
      </DataTable>
    </div>
  );
}

export default Screen1;
