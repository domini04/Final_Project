import React from "react";
import axios from "axios";

//http://localhost:8080/analysis_info?maskId=1
export const getAnalysis = async ({ maskId, setAnalysisInfo }) => {
  const response = await axios
    // .get(`http://localhost:8080/analysisinfo?maskId=${maskId}`)
    .get(`http://34.64.239.97:8080/analysisinfo?maskId=${maskId}`)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });

  // console.log("get", response.data.result);
  setAnalysisInfo(response.data.result);
};
