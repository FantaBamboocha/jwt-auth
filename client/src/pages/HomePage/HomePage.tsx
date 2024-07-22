import axiosIstance from "@api/axiosIstance";
import HeaderContainer from "@components/Header/containers/HeaderContainer";
import { useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const handleRequest = async () => {
    try {
      const response = await axiosIstance.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeaderContainer />
      <button onClick={handleRequest}>Get users</button>
      {users.map((user: any) => (
        <div key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};

export default HomePage;
