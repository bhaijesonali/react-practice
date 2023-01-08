import React, { useContext } from 'react'
import { UserContext } from './BasicForm'
function Level3() {
    const user = useContext(UserContext)
    return (
        <>
            <h1>Level3</h1>
            <ul>
                {user.map((c, i) => {
                    return (
                        <>
                            <li key={i}>USER{c.user}</li>
                            <li key={i}>PASS{c.pass}</li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}

export default Level3