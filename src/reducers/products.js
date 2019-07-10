import { FILTER_PRODUCTS } from '../actions'

// eslint-disable-next-line
const data = require('./products.json')

export default (state=data, action) => {
  switch(action.type){
    case FILTER_PRODUCTS:
      return action.array;
    default:
      return state;
  }
}
