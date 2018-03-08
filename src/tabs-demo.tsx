import React = require("react");
import { Tabs, TabPane } from "ozytis-react-components";

export class TabsDemo extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2 className="mt-2">Tabs</h2>

        <Tabs>
          <TabPane title="Onglet 1">ceci est le contenu de l'onglet 1</TabPane>
          <TabPane title="Onglet 2">ceci est le contenu de l'onglet 2</TabPane>
          <TabPane title="Onglet 3">ceci est le contenu de l'onglet 3</TabPane>
        </Tabs>
      </div>
    );
  }
}
