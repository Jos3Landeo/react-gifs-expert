import { GifsItem } from "./GifsItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs (category)

    return (
        <>
            { (isLoading) && (<h2>Cargando...</h2>) } 

            <h3>{category}</h3>
            <div className="card-grid">
                {images.map( m =>
                    (
                        <GifsItem key={m.id} { ...m }></GifsItem>
                    )
                )}
            </div>
        </>
        
    )
}
