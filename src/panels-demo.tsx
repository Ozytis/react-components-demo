import React = require("react");
import { PanelGroup, Panel } from "ozytis-react-components";

export class PanelsDemo extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2 className="mt-2">Panels</h2>

        <PanelGroup withMargins>
          <Panel title="Et ca une carte avec des marges" modifier="primary">
            TEST
          </Panel>

          <Panel title="Et ca une carte avec des marges" modifier="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Panel>

          <Panel title="Et ca une carte avec des marges" modifier="primary">
            TEST 3
          </Panel>
        </PanelGroup>

        <PanelGroup className="mt-2">
          <Panel title="Et ca une carte sans marges" modifier="primary">
            TEST
          </Panel>

          <Panel title="Et ca une carte sans marges" modifier="primary">
            TEST 2
          </Panel>

          <Panel title="Et ca une carte sans marges" modifier="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}
