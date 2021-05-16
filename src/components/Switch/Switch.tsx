import { Switch, withStyles } from "@material-ui/core";

const PurpleSwitch = withStyles({
  root: {
    width: "80px",
    height: "30px",
    overflow: "visible",
    "& .MuiIconButton-root:hover": {
      background: "transparent",
    },
  },
  thumb: {
    width: 0,
    height: 0,
    padding: 0,
  },
  track: {
    width: "60px",
    background: "transparent",
    border: "4px solid black",
    padding: "2px 0px",
    borderRadius: 20,
  },

  switchBase: {
    border: "10px solid lightgray",
    color: "transparent",
    padding: "5px",
    transform: " translate(6px,6px)",
    "&$checked + $track": {
      backgroundColor: "transparent",
    },
    "&$checked": {
      transform: "translate(40px, 6px)",
      "&$colorPrimary": {
        border: "10px solid #3C6D9A",
      },
      "&$colorSecondary": {
        border: "10px solid #D8882C",
      },
    },
  },
  input: {
    left: " -90%",
    top: "-13px",
    width: "300%",
    height: "36px",
  },
  disable: {
    "&$switchBase": {
      border: "10px solid lightgray",
      color: "transparent",
      padding: "5px",
    },
  },
  checked: {
    color: "red",
  },
  colorSecondary: {
    "& $disable + $track": {
      border: "4px solid black",
    },
  },
  colorPrimary: {},
  sizeSmall: {
    "&$root": {
      width: "50px",
      height: "18px",
    },
    "&$track": {
      width: 8,
      height: 6,
    },
    "& $thumb": {
      width: 0,
      height: 0,
      padding: 0,
    },
    "& $switchBase": {
      transform: "translate(5px, 5px)",
      border: "6px solid lightgray",
      padding: "4px",
      "&$checked": {
        transform: "translate(23px, 5px)",
        "&$colorPrimary": {
          border: "6px solid #3C6D9A",
        },
        "&$colorSecondary": {
          border: "6px solid #D8882C",
        },
      },
    },
  },
})(Switch);

export const ReSwitch = () => {
  return (
    <>
      <PurpleSwitch
        size="small"
        checked={true}
        color="primary"
        disabled={true}
        disableRipple={true}
      />
      <br />
      <PurpleSwitch size="small" disableRipple={true} />

      <br />
      <PurpleSwitch size="medium" color="secondary" />
      <PurpleSwitch size="medium" color="primary" />
    </>
  );
};
