import React from "react";
import perfil from './assets/alexandre.jpg';
import estudoSobre from './assets/notebook.svg';
import modelo from './assets/modelo.png';
import shopfy from '../src/assets/shopify.svg';
import cv from '../src/CV/alexandre-cv.pdf';
import {  BsInstagram,
          BsWhatsapp,
          BsMailbox,
          BsHouse,
          BsPersonLinesFill,
          BsPuzzle,
          BsTerminalPlus,
          BsPersonPlusFill,
          BsFillArrowRightCircleFill
        } from "react-icons/bs";

export default function App(){

  function recolherMenu(){
    document.getElementById('close-menu').checked=false;
    
  }

  //  ícones
    let type = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
    let java = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
    let reactJs = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg';
    let node = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg';
    let nextT = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg';
    let git = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg';
    let postGree = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg';
    let html = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg';
    let figma = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg';
    let word = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg';
    let kali = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg';
    
  return(
    <div className="container">
  
      <input type="checkbox"  id="close-menu" className="close-menu" name="button"/>
      <label for="close-menu" className="close-menu-label" title="close-menu" ></label>
      
      <header>
      <a onClick={recolherMenu} className="btn-inicio" href="#home"> <BsHouse className="menu" size={18}/> Início </a>
        <nav>
          <ul onClick={recolherMenu}>
            <li> <a href="#sobre"> <BsPersonLinesFill className="menu" size={21} /> Sobre</a> </li>
            <li> <a href="#projetos"> <BsPuzzle className="menu" size={21} /> Projetos</a> </li>
            <li> <a href="#conhecimentos"> <BsTerminalPlus className="menu" size={21} /> Conhecimento</a> </li>
            <li> <a href="#contato"> <BsPersonPlusFill className="menu" size={21} /> Contato</a> </li>
          </ul>
        </nav>
      </header>
      


      <section id="home">
        <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
          <img className="perfil" src={perfil} />
          <h2>Olá, eu sou</h2>
          <h1>Alexandre Brasil</h1>
          <div style={{display:"flex", flexDirection: "row"}}><h3 className="animation">Desenvolvedor Web.</h3> <h3 className="pisca">|</h3> </div>
          <div className="botoes">
            <nav>
              <a href="https://www.linkedin.com/in/alexandre-brasil-dos-santos/" target="_blank">LinkedIn</a>
              <a href="https://github.com/alexandre-cooper" target="_blank">Github</a>
              <a href={cv} target="_blank">CV</a>
            </nav>
          </div>
        </div>
      </section>

      <section id="sobre">
        <h1>Sobre mim</h1>
        <h3>Bem vindo(a) a meu portfolio!</h3>
        <div className="containerSobre">
       
          <div>
          <p>
          Me chamo <strong>Alexandre Brasil</strong>, tenho 23 anos e estou a aproximadamente 3 anos focado nos estudos e trabalhando na área do Desenvolvimento Web. Sou especialista em criar sites altamente responsivos e de alto desempenho que oferecem uma experiência fantástica ao usuário.
          </p>
          <br/>
          <p>
          Iniciei no mundo da programação no ano de 2017 quando ingressei no curso de Gestão da Tecnologia da Informação, na Unicesumar, durante o curso aprendi sobre os conceitos base da área como: lógica e algoritmos, condições, loops, estruturas de dados e etc. Também tive contato com as linguagens de programação C e Java. Após o termino iniciei uma pós graduação em desenvolvimento mobile pela universidade Unyleya, aonde tive contato com as linguegns java script, CSS, HTML, Type Script e  tecnologias, como React Native, React JS, Flutter e etcs.
          </p>
          <br/>
          <p>
          Atualmente, meu foco principal é o ecossistema do JavaScript, por isso diariamente me dedico a criação de novos projetos para colocar em prática meus estudos e adquirir mais conhecimento.
          </p>
          <br/>
          
          </div>
          <img  width={400} src={estudoSobre}/>
        </div>
      </section>

      <section id="projetos">
        <h1>Projetos</h1>
          <div>
      
            <h2>Phone Repair</h2>
            <img className="modelo" src={modelo} />
            <a href="http://www.phonerepair.com.br" target="blank">Conferir <BsFillArrowRightCircleFill size={20}/> </a>
          </div>
          <div>
      
            <h2>Phone Repair</h2>
            <img className="modelo" src={modelo} />
            <a href="http://lotuspiscinas.netlify.app" target="blank">Conferir <BsFillArrowRightCircleFill size={20}/> </a>
          </div>
          
        
      </section>

      <section id="conhecimentos">
            <h1>Conhecimentos</h1>
            <h3>Tecnologias que estou diariamente em contato, seja no trabalho ou estudando.</h3>
            <div className="container-logos">
            <div className="logos">
                <div className="icon">
                    <img src={type} />
                    <h4>Type Script</h4>
                </div>
                <div className="icon">
                    <img src={java} />
                    <h4>Java Script</h4>
                </div>
                <div className="icon">
                    <img src={reactJs} />
                    <h4>ReatJS</h4>
                </div>
                <div className="icon">
                    <img src={node} />
                    <h4>NodeJS</h4>
                </div>
            </div>

            <div className="logos">
                <div className="icon">
                    <img style={{backgroundColor: '#FFF', borderRadius: 30}} src={nextT} />
                    <h4>NextJS</h4>
                </div>
                <div className="icon">
                    <img src={git} />
                    <h4>Git</h4>
                </div>
                <div className="icon">
                    <img src={postGree} />
                    <h4>PostgreSQL</h4>
                </div>
                <div className="icon">
                    <img src={html} />
                    <h4>HTML</h4>
                </div>
            </div>
            <div className="logos">
                <div className="icon">
                    <img src={kali} />
                    <h4>Kali Linux</h4>
                </div>
                <div className="icon">
                    <img src={shopfy} />
                    <h4>Shopify</h4>
                </div>
                <div className="icon">
                    <img src={word} />
                    <h4>Word Express</h4>
                </div>
                <div className="icon">
                    <img src={figma} />
                    <h4>Figma</h4>
                </div>
            </div>
            </div>
      </section>

      <section id="contato">
        <div>
          <h2>Está com alguma dúvida?</h2>
          <h1>Entre em contato!</h1>
          <img src={perfil} />
          
          <nav>         
            <a href="https://www.instagram.com/alexandre.official.brasil/" target="_blank" className="insta"> <BsInstagram size={20} color="#FFF" /> Instagram</a>
          <a href="http://wa.me/65992792383" target="_blank" className="whatsapp"> <BsWhatsapp size={20} color="#FFF" /> WhatsApp</a>
        </nav>
        </div>
      </section>

      <footer>
        <h5>©️ 2023 - Desenvolvido por Alexandre Brasil</h5>
      </footer>
    </div>
  )
}