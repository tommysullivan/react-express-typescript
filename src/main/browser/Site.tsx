import * as React from "react";
import {Component, ReactElement} from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {theme} from "./theme"

export interface ISiteProps {
    title:string;
}

export interface ISiteState {}

export class Site extends Component<ISiteProps, ISiteState> {
    constructor(props: ISiteProps) {
        super(props);
        this.state = {};
    }

    render():ReactElement<Site> {
        return <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
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