import { useState } from "react";
import ContainerH1 from "../ContainerH1";
import Button from "../Button";
import Campo from "../Campo";
import CampoRadio from "../CampoRadio";
import styled from "styled-components";
import CampoTextarea from "../CampoTextarea";

const CampoFormulario = styled.form`
margin: 0 auto;
width: 640px;

.cabecalho, .nome, .radio, .convidado, .textArea{
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
    padding: 25px;
}

h1{
    padding: 10px;
}

h3{
    color: #014166;
    width: 90%;
    text-align: center;
    margin-left: 20px;
}

hr {
        width: 500px;
        color: #014166;
        background-color: #014166;
        height: 1px;
        border: none;
        margin: 20px auto;
      }
      
input{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: block;
    border-radius: 0px;
    width: 150px;
    
}
label{
    margin-bottom: 45px;
}
h4{
    margin-top: 0px;
}

.radio input{
    width: 50px;
    color: red;
    margin-top: 30px;
}

.suaResposta{
    margin-top: 10px;
}

.botoes{
    display: flex;
    justify-content: space-between;
    width: 100%; 
}
.botaoLimparFormulario{
    color: var(--cor-primaria);
    background-color: #FFE0E4;
    border: none;
    font-size: 15px;
}
.botaoLimparFormulario:hover{
    cursor: pointer;
}
@media(max-width: 1200px) {
    margin: 0 auto;
    width: 60%;

    h1{
        width: 80%;
    }
    
    hr{
        width: 80%;
        font-size: 30px;
    }
}
@media(max-width: 600px) {
    width: 80%;

}
`

function Formulario({ AdicionarPrensenca }) {
    const [nome, setNome] = useState('');
    const [convidado, setConvidado] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [resposta, setResposta] = useState('');

    const aoSubmeter = (e) => {
        e.preventDefault();
        
        setNome('');
        setConvidado('');
        setMensagem('');
        setResposta('');

        AdicionarPrensenca({
            nome: nome,
            convidado: convidado,
            mensagem: mensagem,
            resposta: resposta
        })
    };

    const LimparFormulario = () => {
        setNome('');
        setConvidado('');
        setMensagem('');
        setResposta('');
    }

    return (
        <CampoFormulario onSubmit={aoSubmeter}>
            <div className="cabecalho">
                <ContainerH1 conteudo="Confirme sua presença" />
                <h3>Por favor, confirme a sua presença e da sua família neste formulário, para que possamos nos organizar. </h3>
                <hr />
                <p style={{ color: 'red' }}>* Indica uma pergunta obrigatória</p>
            </div>
            <div className="nome">
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
            </div>

            <div className="radio">
                <h4>Você virá ao nosso casamento? <span style={{ color: 'red' }}>*</span></h4>
                <div>
                    <CampoRadio
                        obrigatorio={true}
                        label={"Sim, eu não perderia isso por nada!"}
                        type="radio"
                        name="casamento"
                        value="sim"
                        checked={resposta === 'sim'}
                        aoAlterado={(valor) => setResposta(valor)}
                    />
                </div>
                <div>
                    <CampoRadio
                        obrigatorio={true}
                        label={"Não, infelizmente eu não vou conseguir, mas fiquem tranquilos porque eu amo vocês da mesma forma"}
                        type="radio"
                        name="casamento"
                        value="nao"
                        checked={resposta === 'nao'}
                        aoAlterado={(valor) => setResposta(valor)}
                    />
                </div>
                <p className="suaResposta"> <strong>Sua resposta:</strong> {resposta === 'sim' ? 'Sim, estarei lá!' : resposta === 'nao' ? 'Infelizmente, não poderei ir :(' : 'Nenhuma resposta selecionada'}</p>
            </div>

            <div className="convidado">
                <Campo
                    obrigatorio={false}
                    label="Quer confirmar a presença de mais alguém que vai com você? Se sim, quem?(Coloque o nome das pessoas)"
                    valor={convidado}
                    aoAlterado={(valor) => setConvidado(valor)}

                />
            </div>
            <div className="textArea">
                <CampoTextarea
                    name='message'
                    placeholder="Sua mensagem aqui.."
                    label="Quer deixar uma mensagem para o casal?"
                    valor={mensagem}
                    aoAlterado={(valor) => setMensagem(valor)}
                />
            </div>
            <div className="botoes">
                <Button informacao="Enviar" type="submit" />
                <button onClick={LimparFormulario} className="botaoLimparFormulario">Limpar formulário</button>
            </div>
        </CampoFormulario>
    );
}

export default Formulario;
