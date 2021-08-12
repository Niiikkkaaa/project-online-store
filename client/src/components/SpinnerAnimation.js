import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react'
import { Pagination } from 'react-bootstrap'
import { Context } from '../index';
import '../css/style.css'
const SpinnerAnimation = () => {




  return(
   <div className="spinner">
    <span className="circle circle-1"></span>
    <span className="circle circle-2"></span>
    <span className="circle circle-3"></span>
    <span className="circle circle-4"></span>
    <span className="circle circle-5"></span>
    <span className="circle circle-6"></span>
    <span className="circle circle-7"></span>
    <span className="circle circle-8"></span>
   </div>
  )
}

export default SpinnerAnimation