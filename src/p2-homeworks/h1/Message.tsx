import React from 'react'
import styled from 'styled-components';


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <MessageStyle>
            <Avatar textavatar={props.avatar}/>
            <Text
                textname={props.name}
                textmessege={props.message}
                texttime={props.time}
            />
        </MessageStyle>


    )
}

export default Message
// прокинуть пропс через дочернюю функцию!!!!
type AvatarPropsType = {
    textavatar: string
}

function Avatar(props: AvatarPropsType) {
    return (
        <AvatarStyle src={props.textavatar}></AvatarStyle>
    )
}

type TextTypeProps = {
    textname: string
    textmessege: string
    texttime: string
}

function Text(props: TextTypeProps) {
    return (
        <TextStyle>
            <NameStyle>
                {props.textname}
            </NameStyle>
            <LineStyle>
                {props.textmessege}
            </LineStyle>
            <TimeStyle>
                {props.texttime}
            </TimeStyle>
        </TextStyle>
    )

}

const MessageStyle=styled.div`
  background-color: aqua;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin: 10px;
`
const TextStyle=styled.div`
  background-color: green;
  height: 65px;
  margin: 10px;
  border-radius: 10px;
`
const NameStyle=styled.div`
    font-weight: bold;
    margin-left: 10px;
    color: red;
`

const LineStyle=styled.div`
    margin-left: 10px;
`

const TimeStyle=styled.div`
    margin-right: 10px;
    margin-left: 250px;
`

const AvatarStyle=styled.img`
  width: 50px;
  border-radius: 30px;
  margin-top: 20px;
`
//text компоненту вынести в отдельный файл и разбить по гриду!