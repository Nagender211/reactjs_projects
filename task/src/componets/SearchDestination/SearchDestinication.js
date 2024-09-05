import React, { Component } from 'react'

class SearchDestinication extends Component{
    render(){
        const {SearchDestionList}=this.props;
        const {name,role,imageUrl}=SearchDestionList;
        return(
            
            <div>

                <img src={imageUrl} alt={name} />                
               
                <h2>{name}</h2>
                <h3>{role}</h3>

            </div>
        )
    }
}
export default SearchDestinication
