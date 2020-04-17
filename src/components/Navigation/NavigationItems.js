import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active exact>Home</NavigationItem>
        <NavigationItem link="/users" exact>Users</NavigationItem>
        <NavigationItem link="/meetings" exact>Meetings</NavigationItem>
        <NavigationItem link="/news" exact>News</NavigationItem>
        <NavigationItem link="/events" exact>Events</NavigationItem>
    </ul>
);

export default navigationItems;