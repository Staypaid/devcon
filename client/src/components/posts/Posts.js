import React, { Fragment, useEffect } from 'react';
import longFlag from './longflag.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import Post from '../post/Post';

const Posts = ({ getPosts, post: { posts, loading } }) => {


    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return loading ? (
        <Spinner />
    ) : (
            <Fragment>
                <div>
                    <img style={{ height: 150, width: 1050 }} src={longFlag} alt='alongFlag' />;
                <h1 className='large text-primary'>Posts</h1>
                    <p className='lead'>
                        <i className='fas fa-user' /> Welcome to the community
      </p>
                </div>
                <PostForm />
                <div className='posts'>
                    {posts.map(post => (
                        <PostItem key={post._id} post={post} />
                    ))}
                </div>
            </Fragment>
        );
};

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(
    mapStateToProps,
    { getPosts }
)(Posts);