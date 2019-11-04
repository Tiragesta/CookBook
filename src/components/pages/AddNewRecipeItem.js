import React, { Component } from 'react';
import * as API from '../../services/api';

export default class NewRecipeItem extends Component{
    state={
        recipes: []
    }

    handleAddRecipeItem = () => {
        const item = {
            name: Math.random(),
            date: Date.now(),
            image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
        };

        API.addRecipeItem(item).then(newItem => {
            this.setState(state => ({
                recipes: [...state.recipes, newItem],
            }));
        });
        const {state} = this.props.location;

        if(state){
            return this.props.history.push(state.from);
        }
        this.props.history.push({
            pathname: '/recipes',
        });
    }

    render(){
        return(
            <div>
                <h1>Add new recipe</h1>
                <button type="button" onClick={this.handleAddRecipeItem}>Add new recipe</button>
            </div>
        );
    }
}

