import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar, Box, Drawer, Icon, IconButton, InputBase, List,ListItem,ListItemIcon,ListItemText, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BarChartIcon from '@material-ui/icons/BarChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { Link, Route } from 'react-router-dom';
import Charts from '../pages/Charts';
import Dashboard from '../pages/Dashboard';
import {HandleDrawerContext, lightDrawerContext, OpenContext,} from '../App';
import Fade from '@material-ui/core/Fade';
import Authentication from '../pages/Authentication';


const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({          //내부스타일 적용
    menuButton : {                                  //메뉴 열고 닫는 버튼
        marginRight: theme.spacing(2),
        marginLeft: "15px",
        color: "#676b70",
    },
    barStyles : {                                   //최상단 앱바 
        backgroundColor: "#343a40",
        
        zIndex:1, //drawer와 겹치기때문에 zindex 적용
        // transition: theme.transitions.create(['margin','width'],{
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
    },
    // appBarShift: {                               //appBar 밀리는 효과.
    //     width: `calc(100%- ${drawerWidth}px)`,
    //     marginLeft: drawerWidth,
    //     transition: theme.transitions.create(['margin','width'], {
    //         easing: theme.transitions.easing.easeOut,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    content : {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
    contentShift: {
        width: `calc(100%-${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin','width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
    },
    searchBox : {                                   //검색바
       backgroundColor:"white",
       marginLeft:"auto",
       borderRadius: theme.shape.borderRadius,
       
    },
    searchIcon : {                                  //검색바 돋보기 아이콘상자
        backgroundColor:"#0d82f7",
        width:"20%",
        alignItems:'center',
        justifyContent:'center',
        display: 'flex',
        pointerEvents: 'none',
        height:'30px',
        paddingTop: '3px',
        borderRadius: '0px 4px 4px 0px',
        

    },
    drawer: {                                       //사이드바
        
        flexShrink: 0,
        
    },
    drawerPaper: {                                  //사이드바에 실질적으로 내용이 나오는 부분(높이랑 top을 지정해둔 것은 앱바와 겹치지 않기 위해서)
        width: drawerWidth,
        top: '63px',                                //기본적으로 drawer는 높이가 화면을 다 차지하기 때문에 appbar를 덮어씌우는 문제가 발생하여 appbar높이만큼 top값을 줘서 내린다.
        position: 'absolute',                       //absolute 설정을 해주지 않으면 작은 화면 해상도에서 drawer가 붕뜨는 현상 발생(top:63px만큼)
        backgroundColor: '#212529',
        color: '#737678',
    },
    onScrollDrawerPaper : {
        width: drawerWidth,
        position: 'fixed',
        backgroundColor: '#212529',
        color: '#737678',
        top:'0px',
    },
    drawerPaperLight: {                                  
        width: drawerWidth,
        top: '63px',                                
        position: 'absolute',                      
        backgroundColor: '#f8f9fa',
        color: '#737678',
    },
    onScrollDrawerPaperLight : {
        width: drawerWidth,
        position: 'fixed',
        backgroundColor: '#f8f9fa',
        color: '#737678',
        top:'0px',
    },
    // drawerHeader: {                                 
    //     display: 'flex',
    //     alignItems: 'center',
    //     padding: theme.spacing(0,1),
    //     ...theme.mixins.toolbar,
    //     justifyContent: 'flex-end',


    
    // },
    listItemStyle: {                    //사이드바 리스트 아이콘 색
        color: '#737678',
        
    },
    drawerFooter: {                     //사이드바 푸터
        zIndex:1,
        backgroundColor:'#343a40',
        color:'#8f9296',
        position:'relative',
        bottom:'63px',
        height:'80px',
        // top:'584px',
    },
    onScrollDrawerFooter: {
        zIndex:1,
        backgroundColor:'#343a40',
        color:'#8f9296',
        position:'relative',
        bottom:'0px',
        height:'80px',
    },
    drawerFooterLight: {                     //사이드바 푸터
        zIndex:1,
        backgroundColor:'#e9ecef',
        color:'#8f9296',
        position:'relative',
        bottom:'63px',
        height:'80px',
        // top:'584px',
    },
    onScrollDrawerFooterLight: {
        zIndex:1,
        backgroundColor:'#e9ecef',
        color:'#8f9296',
        position:'relative',
        bottom:'0px',
        height:'80px',
    },
    paddingDiv: {                       //사이드바 푸터를 하단 배치하기 위한 임의의 빈 공간
        flex : 1,
    },
    menuTitle:{                         //사이드바에서 서브 메뉴들의 제목(CORE INTERFACE ADDONS)
        fontSize: '13px',
        fontWeight: "800",
        margin:'20px 0px 15px 15px',
        color:'#595c5f'

    }

    
    
}));

const RenderSubMenu = ({isOpen}) => {                       //열렸다면 ExpandMoreIcon을 렌더링하고 닫혔다면 ChevronRightIcon을 렌더링. 서브메뉴 공통으로 활용가능.
        if(isOpen)
        return <ExpandMoreIcon style={{color:'#737678'}}/>

        return <ChevronRightIcon style={{color:'#737678'}}/>
     }
const RenderLayouts = ({layoutEl}) => {
    if(layoutEl){
        return(
            <>
        <ListItem button>
            <Link to="/staticnavigation">
            <ListItemText primary="Static Navigation" style={{marginLeft:'55px'}}/>
            </Link>
        </ListItem>
        
        <ListItem button>
            <Link to="/lightsidenav">
        <ListItemText primary="Light Sidenav" style={{marginLeft:'55px'}}/>
            </Link>
    </ListItem>
    </>
        );
    }
    return <></>
}
const RenderPages = ({pagesEl,authenEl,errorEl,handleAuth,handleErr}) => {
    if(pagesEl){
        return(
            <>
        <ListItem button onClick={handleAuth}>
         
            <ListItemText primary="Authentication" style={{marginLeft:'55px'}}/>
            <RenderSubMenu isOpen={authenEl}/>
        </ListItem>
        <RenderAuthentication authenEl={authenEl} />
        <ListItem button onClick={handleErr}>
        <ListItemText primary="Error" style={{marginLeft:'55px'}}/>
        <RenderSubMenu isOpen={errorEl}/>
    </ListItem>
        <RenderError errorEl={errorEl} />
    </>
        );
    }
    return <></>
}


const RenderAuthentication = ({authenEl}) => {      //Authentication 메뉴
    if(authenEl){
        return(
            <>
            <ListItem button>
                <Link to="/login">
                <ListItemText primary="Login" style={{marginLeft:'65px'}}/>
                </Link>
            </ListItem>
            <ListItem button>
                <Link to="/register">  
                <ListItemText primary="Register" style={{marginLeft:'65px'}}/>
                </Link>
            </ListItem>
            <ListItem button>
                <Link to="/forgot">
                <ListItemText primary="Forgot Password" style={{marginLeft:'65px'}}/>
                </Link>
            </ListItem>
            </>
        );
    }
    return <></>
}

const RenderError = ({errorEl}) => {        //Error 메뉴
    if(errorEl){
        return(
            <>
            
            <ListItem button>
            <Link to="/error401">
                <ListItemText primary="401 Page" style={{marginLeft:'65px'}}/>   
                </Link>           
            </ListItem>
            
            <ListItem button>
                <Link to="/error404">
                <ListItemText primary="404 Page" style={{marginLeft:'65px'}}/>
                </Link>
            </ListItem>
            <ListItem button>
                <Link to="/error500">
                <ListItemText primary="500 Page" style={{marginLeft:'65px'}}/>
                </Link>
            </ListItem>
            </>
        );
    }
    return <></>
}



const Header = () => {
    const open = useContext(OpenContext);               //drawer가 열려있는지 닫혀있는지 여부
    const handleDrawerOpen = useContext(HandleDrawerContext);   //open을 토글시켜주는 함수
    const styleClass = useStyles();                     //스타일 적용 클래스이름
    const [profileEl, setProfileEl] = useState(null);  //앱바 우측에 있는 프로필 눌렸는지 여부
    const isMenuOpen = Boolean(profileEl);              //프로필 메뉴 오픈여부를 Boolean로 확인하기 위함. 프로필 외에 다른 곳을 선택한다면 false가 됨.
    const [layoutEl, setLayouEl] = useState(false);    //layouts 메뉴 클릭여부
    const [pagesEl, setPagesEl] = useState(false);      //pages 메뉴 클릭여부
    const [authenticationEl, setAuthenticationEl] = useState(false); //authentication 메뉴 클릭여부
    const [errorEl, setErrorEl] = useState(false); //error 메뉴 클릭여부
    const [scrollTop, setScrollTop] = useState(false); //scroll 내리는지 체크. false일때가 가장 맨위. drawer 위로 고정하기 위해 필요함.
    const lightDrawer = useContext(lightDrawerContext); //light sidebar 메뉴를 선택했을 때 drawer의 색을 바꾸기 위함.
   

    useEffect(()=>{                                             //스크롤 이벤트 등록
        window.addEventListener('scroll',onScroll);
         
        return() =>{
            window.removeEventListener('scroll',onScroll);
        };
    });

    const onScroll = (e) => {                               //위에서부터 스크롤을 내리면 값이 증가함.
        const top = ('scroll', e.srcElement.scrollingElement.scrollTop);
        (top > 0) && setScrollTop(true);
        (top === 0) && setScrollTop(false);
    };
    
    const handleProfileMenuOpen = (event) => {          //프로필 열기
        console.log("작동확인");
        setProfileEl(event.currentTarget);
        console.log(profileEl);
    };
    const handleProfileMenuClose = (event) => {                //프로필 닫기
        setProfileEl(null);
    };
    const handleLayoutsMenuOpen = () => {               //Layouts 열고닫기
        if(layoutEl === false)
        setLayouEl(true);
        else
        setLayouEl(false);
    }
    const handlePagesMenuOpen = () => {                 //Pages 열고 닫기
        if(pagesEl === false)
        setPagesEl(true);
        else
        setPagesEl(false);
    }
    const handleAuthenticationMenuOpen = () => {                 //Authentication 열고 닫기
        if(authenticationEl === false)
        setAuthenticationEl(true);
        else
        setAuthenticationEl(false);
    }
    const handleErrorMenuOpen = () => {                 //Error 열고 닫기
        if(errorEl === false)
        setErrorEl(true);
        else
        setErrorEl(false);
    }
    
    const menuId = 'primary-search-account-menu'; 
    
    const renderMenu = (
        <Menu profileEl={profileEl} getContentAnchorEl={null} id={menuId} keepMounted transformOrigin={{vertical:'top',horizontal:'right'}} open={isMenuOpen} onClose={handleProfileMenuClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
            <MenuItem onClick={handleProfileMenuClose}>
                Settings
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
                Acivity Log
            </MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>
                Logout
            </MenuItem>
        </Menu>
    );
    
    return (
        
       <div style={{display:"flex"}}>
           
            <AppBar position="related" className= {styleClass.barStyles}>
                <Toolbar>
                    
                    <Typography>Start Bootstrap</Typography>
                    <IconButton edge="start"
                    className = {styleClass.menuButton}
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}>
                        <MenuIcon  />
                    </IconButton>
                    <p style={{flexGrow:'1'}}></p>
                    <div className={styleClass.searchBox} style={{display:'flex'}}>
                    <InputBase placeholder="Search for..." inputProps={{'aria-label':'search'}} style={{paddingLeft:"10px"}} />
                        <div className={styleClass.searchIcon}>
                           <SearchIcon color="inherit" style={{fontSize:'26px'}} />
                        </div>
                        
                    </div>
                    <IconButton edge="end"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    style={{marginLeft:'10px'}}
                    >
                        <AccountCircle />
                    </IconButton>
                    
                </Toolbar>
                
            </AppBar>
            {renderMenu}
        
            <Drawer className={styleClass.drawer} variant="persistent" anchor="left" open={open} classes={{paper: clsx(styleClass.drawerPaper,{  //스크롤 내릴때와 light여부에 따라 다르게 적용
            [styleClass.onScrollDrawerPaper] : lightDrawer&&scrollTop,
            [styleClass.drawerPaperLight] : !scrollTop&&!lightDrawer,
            [styleClass.onScrollDrawerPaperLight] : scrollTop&&!lightDrawer,
        })}}>
            <List paddingLeft="5px">
                    <Typography className={styleClass.menuTitle}>CORE</Typography>
            
                    <ListItem button>
                        <ListItemIcon className={styleClass.listItemStyle}><DashboardIcon/></ListItemIcon> {/*아이템 색을 바꾸려면 class로 따로 색지정해야함 */}
                        <Link to="/dashboard">
                        <ListItemText primary="dashboard"/>
                        </Link>
                    </ListItem>
                    <Typography className={styleClass.menuTitle}>INTERFACE</Typography>
                    <ListItem button onClick={handleLayoutsMenuOpen}>
                        <ListItemIcon className={styleClass.listItemStyle}><LayersIcon/></ListItemIcon> 
                        <ListItemText primary="Layouts" />
                        <RenderSubMenu isOpen={layoutEl}/>
                    </ListItem>
                    <RenderLayouts layoutEl={layoutEl} />
                    <ListItem button onClick={handlePagesMenuOpen}>
                        <ListItemIcon className={styleClass.listItemStyle}><MenuBookIcon/></ListItemIcon> 
                        <ListItemText primary="Pages" />
                        <RenderSubMenu isOpen={pagesEl}/>
                    </ListItem>
                    <RenderPages pagesEl={pagesEl} authenEl = {authenticationEl} errorEl={errorEl} handleAuth={handleAuthenticationMenuOpen} handleErr={handleErrorMenuOpen}/>
                    <Typography className={styleClass.menuTitle}>ADDONS</Typography>
                    <ListItem button>
                        <ListItemIcon className={styleClass.listItemStyle}><BarChartIcon/></ListItemIcon> 
                        <Link to="/charts">
                        <ListItemText primary="Charts" />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon className={styleClass.listItemStyle}><TableChartIcon/></ListItemIcon> 
                        <Link to="/tables">
                        <ListItemText primary="Tables" />
                        </Link>
                    </ListItem>
            </List>
            <div className={styleClass.paddingDiv}/>
            <Box className={clsx(styleClass.drawerFooter,{
                [styleClass.onScrollDrawerFooter] : lightDrawer&&scrollTop,
                [styleClass.drawerFooterLight] : !scrollTop&&!lightDrawer,
                [styleClass.onScrollDrawerFooterLight] : scrollTop&&!lightDrawer,
            })}>
                <Typography style={{margin:'14px 0px 0px 10px',fontSize:'14px'}}>Logged in as:</Typography>
                <Typography style={{marginLeft:'10px'}}>Start Bootstrap</Typography>
            </Box>
        </Drawer>
        
        </div>
        
    );
};


export default Header;