const STEPS = ["Type", "Toppings", "Address", "Baking"];

export const Steps = ({ current }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 25%)",
    }}
  >
    {STEPS.map((step, index) => (
      <div
        key={step}
        style={{
          fontSize: "20pt",
          fontWeight: "bold",
          color: index < current ? "white" : "royalblue",
          background: index < current ? "royalblue" : "white",
          borderBottom: "1px solid lightblue",
          textAlign: "center",
        }}
      >
        {step}
      </div>
    ))}
  </div>
);
