import SideBarIcon from "./sideBarIcon";
import {BiCameraMovie} from 'react-icons/bi';
import {TiGroup} from 'react-icons/ti';
import {MdOutlineVideoLibrary} from 'react-icons/md';
import {GoLocation} from 'react-icons/go';

const SideBar = ({ onClick }) => {

    const handleClick = (text) => {
        onClick(text)
    }

    return(
        <div className = "fixed top-0 left-0 h-screen w-20 m-0 flex flex-col text-green-600 bg-gray-900 shadow-lg">
            <SideBarIcon icon={<BiCameraMovie size="28" />} SideBarIcon text="Home" onClick={handleClick} />  
            <SideBarIcon icon={<TiGroup size="28" />} SideBarIcon text="Characters" onClick={handleClick} /> 
            <SideBarIcon icon={<MdOutlineVideoLibrary size="28" />} SideBarIcon text="Episodes" onClick={handleClick}/>
            <SideBarIcon icon={<GoLocation size="28" />} SideBarIcon text="Location" onClick={handleClick} />
        </div>
    )
};

export default SideBar;