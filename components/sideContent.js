import SideContentChar from "./sideContentChar";
import SectionChar from "./sectionChar";
import { useEffect, useState } from "react";


const SideContent = ({ channelsObj }) => {

    const [channelsArr, setChannelsArr] = useState([]);

    useEffect(() => {
        const newChannels = [];
        for(const [zone, channels] of Object.entries(channelsObj)){
            newChannels.push(
                <SideContentChar title={zone} key={zone}>
                   <SectionChar channelsObj={channels}/>
                </SideContentChar>
            )
        }
        setChannelsArr(newChannels);
    }, [channelsObj])

    

    return(
        <div className = "fixed top-12 left-20 h-screen w-60 flex bg-gray-800 shadow-lg text-white">
           {channelsArr}
        </div>
    )
};

export default SideContent;