import React,{useState} from 'react'
import Button from '../../shared/Button'
import Form from '../../shared/Form'
import Input from '../../shared/Input'


const initialFormState ={
    name: '',
    price:'',
    stock:''
}
export declare interface ProductCreator{
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps{
 onSubmit: (product: ProductCreator) => void
}


    const ProductForm: React.FC<ProductFormProps> = (props) => {

            const [form, setForm] = useState(initialFormState);

            const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
            {
                const {value, name} = event.target
                setForm({
                    ...form,
                    [name]:value
                })
            }
    const handleFormSubmit = () =>{
        const productDto = {
            name: String(form.name),
            price: parseFloat(form.price),
            stock:Number(form.stock)
        }
        props.onSubmit(productDto);
        setForm(initialFormState);
    }

    return <Form
               title='Cadastro de produtos'
               onSubmit={handleFormSubmit}
               >
              <Input 
                onChange={handleInputChange}
                name='name'
                value={form.name}
                label='Name'
                placeholder='E.g: Cookie'
                required
             />
             <Input 
                onChange={handleInputChange}
                name='price'
                label='Price'
                value={form.price}
                type= "number"
                step= "0.01"
                min="0"
                placeholder='E.g: 1.25'
                required
             />
             <Input 
                onChange={handleInputChange}
                name='stock'
                label='Estoque'
                value={form.stock}
                type= "number"
                min="0"
                placeholder='E.g: Cookie'
                required
             />
             <Button>
                Submit
             </Button>
          </Form>
}

export default ProductForm