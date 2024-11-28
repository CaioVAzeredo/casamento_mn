
function ContainerInformacao({informacoes}) {
  return informacoes.map(informacao => <div><div className={informacao.estilo}></div><h2>{informacao.info1}:</h2><p>{informacao.info2}</p></div>
  )
}

export default ContainerInformacao