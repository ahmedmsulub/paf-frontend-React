import React, {useState,useEffect} from 'react'
import AutoCompleteText from './AutoCompleteText'
import JsonData from '../../api/games/lists.json'

import './SearchBar.css'
export default function SearchBar() {
  
    // const [searchTerm, setSearchTerm] = useState('')
    return (
        <div>
            <div className="App-Component">
            <AutoCompleteText />
            </div>
        </div>
    )
}


/* <input type="text" placeholder="search" onChange={event => {setSearchTerm(event.target.value)}} />
             <select className="form-select" aria-label="Default select example">
            </select>
             {JsonData.filter((val) => {
            if(searchTerm === ""){
                return val
            }else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return <div>{val.first_name}</div>;
        })} */


// {JsonData.filter((val) => {
//     if(searchTerm === ""){
//         return val
//     }else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
//         return val
//     }
// }).map((val,key)=>{
//     return <div>{val.first_name}</div>;
// })}