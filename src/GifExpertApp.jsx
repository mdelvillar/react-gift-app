import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Rick and Morty' ]);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;        
        setCategories([newCategory, ...categories]);
    }
    
    return (
        
        <>

            <h1>Gif App</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
            />

            { 
                categories.map( category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>

    )
}
