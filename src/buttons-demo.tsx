import React = require("react");
import { Button } from "ozytis-react-components";

export class ButtonsDemo extends React.Component<{},{}>{
    render(){
        return (
            <div>
                <h2 className="mt-2">Boutons</h2>
                <Button modifier="primary">primary</Button>
                <Button modifier="secondary">secondary</Button>
                <Button modifier="success">success</Button>
                <Button modifier="danger">danger</Button>
                <Button modifier="warning">warning</Button>
                <Button modifier="info">info</Button>
                <Button modifier="light">light</Button>
                <Button modifier="dark">dark</Button>
                <Button modifier="muted">muted</Button>         
            </div>
        )
    }
}