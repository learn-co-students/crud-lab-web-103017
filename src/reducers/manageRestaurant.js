
import cuid from 'cuid';
export const cuidFn = cuid;

let id

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      console.log('State', state);

      id= cuid()
      // id++
      const restaurant = Object.assign({}, { id: id }, action.restaurant)
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }
    case 'DELETE_RESTAURANT':
      console.log('Action', action);
      console.log('State.restaurants', state.restaurants);
      const restaurants = state.restaurants.filter(restaurant => {
        return restaurant.id !== action.id
      })
      const reviews = state.reviews.filter(review => {
        return review.restaurantId !== action.id
      })
      // const reviews = state.reviews.fiter( review => {
      //   return
      // })
      console.log('New Restaurants', restaurants);
      console.log('New Reviews', reviews);
      return { restaurants, reviews }
    case 'ADD_REVIEW':

      console.log('Add Review Action', action.review);

      // const thisRestaurant = state.restaurants.find(r => r.id === action.review.restaurantId)
      // console.log('Add Review Restaurant', thisRestaurant );
      // console.log('Add Review State', state );
      // thisRestaurant.reviews.push(action.review.text)
      id= cuid()
      const review = Object.assign({}, action.review, { id: cuidFn })
      state.reviews.push(review)

      return state;
      // break;
    default:
      return state;

  }
}
