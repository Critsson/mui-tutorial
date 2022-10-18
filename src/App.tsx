import './App.css';
import MuiButton from './components/MuiButton';
import { createTheme, colors, ThemeProvider } from "@mui/material"

const theme = createTheme({
  palette: {
    secondary: {
      main: "#2E294E"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MuiButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
