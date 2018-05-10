import {Divider, Drawer} from "material-ui";
import * as MenuItem from "react-bootstrap/lib/MenuItem";
import {ContactList} from "./ContactList";
import * as React from "react";

export const LeftMenu = (p:{drawerOpen:boolean}) => <Drawer open={p.drawerOpen}>
    <MenuItem>Menu Item</MenuItem>
    <MenuItem>Menu Item 2</MenuItem>
    {/*<Divider />*/}
    {/*<ContactList />*/}
</Drawer>