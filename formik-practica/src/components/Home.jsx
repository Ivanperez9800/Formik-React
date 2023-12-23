import { useAuth } from "../contexts/UseAuth";


function Home() {
  const { user, logOut, loading } = useAuth();
  
  const handleLogout = async () => {
    // console.log(user)
    await logOut()
  }

  if (loading) {

    return <h1>Loading</h1>
  }


  return (
    <div>

      <div>Welcome {user.email}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home