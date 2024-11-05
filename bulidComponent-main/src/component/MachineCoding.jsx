// const MachineCoding = () => {

import { useState } from "react";




const MachineCoding=()=>{
    const [search,setSearch]=useState('');
    return(
        <div>
            <label htmlFor="">Enter name</label>
           <input className="border" type="text"  onChange={(e)=>setSearch(e.target.value)} />
           <h1>{search}</h1>
        </div>

    )
}
export default MachineCoding;