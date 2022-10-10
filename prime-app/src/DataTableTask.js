import React, {useState, useEffect} from "react"
import { DataTable } from "primereact"
import { Column } from "primereact"
import axios from "axios";

const DataTableTask = () => {
    
    const[posts, setPosts] = useState([]);
    
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPosts(res.data));
    });

    return (
    <div>
        <DataTable value={posts} 
         responsiveLayout="scroll"
         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageLink RowsPerPageDropdown"
         dataKey="id"
         paginator
         emptyMessage='No data found'
         className="datatable-responsive"
         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
         rows={10}
        >
            <Column field="userId" sortable header="userId"></Column>
            <Column field="id" sortable header="id"></Column>
            <Column field="title" sortable header="title"></Column>
            <Column field="body" sortable header="body"></Column>
        </DataTable>       
    </div>
    );

};

export default DataTableTask

