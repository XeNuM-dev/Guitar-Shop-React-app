import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as guitarsActions from '../actions/guitars'
import App from '../components/App'
import orderBy from 'lodash/orderBy'


const sortBy = (guitars, filterBy) => {
    
    switch (filterBy) {
        case 'all':
            return guitars
        case 'price_high':
            return orderBy(guitars, 'price', 'desc')
        case 'price_low':
            return orderBy(guitars, 'price', 'asc')        
        default:
            return guitars
    }
}

const filterGuitars = (guitars, searchQuery) => 
    guitars.filter(
        o => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

const searchGuitars = (guitars, filterBy, searchQuery) => {
    return sortBy(filterGuitars(guitars, searchQuery), filterBy)
}   

const mapStateToProps = ({ guitars, filter }) => ({
    guitars: guitars.items && searchGuitars(guitars.items, filter.filterBy, filter.searchQuery),
    isReady: guitars.isReady
  })
  
  const mapDispatchToProps = dispatch => ({
      ...bindActionCreators(guitarsActions, dispatch),
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);