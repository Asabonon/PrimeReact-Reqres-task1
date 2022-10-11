import React, {useState, useEffect, useRef} from "react"
import { DataTable } from "primereact"
import { Column } from "primereact"
import {ProductService} from './ProductService';
import { Toast } from 'primereact/toast';
import { ContextMenu } from 'primereact/contextmenu';


const DataTableTask = () => {

    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const toast = useRef(null);

    const cm = useRef(null);
    
    const menuModel = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
    ];

    const productService = new ProductService();


    const showSuccess = () => {
        productService.getProducts().then(data => setProducts(data));

        toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    useEffect(() => {
        showSuccess()
    }, [])
    
    const viewProduct = (product) => {
        toast.current.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    const deleteProduct = async (product) => {
        const awaitDel = await productService.deleteProducts()
        console.log(awaitDel)
        if (awaitDel)
            toast.current.show({severity: 'error', summary: '123Product Deleted', detail: '123'});

        const newList = products.filter((p) => p.id !== product.id);
        setProducts(newList);
    }


    return (
    <div>
        <DataTable value={products} 
         responsiveLayout="scroll"
         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageLink RowsPerPageDropdown"
         dataKey="id"
         paginator
         emptyMessage='No data found'
         className="datatable-responsive"
         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
         rows={10}
         onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
         onContextMenu={e => cm.current.show(e.originalEvent)} responsiveLayout="scroll"
        >
            <Column field="id" sortable header="id"></Column>
            <Column field="email" sortable header="email"></Column>
            <Column field="first_name" sortable header="first_name"></Column>
            <Column field="last_name" sortable header="last_name"></Column>
        </DataTable>     
        <Toast ref={toast} />  
        <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>
    </div>
    );

};

export default DataTableTask


