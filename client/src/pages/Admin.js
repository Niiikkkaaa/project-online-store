import React, {useState} from 'react'
import CreateBrand from '../components/modals/CreateBrand'
import CreateItem from '../components/modals/CreateItem'
import CreateType from '../components/modals/CreateType'
import RemoveBrand from '../components/modals/RemoveBrand'
import RemoveItem from '../components/modals/RemoveItem'
import RemoveType from '../components/modals/RemoveType'
const Admin = () => {

  return (
    <section className="admin shop">
      <div className="wrapper">
        <h2 className="admin-title">Add:</h2>
        <CreateBrand  />
        <CreateType />
        <CreateItem  />
        <h2 className="admin-title">Delete:</h2>
        <RemoveBrand  />
        <RemoveType />
        <RemoveItem  />
      </div>
    </section>
  )
}

export default Admin;