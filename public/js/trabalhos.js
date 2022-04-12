// aumentar o resumo

const firstTextResume = document.getElementById('firstTextResume')
const secondTextResume = document.getElementById('secondTextResume')
let oppened = false

function openDiv() {

    if(!oppened) {
        secondTextResume.classList.remove('divOff')
        firstTextResume.classList.add('divOff')
        oppened = true
        return
    } else {
        secondTextResume.classList.add('divOff')
        firstTextResume.classList.remove('divOff')
        oppened = false
        return
    }    
}
//adicionar topico

const containerDiscurssoes = document.querySelector('.containerDiscurssoes')
const containerSugestion = document.querySelector('.containerSugestion')
const containerFinished = document.querySelector('.containerFinished')

const comentsDiv = document.querySelector('.comentsDiv')

function newTopic() {
    containerFinished.classList.add('divOff')
    containerDiscurssoes.classList.add('divOff')
    containerSugestion.classList.remove('divOff')
}

function sendTopic() {
    containerSugestion.classList.add('divOff')
    event.preventDefault();
    containerFinished.classList.remove('divOff')

    comentsDiv.insertAdjacentHTML("afterbegin",
    `
    <div class="comment">
            <div class="awaitAccept">
                <img src="public/images/finishedIcon.png" alt="finishedicon">
                <span>Aguardando feedback dos autores</span>
                <a href="">Editar tópico</a>
            </div>
            <div class="contentComment">
                <div class="commentTitle">
                    <h2>Assunto da pergunta aparece aqui</h2>
                    <p>Carlos Henrique Santos</p>
                </div>
                <span class="textComment">
                    Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                </span>

                <div class="likedDiv">
                    <img src="/public/images/dots.svg" alt="" class="dots">
                    <button>
                        <img src="public/images/liked.png" alt="liked">
                    </button>
                    <span>1 like</span>
                    <span>1 resposta </span>
                </div>
            </div>
        </div>
    `
    )
}

//abre os comentarios

const containerAnswer = document.querySelector('.containerAnswer')

function OpenComment() {
    containerAnswer.classList.toggle('divOff')
}