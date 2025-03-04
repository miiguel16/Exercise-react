import imagen1 from '../../assets/images/imagen1.png'

export const Main =()=>{
    return(
        <>
            <main className="size-full flex flex-col items-center justify-center" >
                <h2 className="text-amber-300 font-semibold text-4xl pb-5">Acá pondremos todo lo que iremos haciendo en el main</h2>
                <img src={imagen1} alt="" className="w-1/2 h-1/2" />
                
            </main>
        </>
    )
}