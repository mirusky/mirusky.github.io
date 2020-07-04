import { createStore } from "redux";

const INITIAL_STATE = {
  dark: true,
};

function ThemeStore(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DARK":
      return { dark: !state.dark };

    default:
      return state;
  }
}

const store = createStore(ThemeStore);

export default store;
