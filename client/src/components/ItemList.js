import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..';
import Item from './Item';
 
//Логика навигации по странице
const ItemList = observer( () => {
  const {item} = useContext(Context)
 
  return(
    <section className="itemlist">
      {item._items.map(item =>
        <Item key={item.id} ItemComponent={item} />
      )}
    </section>
  )
});

export default ItemList;

