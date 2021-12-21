import React from 'react'
import { Input, Menu } from 'semantic-ui-react'




const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
    <Menu secondary>
          <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}
            style ={{color: 'whitesmoke'}}
          >Все
          </Menu.Item>
          <Menu.Item
            active={filterBy === 'price_high'}
            onClick={setFilter.bind(this, 'price_high')}
            style ={{color: 'whitesmoke'}}
          >Цена(дорогие)
          </Menu.Item>
          <Menu.Item
            active={filterBy === 'price_low'}
            onClick={setFilter.bind(this, 'price_low')}
            style ={{color: 'whitesmoke'}}
          >Цена(дешевые)
          </Menu.Item>
          <Menu.Item>
            <Input 
            icon="search" 
            onChange={e => setSearchQuery(e.target.value)}
            value={searchQuery} 
            placeholder="Введите запрос..." 
            />
          </Menu.Item>
        </Menu>
)


  export default Filter