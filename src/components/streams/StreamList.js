import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList extends Component {
    componentDidMount = () => {
        this.props.fetchStreams();
    }
    renderStreams = () => {
        return <ul>
            {this.props.streams.map((stream) => {
                return <li key={stream.id}>
                    <h3>{stream.title}</h3>
                    <p>{stream.description}</p>
                </li>
            })}
        </ul>
    }
    render() {
        return <div>{this.renderStreams()}</div>

    }
}

const mapStateToProps = (state) => {
    return {streams: Object.values(state.streams)};
}

export default connect(mapStateToProps, {
    fetchStreams
}) (StreamList);