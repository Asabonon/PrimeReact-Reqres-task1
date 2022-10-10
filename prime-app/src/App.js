import logo from './logo.svg';
import './App.css';
import { InputText } from 'primereact';
import { Button } from 'primereact';
import { Toast } from 'primereact';
import { useState, useRef } from "react";
import { DataTable } from 'primereact/datatable';


import React from 'react';
import "primereact/resources/themes/mdc-dark-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";
import DataTableTask from './DataTableTask';

function App() {
 
  return (
    <div className="App p-input-filled">
      <DataTableTask />
    </div>
  );
}

export default App;
