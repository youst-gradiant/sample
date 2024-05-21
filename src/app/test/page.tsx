"use client";

export default function Test() {
  const fetchUsers = async () => {
    const response = await fetch("https://sample-six-nu.vercel.app/api/posts");
    const data = await response.json();
    /*  const response = await fetch("http://218.237.253.138:3100/api/posts"); */

    console.log("data", data);
  };

  fetchUsers();
  return <div>ddd</div>;
}
