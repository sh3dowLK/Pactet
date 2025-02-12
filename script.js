const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


const player = new Player()


//let y = 100
//const height = 100
//let bottom = y + 100 


function animate() {
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    player.update()
    player.draw()
    
    
    
    window.requestAnimationFrame(animate)
}

animate()

//c.fillStyle = 'blue'
//c.fillRect(100, y, 100, height)

//if (bottom < canvas.height) {
//  y++
// bottom = y + 100
//}