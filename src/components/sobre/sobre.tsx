import Integrante from '../integrante/Integrante'
// Dados dos integrantes da equipe
const teamMembers = [
  {
    id: 1,
    name: 'Aylla Scaglia',
    role: 'Desenvolvedor Fullstack',
    image: '/Aylla.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/aylla-scaglia/',
    githubUrl: 'https://github.com/scaglia-aylla1',
  },
  {
    id: 2,
    name: 'Fernanda Murched',
    role: 'Desenvolvedor Fullstack',
    image: '/Fernanda.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/fernandamurched',
    githubUrl: 'https://github.com/FernandaMurched',
  },
  {
    id: 3,
    name: 'Gabriel Souza',
    role: 'Desenvolvedor Fullstack',
    image: '/Gabriel.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/gabriel-souza77/',
    githubUrl: 'https://github.com/GabrielSouza77',
  },
  {
    id: 4,
    name: 'Giovana Lucia',
    role: 'Desenvolvedor Fullstack',
    image: '/Giovana.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/giovana-lucia/',
    githubUrl: 'https://github.com/Giovanalucia',
  },
  {
    id: 5,
    name: 'Luan Queiroz',
    role: 'Desenvolvedor Fullstack',
    image: '/Luan.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/luan-queiroz/',
    githubUrl: 'https://github.com/Luuh03',
  },
  {
    id: 6,
    name: 'Maria Luiza Torres',
    role: 'Desenvolvedor Fullstack',
    image: '/Malu.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/maria-lu%C3%ADza-t-01a302340',
    githubUrl: 'https://github.com/Marialuiza-dev',
  },
  {
    id: 7,
    name: 'Renata Negrini',
    role: 'Desenvolvedor Fullstack',
    image: '/Renata.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/rmln/',
    githubUrl: 'https://github.com/renatangr',
  },
  {
    id: 8,
    name: 'Samuel Silva',
    role: 'Desenvolvedor Fullstack',
    image: '/Samuel.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/samuel-ssf',
    githubUrl: 'https://github.com/Samuel-ssf',
  },
];

function Sobre() {
  return (
    <section className="py-3 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Quem é a nossa equipe</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <Integrante key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;