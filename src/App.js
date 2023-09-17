import React from 'react';
import Cart from'./Cart';
import Navbar from './Navbar';

class  App extends React.Component { 
  constructor(){
      super()
      this.state={
          products:[
              {
                  price:99,
                  title:"Watch",
                  qty:1,
                  img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
                  id:1
                },
                {
                  price:999,
                  title:"Mobile phone",
                  qty:10,
                  img:'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
                  id:2
                },
                {
                  price:9999,
                  title:"Laptop",
                  qty:1,
                  img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
                  id:3
                }
          ]
        
      }
      // this.increaseQty=this.increaseQty.bind(this);
    }
    handleIncreaseQuantity= (product) =>{
      console.log('hey increase ',product);
      const{products}=this.state;
      const index = products.indexOf(product);

      products[index].qty+=1;
      this.setState({
        products
      })
    }

    handleDecreaseQuantity= (product) =>{
      console.log('hey increase ',product);
      const{products}=this.state;
      const index = products.indexOf(product);

      if (products[index].qty===0){
        return;
      }
      products[index].qty-=1;
      this.setState({
        products
      })
    }
  
    handleDeleteProduct=(id)=>{
      const {products}=this.state;

      const items=products.filter((item)=>item.id!==id);

      this.setState({
        products:items
      })
    }
    GetCartCount =() =>{
      const {products}= this.state


        let count=0;
        products.forEach((product) => {
            count += product.qty
        });

        return count;
    }
    GetCartTotal=() =>{
      const {products}= this.state

      let cartTotal =0;

      products.map((product)=>{
        cartTotal = cartTotal+product.qty*product.price

      })
      return cartTotal;
    }
  
  render(){
    const{products}=this.state
  return (
    <div className="App">
      <Navbar count={this.GetCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      <div>
        Total : {this.GetCartTotal()}
      </div>
    </div>
  );
}
}

export default App;
