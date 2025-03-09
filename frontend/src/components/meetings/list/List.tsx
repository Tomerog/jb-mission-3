import { ChangeEvent, useEffect, useState } from 'react'
import './List.css'
import Group from '../../../models/group/group'
import Meeting from '../../../models/meeting/meeting'
import groupsServices from '../../../services/groups'
import Card from '../cards/Card'
import meetingsServices from '../../../services/meetings'

export default function List(): JSX.Element {

    const [ groups, setGroups] = useState<Group[]>([])
    const [ meetings, setMeetings ] = useState<Meeting[]>([])

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

    async function groupChanged(event:ChangeEvent<HTMLSelectElement>){
        try {
            const selectedGroupId = event.currentTarget.value
            const meetings = await meetingsServices.getPerGroup(selectedGroupId)
            setMeetings(meetings)
        } catch (error) {
            alert(error)
        }
        
    }


    return (
        <div className='List'>
                <h1>Team Appointments:</h1>
            <select onChange={groupChanged}>
                <option value= '' disabled selected> please select Group...</option>
                {groups.map(({ id, name}) => <option key={id} value={id}>{name}</option> )}
            </select>

            <div className='CardContainer'>
            {meetings.map(meeting => <Card key={meeting.id} meeting={meeting} /> )}
            </div>
        </div>
    )
}