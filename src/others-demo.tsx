import React = require("react");
import { Loader, ErrorSummary } from "ozytis-react-components";

export class OtherDemo extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2 className="mt-2">Breadcrumb</h2>

        voir ci-dessus !

        <h2 className="mt-2">Loader</h2>

        <Loader loading usualClass="far fa fa-check" />
        <h2 className="mt-2">ErrorSummary</h2>
        <ErrorSummary
          errors={["Erreur 1", "Erreur 2 qu'il faut  corriger", "Erreur 3!"]}
        />
      </div>
    );
  }
}
