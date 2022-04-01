import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/posts';
import Modal from './components/modal/modal';
import Pagination from './components/pagination/pagination';
import Search from './components/search/search';
import { usePosts } from './hooks/usePosts';
import Tag from './components/tag/tag';

function App() {

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const [setPosts, setFilter, setOffset, setCount, postsResult, filteredPosts, setTagFilter, posts, tagFilter] = usePosts();

  const [modal, setModal] = useState(false);
  const [dataModal, setDataModal] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const resImg = await axios.get('https://jsonplaceholder.typicode.com/photos');

      res.data.forEach((post, index) => {
        post.image = resImg.data[index].thumbnailUrl
        post.imageTitle = resImg.data[index].title
      });
      setPosts(res.data);

      setLoading(false);
    }

    getPosts();
  }, []);

  useEffect(() => {
    setOffset((currentPage - 1) * postsPerPage);
    setCount(postsPerPage);
  }, [setCount, setOffset, currentPage, postsPerPage]);

  const changeDataModal = (e) => {

      if (modal) {
        setModal(false);
      } else {
        setModal(true);
      }
    
      setDataModal({
        imgUrl: postsResult[e.target.id].image,
        description: postsResult[e.target.id].body
      });

  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const search = value => {
    setCurrentPage(1);
    setFilter(value);
    setSearchValue(value);
  };

  const idTag = id => {
    setTagFilter(tagFilter.includes(id) ? tagFilter.filter((tagId) => tagId !== id) : [...tagFilter, id]);
  }

  const clearFilter = () => {
    setFilter('');
    setTagFilter([]);
    setSearchValue('');
  }

  return (
    <>
      <div className='container'>

        <div className="row my-3 justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-4">
            <Search value={searchValue} search={search} />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <Tag posts={Array.from(new Set(posts.map((post) => post.userId)))} idTag={idTag} tagFilter={tagFilter} clearFilter={clearFilter} />
          </div>
        </div>

        <div className="row mb-3">
            {
              filteredPosts.length !== posts.length ? <button type="button" className="btn btn-danger" onClick={clearFilter}> Clear all Tag and Search </button> : null
            }
        </div>

        <div className='row mt-3'>
          
          <Posts posts={postsResult} loading={loading} dataModal={changeDataModal} />

          <Pagination postsPerPage={postsPerPage} totalPosts={filteredPosts} paginate={paginate} setPostsPerPage={setPostsPerPage} />

          <Modal modal={modal} setModal={setModal} data={dataModal} />

        </div>
      </div>
    </>
  );
}

export default App;
