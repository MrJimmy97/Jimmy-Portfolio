import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
  isLightMode: String;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state() {
    return {
      isLightMode: "light",
    };
  },
  mutations: {
    toggleLightMode(state: State): void {
      console.log(state.isLightMode);
      if (state.isLightMode === "light") {
        state.isLightMode = "dark";
      } else {
        state.isLightMode = "light";
      }
    },
  },
});
