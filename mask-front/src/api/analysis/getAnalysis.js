import React from "react";
import axios from "axios";

//http://localhost:8080/analysis_info?maskId=1
export const getAnalysis = async ({ maskId, setAnalysisInfo }) => {
  // fetch를 이용하여 분석정보 풀어주기
  // 프로미스 객체 ! json으로 변환 후, result 부분에서 꺼내옥;
  const response = fetch(`http://localhost:8080/analysisinfo?maskId=${maskId}`)
    .then((response) => response.json())
    .then((analysis) => analysis.result)
    .then((result) => setAnalysisInfo(result));
};
