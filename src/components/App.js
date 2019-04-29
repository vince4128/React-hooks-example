//class based component

import React, {Component} from 'react';

class App extends Component {

    state = {resource:'posts'};

    changeResource = resource => {
        this.setState({resource});
    }

    render(){
        return (
            <div>
                <div>
                    <button onClick={() => this.changeResource('posts')}>Posts</button>
                    <button onClick={() => this.changeResource('todos')}>Todos</button>
                </div>
                {this.state.resource}
            </div>
        );
    }

}

export default App;