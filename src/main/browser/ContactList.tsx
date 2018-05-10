import * as React from "react";
import {List, ListItem} from "material-ui";

export const ContactList = () => <List>
    <ListItem primaryText="216.835.8628" leftIcon={<i className="fas fa-mobile-alt fa-2x" />} href={"tel:2168358628"} />
    <ListItem primaryText="tom@tommysullivan.me" leftIcon={<i className="fas fa-envelope fa-2x" />} href={"mailto:tom@tommysullivan.me"} />
    <ListItem primaryText="tommysullivan" leftIcon={<i className="fab fa-github fa-2x" />} href={"https://github.com/tommysullivan"} />
    <ListItem primaryText="Tommy Sullivan" leftIcon={<i className="fab fa-linkedin fa-2x" />} href={"https://www.linkedin.com/in/tommy-sullivan-1ba36b30/"} />
</List>