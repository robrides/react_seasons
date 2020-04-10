import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        // Only time state is directly assigned is within the constructor, no where else
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Always set state with the setState() function call
                // When state is updated render() is called automatically
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }

    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);