
import { References } from "../References/References"

export const Footer =()=>{
    return(
        <>
            <footer className="bg-blue-950 w-full h-20 flex flex-row justify-center items-center">
                <References
                    styleReference="list-none pr-4"
                    contentReference="faceboock"
                />
                <References
                    styleReference="list-none pr-4"
                    contentReference="instagram"
                />
                <References
                    styleReference="list-none pr-4"
                    contentReference="youtube"
                />
            </footer>
        </>
    )
}