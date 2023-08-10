const elementoCanvas = document.querySelector('canvas')
const contextoCanvas = elementoCanvas.getContext('2d')

function configuracoes() {
  elementoCanvas.width = contextoCanvas.width = window.innerWidth
  elementoCanvas.height = contextoCanvas.height = window.innerHeight
}

function desenhar() {
  contextoCanvas.fillStyle = '#286047'
  contextoCanvas.fillRect(0, 0, window.innerWidth, window.innerHeight)
}

configuracoes()
desenhar()
