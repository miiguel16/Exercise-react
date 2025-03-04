import { NavLink } from "react-router-dom"

export const ItemNav = ({contentItem ='item' ,myStyle,route}) => {
    return (
        <>
            <li className = {myStyle}>
                <NavLink className={myStyle} to= {route}>{contentItem}</NavLink>
            </li>
        </>
    )
}
