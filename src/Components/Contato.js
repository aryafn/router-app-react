import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft`}>
      <Head title="Produtos | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>teste@gmail.com</li>
          <li>+55 99 99999999</li>
          <li>Rua Exemplo, 999</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
