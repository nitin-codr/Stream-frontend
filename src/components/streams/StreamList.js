import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions';

class StreamList extends Component {
    componentDidMount = () => {
        this.props.fetchStreams();
    }
    renderAdmin = (stream) => {
        if(this.props.currentUserId === stream.userId) {
            return (
                <div className="right floated content">
                    <button className="ui button primary">
                        Edit
                    </button>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>
            );
        };
    };
    renderStreams = () => {
        return this.props.streams.map((stream) => {
                return (
                    <div className="item" key={stream.id}>
                        {this.renderAdmin(stream)}
                        <i className="large middle aligned icon camera" />
                        <div className="content">
                            {stream.title}
                            <div className="description">
                            {stream.description}
                            </div>
                        </div>
                    </div>
                )
            })
    }
    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreams()}
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {
    fetchStreams
}) (StreamList);