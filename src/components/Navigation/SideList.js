import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import data from './Data';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  menu: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },
  expand: {
    color: '#999',
  },
  nested: {
    paddingLeft: '20px',
  },
  topIcon: {
    minWidth: '30px',
    color: '#999',
  },
  icon: {
    minWidth: '20px',
    color: '#999',
  },
  text: {
    letterSpacing: '-1px',
  },
  remove: {
    fontSize: 'small',
  },
}));

const SideList = ({ open, menuData }) => {
  const [openID, setOpenID] = useState(data.foldData);
  const classes = useStyles();

  // menulist fold
  const handleClick = id => {
    let set = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    if (openID[id] === true) {
      setOpenID(set);
    } else {
      set[id] = true;
      setOpenID(set);
    }
  };

  return (
    <Hide open={!open}>
      {menuData.map((item, index) => (
        <List key={index} className={classes.menu}>
          <ListItem
            button
            onClick={() => {
              handleClick(index);
            }}
          >
            <ListItemIcon className={classes.topIcon}>
              {data.listData[item.topmenu][1]}
            </ListItemIcon>
            <ListItemText
              primary={
                <div
                  style={{
                    letterSpacing: '-1px',
                    fontSize: '16px',
                    color: '#999',
                  }}
                >
                  {item.topmenu}
                </div>
              }
            />
            {openID[index] ? (
              <ExpandLess className={classes.expand} />
            ) : (
              <ExpandMore className={classes.expand} />
            )}
          </ListItem>
          <Collapse in={openID[index]} timeout="auto" unmountOnExit>
            {item.list.map(listItem => (
              <Link
                to={listItem.url}
                key={listItem.id}
                className={classes.link}
              >
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon className={classes.icon}>
                      <RemoveIcon className={classes.remove} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <div
                          style={{
                            letterSpacing: '-1px',
                            fontSize: '13.5px',
                            color: '#999',
                          }}
                        >
                          {listItem.name}
                        </div>
                      }
                      className={classes.text}
                    />
                  </ListItem>
                </List>
              </Link>
            ))}
          </Collapse>
        </List>
      ))}
    </Hide>
  );
};

const Hide = styled.div`
  ${props =>
    props.open &&
    css`
      display: none;
    `}
`;

export default SideList;
