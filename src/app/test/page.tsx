"use client";

export default function Test() {
  const fetchUsers = async () => {
    const response = await fetch("https://sample-six-nu.vercel.app/todos");
    //const response = await fetch("http://localhost:3000/api/posts");
    const data = await response;

    console.log("data", data);
  };

  fetchUsers();
  return <div>ddd</div>;
}
