import Catalog from "../../Shared/catalog/catalog";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";
import Hero from "../../Shared/Hero";
import Team from "../../Shared/Team";


export default function Home (){
    return (
        <>
            <Header />
            <Hero />
            <Catalog /> 
            <Team />
            <Footer />
        </>
    )
}