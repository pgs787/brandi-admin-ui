import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  hide: {
    display: 'none',
  },
  show: {
    display: 'block',
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {
    color: '#999',
  },
  label: {
    fontWeight: 'inherit',
    color: "'inherit'",
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
    color: '#999',
    fontSize: '20px',
  },
  labelText: {
    fontWeight: 'inherit',
    color: '#999',
    flexGrow: 1,
  },
  arrow: {
    color: '#999',
  },
  item: {
    marginTop: '20px',
    marginBottom: '20px',
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const SideList = ({ open }) => {
  const classes = useStyles();
  return (
    <Hide open={!open}>
      <TreeView
        className={classes.root}
        defaultExpanded={['3']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon className={classes.arrow} />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem
          nodeId="1"
          labelText="홈"
          labelIcon={HomeIcon}
          bgColor="#E6F4EA"
          className={classes.item}
        />
        <StyledTreeItem
          nodeId="2"
          labelText="상품관리"
          labelIcon={ShoppingCartIcon}
          bgColor="#E6F4EA"
          className={classes.item}
        >
          <StyledTreeItem
            nodeId="5"
            labelText="상품 관리"
            labelIcon={RemoveIcon}
            color="#1a73e8"
            bgColor="#E6F4EA"
          />
          <StyledTreeItem
            nodeId="6"
            labelText="상품 등록"
            labelIcon={RemoveIcon}
            color="#e3742f"
            bgColor="#E6F4EA"
          />
          <StyledTreeItem
            nodeId="7"
            labelText="연동상품관리"
            labelIcon={RemoveIcon}
            color="#a250f5"
            bgColor="#E6F4EA"
          />
          <StyledTreeItem
            nodeId="8"
            labelText="연동상품 카테고리관리"
            labelIcon={RemoveIcon}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
        </StyledTreeItem>
        <StyledTreeItem
          nodeId="3"
          labelText="회원 관리"
          labelIcon={PersonIcon}
          bgColor="#E6F4EA"
          className={classes.item}
        >
          <StyledTreeItem
            nodeId="9"
            labelText="셀러 정보 관리"
            labelIcon={RemoveIcon}
            color="#1a73e8"
            bgColor="#E6F4EA"
          />
          <StyledTreeItem
            nodeId="10"
            labelText="패널티 셀러 관리"
            labelIcon={RemoveIcon}
            color="#e3742f"
            bgColor="#E6F4EA"
          />
          <StyledTreeItem
            nodeId="11"
            labelText="도매처 관리"
            labelIcon={RemoveIcon}
            color="#a250f5"
            bgColor="#E6F4EA"
          />
        </StyledTreeItem>
      </TreeView>
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
