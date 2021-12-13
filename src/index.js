const messages = [
    'Cande',
    'Oscar',
    'Ana',
    'Nico',
    'Jesica',
    'Diego',
    'Carolina',
    'Paula',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }
