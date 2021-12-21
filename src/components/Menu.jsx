import React from 'react'
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'


const CartComponent = ({ title, id, image, removeToCart}) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeToCart.bind(this, id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={ image } style={{width:30, height:80}}/>
      <List.Content>{ title }</List.Content>
    </List.Item>
  </List>
)

const MenuComponent = ({ totalPrice, count, items }) => (
    <Menu>
        <Menu.Item
          name='browse'
        >
          Магазин
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            Итого: &nbsp; <b>{ totalPrice }</b> руб.
          </Menu.Item>

          <Popup
            trigger={
              <Menu.Item
                name='help'
              >
                Корзина (<b>{ count }</b>)
              </Menu.Item>
            }
            content={items.map(guitar => (<CartComponent {...guitar} />))}
            on="click" hideOnScroll
          />

        </Menu.Menu>
      </Menu>
)

export default MenuComponent;