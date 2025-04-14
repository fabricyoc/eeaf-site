import styles from './Contatos.module.css';
import { BsFillTelephoneFill } from "react-icons/bs";



function Contatos() {

  const clipboard = () => {
    navigator.clipboard.writeText("8434360991");
    alert("Número copiado para área de transferência!");
  }

  return (
    <section className={styles.contatos}>

      <h2>Contatos</h2>
      <div className={styles.info}>
        <a
          href=""
          onClick={clipboard}
        >
          <img src="/imagens/icon-telephone.png" alt="icon-telephone.png" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=eeafernandez@gmail.com&su=Contato%20via%20EEAF%20Tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/imagens/icon-mail.png" alt="Ícone indisponível" />
        </a>
      </div>

      <h2>Redes Sociais</h2>
      <div className={styles.info}>
        <a
          href="https://www.instagram.com/e.e.aristofanes_fernandes/"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src="/imagens/icon-instagram.png" alt="Ícone indisponível" />
        </a>
        <a
          href="https://www.facebook.com/aristofanes.fernandes.9"
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src="/imagens/icon-facebook.png" alt="icon-facebook" />
        </a>
      </div>

      <h2>Localização</h2>
      <div className={styles.info}>
        <iframe
          className={styles.localizacao}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3429636971086!2d-36.684666924302434!3d-6.2184241609071975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b02b55ba10ea79%3A0x95a6cd51461f7b69!2sEscola%20Estadual%20Arist%C3%B3fanes%20Fernandes!5e0!3m2!1spt-BR!2sbr!4v1728601908914!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>

    </section>
  );
}

export default Contatos;
