import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../redux/actions/user.action'


export default function UserPage() {

  const [updateForm, setUpdateForm] = useState(false)

  const userData = useSelector((state) => state.userReducer)
  const error = useSelector((state) => state.errorReducer.userError)
  const dispatch = useDispatch

  const handleUpdate = () => {
    dispatch(updateUser(userData._id, name, password))
    setUpdateForm(false)
  }


  return (
    <div>
      <h3>Nom</h3>
      { updateForm === false && (
        <>
          <p onClick={() => setUpdateForm(!updateForm)}>{userData.name}</p>
          <button onClick={() =>setUpdateForm(!updateForm)}>Changer votre nom</button>
        
          
        </>
      )}

      {
        updateForm && (
          <>
            <input type="text" defaultValue={userData.name} />
            <button onClick={handleUpdate}> valider la modification</button>
          </>
        )
      }

      <h3>Mot de passe</h3>
      { updateForm === false && (
        <>
        <p onClick={() => setUpdateForm(!updateForm)}>{userData.password}</p>
          <button onClick={() =>setUpdateForm(!updateForm)}>Changer votre mot de passe</button>
        </>
      )}

      {
        updateForm && (
          <>
            <input type="text" defaultValue={userData.password} />
            <button onClick={handleUpdate}> valider la modification</button>
          </>
        )
      }

    </div>

  )
}
