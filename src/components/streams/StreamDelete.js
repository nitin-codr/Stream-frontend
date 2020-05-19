import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions';
import Modal from '../../Modal';

class StreamDelete extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        console.log(this.props.stream);
        return (
            <div>
                <Modal />
                {this.props.stream.title}
                <br/>
                {this.props.stream.description}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: {...state.streams[ownProps.match.params.id]}}
}

export default connect(mapStateToProps, {
    fetchStream
}) (StreamDelete);