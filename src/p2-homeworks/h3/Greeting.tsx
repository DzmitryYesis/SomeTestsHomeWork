import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string //fix
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void //fix
    addUser: ()=>void //fix
    error: boolean //fix
    totalUsers: number // fix
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error? s.error:'' // fix

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            {error && <span className={s.errorMessage}>Are you stupid?</span>}
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
