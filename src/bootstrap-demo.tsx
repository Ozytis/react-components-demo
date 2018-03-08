import React = require("react");
import {
  
    Link
  
  } from "react-router-dom";

export class BootstrapDemo extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/bootstrap/buttons">Boutons</Link>
          </li>
          <li>
            <Link to="/bootstrap/modals">Modal</Link>
          </li>
          <li>
            <Link to="/bootstrap/panels">Panels</Link>
          </li>
          <li>
            <Link to="/bootstrap/controls">Formulaires</Link>
          </li>
        </ul>
      </div>
    );
  }
}
