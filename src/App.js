import Header from "./components/Header";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import React, {useState } from 'react'; 
import { Table } from "@material-ui/core";
import Tables from "./pages/Tables";
import StaticNavigation from "./pages/StaticNavigation";
import LightSidenav from "./pages/LightSidenav";
import Authentication from "./pages/Authentication";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Error401 from "./pages/Error401";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";



export const OpenContext = React.createContext({open:false });
export const HandleDrawerContext = React.createContext(()=>{});
export const HandleSHowHeader = React.createContext(()=>{});
export const showHeaderContext = React.createContext({showHeader:true});
    
function App() {
  const [showHeader,setShowHeader] = useState(true);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {                    //메뉴 열고 닫기
        // if(open === false)
        // setOpen(true);
        // else
        // setOpen(false);
        setOpen(!open);
  };
  const handleShowHeader = () => {
    setShowHeader(!showHeader);
  }

  return (
    <BrowserRouter>
    <div>
      <HandleSHowHeader.Provider value={handleShowHeader}>
      <HandleDrawerContext.Provider value={handleDrawerOpen}>
      <OpenContext.Provider value={open}>
      <showHeaderContext.Provider value={showHeader}>
      {showHeader && <Header/> }
      
      <Route exact path="/" component={Dashboard}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/charts" component={Charts}/>
      <Route path="/tables" component={Tables}/>
      <Route path="/staticnavigation" component={StaticNavigation}/>
      <Route path="/lightsidenav" component={LightSidenav}/>
      <Route path="/authentication" component={Authentication}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/forgot" component={ForgotPassword}/>
      <Route path="/error401" component={Error401}/>
      <Route path="/error404" component={Error404}/>
      <Route path="/error500" component={Error500}/>
      
     
      </showHeaderContext.Provider>
      </OpenContext.Provider>
      </HandleDrawerContext.Provider>
      </HandleSHowHeader.Provider>

    </div>
    <div>

    </div>
    </BrowserRouter>
  );
}

export default App;
