import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../actions/cart'
import GuitarCard from '../components/GuitarCard'


const mapStateToProps = ({ cart }, { id }) => ({
    addedCount: cart.items.reduce(
        (count, guitar) => count + (guitar.id === id ? 1 : 0),
        0
    ),
  })
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(cartActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(GuitarCard);

