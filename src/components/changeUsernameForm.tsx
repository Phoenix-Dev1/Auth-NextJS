import {getSession, changeUsername} from "../actions"

const ChangeUsernameForm= async () => {
    const session = await getSession();

    return (
        <form action={changeUsername}>
        <input type="text" name="username" required placeholder={session.username} />
        <button>Update</button>
      </form>
    )
}

export default ChangeUsernameForm
