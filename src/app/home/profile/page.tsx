"use client";
import { useEffect } from "react";
import useTheme from "@/app/context/useTheme";
import Image from "next/image";

const Main: React.FC = () => {
  const { data, setData } = useTheme();

  function getData() {
    const response = fetch("/api/user/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>{data?.email}</h2>
      <h3>{data?.id}</h3>
      <img src={`http://localhost:3000/uploads/${data?.pic}`} alt="profile" />
    </div>
  );
};

export default Main;
