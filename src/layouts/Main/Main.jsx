import bgMain from "../../assets/images/imagen1.png";

export const Main =()=>{
    return(
        <>
            <main className="size-full flex flex-col items-center justify-center" >
                <h2 className="text-amber-300 font-semibold text-4xl pb-5">La idea es que  aca contruimos nuestro curso de cada tema</h2>
                <img className="h-170 " src={bgMain} alt="imagen 1"/>
            </main>
        </>
    )
}