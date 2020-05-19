import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions';
import Modal from '../../Modal';

class StreamDelete extends Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id);
    }
    render() {
        const actions=(
            <Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </Fragment>
        )
        console.log(this.props.stream);
        return (
            <div>
                <Modal 
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={actions}
                />
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