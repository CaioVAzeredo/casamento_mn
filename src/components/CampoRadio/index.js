function CampoRadio({ type, name, value, checked, aoAlterado, label, obrigatorio }) {
    return (
        <label>
            <input
                required={obrigatorio}
                type={type}
                name={name}
                value={value}
                checked={checked}
                onChange={(evento) => aoAlterado(evento.target.value)}
            />
            {label}
        </label>
    )
}

export default CampoRadio