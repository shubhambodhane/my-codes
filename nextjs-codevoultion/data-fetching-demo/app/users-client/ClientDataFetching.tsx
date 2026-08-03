"use client";

import React, { useState, useEffect } from "react";

export default function ClientDataFetching() {
  type user = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };

  const url = "https://jsonplaceholder.typicode.com/users";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const api = await fetch(url, { method: "GET" });
        const result = await api.json();
        setUsers(result);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          setLoading(false);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h4>{error}</h4>;
  }
  return (
    <>
      <h4 className="text-xl font-bold">Data Fetching: Client Side Component</h4>
      {error && <div className="text-red-500"> error</div>}
      <ul className="outline rounded border-orange-700 m-1 px-2">
        {users && users.length > 0 ? (
          users.map((itm) => {
            return (
              <li
                className="outline border-red-200 rounded-sm my-2 p-1"
                key={itm.id}
              >
                <div>Name:{itm.name}</div>
                <div>Username: {itm.username}</div>
                <div>Email: {itm.email}</div>
                <div>Phone: {itm.phone}</div>
              </li>
            );
          })
        ) : (
          <p className="font-xl m-1 p-1">No Data Available.</p>
        )}
      </ul>
    </>
  );
}
