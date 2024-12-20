import styled from "styled-components";

const CampoContainer = styled.div`
    margin-bottom: 15px;

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    input:focus {
        border-color: #014166;
        outline: none;
    }
`;

function Campo({ type = 'text', label, placeholder = "Sua resposta", valor, aoAlterado, obrigatorio = false }) {
    return (
        <CampoContainer>
            <label>{label} {label === "Nome" ? <span style={{ color: 'red' }}>*</span> : <span style={{ display: 'none' }}>*</span>}</label>
            <input
                type={type}
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </CampoContainer>
    );
};

export default Campo;