import React from 'react'

function Hero({heroname}) {
    if(heroname ==='joker'){
        throw Error('Not a hero!')
    }
  return (
    <div>{heroname}</div>
  )
}

export default Hero


// A class compponent that implements either one or both of the lifecycle method getDerivedStateFromError or componentDidCatch becomes a error boundary

// the static method getDerivedStateFromError method is used  to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information