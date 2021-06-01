import React from "react";
import ReactDOM from "react-dom";

import * from "tonal";
import * from "babel-regenerator-runtime";
import * from "material-components-web";
import * from "startaudiocontext";
import * from "audiokeys";
import * from "webmidi";
import * from "web-animations-js";
import * from "@magenta/music";
import * from "lodash";
import * from "./app";

export temp = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Abel" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/material-components-web@0.39.1/dist/material-components-web.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
    <link rel="stylesheet" href="styles.css" />
    <div id="message">Loading model...</div>
    <div id="chords">
      <table><tbody><tr>
            <td><input id="chord1" type="text" defaultValue="C" /></td>
            <td><input id="chord2" type="text" defaultValue="G" /></td>
            <td><input id="chord3" type="text" defaultValue="Am" /></td>
            // <td><input id="chord4" type="text" defaultValue="F" /></td>
          </tr></tbody></table>
    </div>
    <br />
    <input id="play" type="button" defaultValue="Play" disabled />
)`;
