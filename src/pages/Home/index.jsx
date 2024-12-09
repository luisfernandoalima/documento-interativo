import { Header } from "../../components/Main/Header";
import { Footer } from "../../components/Main/Footer";
import { Card } from "../../components/Card";
import { Form } from "../../components/Form";
import styles from "./styles.module.css";
import { useState } from "react";

export const Home = () => {
  const [name, setName] = useState();
  const [sexo, setSexo] = useState();
  const [idade, setIdade] = useState();
  const [nascionalidade, setNasc] = useState();
  const [perfil, setPerfil] = useState("")

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Monte a sua identidade!</h2>
        <Card name={name} sexo={sexo} idade={idade} nasc={nascionalidade} perfil={perfil}/>
        <Form
          setName={setName}
          setSexo={setSexo}
          setIdade={setIdade}
          setNasc={setNasc}
          setPerfil = {setPerfil}
        />
      </main>
      <Footer />
    </>
  );
};
