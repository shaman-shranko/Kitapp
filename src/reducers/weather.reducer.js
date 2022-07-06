import initialState from './initialState';

export default function weatherReducer(state = initialState.weather, action) {
  switch (action.type) {
    case "LOAD_FIVE_DAYS": {
      return {
        ...state,
        city: action.payload.city,
        list: action.payload.grouped,
      }
    }
    case "LOAD_CALENDAR": {
      return {
        ...state,
        calendar: action.payload.calendar,
      }
    }

    default: return state;
  }
}