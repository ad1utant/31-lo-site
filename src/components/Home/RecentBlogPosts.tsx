import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
import { Content } from '@theme/BlogPostPage';
import clsx from 'clsx';
import React from 'react';
import styles from './Home.module.css';

type RecentBlogPostsProps = {
  readonly recentPosts: readonly { readonly content: Content }[];
};

export default function RecentBlogPosts({ recentPosts }: RecentBlogPostsProps) {
  return (
    <div className="container">
      <div className="row margin-top--lg margin-bottom-md">
        {recentPosts.map(({ content: BlogPostContent }) => (
          <div
            className={clsx('col col--3 col--offset-1', styles.blogPostList)}
            key={BlogPostContent.metadata.permalink}
          >
            <BlogPostProvider content={BlogPostContent}>
              <BlogPostItem>
                <BlogPostContent />
              </BlogPostItem>
            </BlogPostProvider>
          </div>
        ))}
      </div>
    </div>
  );
}
