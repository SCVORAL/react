import { useEffect, useState } from "react"

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState('');
  const [tagFilter, setTagFilter] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  const [postsResult, setPostsResult] = useState([]);

  useEffect(() => {
    setFilteredPosts(posts.filter(post => post.title.includes(filter) && (tagFilter.length ? tagFilter.includes(post.userId) : true)));
  }, [posts, filter, tagFilter]);

  useEffect(() => {
    setPostsResult(filteredPosts.slice(offset, offset + count));
  }, [filteredPosts, count, offset]);

  return [setPosts, setFilter, setOffset, setCount, postsResult, filteredPosts, setTagFilter, posts, tagFilter];
}