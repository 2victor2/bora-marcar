const headerButton = {
  background: "transparent",
  border: "1px solid transparent",
  fontSize: "var(--button-font-size)",
  color: "var(--color-linen)",
  transition: "0.3s",
  padding: "5px",
  borderRadius: "8%",
  fontWeight: "bold",

  hover: {
    background: "transparent",
    color: "var(--color-lavenderGray)",
    border: "1px solid var(--color-lavenderGray)",
  },
};

const defaultButton = {
  background: "var(--color-stateBlue)",
  border: "1px solid var(--color-stateBlue)",
  fontSize: "var(--button-font-size)",
  color: "var(--color-linen)",
  transition: "0.3s",
  padding: "5px",
  borderRadius: "8%",
  fontWeight: "bold",

  hover: {
    background: "var(--color-darkPurple)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-stateBlue)",
  },
};

const addButton = {
  background: "var(--color-darkPurple)",
  border: "1px solid var(--color-darkPurple)",
  fontSize: "var(--button-font-size)",
  color: "var(--color-linen)",
  transition: "0.3s",
  padding: "5px 10px",
  borderRadius: "8%",
  fontWeight: "bold",

  hover: {
    background: "var(--color-stateBlue)",
    color: "var(--color-linen)",
    border: "1px solid var(--color-darkPurple)",
  },
};

export const buttonThemes = {
  header: headerButton,
  default: defaultButton,
  add: addButton,
};
