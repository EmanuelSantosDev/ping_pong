const elementoCanvas = document.querySelector('canvas')
const contexto = elementoCanvas.getContext('2d')
const espessuraDaLinha = 15
const gapX = 10

// objeto CAMPO
const campo = {
   w: window.innerWidth,
   h: window.innerHeight,
   desenhar: function () {
      contexto.fillStyle = '#286047'
      contexto.fillRect(0, 0, this.w, this.h)
   }
}

// objeto LINHA
const linha = {
   w: 15,
   h: campo.h,
   desenhar: function () {
      contexto.fillStyle = '#ffffff'
      contexto.fillRect(campo.w / 2 - this.w / 2, 0, this.w, this.h
      )
   }
}

// objeto RAQUETE ESQUERDA
const raqueteEsquerda = {
   x: gapX,
   y: 100,
   w: linha.w,
   h: 200,
   desenhar: function () {
      contexto.fillStyle = '#ffffff'
      contexto.fillRect(this.x, this.y, this.w, this.h)
   }
}

// objeto RAQUETE DIREITA
const raqueteDireita = {
   x: campo.w - linha.w - gapX,
   y: 100,
   w: linha.w,
   h: 200,
   desenhar: function () {
      contexto.fillStyle = '#ffffff'
      contexto.fillRect(this.x, this.y, this.w, this.h)
   }
}

// objeto PLACAR
const placar = {
   humano: 1,
   computador: 2,
   desenhar: function () {
      contexto.fillStyle = '#ffffff'
      contexto.font = 'bold 72px Arial'
      contexto.textAlign = 'center'
      contexto.textBaseline = 'top'
      contexto.fillStyle = '#01341D'
      contexto.fillText(this.humano, campo.w / 4, 50)
      contexto.fillText(this.computador, campo.w / 4 + campo.w / 2, 50)
   }
}

// objeto BOLA
const bola = {
   x: 300,
   y: 200,
   r: 20,
   desenhar: function () {
      contexto.fillStyle = '#ffffff'
      contexto.beginPath()
      contexto.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
      contexto.fill()
   }
}

function configuracoes() {
   elementoCanvas.width = contexto.width = campo.w
   elementoCanvas.height = contexto.height = campo.h
}

function desenhar() {
   campo.desenhar()
   linha.desenhar()
   raqueteEsquerda.desenhar()
   raqueteDireita.desenhar()
   placar.desenhar()
   bola.desenhar()
}

configuracoes()
desenhar()