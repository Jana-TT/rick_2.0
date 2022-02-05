const TopBarContent = ({word}) => {
    return(
        <div className = "fixed top-0 left-20 m-0 grid bg-gray-800 w-60 h-12 shadow-xl place-items-center hover:bg-gray-700">
            <div className="font-bold">
                {word}
            </div>
        </div>
    )
};

export default TopBarContent;