import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SideBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            {['right'].map((anchor) => (

                <React.Fragment key={anchor}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="white"
                        aria-label="open drawer"
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        <h4>Side Drawer</h4>
                    </Drawer>
                </React.Fragment>
            ))}

        </div>
    );
}
