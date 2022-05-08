const SELECT_REQUEST = 'SELECT_REQUEST'
const CHANGE_POINT = 'CHANGE_POINT'
const INITIAL_STATE = {
  delivery: {
    1: {
      startPoint: 'company_1',
      endPoint: 'company_2',
    },
    2: {
      startPoint: 'company_3',
      endPoint: 'company_4',
    },
    3: {
      startPoint: 'company_5',
      endPoint: 'company_6',
    },
    4: {
      startPoint: 'company_7',
      endPoint: 'company_8',
    },
    5: {
      startPoint: 'company_9',
      endPoint: 'company_10',
    },
  },
  selected: null,
}

export const deliveryReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_REQUEST:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.payload,
        },
      }
    case CHANGE_POINT:
      const id = action.payload.applicationId
      return {
        ...state,
        delivery: {
          ...state.delivery,
          [id]: {
            ...state.delivery[id],
            ...action.payload.values[id],
          },
        },
      }
    default:
      return state
  }
}

export const selectRequestAction = (payload) => ({
  type: SELECT_REQUEST,
  payload,
})

export const changeRequestAction = (payload) => ({
  type: CHANGE_POINT,
  payload,
})
