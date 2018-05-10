import * as React from "react";
import {Component, ReactElement} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {theme} from "./theme"
import {Avatar, Dialog, Divider, Drawer, MenuItem} from "material-ui";
import {ContactList} from "./ContactList";
import {LeftMenu} from "./LeftMenu";

export interface ISiteProps {
    title:string;
}

export interface ISiteState {
    contactDialogOpen: boolean,
    drawerOpen: boolean
}

export class Site extends Component<ISiteProps, ISiteState> {
    constructor(props: ISiteProps) {
        super(props);
        this.state = {
            contactDialogOpen: false,
            drawerOpen: false
        };
    }

    render():ReactElement<Site> {
        return <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
            <AppBar
                title={'tommysullivan.me'}
                onLeftIconButtonClick={() => this.setState({drawerOpen: true})}
                iconElementRight={<FlatButton label="Contact" onClick={() => this.setState({contactDialogOpen: true})} />}
            >
            </AppBar>

            {/*<LeftMenu drawerOpen={this.state.drawerOpen} />*/}

            <Drawer open={this.state.drawerOpen}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                {/*<Divider />*/}
                {/*<ContactList />*/}
            </Drawer>

            <div style={{marginLeft: '25px', marginRight: '25px'}}>
                <h1 style={{marginBottom: '5px'}}>Tommy Sullivan</h1>
                <h3>Engineering Leader &amp; Software Craftsman</h3>
                <Divider/>
                <p>Myes</p>
            </div>

            <Dialog
                title={<div style={{padding: '15px'}}><Avatar src="tommySullivan.jpg" style={{marginRight: '10px'}} />Contact Tommy...</div>}
                modal={false}
                open={this.state.contactDialogOpen}
                onRequestClose={() => this.setState({contactDialogOpen: false})}
            >
                <ContactList />
            </Dialog>

            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
            </Card>

            <Card>
                <CardHeader
                    title="Without Avatar"
                    subtitle="Subtitle"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                </CardActions>
                <CardText expandable={true}>
                    hi tommy :)
                </CardText>
            </Card>

        </MuiThemeProvider>
    }
}