import "./Search.css";
function Search({ handleSearchList }) {
  return (
    <div className='search_box'>
      <input
        className='search'
        placeholder='Search'
        type='text'
        onChange={(event) => {
          handleSearchList(event.target.value);
        }}></input>
    </div>
  );
}
export default Search;
