const elementoCanvas = document.querySelector('canvas')
const contextoCanvas = elementoCanvas.getContext('2d')
const espessuraDaLinha = 15

function configuracoes() {
  elementoCanvas.width = contextoCanvas.width = window.innerWidth
  elementoCanvas.height = contextoCanvas.height = window.innerHeight
}

function desenhar() {
  // desenhando o campo
  contextoCanvas.fillStyle = '#286047'
  contextoCanvas.fillRect(0, 0, window.innerWidth, window.innerHeight)

  // desenhando a linha central
  const x = (window.innerWidth / 2) - (espessuraDaLinha / 2)
  const y = 0
  const largura = espessuraDaLinha
  const altura = window.innerHeight
  contextoCanvas.fillStyle = '#ffffff'
  contextoCanvas.fillRect(x, y, largura, altura)
}

configuracoes()
desenhar()
