import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const GuitarCard = (guitar) => {
  const {title, price, image, addToCart, addedCount} = guitar
  return (
    <Card>
    <Image src= { image }  style={{alignSelf:'center'}}/>
    <Card.Content>
      <Card.Header>{ title }</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        { price }
      </a>
    </Card.Content>
    <Button onClick={addToCart.bind(this, guitar)}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
  </Card>
)
}


export default GuitarCard