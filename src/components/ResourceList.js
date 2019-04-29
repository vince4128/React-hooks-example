import React, {useState, useEffect} from 'react';
import axios from 'axios';

/*class ResourceList extends Component{

    state = {resources: []}

    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

        this.setState({ resources: response.data});
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.resource !== this.props.resource){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

            this.setState({ resources: response.data});
        }
    }

    render() {
        return <div>{this.state.resources.length}</div>;
    }

}*/

/* refactor the class component in functional component using hooks */

const ResourceList = ({resource}) => {

    const [resources, setResources] = useState([]);

    /*const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        setResources(response.data);    
    }*/

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resource}`
                );

                setResources(response.data);
            })(resource);
        }, 
        [resource]
    );
    /*
        useEffect combine the componentDidUpdate and the componentDidMount method
        we have to put, resource in the 2nd argument (array) for componenDidUpdate
        
        if there is no 2nd argument, the function is called every time (! warning could cause spam request, because fetchResource is called and call setResources who update the component and run useEffect again and again...)
    */

    return (
        <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
    );

}

export default ResourceList;