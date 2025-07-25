import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers}  from "./userSlice";

export const UsersView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("users", user);
  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : ""}
      {!user.loading && user.users.length
        ? user.users.map((user) => (
            <>
              <ul key={user.id}>
                <li>{user.username}</li>
              </ul>
            </>
          ))
        : ""}
    </div>
  );
};
