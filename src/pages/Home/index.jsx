import styles from './Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h2>Sobre a História da EEAF</h2>
      <div className={styles.paragrafos}>
        <p>
          A Escola Estadual Aristófanes Fernandes é uma escola pública de referência em qualidade de educação, que busca cada vez mais atender melhor à comunidade num resgate à cidadania, além do conhecimento sistematizado e profissional.
        </p>
        <p>
          Está situada geograficamente na microrregião Serra de Santana e localizada na rua João Paulino de Souza nº 162 no município de São Vicente / RN. A escola possui uma área total de 2.130m² e apresenta uma área construída de 1.036m², ambos os valores de forma aproximada. Ela é mantida pelo Estado do Rio Grande do Norte e administrada pela Secretaria de Estado da Educação, do Esporte e do Lazer do Rio Grande do Norte.
        </p>
        <p>
          No início, a escola era Municipal e atendia apenas da 5ª a 8ª série e foi criada pela Lei nº 09 de 08 de março de 1973 pelo ex-prefeito Osmildo Fernandes da Costa, seu funcionamento foi autorizado pela portaria nº 353/76 em 16 de dezembro de 1976 e publicada pelo Diário Oficial do Estado em 28 de dezembro 1976.
        </p>
        <p>
          Passando a ser estadualizada pelo Decreto nº 8.610 de 09 de março de 1983, com a expansão do ensino do 2º grau oferecendo o curso de Auxiliar de Contabilidade, autorizada pela portaria nº 919/81 em 01 de fevereiro de 1981.
        </p>
        <p>
          Em 20 de julho de 1998 a escola recebe autorização para funcionamento das habilitações em Formação para o Magistério e Auxiliar de Contabilidade a qual beneficiaram a comunidade estudantil com cursos profissionalizantes, valorizando os nossos alunos no campo do trabalho.
        </p>
        <p>
          No ano de 1999, a escola atendendo a LDB (Lei de Diretrizes e Bases) muda novamente sua nomenclatura, substituindo os cursos de Auxiliar de Contabilidade e Magistério respectivamente, pelo então Ensino Médio e Ensino Médio na modalidade normal (antigo magistério) o qual já foi extinto. A escola ofereceu ainda no período de 1996 a 2007 o Ensino Fundamental na modalidade Educação de Jovens e Adultos (EJA) nos níveis III e IV.
        </p>
      </div>

      <h2>Modalidades</h2>
    </section>
  );
}

export default Home;
