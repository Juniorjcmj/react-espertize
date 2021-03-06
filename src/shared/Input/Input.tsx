import Resct from 'react'
import './Input.css'

declare interface InputProps extends Resct.InputHTMLAttributes<HTMLInputElement> {
     label?: string;
}
const Input: React.FC<InputProps> = (props) =>{

     return <div className='AppInput'>
               <label>
                    <span>{props.label}</span>
                    <input
                    {...props}                   
                     ></input>
               
               </label>
          </div>
}
export default Input;