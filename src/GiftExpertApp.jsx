import { useState } from "react"
import { AddCategory,GiftGrid } from "./components"



export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories( [newCategory,...categories])
    }

    return (
        <>
            {/*Titulo */}
            <h1>GiftExpertApp</h1>

            {/*Input */}
            <AddCategory 
                //onAddCategories={setCategories}
                onNewCategory = {e => onAddCategory(e)}
            />
            
            {/*Listado de Gift */}
            
            {categories.map( (e) =>(
                    <GiftGrid key={e} category={e}/>
                )
            )}
            
            {/*Gif Item */}
        </>
    )
}

/*
const apiKey = 'QxwSDJ2ltAiUkKkI3UvrDAQrDe6FYYc7'
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

*/