import { BrowserRouter } from "react-router-dom/dist";
import './styles/globalstyles.scss'
import Router from "./routes";
import { Component } from "react";



class App extends Component {    
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    render() {
    return (
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    )
    }
}

export default App;