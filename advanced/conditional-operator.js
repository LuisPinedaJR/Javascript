// const myAge = 30
// //  use '?' = yes/true/if and ':' = no/false/else
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'

// //// old way of doing things if->else
// // if (myAge >= 18){
// //     message = 'You can vote!'
// // }else{
// //     message  = 'You cannot vote.'
// // }

// console.log(message)


// const myAge = 30
// const showPage = () => {
//     return 'Showing the page!'
// }
// const showErrorPage = () => {
//     return 'Error, not old enough.'
// }

// const message = myAge >= 21 ? showPage() : showErrorPage()
// console.log(message)

const team = ['Tyler', 'Porter', 'Luis', 'Amber', 'Keri']
let message = team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team'
console.log(message)
