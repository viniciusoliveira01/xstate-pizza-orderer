import { assign, createMachine } from "xstate";

const pizzaStateMachine = createMachine(
  {
    id: "pizzaStateMachine",
    initial: "setType",
    context: {
      status: "Deciding",
      type: "Default type",
      toppings: "Default toppings",
      address: "Default home address",
      bakingTime: 0,
    },
    states: {
      setType: {
        on: {
          "type.UPDATE": {
            actions: assign({
              type: (_, event) => {
                console.log("event", event);
                return event.value;
              },
            }),
          },
          NEXT: "setToppings",
        },
      },
      setToppings: {
        on: {
          "toppings.UPDATE": {
            actions: assign({
              toppings: (_, event) => event.value,
            }),
          },
          PREVIOUS: "setType",
          NEXT: "setAddress",
        },
      },
      setAddress: {
        on: {
          "address.UPDATE": {
            actions: assign({
              address: (_, event) => event.value,
            }),
          },
          PREVIOUS: "setToppings",
          NEXT: "startBaking",
        },
      },
      startBaking: {
        invoke: {
          id: "incBakingTime",
          src: () => (cb) => {
            const id = setInterval(() => {
              cb("BAKING_TICK");
            }, 1000);

            return () => clearInterval(id);
          },
        },
        on: {
          BAKING_TICK: {
            actions: assign({
              bakingTime: (context) => context.bakingTime + 1,
            }),
          },
        },
        entry: ["setBaking"],
      },
    },
  },
  {
    actions: {
      setBaking: (context) => (context.status = "Baking!"),
    },
  }
);

export default pizzaStateMachine;
