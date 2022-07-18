const people = [
    {
        age: 20,
        city: '서울',
        pet: ['cat', 'dog'],
    },
    {
        age: 20,
        city: '서울',
        pet: ['cat', 'dog'],
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
    const allCities = people.filter(person => person.age < 30).map(person => person.city)
    const set = new Set(allCities)
    return Array.from(set)
}

console.log('solveA', solveA())
console.log('solveAModern', solveAModern())