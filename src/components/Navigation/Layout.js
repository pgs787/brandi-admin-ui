import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import data from './Data';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import logoImg from '../../images/logo_2.png';
import axios from 'axios';
import { API_URL } from 'utils/callUrl';
// component
import SideList from './SideList';

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);

  // menuData API
  useEffect(() => {
    const token = localStorage.getItem('Login_token');
    axios
      .get(`${API_URL}/menu`, {
        headers: { Authorization: token },
      })
      .then(res => setMenuData(res.data.menu))
      .catch(error => console.log('error : ', error.response));
  }, []);
  // sidebar open
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // sidebar close
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // logout & token delete
  const deleteSession = () => {
    localStorage.removeItem('Login_token');
    history.push('/login');
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolBar}>
            <LogoBox>
              <Link to="/">
                <LogoImg src={logoImg} />
              </Link>
              {/* <LogoTag>staging</LogoTag> */}
            </LogoBox>
          </Toolbar>
          <LogoutTool>
            <Link to="/login" className={classes.link}>
              <Tooltip title="Log Out" interactive>
                <Button className={classes.logout} onClick={deleteSession}>
                  USERNAME
                </Button>
              </Tooltip>
            </Link>
          </LogoutTool>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.drawerPaper, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={handleDrawerClose}
              className={clsx(classes.hide, {
                [classes.closeBtn]: open,
              })}
            >
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List className={clsx(classes.list, { [classes.hide]: open })}>
            {menuData.map((item, index) => (
              <ListItem button key={index} className={classes.listItem}>
                <ListItemIcon className={classes.icon}>
                  {data.listData[item.topmenu][1]}
                </ListItemIcon>
                <ListItemText className={classes.listText}>
                  <HoverListBox>
                    <ListName>{item.topmenu}</ListName>
                    <HoverList>
                      {item.list.map(listItem => (
                        <Link
                          to={listItem.url}
                          className={classes.link}
                          key={listItem.id}
                        >
                          <HoverItem>{listItem.name}</HoverItem>
                        </Link>
                      ))}
                    </HoverList>
                  </HoverListBox>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <SideList open={open} menuData={menuData} />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
      <Footer>
        <FooterContent>
          상호 : (주)브랜디 | 주소 : (06223) 서울특별시 강남구 테헤란로 32길 26
          청송빌딩 <br />
          사업자등록번호 : 220-88-93187 | 통신판매업신고 : 2016-서울강남-00359호
          | 이메일 : help@brandi.co.kr
          <br />
          2018 © brandi inc.
        </FooterContent>
      </Footer>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#36363A',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    paddingLeft: '16px',
  },
  menuButton: {
    marginRight: 36,
    position: 'absolute',
    color: '#999',
    top: '9px',
    left: '17px',
  },
  logo: {
    color: '#999',
  },
  logout: {
    color: '#FFFFFF',
    height: '100%',
    '&:hover': {
      backgroundColor: '#2B2B30',
    },
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'block',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    fontSize: '11px',
  },
  drawerPaper: { position: 'relative', overflow: 'inherit', height: '90%' },
  drawerOpen: {
    marginTop: '32px',
    width: drawerWidth,

    backgroundColor: '#35363A',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: '32px',
    backgroundColor: '#35363A',
    overflowY: 'visible',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },
  icon: {
    color: '#999',
  },
  list: {
    width: '99%',
  },
  listItem: {
    position: 'relative',
    '&:hover': {
      backgroundColor: '#2B2B30',
      '& $listText': {
        display: 'block',
        backgroundColor: '#35363A',
        position: 'absolute',
        top: '-4px',
        left: '64px',
      },
    },
  },
  listText: {
    color: '#999',
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  closeBtn: {
    position: 'absolute',
    display: 'block',
    color: '#999',
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  link: {
    wordBreak: 'break-all',
  },
}));

const LogoBox = styled.div`
  padding-top: 5px;
  position: relative;
  width: 200px;
`;

const LogoImg = styled.img`
  width: 100px;
`;
/* const LogoTag = styled.span`
  position: absolute;
  right: 0;
`; */
const HoverListBox = styled('div')({
  backgroundColor: '#2B2B30',
  width: '180px',
});

const ListName = styled('div')({
  padding: '8px 0px 8px 5px',
});

const HoverList = styled('div')({
  backgroundColor: '#35363A',
  position: 'absolute',
  width: '99%',
  right: '0',
  letterSpacing: '-1px',
});

const HoverItem = styled('div')({
  padding: '7px 0px 7px 12px',
  fontSize: '14px',
  color: '#999',
  wordWrap: 'break-all',
  '&:hover': {
    animation: 'fade 0.5s ease forwards',
  },
  '@keyframes fade': {
    '100%': {
      backgroundColor: '#414247',
      color: '#FFFFFF',
    },
  },
});

const LogoutTool = styled('div')({
  position: 'absolute',
  height: '100%',
  right: '60px',
});

const Footer = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  text-align: center;
  background-color: #35363a;
  padding: 30px;
`;

const FooterContent = styled.div`
  color: #999ba2;
  padding: 0 15px;
  font-size: 12px;
`;

export default Layout;
