const objs = [
    {
        foo: {
            bar: {
                vaz: 1,
            },
        },
    },
    {},
    {
        foo: {},
    },
]

console.log(
    objs.map((obj) => {
        const {foo} = obj
        if (foo) {
            const { bar } = foo
            if (bar) {
                return bar.baz
            }
        }
        return undefined
    })
)

