
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      let myRest = {text: action.text, id: cuid()}
      return {restaurants: [...state.restaurants, myRest], reviews: [...state.reviews]}
      break;
    case "DELETE_RESTAURANT":
      return {restaurants: state.restaurants.filter(rest => rest.id !== action.id)}
      break;
    case "ADD_REVIEW":
      // let myResto = state.restaurants.find(rest => rest.id === action.id)
      // myResto = {text: myResto.text, id: myResto.id, reviews: [...myResto.reviews, action.text]}
      // let restys = state.restaurants.filter(rest => rest.id !== action.id)
      // return {restaurants: [...restys, myResto]};
      return {restaurants: [...state.restaurants], reviews: [...state.reviews, {text: action.text, restaurantId: action.restaurantId, id: cuid()}]}
      break;
    case "DELETE_REVIEW":
      return {restaurants: [...state.restaurants], reviews: state.reviews.filter(rev => rev.id !== action.id)}
      break;
    default:
      return state
  }
}
