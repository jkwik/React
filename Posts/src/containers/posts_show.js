import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  render() {
    return <div>Posts Show!</div>;
  }

  componentDidMount() {
    //Stopped here, the id from the link isn't passed into this.props.
    this.props.fetchPost(this.props.id);
  }
}

export default connect(
  null,
  { fetchPost }
)(PostsShow);
