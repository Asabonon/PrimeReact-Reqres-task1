export class ProductService {
	getProducts() {
		return fetch('https://reqres.in/api/users?page=2').then(res => res.json()).then(d => d.data);
    }

    async deleteProducts(){
        try {await fetch('https://reqres.in/api/users/2', { method: 'DELETE'}); return true}
        catch (e) {return false}  
    }
}

