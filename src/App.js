import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Working prec</h1>
    </ThemeProvider>
  );
}

export default App;
