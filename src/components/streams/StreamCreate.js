import React from 'react';
import { Component } from 'react';
import {createStream} from '../../actions';
import {connect} from 'react-redux'
import StreamForm from '../streams/StreamForm';
class StreamCreate extends Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }
    render() {
        return (
            <div>
                <StreamForm onSubmit={this.onSubmit}  />
            </div>
        ) 

    };
};


export default connect(null, {
    createStream
}) (StreamCreate);