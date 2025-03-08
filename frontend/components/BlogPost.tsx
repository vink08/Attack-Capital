
'use client';

import { Post } from '../types';
import styled from 'styled-components';

const PostContainer = styled.article`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const PostMeta = styled.div`
  margin-bottom: 1rem;
  color: #6c757d;
  font-size: 0.875rem;
`;

const PostContent = styled.div`
  line-height: 1.6;
`;

type BlogPostProps = {
  post: Post;
};

const BlogPost = ({ post }: BlogPostProps) => {
  const authorEmail = typeof post.author === 'object' ? post.author.email : 'Unknown';
  const formattedDate = new Date(post.createdAt).toLocaleDateString();

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>
        Posted by {authorEmail} on {formattedDate}
      </PostMeta>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
};

export default BlogPost;