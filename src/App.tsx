import React from 'react'
import './index.css'

const App = (): JSX.Element => {

    const sum = (a: number, b: number): number => a + b;

    return (
        <>
            <h4 className="greeting">Hello!!</h4>
            <h5>{sum(1, 2)}</h5>
        </>
    )
}

export default App