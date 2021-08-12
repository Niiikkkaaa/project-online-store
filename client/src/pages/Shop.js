import React, { useEffect } from 'react'
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import '../css/style.css'
import ItemList from '../components/ItemList';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { fetchBrands, fetchTypes, fetchItems } from '../http/itemAPI';
import { Context } from '..';
import Pages from '../components/Pages'


const Shop = observer( () => {
  const {item} = useContext(Context)

  useEffect(() =>{
    fetchTypes().then(data => item.setTypes(data))
    fetchBrands().then(data => item.setBrands(data))
    fetchItems(null, null, 1, 6).then(data => {
      item.setItems(data.rows)
      item.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, 6).then(data => {
      item.setItems(data.rows)
      item.setTotalCount(data.count)
    })
  }, [item.page, item.selectedType, item.selectedBrand])

  return(
    <section className="shop">
      <div className=" flex shop-flex wrapper">
        <div className="shop-container">
          <TypeBar />
          <BrandBar />
        </div>
        <ItemList />
      </div>
      <Pages/>
    </section>
  )
});

export default Shop;