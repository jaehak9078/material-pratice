import Header from "./components/Header";
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Charts from "./pages/Charts";
import React, {useState } from 'react'; 
import Tables from "./pages/Tables";
import StaticNavigation from "./pages/StaticNavigation";
import LightSidenav from "./pages/LightSidenav";
import Authentication from "./pages/Authentication";
import Error401 from "./pages/Error401";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import GridPage from "./pages/GridPage";



export const OpenContext = React.createContext({open:false });
export const HandleDrawerContext = React.createContext(()=>{});
export const HandleSHowHeader = React.createContext(()=>{});
export const showHeaderContext = React.createContext({showHeader:true});
export const lightDrawerContext = React.createContext({lightDrawer:true});
export const HandleLight = React.createContext(()=>{});
    
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
  const [lightDrawer, setLightDrawer] = useState(true); // Light Sidenav 클릭시 drawer 밝게 만들기 위함.
  const handleLight = () => {
      setLightDrawer(!lightDrawer);
  };

  return (
    <BrowserRouter>
    <div>
      <HandleLight.Provider value={handleLight}>
      <lightDrawerContext.Provider value={lightDrawer}>
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
      <Route path="/grid" component={GridPage}/>
      
     
      </showHeaderContext.Provider>
      </OpenContext.Provider>
      </HandleDrawerContext.Provider>
      </HandleSHowHeader.Provider>
      </lightDrawerContext.Provider>
      </HandleLight.Provider>
    </div>
    <div>

    </div>
    </BrowserRouter>
  );
}

export default App;
