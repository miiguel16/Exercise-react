
import { ItemNav } from "../../components/ItemNav";

export const Navbar = ( ) => {
    return (
        <>
        <nav>
            <ul className="flex flex-row flex-wrap ">
                <ItemNav
                    linksNav="home"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Home"
                />
                <ItemNav
                    linksNav="clase 1"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Clase 1"
                />
                <ItemNav
                    linksNav="clase 2"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Clase 2"
                />
                <ItemNav
                    linksNav="clase 3"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Clase 2"
                />
            </ul>
        </nav>
        </>
    )
}

