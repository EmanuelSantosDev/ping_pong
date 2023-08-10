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
  contextoCanvas.fillStyle = '#ffffff'
  contextoCanvas.fillRect(
    window.innerWidth / 2 - espessuraDaLinha / 2,
    0,
    espessuraDaLinha,
    window.innerHeight
  )

  // desenhando a raquete esquerda
  contextoCanvas.fillRect(10, 100, espessuraDaLinha, 200)

  // desenhando a raquete direita
  contextoCanvas.fillRect(
    window.innerWidth - espessuraDaLinha - 10,
    300,
    espessuraDaLinha,
    200
  )
}

configuracoes()
desenhar()
