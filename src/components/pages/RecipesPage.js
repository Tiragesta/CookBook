import React, { Component } from 'react';
import RecipesGrid from '../Recipes/RecipesGrid';
import * as API from '../../services/api';

export default class RecipesPage extends Component {
    state = { recipes: [] };

    componentDidMount(){
        API.getAllRecipesItems().then(recipes => 
            this.setState({recipes}));
    }

    render(){
       
        const { recipes } = this.state;

        return (
            <div>
                <RecipesGrid items={recipes} />
            </div>
            
        );
    };

};