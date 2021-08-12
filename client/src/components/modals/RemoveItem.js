import React, { useContext, useState, useEffect } from 'react'
import {deleteItem,  deleteBrand, deleteType, fetchBrands, fetchItems, fetchTypes } from '../../http/itemAPI'
import '../../css/style.css'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import Item from '../Item'

const RemoveItem = observer( () => {
  const {item} = useContext(Context)

  useEffect(() => {
    fetchItems(null, null, null, null).then(data => {
      item.setItems(data.rows)
      item.setTotalCount(data.count)
    })
  }, [])

  //{item._items.map(item =>
    //console.log('itemmmm', item)
  //)}


  const delItem = () => {
    console.log(item.selectedItem.id)
    deleteItem(item.selectedItem.id).then(
      item._selectedItem = {}
    )
  }

  return ( 
    <section className="modal">
      <h3 className="modal-title">
          Delete Item
      </h3>
      <h3 className="typebar-title">Items: </h3>

   
      
      <ul className="typebar-list">
      {item._items.map(itemm =>
        <li 
          style = {{cursor: 'pointer'}}
          className = {itemm.id === item.selectedItem.id ? 'active' : ' '}
          onClick  ={() => item.setSelectedItem(itemm) }
          
          key = {itemm.id}
        >
          {itemm.name}
        </li>
      )}
      </ul>
        <div className="flex">
          <button className="button modal-button modal-button-close" onClick={delItem}>Delete</button>
          <button className="button modal-button modal-button-close" >Close</button>
        </div>
    </section>
  )
});

export default RemoveItem;