import { createUseStyles } from "react-jss";
import styleCompiler from "~/compiler";

const useStyles = createUseStyles<string, any>({
  button: (style) => {
    return {
      ...(styleCompiler(style.normal).style || {}),
      "&:disabled": styleCompiler(style.disabled).style || {},
      "&:focus": styleCompiler(style.focus).style || {},
      "&:active": styleCompiler(style.active).style || {},
      "&:hover": styleCompiler(style.hover).style || {},
    };
  },
  disabled: (style) => styleCompiler(style.disabled).style || {},
  focus: (style) => styleCompiler(style.focus).style || {},
  active: (style) => styleCompiler(style.active).style || {},
  hover: (style) => styleCompiler(style.hover).style || {},
});

export default useStyles;
