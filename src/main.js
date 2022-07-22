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

console.log(objs.map((obj) => obj.foo?.bar.baz))