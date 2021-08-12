import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { createType } from '../../http/itemAPI'
import '../../css/style.css'

const CreateType = ({show, onHide}) => {

  const [value, setValue] = useState('')

  const addType = () => {
      createType({name: value}).then(data => {
        setValue('')
      })
    }

  
  return ( 
    <section className="modal">
      <h3 className="modal-title">
          Add New Type
      </h3>
        <form>
          <input className="modal-input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Enter name of Type'} 
          />
        </form>
        <div className="flex">
          <button className="button modal-button modal-button-add" onClick={addType}>Add</button>
          <button className="button modal-button modal-button-close" >Close</button>
        </div>
    </section>
  )
}

export default CreateType;