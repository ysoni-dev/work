export default function Home(){
    console.log(process.env.ROOT_DOMAIN)
    return(
        <>
        <h1>home page</h1>
        {process.env.NODE_ENV == "development" ?
        (`this is development and ROOT_DOMAIN is ${process.env.ROOT_DOMAIN}`) 
        : (`this is PRODUCTION and ROOT_DOMAIN is ${process.env.ROOT_DOMAIN}`)}
        
        </>
    )
}