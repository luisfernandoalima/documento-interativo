import { useState } from "react";

import perfilMasculino from "../../assets/img/perfil-m.png";
import perfilFeminino from "../../assets/img/perfil-f.png";

export const Form = (props) => {


    const [selectRadio, setSelect] = useState("Masculino")

    const changeSelect = (e) => {
        setSelect(e.target.value)
        e.target.value ==="Feminino"? props.setPerfil(perfilFeminino) : props.setPerfil(perfilMasculino)
        props.setSexo(e.target.value)
    }


  return (
    <form action="">
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => props.setName(e.target.value)}
        />
      </div>
      <div>
        <p>Sexo:</p>
        <div>
          <label htmlFor="sexoMasc">Masculino</label>
          <input
            type="radio"
            name="sexo"
            id="sexoMasc"
            value="Masculino"
            onChange={changeSelect}
            checked={selectRadio === "Masculino"}
          />
          <br />

          <label htmlFor="sexoFemi">Feminino</label>
          <input
            type="radio"
            name="sexo"
            id="sexoFemi"
            value="Feminino"
            checked={selectRadio === "Feminino"}
            onChange={changeSelect}
          />
        </div>
      </div>
      <div>
        <label htmlFor="idade">Idade</label>
        <input
          type="text"
          name="idade"
          id="idade"
          maxLength={2}
          onChange={(e) => props.setIdade(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nasc">Nascinalidade</label>
        <input
          type="text"
          name="nasc"
          id="nasc"
          onChange={(e) => props.setNasc(e.target.value)}
        />
      </div>
    </form>
  );
};
