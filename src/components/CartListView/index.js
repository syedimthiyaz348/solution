import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import CartSummary from '../CartSummary'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const onClickingRemoveButton = () => {
        removeAllCartItems()
      }

      return (
        <div className="cart-list-button-container">
          <button
            onClick={onClickingRemoveButton}
            className="remove-all-button"
            data-testid="remove"
          >
            Remove All
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div className="cart-summary-view">
            <CartSummary />
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
