import AddResume from "./add-resume";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const EditResume = () => {
  const param = useParams();

  const { data, error, loading } = useFetch(
    `http://localhost:7000/resume/${param.id.toString()}`
  );

  useEffect(() => {
    if (data) {
      console.log("kjo eshte nga Edit Resume");
      console.log(data.data);
    }
  }, [data, error]);

  return <AddResume data={data} resumeId={param.id.toString()} edit={true} />;
};

export default EditResume;
