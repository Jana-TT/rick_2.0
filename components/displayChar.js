import Character from './character'



const DisplayChar = ({ characters }) => {

    const charactersDisplay = []

    for(const character of characters) {
        charactersDisplay.push(<Character {...character} key={character.id}/>)
    }

    return(
        <div className = "fixed top-12 right-0 h-screen w-60 bg-gray-800 pt-6 pl-4 flow-root font-bold text-gray-500 text-sm">
           CHARACTERS   
           {charactersDisplay}
        </div>
    );
}

export default DisplayChar;