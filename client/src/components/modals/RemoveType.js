import React, { useContext, useState, useEffect } from 'react'
import { deleteType, fetchTypes } from '../../http/itemAPI'
import '../../css/style.css'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const RemoveType = observer( () => {
  const {item} = useContext(Context)

  const removeType = () => {
    console.log(item.selectedType.id)
    deleteType(item.selectedType.id).then(
      item._selectedType = {}
    )
  }

  return ( 
    <section className="modal">
      <h3 className="modal-title">
          Delete Type
      </h3>
      <h3 className="typebar-title">
        Types:
      </h3>
      <ul className="typebar-list">
      {item.types.map(type =>
        <li 
          style = {{cursor: 'pointer'}}
          className = {type.id === item.selectedType.id ? 'active' : ' '}
          onClick  ={() => item.setSelectedType(type)}
          key = {type.id}
        >
          {type.name}
        </li>
      )}
      </ul>
        <div className="flex">
          <button className="button modal-button modal-button-close" onClick={removeType}>Delete</button>
          <button className="button modal-button modal-button-close" >Close</button>
        </div>
    </section>
  )
});

export default RemoveType;