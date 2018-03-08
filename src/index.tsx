import * as React from "react";
import * as ReactDom from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  RouteProps,
  withRouter
} from "react-router-dom";
import {
  BaseComponent,
  Button,
  Panel,
  PanelGroup,
  BreadCrumb,
  BaseRouteConfig
} from "ozytis-react-components";

import * as H from "history";

import "./demo.less";
import { Home } from "./home";
import { ButtonsDemo } from "./buttons-demo";
import { ModalDemo } from "./modals-demo";
import { OtherDemo } from "./others-demo";
import { WizardDemo } from "./wizard-demo";
import { BootstrapDemo } from "./bootstrap-demo";
import { PanelsDemo } from "./panels-demo";
import { ControlDemo } from "./controls-demo";

interface AppTestProps {
  history?: H.History;
}

class AppTestState {
  showModal = false;
  currentRoute: BaseRouteConfig;
}

@withRouter
export class AppTest extends BaseComponent<AppTestProps, AppTestState> {
  constructor(props: AppTestProps) {
    super(props);
    this.state = new AppTestState();
  }

  allRoutes: BaseRouteConfig[] = [
    new BaseRouteConfig("/", "Accueil", Home, false),
    new BaseRouteConfig("/bootstrap", "Bootstrap helpers", BootstrapDemo,false),
    new BaseRouteConfig("/bootstrap/buttons", "Bouttons", ButtonsDemo, false),
    new BaseRouteConfig("/bootstrap/modals", "Modals", ModalDemo, false),
    new BaseRouteConfig("/bootstrap/panels", "Panels / Cards", PanelsDemo, false),
    new BaseRouteConfig("/bootstrap/controls", "Formulaires", ControlDemo, false),
    new BaseRouteConfig("/wizards", "Wizard", WizardDemo, false),
    new BaseRouteConfig("/others", "Autres", OtherDemo, false)
  ];

  componentWillMount() {
    this.checkRoute(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkRoute(nextProps);
  }

  checkRoute(props) {
    var route = this.allRoutes.find(
      route => route.path === (props as any).location.pathname
    );

    if (!route) {
      alert(
        `Route non configurée pour l'url ${(props as any).location.pathname}`
      );
      return;
    }

    document.title = route.title;

    this.setState({ currentRoute: route });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Ozytis React Components</h1>
          <blockquote>npm i --save ozytis-react-components</blockquote>
        </div>

        <PanelGroup>
          <Panel title="Menu" className="left-menu">
            <ul>
              {this.allRoutes.filter(r=>r.path.split("/").length===2).map(route => {

                    var subs = this.allRoutes.filter(r=>route.path!="/" &&  r.path.indexOf(route.path)===0 && r.path.length>route.path.length);

                    return (
                        <li key={route.path}>
                            <Link to={route.path}>{route.title}</Link>
                            {
                                subs && subs.length>0 &&
                                <ul>
                                    {
                                        subs.map(subroute=>(
                                            <li key={subroute.path}>
                                                <Link to={subroute.path}>{subroute.title}</Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            }
                        </li>
                    )
                })}
            </ul>
          </Panel>

          <Panel grow={8}>
            <BreadCrumb
              currentRoute={this.state.currentRoute}
              allRoutes={this.allRoutes}
            />

            <div className="p-2">
              <Switch>
                {this.allRoutes.map((route: BaseRouteConfig, index: number) => {
                  return (
                    <Route
                      key={`route-${index}`}
                      exact
                      component={route.component}
                      path={route.path}
                    />
                  );
                })}
              </Switch>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}

var app = document.getElementById("app");
ReactDom.render(
  <BrowserRouter>
    <AppTest />
  </BrowserRouter>,
  app
);
