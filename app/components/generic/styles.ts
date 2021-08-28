export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: "#dcdcdc",
    ":focus": {
      borderColor: "#9a2d67",
      boxShadow: "0 0 5px #9a2d67",
    },
    borderColor: state.isFocused && "#9a2d67",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: "#dcdcdc",
    ":focus": {
      borderColor: "#9a2d67",
      boxShadow: "0 0 5px #9a2d67",
    },
    ":hover": {
      borderColor: "rgba(255,255,255, .24)",
      boxShadow: "none",
    },
    borderColor: state.isFocused && "#9a2d67",
    boxShadow: "none",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "#171923",
    color: "#dcdcdc",
    ":focus": {
      borderColor: "#9a2d67",
      boxShadow: "0 0 5px #9a2d67",
    },
    borderColor: state.isFocused && "#9a2d67",
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: "#694251",
    borderRadius: "7px",
    color: "#ffffff",
  }),
  multiValueLabel: provided => ({ ...provided, color: "#ffffff" }),
  indicatorSeparator: provided => ({ ...provided, backgroundColor: "#2D3748" }),
};
