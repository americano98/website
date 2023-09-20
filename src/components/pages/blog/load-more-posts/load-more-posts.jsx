'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from 'components/shared/button';

const LoadMorePosts = ({ children, defaultCountPosts = -1 }) => {
  const [countPosts, setCountPosts] = useState(defaultCountPosts);

  return (
    <>
      {children.slice(0, countPosts)}
      {countPosts < children.length && (
        <div className="col-span-full text-center">
          <Button theme="primary" size="xs" onClick={() => setCountPosts(children.length)}>
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

LoadMorePosts.propTypes = {
  children: PropTypes.node.isRequired,
  defaultCountPosts: PropTypes.number,
};

export default LoadMorePosts;
