const state = {
  currentView: "home",
};

export function getState() {
  return state;
}

export function setState(partial) {
  Object.assign(state, partial);
}
