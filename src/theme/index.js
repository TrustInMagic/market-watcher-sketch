"use client";

import PropTypes from "prop-types";
import merge from "lodash/merge";
import { useMemo } from "react";
// @mui
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
// components
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const baseOption = useMemo(
    () => ({
      palette: palette("light"),
      shadows: shadows("light"),
      customShadows: customShadows("light"),
      typography,
      shape: { borderRadius: 8 },
    }),

    []
  );

  const memoizedValue = useMemo(
    () =>
      merge(
        // Base
        baseOption
      ),
    [baseOption]
  );

  const theme = createTheme(memoizedValue);

  theme.components = merge(componentsOverrides(theme));

  const themeWithoutLocale = useMemo(() => createTheme(theme), [theme]);

  return (
    <MuiThemeProvider theme={themeWithoutLocale}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
