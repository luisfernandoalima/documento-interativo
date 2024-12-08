import logo from "../../../assets/img/logo.png";
import styles from './styles.module.css'
export const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo documento interativo" className={styles.logo}/>
      <h1 className={styles.titulo}>Documento Interativo</h1>
    </header>
  );
};
