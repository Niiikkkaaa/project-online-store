import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { createBrand } from '../../http/itemAPI'
import '../../css/style.css'

const CreateBrand = () => {
  
  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('')
    })
  }

  return ( 
    <section className="modal" >
      <h3 className="modal-title">
          Add New Brand
      </h3>
        <form>
          <input className="modal-input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Enter name of Brand'} 
          />
        </form>
        <div className="flex">
          <button className="button modal-button modal-button-add" onClick={addBrand}>Add</button>
          <button className="button modal-button modal-button-close">Close</button>
        </div>
    </section>
  )
}

export default CreateBrand;