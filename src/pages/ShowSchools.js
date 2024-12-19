import React, { useState } from 'react'
import Header from '../Components/Header'
import SchoolsData from '../Components/AddSchools'
import SearchBar from '../Components/Search'

function ShowSchools() {
  const [value,setValue] = useState("");
  const onChange = function(e){
    setValue(e.target.value);
  }
  return (
    <div>
     <Header/>
     <SearchBar value={value} onChange={onChange}/>
     <SchoolsData value={value}/>
    </div>
  )
}

export default ShowSchools