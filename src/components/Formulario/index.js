import { useState } from "react";
import ContainerH1 from "../ContainerH1";
import Button from "../Button";
import Campo from "../Campo";

function Formulario() {
    const [nome, setNome] = useState('');
    const [convidado, setConvidado] = useState('');
    const [msg, setMsg] = useState('');
    const [resposta, setResposta] = useState('');

    const aoSubmeter = (e) => {
        e.preventDefault();
        setNome('');
        setConvidado('');
        setMsg('');
        console.log(`${nome}; ${convidado}; ${msg}`)
    };

    function handleRadioChange(valor) {

    }
    return (
        <>
            <form onSubmit={aoSubmeter}>
                <ContainerH1 conteudo="Confirme sua presença" />
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <Campo
                    obrigatorio={false}
                    label="Quer confirmar a presença de mais alguém que vai com você? Se sim, quem?"
                    valor={convidado}
                    aoAlterado={(valor) => setConvidado(valor)}
                />
                {/* ----------------------------------- */}
                <div>
                    <h3>Você virá ao nosso casamento? <span style={{ color: 'red' }}>*</span></h3>
                    <div>
                        <Campo
                            obrigatorio={true}
                            type="radio"
                            label={""}
                            valor={resposta}
                            aoAlterado={(valor) => setResposta(valor)}
                        />
                        <label>
                            <input
                                type="radio"
                                name="casamento"
                                value="sim"
                                checked={resposta === 'sim'}
                                onChange={(e) => handleRadioChange(e.target.value)}
                            />
                            Sim, eu não perderia isso por nada
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="casamento"
                                value="nao"
                                checked={resposta === 'nao'}
                                onChange={(e) => handleRadioChange(e.target.value)}
                            />
                            Não, infelizmente eu não vou conseguir, mas fiquem tranquilos porque eu amo vocês da mesma forma
                        </label>
                    </div>
                    <p>Sua resposta: {resposta === 'sim' ? 'Sim, estarei lá!' : resposta === 'nao' ? 'Infelizmente, não poderei ir.' : 'Nenhuma resposta selecionada'}</p>
                </div>
                {/* ----------------------------------- */}
                <Campo
                    obrigatorio={false}
                    label="Quer deixar uma mensagem para o casal?"
                    valor={msg}
                    aoAlterado={(valor) => setMsg(valor)}
                />

                <Button informacao="Enviar" type="submit" />
            </form>
        </>
    );
}

export default Formulario;
