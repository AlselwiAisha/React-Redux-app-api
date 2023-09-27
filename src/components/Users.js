import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchUsers } from "../store/users/usersSlice";

const Users=()=>{
const { isLoading, error, users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div style={{color:"red"}}>There is an error...!</div>;
  }

  return (
    <>
      <div>
        {users.map(user => (
          <div
            key={user.id}
            style={{ display: "flex", flexDirection: "column", margin: "5px", color:"Highlight" }}>
            <div>
              <h3>{user.name.title} {user.name.first} {user.name.last} </h3>
              <h4 style={{color:"blueviolet"}}>Email:{user.email}</h4>
           </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;