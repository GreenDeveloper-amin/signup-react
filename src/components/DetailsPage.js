import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const Params = useParams();

  return (
    <div className="h-[100vh] flex justify-center items-center">
      details Product #{Params.id} of Products
    </div>
  );
};

export default DetailsPage;
