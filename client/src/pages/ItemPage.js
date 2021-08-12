import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { fetchOneItem } from '../http/itemAPI'

const ItemPage = () => {
  /*const item =  {id: 1, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'}
  const description = [
    {id: 1, title: 'material', description: 'gold'},
    {id: 2, title: 'garanty', description: '3 years'},
    {id: 3, title: 'size', description: 'S-M'}
  ]*/
  const [item, setItem] = useState({info:[]})
  const {id} = useParams()
  useEffect(() => {
    fetchOneItem(id).then(data => setItem(data))
  })
  
  return(
    <section className="itempage">
      <div className="wrapper">

        <div className="itempage-imgcontainer">
          <img src={process.env.REACT_APP_API_URL + item.img} width="490" height="490"/>
        </div>
        <div className="itempage-infocontainer">
        <div>
          <h2 className="itempage-info itempage-name">{item.name}</h2>
          <p className="itempage-info itempage-price">Rating: {item.rating}</p>
        </div>
        <div className="itempage-info">
          {item.price}$
        </div>
        <button className="item-button-add itempage-button"></button>
        </div>
        <div>
        {item.info.map(info =>
          <div className="itempage-description" key={info.id}>
            {info.title}: {info.description}
          </div>
        )}
      </div>
      </div>
    </section>
  )
}

export default ItemPage;