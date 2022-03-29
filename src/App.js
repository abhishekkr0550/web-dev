import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './index.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/explore-screen/explore-screen";
import ProfileScreen from "./components/tuiter/ProfileScreen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/"
                           exact={true}
                           element={<Labs/>}/>
                    {/*<Route path="/tuiter"*/}
                    <Route index
                           exact={true}
                           element={<Tuiter/>}/>
                    <Route path="/tuiter/home"
                           element={<Tuiter/>}/>
                           {/*element={<HomeScreen/>}/>*/}
                    <Route path="/tuiter/explore"
                           exact={true}
                           element={<ExploreScreen/>}/>
                    <Route path="/tuiter/profile"
                           exact={true}
                           element={<ProfileScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;