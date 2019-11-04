import React, {Component} from 'react';
import styles from '../Recipes/RecipeItem.module.css';


import * as API from '../../services/api';

export default class RecipeItemPage extends Component {
    state={
        id: null, 
        name: null, 
        description: null,
        image: null,
        //date: null,
        category: null,
        ingredients: null
    }

    componentDidMount(){
        API.getRecipeItemById(this.props.match.params.id)
        .then(item => this.setState({...item}));
    }

    handleGoBack = () => {
        const { state } = this.props.location;

        if(state){
            return this.props.history.push(state.from);
        }
        this.props.history.push({
            pathname:'/recipes',
            search: `?category=${this.state.category}`
        });
    };

    render(){
        const{ name, description, image, date,category, ingredients } = this.state;
        return(
            <div >
                <article className={styles.recipe}>
                    <h2>{name}</h2>
                    <h4>{category}</h4>
                    <p>{description}</p>
                    <img src={image} alt={name} width={320} height={240}/>
                    <p>Date:</p>
                    <p>{ingredients}</p>
                </article>

                <button >Edit</button>
                <button onClick={this.handleGoBack}>Go back</button>
            </div>
        );
    }
}

