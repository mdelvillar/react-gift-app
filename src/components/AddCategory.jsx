import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const inputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 2) return;
    
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setInputValue('');
  }
  

  return (
    
      <form onSubmit={ onSubmit }>
        <input 
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    
  )
}
