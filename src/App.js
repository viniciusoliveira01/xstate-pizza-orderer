import { useMachine } from "@xstate/react";
import pizzaStateMachine from "./states/pizzaStateMachine";
import {
  AddressForm,
  Status,
  Steps,
  ToppingsForm,
  TypeForm,
} from "./components";

function App() {
  const [current, send] = useMachine(pizzaStateMachine);

  return (
    <div
      style={{
        margin: "auto",
        width: 1200,
        padding: "1em",
      }}
    >
      {current.matches("setType") ? (
        <TypeForm
          context={current.context}
          onNext={({ type }) => {
            console.log("on next type", type);
            send({ type: "type.UPDATE", value: type });
            send("NEXT");
          }}
        />
      ) : null}

      {current.matches("setToppings") ? (
        <ToppingsForm
          context={current.context}
          onNext={({ toppings }) => {
            send({ type: "toppings.UPDATE", value: toppings });
            send("NEXT");
          }}
          onPrevious={() => send("PREVIOUS")}
        />
      ) : null}

      {current.matches("setAddress") ? (
        <AddressForm
          context={current.context}
          onNext={({ address }) => {
            send({ type: "address.UPDATE", value: address });
            send("NEXT");
          }}
          onPrevious={() => send("PREVIOUS")}
        />
      ) : null}
      {current.matches("startBaking") ? (
        <>
          <Steps current={4} />
          <Status
            context={current.context}
            keys={["status", "bakingTime", "type", "toppings", "address"]}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
