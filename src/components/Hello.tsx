import { useEffect, useState } from "react";
import { useGetHelloQuery } from "../store/beApi";
import { Spinner } from "reactstrap";

export const Hello = () => {
  const [msg, setMsg] = useState<string>("");
  const { data, error, isLoading, isSuccess } = useGetHelloQuery();

  useEffect(() => {
    if (data) {
      setMsg(data);
    }
  }, [data, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h1>Ups... BE is DEAD! OR something else is wrong :D</h1>;
  }

  return (
    <div>
      <h1>Hello</h1>
      <p>Msg from BE: {msg}</p>
    </div>
  );
};
