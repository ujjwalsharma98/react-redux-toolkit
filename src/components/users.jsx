
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../Redux/userSlice'

const Users = () => {

    const users = useSelector((state) => state.user.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <h1>users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </>
        
    )
}

export default Users