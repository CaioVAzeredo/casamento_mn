import styled from "styled-components";

const CampoContainer = styled.div`
    margin-bottom: 15px;

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    textarea {
        width: 100%;
        height: 200px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    textarea:focus {
        border-color: #014166;
        outline: none;
    }
`;
function CampoTextarea({ name, label, placeholder, aoAlterado, valor }) {
    return (<CampoContainer>
        <label>{label}</label>
        <textarea
            placeholder={placeholder}
            name={name}
            value={valor}
            onChange={(evento) => aoAlterado(evento.target.value)}
        />
    </CampoContainer>
    )
}

export default CampoTextarea