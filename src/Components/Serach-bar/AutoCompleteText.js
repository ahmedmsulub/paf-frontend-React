import React from 'react'
import './SearchBar.css'
import DataGames from '../../api/games/lists.json'


export default class AutoCompleteText extends React.Component {
constructor(props) {
    super(props);
    this.items= [
        'ahmed',
        'omar',
        'abdurahman',
        'abdullahi',
        'mamma',
        'kowsar',
        'rahma',
        'yasmin'
    ]
    this.state = {
        suggestions:[],
        text:'',
        games:'',
    }
}

//  getData=()=>{
//     fetch(DataGames
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//       });
//   }
onTextChange =(e)=>{
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0) {
        const regex = new RegExp(`^${value}`,'i');
        suggestions = this.items.sort().filter(v => regex.test(v))
    }
    this.setState(()=> ({suggestions, text: value}));
}
suggestionSelected(value) {
    this.setState(()=>({
        text:value,
        suggestions:[],
    }))
}
renderSuggestions () {
    const {suggestions} = this.state;
    if(suggestions.length===0){
        return null
    }else {
        return (
        <ul>
            {suggestions.map((item) => <li key={item} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
        )
    }
}
render(){
    // console.log('here in JsonToStringify : ',JSON.stringify(DataGames.lists));
    console.log(DataGames.first_name)
    const {text} = this.state;
    return(
        <div className="AutoCompleteText">
            <input value={text} placeholder="search..."  onChange={this.onTextChange} type="text" />
            {this.renderSuggestions()}
        </div>
    )
}
}