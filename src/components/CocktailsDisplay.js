import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'

export default function CocktailsDisplay(){
    const [data, setData] = useState([])
    const route_parameters = useParams();
    console.log(route_parameters);
    
    
    useEffect(() => {
        async function  dataFromApi(params){
            
            const dataFromSearch = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params}`)
            setData(dataFromSearch.data.drinks);
            } 

            dataFromApi(route_parameters.cocktailimages);
        },[]) 
        console.log(data);

    return (
            <div>
                <h5>CocktailDetails</h5>
                <ul>
                    {data.map((cocktail)=>{
                        return (
                                <div>
                                    <li>{cocktail.strDrink}</li>
                                    <img height={"100"} src={cocktail.strDrinkThumb}></img>
                                </div>
                                )
                    })}
                </ul>
            </div>
            )
    //strDrink strDrinkThumb
            
}