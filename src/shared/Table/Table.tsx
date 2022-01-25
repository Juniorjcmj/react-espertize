import React from 'react'
import './Table.scss'
declare interface TableProps{

}
const Table: React.FC<TableProps> = (props)=> {
     return <table className='AppTable'>
       <thead>
           <tr>
               <th>Empresa</th>
               <th>Data Vencimento</th>
               <th>Valor da Duplicata</th>
               <th>Fornecedor</th>
               <th>Número do Doc</th>
           </tr>
       </thead>
       <tbody>
           <td>CN Muzema</td>
           <td>30/01/2022</td>
           <td>R$ 280,00</td>
           <td>Amanco</td>
           <td>7777725369</td>
       </tbody>

     </table>
}

export default Table;