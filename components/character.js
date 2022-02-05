import Image from 'next/image'

const Character = ({ name, status, species, gender, image }) => {

    const displayName = (name.length > 19 ? name.substring(0, 19) + '...' : name);

    return (
        <button className="text-gray-500 font-semibold py-1 px-2 pr-4 rounded-full inline-flex items-center">
            <Image className="fill-current rounded-full" alt='' src={image} width={32} height={32}/>
            <span className='ml-2'>{displayName}</span>
        </button>
    )

    //beanos
}

export default Character
