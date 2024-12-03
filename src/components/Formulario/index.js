import { useState } from "react";
import ContainerH1 from "../ContainerH1";
import Campo from "../Campo";

function Formulario() {
    const [nome, setNome] = useState("");

    const aoSubmeter = (e) => {
        e.preventDefault();
        console.log("Nome:", nome);
 
    };

    return (
        <>
            <form onSubmit={aoSubmeter}>
                <ContainerH1 conteudo="Confirme sua presença" />
                <Campo
                    obrigatorio={false}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default Formulario;
