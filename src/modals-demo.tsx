import React = require("react");
import { Button, Modal } from "ozytis-react-components";

class ModalDemoState{
    showModal :boolean = false;
}

export class ModalDemo extends React.Component<{},ModalDemoState>
{

    constructor(props){
        super(props);
        this.state = new ModalDemoState();
    }

    render(){
        return  (
            <div>
                <h2 className="mt-2">Modals</h2>

                <Button modifier="primary" onClick={()=>this.setState({showModal:true})}>
                    Afficher une modal
                </Button>

                <Modal show={this.state.showModal} title="Ceci est une modal" 
                    onClose={()=> this.setState({showModal: false})}
                    renderFooter={()=> (
                        <div className="w-100 text-center">
                            <Button modifier="primary"  onClick={()=> this.setState({showModal: false})}>Fermer</Button>
                        </div>
                    )}>
                    Autre
                </Modal>
            </div>
        );
    }
}