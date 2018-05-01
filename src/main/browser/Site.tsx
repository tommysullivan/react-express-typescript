import * as React from "react";
import {Component, ReactElement} from "react";

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
        return <p>Hello, {this.props.title}</p>
    }
}