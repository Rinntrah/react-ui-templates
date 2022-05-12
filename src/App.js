import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import {EditFragmentComponent} from "./EditFragmentComponent";
import {PRZYCISK_CZYTAJ} from "./KOLEJNY_KOMPONENT";




function App() {
  return (
    <div className="App">
        <EditFragmentComponent></EditFragmentComponent>
        <PRZYCISK_CZYTAJ></PRZYCISK_CZYTAJ>
    </div>
  );
}

export default App;
