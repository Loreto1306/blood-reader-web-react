import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function Home(){
    return(
        <>
        <div  className="">
        <div  class="bg-cyan-900 flex justify-between my-48 h-full">
    <div class="text-white max-w-lg lg:ml-48">
        <h1 class="text-6xl font-semibold leading- text-cyan-100">Resultado<br/>do exame em menos de<span class="font-light"> 1 dia</span></h1>
        <p class="text-lg pt-2">Cerca de 112,5 milhões de brasileiros, metade da população, utilizam o SUS.
            Resultado desses exames saem no máximo em 30 dias...
        </p>
        <div class="mt-10 mb-10 mr-6">
            <a href="#" class="bg-cyan-700 rounded-3xl shadow-2xl border-transparent border-r border-b border-l border-t py-3 px-10 font-medium inline-block mr-4 hover:bg-cyan-600  hover:text-white duration-300 hover:border border">Leia Mais</a>
            <a href="#" class="bg-teal-500 border-transparent rounded-3xl shadow-2xl border-r border-b border-l border-t py-3 px-10 font-medium inline-block mr-4 hover:bg-teal-700  hover:text-white duration-300 hover:border border">Sobre Nós</a>
        </div>
        </div>
        <div class=" xl:w-96 justify-center align-bottom flex lg:mr-48">
            <img src="../../homeImg.png" alt=""/>
        </div>
    
    </div>      
</div>
    <Footer/>
        </>
    )
}