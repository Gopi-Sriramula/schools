import "./style.css";
function SearchBar({value,onChange}) {
  return (
    <div className='containerSearch'>
     <span className='material-icons'>search</span>
     <input type='text' placeholder="School Name" value={value} onChange={onChange}/>
    </div>
  )
}

export default SearchBar;