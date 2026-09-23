import { Container} from "../../components/container";

export function Home() {
 
  return (
    <Container>
  <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
    <input className="w-full border-2 rounded-lg h-9 px-3 outline-none"
     placeholder="Digite o nome do carro..."/>
     <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium cursor-pointer">
      Buscar
     </button>
  </section>


  <h1 className="font-bold text-center mt-6 text-2xl mb-4">
    Carros Novos e Usados em Todo o Brasil
  </h1>

  <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
   <section className="w-full bg-white rounded-lg">
    <img className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
         src="https://imgs.search.brave.com/7MdTWlB4ggZm1cuw8RO7EL_GhSzCpKAz1I_pMsf6Grk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x4LmNvbS5ici90/aHVtYnM3MDB4NTAw/Lzk5Lzk5NjY3NTgw/MDE5MTk1NC53ZWJw" 
         alt="carro" />
         <p className="font-bold mt-1 mb-2 px-2">Chery Arrizo 6 PRO 1.5 Turbo (híbrido)</p>
         <div className="flex flex-col px-2">
          <span className="text-zinc-700 mb-6">Ano 2025/2026 | 38.000 km | </span>
          <strong className="text-black font-medium text-xl">R$185.000</strong>
         </div>

         <div className="w-full h-px bg-slate-200 my-2">

         </div>
         <div className="px-2 pb-2">
          <span className="text-zinc-700">
            Barra Mansa, RJ</span>
         </div>
   </section>

   <section className="w-full bg-white rounded-lg">
    <img className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
         src="https://imgs.search.brave.com/7MdTWlB4ggZm1cuw8RO7EL_GhSzCpKAz1I_pMsf6Grk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x4LmNvbS5ici90/aHVtYnM3MDB4NTAw/Lzk5Lzk5NjY3NTgw/MDE5MTk1NC53ZWJw" 
         alt="carro" />
         <p className="font-bold mt-1 mb-2 px-2">Chery Arrizo 6 PRO 1.5 Turbo (híbrido)</p>
         <div className="flex flex-col px-2">
          <span className="text-zinc-700 mb-6">Ano 2025/2026 | 38.000 km | </span>
          <strong className="text-black font-medium text-xl">R$185.000</strong>
         </div>

         <div className="w-full h-px bg-slate-200 my-2">

         </div>
         <div className="px-2 pb-2">
          <span className="text-zinc-700">
            Barra Mansa, RJ</span>
         </div>
   </section>

   <section className="w-full bg-white rounded-lg">
    <img className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
         src="https://imgs.search.brave.com/7MdTWlB4ggZm1cuw8RO7EL_GhSzCpKAz1I_pMsf6Grk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/b2x4LmNvbS5ici90/aHVtYnM3MDB4NTAw/Lzk5Lzk5NjY3NTgw/MDE5MTk1NC53ZWJw" 
         alt="carro" />
         <p className="font-bold mt-1 mb-2 px-2">Chery Arrizo 6 PRO 1.5 Turbo (híbrido)</p>
         <div className="flex flex-col px-2">
          <span className="text-zinc-700 mb-6">Ano 2025/2026 | 38.000 km | </span>
          <strong className="text-black font-medium text-xl">R$185.000</strong>
         </div>

         <div className="w-full h-px bg-slate-200 my-2">

         </div>
         <div className="px-2 pb-2">
          <span className="text-zinc-700">
            Barra Mansa, RJ</span>
         </div>
   </section>
  </main>

    </Container>
    
  )
}


