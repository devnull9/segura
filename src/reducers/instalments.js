// Actions
export const SEND_EVENTS = 'SEND_EVENTS'
export const GET_AGREEMENTS = 'GET_AGREEMENTS'
export const GET_AGREEMENTS_SUCCESS = 'GET_AGREEMENTS_SUCCESS'
export const GET_AGREEMENTS_FAILURE = 'GET_AGREEMENTS_FAILURE'

// Action Creators
export const getAgreements = (price) => ({
  type: GET_AGREEMENTS,
  payload: {
    request: {
      method: 'GET',
      url: `/credit_agreements?totalWithTax=${price}`
    }
  }
})

export const sendEvents = (cuotas) => ({
  type: SEND_EVENTS,
  payload: {
    request: {
      method: 'POST',
      url: '/events',
      data: {
        "context": "checkoutWidget",
        "type": "simulatorInstalmentChanged",
        "selectedInstalment": cuotas
      }
    }
  }
})

// Reducer
const initialState = {
  data: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_AGREEMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      }

    case GET_AGREEMENTS_FAILURE:
      return state

    default:
      return state
  }
}