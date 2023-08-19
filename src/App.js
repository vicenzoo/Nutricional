import { BrowserRouter } from "react-router-dom/dist";
import './styles/globalstyles.scss'
import Router from "./routes";

function App() {
    return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    )
}

export default App;