function calcBMI({ weight, height }) {
    return weight / (height ** 2);
}

function codingChallenge(firstPerson, secondPerson) {
    firstPerson.BMI = calcBMI(firstPerson);
    secondPerson.BMI = calcBMI(secondPerson);

    const markHigherBMI = firstPerson.BMI > secondPerson.BMI
    console.log(firstPerson.BMI, secondPerson.BMI, markHigherBMI);
}
 
codingChallenge(
    {
        name: 'Mark',
        weight: 78,
        height: 1.69,
        BMI: 0
    },
    {
        name: 'John',
        weight: 92,
        height: 1.95,
        BMI: 0
    }
)

codingChallenge(
    {
        name: 'Mark',
        weight: 95,
        height: 1.88,
        BMI: 0
    },
    {
        name: 'John',
        weight: 85,
        height: 1.76,
        BMI: 0
    }
)


