import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//now I can use bootstrap.  Wherever you want to include any of your Reactstrap components, you'll have to explicitly import them into any component that you'd like to use them in.
//ex:  import React from 'react';
//     import { Alert } from 'reactstrap';



import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById("root"));
