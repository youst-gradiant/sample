"use client";

import { useEffect, useState } from "react";

export default function Test() {
  const [data, setData] = useState();
  const fetchUsers = async () => {
    const response = await fetch("https://sample-six-nu.vercel.app/api/posts");
    //const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();

    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </div>
  );
}
