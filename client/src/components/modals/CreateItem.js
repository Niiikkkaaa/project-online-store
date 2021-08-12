import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import { fetchTypes, fetchBrands, fetchItems, createItem } from '../../http/itemAPI';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import '../../css/style.css';

const CreateItem = observer( () => {

  const {item} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetchTypes().then(data => item.setTypes(data))
    fetchBrands().then(data => item.setBrands(data))
  }, [])


  const addInfo = () => {
    setInfo([...info, {title:'', description: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addItem = () => { 
    //console.log(item.selectedBrand.id)
    //console.log(JSON.stringify(info))

    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', item.selectedBrand.id)
    formData.append('typeId', item.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createItem(formData)
    .then(setName(''))
    .then(setPrice(0))
    .then(setFile(null))
    .then(setInfo([]))
    .then(item._selectedBrand = {})
    .then(item._selectedType = {})
  }
  
  return ( 
    <section className="modal" >
      <h3 className="modal-title">
          Add New Item
      </h3>
        <form>
      <h3 className="typebar-title">
        Brands:
      </h3>
        <ul className="typebar-list">
        {item.brands.map(brand =>
          <li 
            style = {{cursor: 'pointer'}}
            className={brand.id === item.selectedBrand.id ? 'active' : ' '}
            onClick={() => item.setSelectedBrand(brand)}
            key={brand.id}
          >
            {brand.name}
          </li>
        )}
      </ul>
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

          <input type="text" className="modal-input"
            placeholder={'Enter name of Item'} 
            value={name}
            onChange={e => setName(e.target.value)}
          />
           <input type="number" className="modal-input"
            placeholder={'Enter name of Item'} 
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
           <input type="file" class="modal-input"
             onChange={selectFile}
          />
        </form>

        <button className="button modal-button-addinfo" onClick={addInfo}>Add new info</button>
        <div>
        {info.map(i => 
          <div key={i.number}>
            <span>
            <input 
              className="modal-input modal-input-info" 
              placeholder='Enter name'
              value={i.title}
              onChange={(e) => changeInfo('title', e.target.value, i.number)}
            />
            </span>
            <span>
              <input 
                className="modal-input modal-input-info" 
                placeholder='Enter description'
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}
              />
            </span>
            <span>
              <button 
                className="button modal-button modal-button-close" 
                onClick={() => removeInfo(i.number)}
               >
                Delete
              </button>
            </span>
          </div>
        )}
        </div>

        <div className="flex">
          <button className="button modal-button modal-button-add" onClick={addItem}>Add</button>
          <button className="button modal-button modal-button-close">Close</button>
        </div>
    </section>
  )
});

export default CreateItem;