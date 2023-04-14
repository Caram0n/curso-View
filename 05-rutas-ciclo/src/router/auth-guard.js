const isAuthenticatedGuard = async(to, from, next) => {

    return new Promise(() => {
        const random = Math.random() * 100
        if (random > 50) {
            console.log('Pase el guard')
            next()
        } else {
            console.log('Bloqueado por el guard')
            next({ name: 'pokemon-home' })
        }
    })
    
}


export default isAuthenticatedGuard