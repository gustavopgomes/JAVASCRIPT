var hr = new Date()
var hora = hr.getHours()
console.log(`Agora são exatamente ${hr} horas.`)
if (hr < 12){
    console.log('Bom dia!')
} else if (hr <= 18) { 
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}