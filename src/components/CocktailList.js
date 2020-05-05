import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function CocktailList(){
    const [searchText, set_searchText] = useState("Search your drink");
    const [cat_data, cat_setData] = useState([]);
    const [search_data, search_setData] = useState([]);
   
    
   
   useEffect(() => {
    async function  dataFromApi(){
        const dataFromSearch = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        cat_setData(dataFromSearch.data.drinks);
        } 
        dataFromApi();
    },[]) 

    const onSearchButtonClick = () => {
        const queryParam = encodeURIComponent(searchText)
            async function  dataFromApi(){
            const dataFromSearch = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryParam}`)
            search_setData(dataFromSearch.data.drinks);
            } 
            dataFromApi();
            

        } 

          
        console.log("search data: ", search_data);
    return (
    <div>  
        <h2>CocktailList</h2>
        
      
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
               
        />
        <button onClick={onSearchButtonClick}>Search Your Drink</button>
        <p>{search_data.map((map)=>{
            return (<li>{map.strDrink}</li>)
              })}  </p>
        <h5>Categories</h5>
        <p>
            {cat_data.map((map)=>{
            return (
            <div>   
                <li>{map.strCategory}</li>
                <li><Link to={`/cocktaillist/${encodeURIComponent(map.strCategory)}`}>Go to category</Link></li>
            </div>     
            )
              })}  
        </p>
    </div>     
    )
}