export const initialState = {
  products: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      const isInList = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (isInList) {
        return state;
      } else {
        const newState = {
          products: [action.payload, ...state.products],
        };
        return newState;
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      const filteredProducts = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      const newState = {
        products: filteredProducts,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
