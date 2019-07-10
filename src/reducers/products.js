import { SEARCH_INPUT } from '../actions'

// eslint-disable-next-line
const data = require('./products.json')

const initialState = {}
export default (state=initialState, action) => {
  switch(action.type){
    case SEARCH_INPUT:
      return state;
    default:
      return state;
  }
}