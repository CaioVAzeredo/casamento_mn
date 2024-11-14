import ImagemTelaPequena from '../../Assets/imagens/tela-celular.png'
import './estilo.css'



function Body() {
    return (<main>
        <section className='principal'>
            <img src={ImagemTelaPequena} alt='Tela pequena' className='imgPequeno' />
{/*             <img src={ImagemTelaMedia} alt='Tela media' className='imgMedia' />
            <img src={ImagemTelaGrande} alt='Tela media' className='imgMedia' /> */}
        </section>
        <section className='contagemRegressiva'>
            <h2>CONTAGEM REGRESSIVA</h2>
            00:00:00
        </section>
        <section className='secundario'>
        </section>
    </main>)
}

export default Body