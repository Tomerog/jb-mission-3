import { useEffect, useState } from 'react'
import './Add.css'
import groupsServices from '../../../services/groups'
import Group from '../../../models/group/group'
import { useForm } from 'react-hook-form'
import Draft from '../../../models/meeting/draft'
import meetingsServices from '../../../services/meetings'
import { useNavigate } from 'react-router-dom'

export default function Add(): JSX.Element {
    const [groups, setGroups] = useState<Group[]>([])
    
    useEffect(() => {
        (async () => {
            try {
                const groups = await groupsServices.getAll()
                setGroups(groups)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Draft>()

 
    const validateEndTime = (value: Date) => {
        const startTime = new Date(getValues('meetingStart'))
        const endTime = new Date(value)

        if (endTime <= startTime) {
            return 'End time must be after start time'
        }
        return true
    }

    
    async function submit(draft: Draft) {
        try {
            await meetingsServices.add(draft)
            alert('Meeting added')
            navigate('/meetings/list')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="Add">
            <form onSubmit={handleSubmit(submit)}>
                <select
                    {...register('groupId', {
                        required: { value: true, message: 'Please select a group' }
                    })}
                >
                    <option value="" disabled selected>
                        Please select group...
                    </option>
                    {groups.map(({ id, name }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </select>
                {errors.groupId && <span className="error">{errors.groupId.message}</span>}

                <input
                    type="datetime-local"
                    placeholder="Meeting start"
                    {...register('meetingStart', {
                        required: { value: true, message: 'Meeting start is required' }
                    })}
                />
                {errors.meetingStart && <span className="error">{errors.meetingStart.message}</span>}

                <input
                    type="datetime-local"
                    placeholder="Meeting end"
                    {...register('meetingEnd', {
                        required: { value: true, message: 'Meeting end is required' },
                        validate: validateEndTime, 
                    })}
                />
                {errors.meetingEnd && <span className="error">{errors.meetingEnd.message}</span>}

                <input
                    placeholder="Description"
                    {...register('description', {
                        required: { value: true, message: 'Description is required' },
                        minLength: { value: 10, message: 'Description must be at least 10 characters long' }
                    })}
                />
                {errors.description && <span className="error">{errors.description.message}</span>}

                <input
                    placeholder="Room"
                    {...register('roomName', {
                        required: { value: true, message: 'Room name is required' }
                    })}
                />
                {errors.roomName && <span className="error">{errors.roomName.message}</span>}

                <button type="submit">Add Meeting</button>
            </form>
        </div>
    ) 
}
