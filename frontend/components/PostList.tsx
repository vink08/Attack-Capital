
'use client';

import { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import { Post } from '../types';
import * as api from '../lib/api';
import styled from 'styled-components';

const ListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #6c757d;
  margin-top: 2rem;
`;

const LoadingMessage = styled.p`
  text-align: center;
  color: #6c757d;
  margin-top: 2rem;
`;

type PostListProps = {
  authorId?: string;
};

const PostList = ({ authorId }: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await api.getPosts(authorId);
        setPosts(response.data);
      } catch (err) {
        setError('Failed to load posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [authorId]);

  if (loading) {
    return <LoadingMessage>Loading posts...</LoadingMessage>;
  }

  if (error) {
    return <EmptyMessage>Error: {error}</EmptyMessage>;
  }

  if (posts.length === 0) {
    return <EmptyMessage>No posts found</EmptyMessage>;
  }

  return (
    <ListContainer>
      <Title>{authorId ? 'My Posts' : 'Recent Posts'}</Title>
      {posts.map((post) => (
        <BlogPost key={post._id} post={post} />
      ))}
    </ListContainer>
  );
};

export default PostList;