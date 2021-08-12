import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react'
import { Context } from '../index';

const Pages = observer(() => {
  const {item} = useContext(Context)

  //const pages = [1, 2, 3, 4, 5]
  const pageCount = Math.ceil(item.totalCount / item.limit)
  const pages = []

  for(let i = 0; i < pageCount; i ++) {
    pages.push(i + 1)
    
  }

  return(
    <div className="wrapper">
    <div className='pages'>
      {pages.map(page => 
        <div 
        className={item.page === page ? 'pages-item pages-item-active' : 'pages-item'}
          key={page} 
          active={item.page === page} 
          onClick={() => item.setPage(page)}>
          {page}
        </div>
      )}
   </div> 
   </div>
  )
});

export default Pages