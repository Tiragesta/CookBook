import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getAllRecipesItems = async () => {
    const response = await axios.get('/recipes');
    return response.data;
};

export const getRecipeItemById = async id => {
    const response = await axios.get(`/recipes/${id}`);
    return response.data;
    
};

export const addRecipeItem = async item => {
    const response = await axios.post('/recipes', item);
    return response.data;
};
