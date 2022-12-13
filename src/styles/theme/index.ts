import { ThemeOptions } from "@mui/material/styles";
import darkThemeOptions from "./darkThemeOptions";
import lightThemeOptions from "./lightThemeOptions";

const theme: ThemeOptions = {
  ...lightThemeOptions,
  ...darkThemeOptions,
};

export default theme;
