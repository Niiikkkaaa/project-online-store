import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom';
import '../css/style.css'
import { ITEM_ROUTE } from '../utils/consts';

//Логика навигации по странице
const Item =  ({ItemComponent}) => {

  const history = useHistory()
  console.log(history)

  return(
    <article className="item" onClick={() => history.push(ITEM_ROUTE + '/' + ItemComponent.id)}>
      <div className="item-imgcontainer">
       <img src={process.env.REACT_APP_API_URL + ItemComponent.img} width='268' height='268'/>
       <div className="item-animation"></div>
      </div>
      <div className='item-info-container flex'>
        <div>
          <div className="item-info item-name ">
            {ItemComponent.name}
          </div>
          <div className="item-info">
            {ItemComponent.price}$
          </div>
        </div>
        <button className="item-button-add"></button>
      </div>
    </article>
  );
};

export default Item;