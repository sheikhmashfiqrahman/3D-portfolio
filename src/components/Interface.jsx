const Section =({children})=>{
    return (
        <section>
            <h1>{children}</h1>
        </section>
        
    )
}


export const Interface=()=>{
    return(
        <>
            <Section>
                <h1> About </h1>
            </Section>

            <Section>
                <h1> Skills </h1>
            </Section> 

            <Section>
                <h1> Projects </h1>
            </Section>
            
        </>       
    )
}