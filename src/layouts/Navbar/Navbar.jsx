
import { ItemNav } from "../../components/ItemNav";

export const Navbar = ( ) => {
    return (
        <>
        <nav>
            <ul className="flex flex-row flex-wrap ">
                <ItemNav
                    
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Home"
                    route="/"

                />
                <ItemNav
                    
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Clase 1"
                    route="/Class1"
                />
                <ItemNav
                    
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Clase 2"
                    route="/Class2"
                />
                <ItemNav
                    
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Clase 3"
                    route="/Class3"
                />
            </ul>
        </nav>
        </>
    )
}

