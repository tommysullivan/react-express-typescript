import * as React from "react";
import * as $ from 'jquery';
import * as ReactDOM from 'react-dom';
import {Site} from "./Site";

$(() => {
    ReactDOM.render(
        <Site title="myes" />,
        document.getElementById('reactRoot')
    );
});