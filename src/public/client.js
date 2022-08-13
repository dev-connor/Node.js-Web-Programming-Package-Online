// @ts-check

// IIFE
;(() => {
    const socket = new WebSocket(`ws://${window.location.host}/ws`)
    const formEl = document.getElementById('form')
    const chatsEl = document.getElementById('chats')
    /** @type {HTMLInputElement | null} */
    // @ts-ignore
    const inputEl = document.getElementById('input')

    if (!formEl || !inputEl || !chatsEl) {
        throw new Error('Init failed!')
    }

    /**
     * @typedef Chat
     * @property {string} nickname
     * @property {string} message
     */

    /**
     * @type {Chat[]}
     */
    const chats = []

    formEl.addEventListener('submit', event => {
        event.preventDefault()
        socket.send(
            JSON.stringify({
                nickname: '멋진 물범',
                message: inputEl.value,
            })
        )
        inputEl.value = ''
    })

    socket.addEventListener('message', event => {
        chats.push(JSON.parse(event.data))

        chatsEl.innerHTML = ''
        
        chats.forEach(({message, nickname}) => {
            const div = document.createElement('div')
            div.innerHTML = `${nickname}: ${message}`
            chatsEl.appendChild(div)
        })
    })
})()