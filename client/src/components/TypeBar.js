import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import ListGroup from 'react-bootstrap/ListGroup'
import '../css/style.css'
//import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const TypeBar = observer(() => {
  const {item} = useContext(Context)
  return (
    <section className="typebar">
     <h3 className="typebar-title" onClick={() => item._selectedType={}}>
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
    </ section>
  )
});

export default TypeBar;