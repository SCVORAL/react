const Tag = ({ posts, idTag, tagFilter, clearFilter }) => {

  function getTagId(e) {
    idTag(+e.target.id)
  }

  return (
    <>
      {
        posts.map(e => (
          <button type="button" 
            className={tagFilter.includes(e) ? "btn btn-success me-3 mb-3" : "btn btn-warning me-3 mb-3"}
            id={e} 
            onClick={getTagId}
            key={e}
          >
            Tag: {e}
          </button>
        ))
      }
    </>
  )
}

export default Tag;
