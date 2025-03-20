import { useEffect, useState } from 'react'
import Meeting from '../../../models/meeting/meeting'
import groupsServices from '../../../services/groups'
import './Card.css'
import Group from '../../../models/group/group'



interface CardProps {
    meeting:Meeting
}

export default function Card(props:CardProps): JSX.Element {



    const {
      groupId,
      meetingStart,
      meetingEnd,
      description,
      roomName,

    } = props.meeting

    const [ groups, setGroups] = useState<Group[]>([])

    useEffect(()=>{
        (async () => {
            try {
                const groups = await groupsServices.getAll()
                setGroups(groups)
            } catch (error) {
                alert(error)
            }
        })()
    },[])

    const groupName = groups.find((group) => group.id === groupId)?.name || 'Unknown Group';


    const start = new Date(meetingStart)
    const end = new Date(meetingEnd)
    const durationInMillis = end.getTime() - start.getTime()
    const durationInMinutes = Math.floor(durationInMillis / 60000) 
    const hours = Math.floor(durationInMinutes / 60)  
    const minutes = durationInMinutes % 60  

    const durationString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}` : `${minutes} minute${minutes !== 1 ? 's' : ''}`



    return (
        <div className='Card'>
            <h4>{groupName}</h4>
            <p>From: {(new Date(meetingStart).toLocaleTimeString())}</p>
            <p>To: {(new Date(meetingEnd).toLocaleTimeString())}</p>
            <p>Description: {description}</p>
            <p>Room: {roomName}</p>
            <p>Duration: {durationString}</p>
        </div>
    )
}