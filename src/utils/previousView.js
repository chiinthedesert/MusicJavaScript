import * as state from "../state.js";

export function previousView() {
  const prev = state.getState().historyView.pop();
  if (!prev) return;

  state.setState({ currentView: prev }, { skipHistory: true });
}
