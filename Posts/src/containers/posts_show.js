import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('');
    });
  }

  render() {
    //Only loading shows up the post is never rendered.

    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary">
          Back to posts
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h1>{post.title}</h1>
        <h3>Categories: {post.categories}</h3>
        <p>{post.content}</p>
      </div>
    );
  }

  componentDidMount() {
    //Stopped here, the id from the link isn't passed into this.props.
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostsShow);
