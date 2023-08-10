const elementoCanvas = document.querySelector('canvas')
const contextoCanvas = elementoCanvas.getContext('2d')
const espessuraDaLinha = 15

const campo = {
   w: window.innerWidth,
   h: window.innerHeight,
   desenhar: function () {
      contextoCanvas.fillStyle = '#286047'
      contextoCanvas.fillRect(0, 0, window.innerWidth, window.innerHeight)
   }
}

function configuracoes() {
   elementoCanvas.width = contextoCanvas.width = campo.w
   elementoCanvas.height = contextoCanvas.height = campo.h
}

function desenhar() {
   campo.desenhar()

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

   // desenhando a bola
   contextoCanvas.beginPath()
   contextoCanvas.arc(300, 300, 20, 0, 2 * Math.PI, false)
   contextoCanvas.fill()

   // desenhando o placar
   contextoCanvas.font = 'bold 72px Arial'
   contextoCanvas.textAlign = 'center'
   contextoCanvas.textBaseline = 'top'
   contextoCanvas.fillStyle = '#01341D'
   contextoCanvas.fillText('0', window.innerWidth / 4, 50)
   contextoCanvas.fillText('3', window.innerWidth / 4 + window.innerWidth / 2, 50)
}

configuracoes()
desenhar()
