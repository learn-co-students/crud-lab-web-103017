
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews:[]}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = Object.assign({}, action.restaurant, {id: cuid()})
      return {restaurants: state.restaurants.concat(restaurant)}
      break;
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}
      break;
    case "ADD_REVIEW":
      const review = Object.assign({}, action.review, {id: cuid()})
      return {reviews: state.reviews.concat(review)}
      break;
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {reviews}
      break;
    default:
      return state

  }
}
