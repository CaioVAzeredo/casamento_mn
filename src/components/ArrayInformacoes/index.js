import festaHora from '../../Assets/imagens/festa-hora.png'
import festaLocal from '../../Assets/imagens/festa-local.png'
import festaVestimenta from '../../Assets/imagens/festa-vestimenta.png'
function Arrayinformacoes() {

    return [
        {
            img: festaHora,
            titulo: 'Quando',
            descricao: '31 de maio de 2025 às 15h30',
            alt: 'foto 1 da pagina de informação'
        },
        {
            img: festaLocal,
            titulo: 'Onde',
            descricao: 'Rua 34 norte, Lote 4, Edifício Real Flat, Salão de festas.',
            alt: 'foto 2 da pagina de informação'
        },
        {
            img: festaVestimenta,
            titulo: 'Como se vestir',
            descricao: 'Esporte fino',
            alt: 'foto 3 da pagina de informação'
        }
    ];
}

export default Arrayinformacoes