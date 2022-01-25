import React from 'react'
import './Table.scss'
import Produts from './Table.mockdata'
import Products from './Table.mockdata'


const headers = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Available Stock'}
]

declare interface TableProps{

}
const Table: React.FC<TableProps> = (props)=> {
     return <table className='AppTable'>
       <thead>
           <tr>
               {
                headers.map (header => <th key={header.key}>
                    {header.value}
                   </th>
                   )
                   }  
               
           </tr>
       </thead>
       <tbody>           
           {
              Products.map((product => <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
              </tr>))
           }
           
       </tbody>

     </table>
}

export default Table;