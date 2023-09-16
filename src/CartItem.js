import React from 'react';

class CartItem extends React.Component {
  

  render () {
    console.log('this.props',this.props)
    const{price,title,qty}=this.props.product;
    const{product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct}=this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img alt="" style ={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/128/4315/4315609.png'
              onClick={()=>onIncreaseQuantity(product)}
              />
            <img alt="decrease" className='action-icons' 
              src='https://cdn-icons-png.flaticon.com/128/4315/4315581.png'
              onClick={()=>onDecreaseQuantity(product)}
              />
            <img alt="delete" className='action-icons' 
            src='https://cdn-icons-png.flaticon.com/128/1828/1828843.png'
              onClick={()=>onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 120,
    width: 110,
    borderRadius: 5,
    background: 'grey'
    
  }
}

export default CartItem;