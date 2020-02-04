import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import hoverList from './Data';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
// component
import SideList from './SideList';

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const deleteSession = () => {
    sessionStorage.removeItem('access_token');
    history.push('/login');
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
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
          <Typography variant="h6" noWrap className={classes.logo}>
            Mini variant drawer
          </Typography>
        </Toolbar>
        <LogoutTool>
          <Link to="/login">
            <Tooltip title="Log Out" interactive>
              <Button className={classes.logout} onclick={deleteSession}>
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
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
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
        <List className={clsx({ [classes.hide]: open })}>
          {hoverList.map((text, index) => (
            <ListItem button key={text[0]} className={classes.listItem}>
              <ListItemIcon className={classes.icon}>{text[1]}</ListItemIcon>
              <ListItemText className={classes.listText}>
                <HoverListBox>
                  <ListName>{text[0]}</ListName>
                  <HoverList>
                    {text[2].map(item => (
                      <Link to={item.link}>
                        <HoverItem key={item.id}>{item.name}</HoverItem>
                      </Link>
                    ))}
                  </HoverList>
                </HoverListBox>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <SideList open={open} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
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
    top: '72px',
    left: '17px',
  },
  logo: {
    color: '#999',
  },

  logout: {
    color: '#999',
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
  },
  drawerOpen: {
    marginTop: '64px',
    width: drawerWidth,

    backgroundColor: '#35363A',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: '64px',
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
    right: '10px',
    display: 'block',
    color: '#999',
  },
  content: {
    flexGrow: 1,
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

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
});

const HoverItem = styled('div')({
  padding: '7px 0px 7px 12px',
  fontSize: '14px',
  color: '#999',
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

export default Layout;
