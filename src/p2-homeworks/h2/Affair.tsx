import React from 'react'
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix
    const priorityClass = props.affair.priority === 'high' ? s.high : props.affair.priority === 'middle' ? s.middle : props.affair.priority === 'low' ? s.low:''

    return (
        <div className={s.rows}>
            <p>{props.affair.name}</p>  <p className={priorityClass}>{props.affair.priority}</p>
            {/*<button onClick={deleteCallback}>X</button>*/}
            <SuperButton className={s.button} red onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair