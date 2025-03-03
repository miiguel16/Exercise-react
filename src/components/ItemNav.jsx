export const ItemNav = ({contentItem ='item' ,myStyle,linksNav='#'}) => {
    return (
        <>
            <li className = {myStyle}>
                <a href = {linksNav}>{contentItem}</a>
            </li>
        </>
    )
}
