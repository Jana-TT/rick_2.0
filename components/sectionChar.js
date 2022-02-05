import { useEffect, useState } from "react"
import Channel from "./channel"



const SectionChar = ({ channelsObj }) => {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const newChannels = []
        for(const channel of channelsObj) {
            newChannels.push(<Channel title={channel} key={channel}/>)
        }
        setChannels(newChannels);

    }, [channelsObj])

    
    return (
        <>
            {channels}
        </>
    )
}

export default SectionChar;