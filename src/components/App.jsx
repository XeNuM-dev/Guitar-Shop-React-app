
import { Component } from 'react'

import { Container } from 'semantic-ui-react'
import axios from 'axios'
import Menu from '../containers/Menu'
import GuitarCard from '../containers/GuitarCard'
import Filter from '../containers/Filter'
import { Card } from 'semantic-ui-react'





class App extends Component {
  componentWillMount() {
    const { setGuitars } = this.props
    axios.get('/guitarsList.json').then(({ data }) => {
      setGuitars(data)
    })
  }


  render() {
    const { guitars, isReady } = this.props
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
        {!isReady 
        ? 'Загрузка...' 
        : guitars.map((guitar, i) => <GuitarCard key={i} {...guitar} />)}
        </Card.Group>
      </Container>
    );
  }

}


export default App;
