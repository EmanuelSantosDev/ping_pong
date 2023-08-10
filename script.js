const elementoCanvas = document.querySelector('canvas')
const contextoCanvas = elementoCanvas.getContext('2d')

function configuracoes() {
  elementoCanvas.width = contextoCanvas.width = window.innerWidth
  elementoCanvas.height = contextoCanvas.height = window.innerHeight
}

function desenho() {

}

configuracoes()