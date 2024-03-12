import {getSession, changePremium} from "../actions"

const PremiumForm= async () => {
    const session = await getSession();

    return (
        <form action={changePremium}>
            <button>{session.isPro ? "Cancel": "Buy"} Premium</button>
        </form>
    )
}

export default PremiumForm
