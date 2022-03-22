import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './index.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           element={<Labs/>}/>
                    <Route path="/index"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;