import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });

let effects: any = [];
let currentEffectOrder = 0;

let rootComponent: any = null;
let rootContainer: any = null;

let states: any = [];
let currentStateOrder = 0;

const debounce = (fn: any, timeout = 100) => {
  let timeId: any = null;

  return (...rest: any) => {
    if (timeId) clearTimeout(timeId);

    timeId = setTimeout(() => fn(...rest), timeout);
  };
};

const render = (component: any, container: any) => {
  container.innerHTML = component();

  rootComponent = component;
  rootContainer = container;

  effects.forEach((effect: any) => {
    effect.cb();
  });
};

const rerender = debounce(() => {
  currentStateOrder = 0;
  currentEffectOrder = 0;
  rootContainer.innerHTML = rootComponent();

  effects.forEach((effect: any) => {
    // shouldRunEffect = true khi không truyền deps hoặc deps khác nhau
    const shouldRunEffect =
      !effect.nextDeps ||
      effect.nextDeps?.some((dep: any, i: any) => {
        return dep !== effect?.prevDeps?.[i];
      });

    if (shouldRunEffect) {
      effect.cb();
    }
  });
});

const useState = <T>(initialState: T): [T, any] => {
  let state;
  let stateOrder = currentStateOrder;

  if (states[stateOrder] !== undefined) {
    state = states[stateOrder];
  } else {
    state = states[stateOrder] = initialState;
  }

  const updater = (newState: any) => {
    if (newState === undefined) {
      throw new Error("New state must not be undefined");
    }

    if (typeof newState === "function") {
      states[stateOrder] = newState(states[stateOrder]);
    } else {
      states[stateOrder] = newState;
    }

    rerender();
  };

  currentStateOrder++;

  return [state, updater];
};

const useEffect = (cb: any, deps?: any) => {
  let effectOrder = currentEffectOrder;

  if (!effects[effectOrder]) {
    effects.push({
      cb: cb,
      prevDeps: null,
      nextDeps: deps,
    });
  } else {
    effects[effectOrder] = {
      cb: cb,
      prevDeps: effects[effectOrder].nextDeps,
      nextDeps: deps,
    };
  }

  currentEffectOrder++;
};

router.on("/*", () => {}, {
  before(done, match?: any) {
    states = [];
    currentStateOrder = 0;
    effects = [];
    currentEffectOrder = 0;

    done();
  },
});

export { render, useState, useEffect, router };
