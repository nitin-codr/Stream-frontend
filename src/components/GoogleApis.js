import React, { Component } from 'react';

class GoogleApis extends Component {
    componentDidMount = () => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "1031542362334-j5sobbh87osg7r5ulc8do8vjefo02320.apps.googleusercontent.com",
                scope: "email"
            })
        })
    }
    render() {
        return (
            <div>
                GoogleApis
            </div>
        );
    };
};

export default GoogleApis;