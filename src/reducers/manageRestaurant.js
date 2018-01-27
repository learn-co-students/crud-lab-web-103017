import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  //debugger
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()});
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(rest => rest.id !== action.id);
      return Object.assign({}, state, {restaurants})
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuidFn()});
      console.log(state.reviews)
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return Object.assign({}, state, {reviews})
    default:
      return state;
  }
}
