import React from 'react';
import Cart from'./Cart';
import Navbar from './Navbar';
import {
  addDoc,
  collection,
  getDocs,
  doc,
  onSnapshot,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./index";



class  App extends React.Component { 
  constructor(){
      super()
      this.state={
          products:[],
          loading:true       
      }
      // this.increaseQty=this.increaseQty.bind(this);
    }
    async componentDidMount() {
      try {
        const collectionRef = collection(db, "products");
        const snapshot = await getDocs(collectionRef);
  
        //realtime data collection
        onSnapshot(collectionRef, (snapshot) => {
          // console.log(snapshot)
          const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data["id"] = doc.id;
            return data;
          });
  
          this.setState({
            products,
            loading: false,
          });
        
        });
        
      } catch (err) {
        console.log(err);
      }
    }
  
    handleIncreaseQuantity= (product) =>{
      console.log('hey increase ',product);
      const{products}=this.state;
      const index = products.indexOf(product);

      // products[index].qty+=1;
      // this.setState({
      //   products
      // })
      // });
    const productId = products[index].id;
    const docRef = doc(db, "products", productId);

    setDoc(
      docRef,
      {
        qty: products[index].qty + 1,
      },
      { merge: true }
    )
      .then(() => {
        console.log("Quantity is updated");
      })
      .catch((error) => {
        console.log(error);
      });
  
  };
    

    handleDecreaseQuantity= (product) =>{
      // console.log('hey increase ',product);
      const{products}=this.state;
      const index = products.indexOf(product);

      if (products[index].qty===0){
        return;
      }
    const productId = products[index].id;
    const docRef = doc(db, "products", productId);

    setDoc(
      docRef,
      {
        qty: products[index].qty - 1,
      },
      { merge: true }
    )
      .then(() => {
        console.log("Quantity is decreased");
      })
      .catch((error) => {
        console.log(error);
      });
  
  };
     
  
    handleDeleteProduct= async (id)=>{
      const {products}=this.state;

    const docRef = doc(db, "products", id);

    await deleteDoc(docRef);
    console.log('delted Done!')
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
      const {products,loading}= this.state

      let cartTotal =0;

      products.map((product)=>{
        cartTotal = cartTotal+product.qty*product.price ;
        
      })
      return cartTotal;
      
      
    }
   addProduct = () => {
    const collectionRef = collection(db, "products");
    addDoc(collectionRef, {
      title: "Watch",
      qty: 3,
      img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      price: 1999,
    });
  };
  
  render(){
    const{products,loading}=this.state
  return (
    <div className="App">
      <Navbar count={this.GetCartCount()}/>
      {/* <button onClick={this.addProduct } style={{padding:20, fontSize:20, color:'black',borderRadius:10 }}>Add a product</button> */}
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      
      />
      {loading && <h1>loading product</h1>}
      <div>
        Total : {this.GetCartTotal()}
      </div>
    </div>
  );
}
}

export default App;
