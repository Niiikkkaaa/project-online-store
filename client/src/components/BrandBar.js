import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import '../css/style.css' 


const BrandBar = observer ( () => {
  const {item} = useContext(Context)
  
  return(
    <section className="typebar">
      <h3 className="typebar-title"  onClick={() => item._selectedBrand={}}>
        Brands:
      </h3>
      <ul className="typebar-list">
        {item.brands.map(brand =>
          <li 
            style = {{cursor: 'pointer'}}
            onClick={() => item.setSelectedBrand(brand)}
            class={brand.id === item.selectedBrand.id ? 'active' : ' '}
            key={brand.id}
          >
            {brand.name}
          </li>
        )}
      </ul>
    </section>
  )
});

export default BrandBar;