//class based component

/*import React, {Component} from 'react';

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

export default App;*/

//functional based component using hooks

import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserList/>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource}/>
        </div>
    );


}

export default App;