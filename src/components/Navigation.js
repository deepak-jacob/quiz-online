import React from 'react';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ViewListIcon from 'material-ui/svg-icons/action/view-list';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styleLink = {
  color: 'rgba(0, 0, 0, 0.85)',
  textDecoration: 'none',
};

const Navigation = ({ handleToggle }) => (
  <div>
    <List>
      <ListItem
        leftIcon={<HomeIcon />}
        primaryText="Home"
        onTouchTap={handleToggle}
        containerElement={<Link key="navHome" style={styleLink} to="/" />}
      />
      <ListItem
        leftIcon={<ViewListIcon />}
        primaryText="List"
        onTouchTap={handleToggle}
        containerElement={<Link key="List" style={styleLink} to="/list" />}
      />
      <ListItem
        leftIcon={<NoteAdd />}
        primaryText="Add"
        onTouchTap={handleToggle}
        containerElement={<Link key="navAdd" style={styleLink} to="/add" />}
      />
    </List>
  </div>
);

Navigation.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default Navigation;
