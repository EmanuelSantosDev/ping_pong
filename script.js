const elementoCanvas = document.querySelector('canvas')
const ctx = elementoCanvas.getContext('2d')
const espessuraDaLinha = 15
const gapX = 10

// objeto MOUSE
const mouse = { x: 0, y: 0 }

// objeto CAMPO
const campo = {
   w: window.innerWidth,
   h: window.innerHeight,
   desenhar: function () {
      ctx.fillStyle = '#286047'
      ctx.fillRect(0, 0, this.w, this.h)
   }
}

// objeto LINHA
const linha = {
   w: 15,
   h: campo.h,
   desenhar: function () {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(campo.w / 2 - this.w / 2, 0, this.w, this.h)
   }
}

// objeto RAQUETE ESQUERDA
const raqueteEsquerda = {
   x: gapX,
   y: 0,
   w: linha.w,
   h: 200,
   _move: function () {
      this.y = mouse.y - this.h / 2
   },
   desenhar: function () {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(this.x, this.y, this.w, this.h)
      this._move()
   }
}

// objeto RAQUETE DIREITA
const raqueteDireita = {
   x: campo.w - linha.w - gapX,
   y: 100,
   w: linha.w,
   h: 200,
   _move: function () {
      this.y = bola.y
   },
   desenhar: function () {
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(this.x, this.y, this.w, this.h)
      this._move()
   }
}

// objeto PLACAR
const placar = {
   humano: 1,
   computador: 2,
   desenhar: function () {
      ctx.font = 'bold 72px Arial'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'
      ctx.fillStyle = '#01341D'
      ctx.fillText(this.humano, campo.w / 4, 50)
      ctx.fillText(this.computador, campo.w / 4 + campo.w / 2, 50)
   }
}

// objeto BOLA
const bola = {
   x: 0,
   y: 0,
   r: 20,
   speed: 5,
   directionX: 1,
   directionY: 1,
   _calcPosition: function () {
      const bateuNoTopo = this.y < 0 + this.r && this.directionY < 0
      const bateuNoFundo = this.y > campo.h - this.r && this.directionY > 0
      if (bateuNoTopo || bateuNoFundo) {
         this._reverseY()
      }
   },
   _reverseX: function () {
      this.directionX *= -1
   },
   _reverseY: function () {
      this.directionY *= -1
   },
   _move: function () {
      this.x += this.directionX * this.speed
      this.y += this.directionY * this.speed
   },
   desenhar: function () {
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
      ctx.fill()
      this._calcPosition()
      this._move()
   }
}

function configuracoes() {
   elementoCanvas.width = ctx.width = campo.w
   elementoCanvas.height = ctx.height = campo.h
}

function desenhar() {
   campo.desenhar()
   linha.desenhar()
   raqueteEsquerda.desenhar()
   raqueteDireita.desenhar()
   placar.desenhar()
   bola.desenhar()
}

window.animateFrame = (function () {
   return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
         return window.setTimeout(callback, 1000 / 60)
      }
   )
})()

function main() {
   animateFrame(main)
   desenhar()
}

configuracoes()
main()

elementoCanvas.addEventListener('mousemove', function (e) {
   mouse.x = e.pageX
   mouse.y = e.pageY
})