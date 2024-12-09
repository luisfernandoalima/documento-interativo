import styles from "./styles.module.css";
import imgPadrao from  '../../assets/img/perfil-m.png'

export const Card = (props) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3>Minha Identidade</h3>
        </div>
        <div className={styles.cardContetnt}>
            {props.perfil === "" ? <img src={imgPadrao} alt="" className={styles.imgPerfil}/> : <img src={props.perfil} alt="" className={styles.imgPerfil} />}
          <div className={styles.cardInfo}>
            <p>Nome: {props.name}</p>
            <p>Sexo: {props.sexo || "Masculino"}</p>
            <p>Idade: {props.idade}</p>
            <p>Nascionalidade: {props.nasc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
