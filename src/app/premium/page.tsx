import { redirect } from "next/navigation";
import { getSession } from "../../actions";
import Link from "next/link";


const PremiumPage = async () => {

  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/");
  }

  if (!session.isPro){
    return(
      <div className="notPremium">
        <h1>Only Premium users can see the content</h1>
        <Link href="/profile">Go to the profile page to upgrade to premium</Link>
      </div>
    )
  }

    return (
      <div className="premium">
        <h1>Welcome to the PremiumPage</h1>
        <ul>
          <li>Apple</li>
          <li>Orange</li>
          <li>Banana</li>
        </ul>
      </div>
    )
  };
  
  export default PremiumPage;