import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> //fix
    addUserCallback: (name:string)=>void //fix
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') //fix
    const [error, setError] = useState<boolean>(false) // fix

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { //fix
        setName(e.currentTarget.value)
        setError(false)//fix
    }
    const addUser = () => {
        if(name.trim()!==''){
            addUserCallback(name)
            setName('')
            setError(false)
            alert('Hello '+name+'!') //fix

        } else{
            setName('')
            setError(true)
        }
    }

    const totalUsers = users.length //fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
