import { FaCarSide, FaUserFriends, FaMapMarkedAlt, FaDatabase, FaJava, FaReact, FaHeart } from "react-icons/fa";

function Projeto() {
  return (
    <div className="text-gray-700 bg-[#c5d6d070] pt-15 md:pt-0">
      
      {/* Introdução */}
      <section className="px-6 py-12 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="bg-white rounded-2xl p-6 hover:shadow-black/20 transition shadow-lg">
          <FaHeart className="text-4xl text-[#7D0700] mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-4 font-Mooli">Caronas feitas por e para mulheres</h3>
          <p className="text-[20px]">
            O GoLady nasceu para oferecer às mulheres uma experiência de transporte mais segura, acolhedora e confiável, criando um ambiente onde elas se sintam protegidas e livres para ir e vir.
          </p>
        </div>
      </section>

      {/* Funcionalidades */}
      <h1
        className="
          text-center w-full
          bg-gradient-to-r from-[#FAD3C4] via-white to-[#BBD5CC]
          text-3xl md:text-3xl font-bold font-Mooli py-6
          shadow-lg
        "
      >
        Funcionalidades
      </h1>

      <section className="px-8 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-black/20 transition shadow-lg">
            <FaUserFriends className="text-4xl text-[#7D0700] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 font-Mooli">Gestão de Usuárias</h3>
            <p>Cadastre, consulte e atualize os perfis das usuárias.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-black/20 transition shadow-lg">
            <FaMapMarkedAlt className="text-4xl text-[#7D0700] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 font-Mooli">Controle de Viagens</h3>
            <p>Crie, exclua, liste e pesquise viagens com filtro por usuárias.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-black/20 transition shadow-lg">
            <FaCarSide className="text-4xl text-[#7D0700] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 font-Mooli">Cadastro de Veículos</h3>
            <p>Adicione ou edite veículos das motoristas com praticidade.</p>
          </div>
        </div>
      </section>

      {/* Tecnologias Utilizadas */}
      <h1
        className="
          text-center w-full
          bg-gradient-to-r from-[#FAD3C4] via-white to-[#BBD5CC]
          text-3xl md:text-3xl font-bold font-Mooli py-6
          shadow-lg
        "
      >
        Tecnologias Utilizadas
      </h1>

      <section className="px-8 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-black/20 transition shadow-lg">
            <FaJava className="text-4xl text-[#7D0700] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 font-Mooli">Back-End</h3>
            <p>Java, Spring Boot, JPA, Hibernate, Tomcat.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-black/20 transition shadow-lg">
            <FaDatabase className="text-4xl text-[#7D0700] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 font-Mooli">Banco de Dados</h3>
            <p>MySQL para persistência dos dados.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center hover:shadow-black/20 transition shadow-lg">
            <FaReact className="text-4xl text-[#7D0700] mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2 font-Mooli">Front-End</h3>
            <p>React e Tailwind CSS para uma interface moderna e responsiva.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Projeto;
