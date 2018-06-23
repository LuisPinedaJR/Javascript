// Unix Epoch - January 1st 1970 00:00:00
// -60000
//
const now = new Date('January 12 2002 04:25:30', 'February 15 2016 06:07:01')
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())


const dateOne = new Date('January 12 2002 04:25:30')
const dateTwo = new Date('February 15 2016 06:07:01')

const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp){
    console.log(dateOne.toString())
}else if(dateTwoTimestamp < dateOneTimestamp){
    console.log(dateTwo.toString())
}


// console.log(`year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// document.querySelector('#for-fun').addEventListener('change', function(e){
//     console.log(e.target.checked)
// })


///////////////////////// momentJS ///////////
// const now = moment()
// now.subtract(1,'year').subtract(20, 'days')
// console.log(now.format('MMMM do ddd, YYYY '))
// console.log(now.fromNow())

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())


// const bday = moment()
// bday.year(1988).month(02).date(16)
// console.log(bday.format('MMMM D ddd, YYYY '))