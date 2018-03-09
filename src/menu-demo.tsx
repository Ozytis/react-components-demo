import * as React from "react";
import { MoreActionsMenu, MoreActionsMenuItem } from "ozytis-react-components";

export class MenuDemo extends React.Component<{}, {}> {


    moreActionItems:MoreActionsMenuItem[] = [
        { title:"Action 1", action:()=>this.wait(1000), icon:"far fa-bus", show:true },
        { title:"Action 2", action:()=>this.wait(2000), icon:"far fa-badge-check", show:true },
        { title:"Action 3", action:()=>this.wait(3000), icon:"far fa-balance-scale", show:true },
        { title:"Action 4", action:()=>this.wait(4000), icon:"far fa-bomb", show:true },
        { title:"Action 5", action:()=>this.wait(5000), icon:"far fa-bug", show:true },
    ];

    wait(time:number){
        return new Promise(resolve=>
            setTimeout(resolve, time)
        );
    }

    render() {
        return (
            <div>
                <h2>Menus</h2>
                <h3 className="mt-2"> MoreActionMenu</h3>

                <div>
                    TEST <MoreActionsMenu items={this.moreActionItems} />
                </div>
            </div>
        );
    }
}
