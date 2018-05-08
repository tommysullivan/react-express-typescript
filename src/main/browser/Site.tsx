import * as React from "react";
import {Component, ReactElement} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {theme} from "./theme"
import {Dialog, Divider, IconButton, List, ListItem, Paper} from "material-ui";
import {ContentDrafts, ContentInbox, NavigationClose} from "material-ui/svg-icons";

export interface ISiteProps {
    title:string;
}

export interface ISiteState {
    contactDialogOpen: boolean;
}

export class Site extends Component<ISiteProps, ISiteState> {
    constructor(props: ISiteProps) {
        super(props);
        this.state = {
            contactDialogOpen: false
        };
    }

    render():ReactElement<Site> {
        return <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
            <AppBar
                title={'tommysullivan.me'}
                onTitleClick={() => alert('hi')}
                // iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={<FlatButton label="Contact" onClick={() => this.setState({contactDialogOpen: true})} />}
                // title="Tommy Sullivan"
                // iconClassNameRight="muidocs-icon-navigation-expand-more"
            >
            </AppBar>

            <div style={{marginLeft: '25px', marginRight: '25px'}}>
                <h1 style={{marginBottom: '5px'}}>Tommy Sullivan</h1>
                <h3>Engineering Leader &amp; Software Craftsman</h3>
                <Divider/>
                <p>Myes</p>
            </div>

            <Dialog
                title="Contact Tommy"
                modal={false}
                open={this.state.contactDialogOpen}
                onRequestClose={() => this.setState({contactDialogOpen: false})}
            >
                <List>
                    <ListItem primaryText="216.835.8628" leftIcon={<i className="fas fa-mobile-alt fa-2x" />} href={"tel:2168358628"} />
                    <ListItem primaryText="tom@tommysullivan.me" leftIcon={<i className="fas fa-envelope fa-2x" />} href={"mailto:tom@tommysullivan.me"} />
                    <ListItem primaryText="tommysullivan" leftIcon={<i className="fab fa-github fa-2x" />} href={"https://github.com/tommysullivan"} />
                    <ListItem primaryText="Tommy Sullivan" leftIcon={<i className="fab fa-linkedin fa-2x" />} href={"https://www.linkedin.com/in/tommy-sullivan-1ba36b30/"} />
                </List>
            </Dialog>



            {/*<Card>*/}
                {/*<CardHeader*/}
                    {/*title="Without Avatar"*/}
                    {/*subtitle="Subtitle"*/}
                    {/*actAsExpander={true}*/}
                    {/*showExpandableButton={true}*/}
                {/*/>*/}
                {/*<CardActions>*/}
                {/*<FlatButton label="Action1" />*/}
                {/*<FlatButton label="Action2" />*/}
                {/*</CardActions>*/}
                {/*<CardText expandable={true}>*/}
                    {/*hi tommy :)*/}
                {/*</CardText>*/}
            {/*</Card>*/}
        </MuiThemeProvider>
    }
}