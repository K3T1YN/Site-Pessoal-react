import React from 'react';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="background">
        <div className="logo"></div>
        <nav className="header">
          <ul>
            <li><a href="#Curiosidades">Curiosidades</a></li>
            <li><a href="#Portfolio">Portfólio</a></li>
            <li><a href="#Contatos">Contatos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <Hero />
      <Sobre />
      <Curiosidades />
      <Portfolio />
    </main>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <h2>Ketlyn Lohane</h2>
      <img src="minhafoto.jpg" alt="Minha Foto" className="hero-image" /> 
    </div>
  );
};

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="interface">
        <h2>Sobre Mim</h2>
        <p>
          Me chamo <span>Ketlyn Lohane</span>, tenho 18 anos. Moro em Natal/RN, mas morei minha infância toda em Ceará-Mirim. 
          Atualmente estudo no IFRN Campus-Ceará-Mirim, 3° ano do ensino médio, cursando informática.
        </p>
        <h3>O que gosto de fazer:</h3>
        <p>
          Meus hobbys são diversificados, adoro sair e ao mesmo tempo gosto muito de dormir. 
          Gosto muito de cozinhar, de cinema, date Netflix com brigadeiro, amo cantar e ouvir músicas.
        </p>
      </div>
    </div>
  );
};

const Curiosidades = () => {
  return (
    <div className="Curiosidades" id="Curiosidades">
      <div className="interface">
        <h2>Curiosidades</h2>
        <div className="card-row">
          {curiosidadesData.map((curiosidade, index) => (
            <Card key={index} {...curiosidade} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ imgSrc, title, description }) => (
  <div className="card">
    <img src={imgSrc} alt={title} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const Portfolio = () => {
  return (
    <div className="Portfolio" id="Portfolio">
      <div className="interface">
        <h2>Portfólio</h2>
        {portfolioData.map((projeto, index) => (
          <div key={index} className="portfolio-item">
            <h3>{projeto.title}</h3>
            <p>{projeto.description}</p>
            <p>Tecnologias: {projeto.technologies.join(', ')}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">Repositório no GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="Contatos" id="Contatos">
      <div className="interface">
        <h2>Contatos</h2>
        <footer>
          <p><a href="mailto:ketlyn.melo@escolar.ifrn.edu.br">E-mail</a></p>
          <p><a href="https://github.com/K3T1YN">Github</a></p>
          <p><a href="https://instagram.com/ketlynn_melo">Instagram</a></p>
        </footer>
      </div>
    </div>
  );
};

// Dados de Curiosidades
const curiosidadesData = [
  { imgSrc: 'praia.jpg', title: 'Lugar preferido', description: 'Onde me sinto mais leve e como me revigoro.' },
  { imgSrc: 'cabelocacheado.jpg', title: 'Meu cabelo natural é cacheado', description: 'Um erro foi tirar meus cachos.' },
  { imgSrc: 'avó.webp', title: 'Fui criada pela minha avó', description: 'Desde os 3 meses sou criada pela minha avó. Minha mãe!' },
];

// Dados do Portfólio
const portfolioData = [
  {
    title: 'Site Professor',
    description: 'Esse site é sobre um professor do Campus-IFRN que foi desenvolvido em dupla afim de realizar uma atividade posta em uma disciplina técnica.',
    technologies: ['HTML', 'CSS'],
    link: 'https://github.com/K3T1YN/aweb/tree/main/Site%20Professor'
  },
  {
    title: 'Quiz',
    description: 'Quiz desenvolvido em dupla para uma atividade.',
    technologies: ['PYTHON'],
    link: 'https://github.com/vivioliver/projeto-final---PEOO'
  },
  {
    title: 'AtemporalBrand',
    description: 'Site de loja desenvolvido em grupo para um trabalho da escola, envolvendo duas matérias técnicas. É uma loja de roupa semelhante a da Riachuelo.',
    technologies: ['PYTHON', 'HTML', 'CSS', 'Banco de Dados'],
    link: 'https://github.com/jottav21/AtemporalBrand'
  }
];

export default App;
