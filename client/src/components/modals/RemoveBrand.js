import React, { useContext, useState, useEffect } from 'react'
import { deleteBrand, deleteType, fetchBrands, fetchTypes } from '../../http/itemAPI'
import '../../css/style.css'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const RemoveBrand = observer( () => {
  const {item} = useContext(Context)

  useEffect(() => {
    fetchBrands().then(data => item.setBrands(data))
  }, [])

  const delBrand = () => {
    console.log(item.selectedBrand.id)
    deleteBrand(item.selectedBrand.id).then(
      item._selectedBrand = {}
    )
  }

  return ( 
    <section className="modal">
      <h3 className="modal-title">
          Delete Brand
      </h3>
      <h3 className="typebar-title">
        Brands:
      </h3>
      <ul className="typebar-list">
      {item.brands.map(brand =>
        <li 
          style = {{cursor: 'pointer'}}
          className = {brand.id === item.selectedBrand.id ? 'active' : ' '}
          onClick  ={() => item.setSelectedBrand(brand)}
          key = {brand.id}
        >
          {brand.name}
        </li>
      )}
      </ul>
        <div className="flex">
          <button className="button modal-button modal-button-close" onClick={delBrand}>Delete</button>
          <button className="button modal-button modal-button-close" >Close</button>
        </div>
    </section>
  )
});

export default RemoveBrand;