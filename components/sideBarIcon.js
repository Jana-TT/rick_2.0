
const SideBarIcon = ({icon, text, onClick}) => {

    const handleClick = () => {
        onClick(text)
    }

    return (
    <div className="sidebar-icon group hover:cursor-pointer" onClick={handleClick}>
        {icon} 
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )
};

export default SideBarIcon;

/*takes an icon component as an input prop, with the icon itself inside of it */
/*takes a text component as an input prop, with the text itself inside of it*/ 