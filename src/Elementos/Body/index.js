import styled from 'styled-components';
import ImagemTelaPequena from '../../Assets/imagens/tela-celular.png'
import './estilo.css'



function Body() {
    return (<main>
        <section className='principal'>
            <img src={ImagemTelaPequena} alt='Tela pequena' className='imgPequeno' />
            <div>
            <h1>Matheus</h1>
            <h1>Nadyr</h1>

            </div>
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