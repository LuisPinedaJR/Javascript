// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, c 70-79, D 60-69, F 0-59

// 1st Grade Calculator
let studentScore = function(score1 = 0, score2){
    let percentage = (score1 / score2) * 100 // test score
    if(percentage >= 90){
        let possibleScore = `A (${percentage}%)`
        return possibleScore
    }else if(percentage >= 80){
        let possibleScore = `B (${percentage}%)`
        return possibleScore
    }else if(percentage >= 70){
        let possibleScore = `C (${percentage}%)`
        return possibleScore
    }else if(percentage >= 60){
        let possibleScore = `D (${percentage}%)`
        return possibleScore
    }else if (percentage >= 0){
        let possibleScore = `F (${percentage}%)`
        return possibleScore
    }
}

let score = studentScore(83, 100)
console.log(`You got a ${score}!`)



/// 2nd Grade Calculator
// is better syntax and less code to write
let gradeCalc = function(score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    }else if(percent >= 80){
        letterGrade = 'B'
    }else if(percent >= 70){
        letterGrade = 'C'
    }else if(percent >= 60){
        letterGrade = 'D'
    }else{
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}
let result = gradeCalc(83, 100)
console.log(result)