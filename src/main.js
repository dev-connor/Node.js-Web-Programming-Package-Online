const ary = [1, 2, 3, 4, 5]

const [head, ...rest] = ary 

console.log(head, ...rest)

const personalData = {
    email: 'abc@def.com',
    password: '****'
}

const publicData = {
    nickname: 'foo'
}

const overrides = {
    email: 'fff@fff.com',
}

const user = {
    ...personalData,
    ...publicData,
    ...overrides,
}

console.log(user)



