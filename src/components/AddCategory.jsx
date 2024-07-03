import { useState } from "react"
import Proptypes from 'prop-types'
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        //onAddCategories(e => [inputValue,...e]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Buscar Gift" 
                    value={inputValue}
                    onChange={ (e) => onInputChange(e)}
                />
            </form>
        </>
    )
}
