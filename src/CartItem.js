import React from 'react';

class CartItem extends React.Component {
  constructor(){
    super()
    this.state={
      price:999,
      title:"Mobile phone",
      qty:1,
      img:''
    }
    // this.increaseQty=this.increaseQty.bind(this);
  }

  increaseQty =() =>{
    // this.state.qty+=1;
    // console.log('this',this.state);
    //set state from 1
    // this.setState({
    //   qty:this.state.qty +1
    // })
    //set State 2 
    this.setState((prevState)=>{
        return{
          qty:prevState.qty+1
        }
    });
  }
    
    
    decreaseQty =() =>{
      const{qty}= this.state;
      if (qty===0){
        return;
      }
      this.setState((prevState)=>{
          return{
            qty: prevState.qty - 1
          }
      });


  }

  render () {
    const{price,title,qty}=this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img alt='some value' style ={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/128/4315/4315609.png'
              onClick={this.increaseQty}
              />
            <img alt="decrease" className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/128/4315/4315581.png'
              onClick={this.decreaseQty}
              />
            <img alt="delete" className='action-icons' 
            src='https://cdn-icons-png.flaticon.com/128/1828/1828843.png'/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 5,
    background: 'grey'
    
  }
}

export default CartItem;