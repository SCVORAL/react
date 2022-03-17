import './posts.css';

const Posts = ({ posts, loading, dataModal }) => {

  if(loading) {
    return <h2> Loading ....</h2>
  }

  const changeDataModal = (e) => {
    e.preventDefault();
    dataModal(e);
  }

  return (
    <>
      {
        posts.map((e, i) => (
          <div className="col-6 col-md-4 col-lg-3" key={i}>
            <div className="card">
              <img src={posts[i].image} className="card-img-top" alt={posts[i].imageTitle} />
              <div className="card-body">
                <p className="card-text">{e.title}</p>
                <a href="#" className="btn btn-primary" onClick={changeDataModal} id={i} >Go somewhere</a>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Posts;
