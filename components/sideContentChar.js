import {MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/md";
import React, { useState } from 'react'


const SideContentChar = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false)
    return(
        <article className='question'>
            <header>
                <h4 onClick={() => setExpanded(!expanded)} className='myCollapse'></h4>
                <button className='pt-6 inline-flex font-bold text-gray-500 text-sm hover:text-white' onClick={() => setExpanded(!expanded)}> 
                {expanded ? < MdKeyboardArrowDown size="18"/> : <MdKeyboardArrowRight size="18" />} {title}
                </button>
            </header>
            {expanded && <p>{children}</p>}
        </article>
    );
}

export default SideContentChar;

