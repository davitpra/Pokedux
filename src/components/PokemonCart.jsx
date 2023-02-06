import { StarButton } from "./StarBotton"
import { useDispatch } from "react-redux"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import { setFavorite } from "../slices/dataSlice"



export const PokemonCart = ({name = 'ditto', image, description, id, favorite}) => {
    const types =[]
    const names = description.map(type => types.push(type.type.name))

    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

    return (
    <Card
        title= {name}
        cover={<img src={image} alt={name}/>}
        extra={<StarButton isFavorite={favorite} onClick={handleOnClick} /> }
    >
        <Meta description={types.toString()}/>
    </Card>
    )
}
