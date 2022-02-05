
const Channel = ({ title }) => {
    return (
        <button className = "w-60 border-gray-800 border-4 inline-flex align-left rounded-lg font-semibold px-3 py-0.5 text-gray-500 text-md hover:bg-gray-700 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
                <span>{title}</span>
        </button>
    )
}

export default Channel