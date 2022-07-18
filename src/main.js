const { stringify } = require("querystring")

const people = [
    {
        age: 20,
        city: '서울',
        pet: ['cat', 'dog'],
    },
    {
        age: 20,
        city: '서울',
        pet: 'dog',
    },
    {
        age: 40,
        city: '부산',
    },
    {
        age: 31,
        city: '대구',
        pet: ['cat', 'dog'],
    },
    {
        age: 36,
        city: '서울',
    },
    {
        age: 27,
        city: '부산',
        pet: 'cat',
    },
]

/* 
다음 문제들을 풀어봅시다.
A. 30 대 미만이 한 명이라도 사는 모든 도시
B. 각 도시별로 개와 고양이를 키우는 사람의 수
*/

function solveA() {
    const cities = []

    for (const person of people) {
        if (person.age < 30) {
            if (!cities.find(city => person.city === city)) {
                cities.push(person.city)
            }
        }
    }
    return cities
}

function solveAModern() {
    const allCities = people.filter(({age}) => age < 30).map(({city}) => city)
    const set = new Set(allCities)
    return Array.from(set)
}

console.log('solveA', solveA())
console.log('solveAModern', solveAModern())

// B. 각 도시별로 개와 고양이를 키우는 사람의 수

/* 
{
    "서울": {
        "dog": 2,
        "cat": 1,
    },
    "대구": {
        "dog": 1,
        "cat": 1,
    },
    "부산": {
        "cat": 1,
    },
}
*/

/** @typedof {Object.<string, Object<string, number>>} PetsOfCities */

function solveB() {
    /** @type {PetsOfCities} */
    const result = {}

    for (const person of people) {
        const {city, pet: petOrPets} = person

        if (petOrPets) {
            const petsOfCity = result[city] || {}

            if (typeof petOrPets === 'string') {
                const pet = petOrPets

                const origNumPetsOfCity = petsOfCity[pet] || 0
                petsOfCity[pet] = origNumPetsOfCity + 1
            } else {
                for (const pet of petOrPets) {
                    const origNumPetsOfCity = petsOfCity[pet] || 0
                    petsOfCity[pet] = origNumPetsOfCity + 1

                }
                
            }
            result[city] = petsOfCity
        }
    }

    return result

}

console.log('solveB', solveB())