import * as React from "react";
import { TextControl, BaseComponent, TextAreaControl, SingleFileUploadControl } from "ozytis-react-components";

class ControlDemoState{
    value:string = "valeur de test";
    file:string = "";
}

export class ControlDemo extends BaseComponent<{},ControlDemoState>{

constructor(props){
    super(props);
    this.state = new ControlDemoState();
}

    render(){
        return (
            <div>
                <h2>Formulaires</h2>

                <h3 className="mt-3">TextControl</h3>
                <TextControl label="Sujet" value={this.state.value} onChange={e=> this.setState({value:e.target.value})} />

                <h3 className="mt-3">TextAreaControl</h3>
                <TextAreaControl label="Sujet" value={this.state.value} onChange={e=> this.setState({value:e.target.value})} />

                <h3 className="mt-3">SingleFileUploadControl avec aperçu</h3>
                <SingleFileUploadControl showPreview label="Fichier"  value={this.state.file} onChange={e=> this.setState({file:e})} />
            </div>
        )
    }
}