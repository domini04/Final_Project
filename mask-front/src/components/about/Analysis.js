import React from "react";
import { ScoreAnalysis, AnalysisSection } from "../../styles/AboutPageStyle";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import {
  BreatheBarChart,
  DeliveryBarChart,
  FitBarChart,
  SizeBarChart,
} from "./AnalysisCharts";

Chart.register(ChartDataLabels);

function Analysis({ analysisinfo }) {
  // console.log("Analysis : ", analysisinfo);

  // 사이즈
  const analysisSize = JSON.parse(analysisinfo.relativeSize);
  // 착용감
  const analysisFit = JSON.parse(analysisinfo.fit);
  // console.log(analysisFit);
  // 호흡
  const analysisBreathe = JSON.parse(analysisinfo.breathAbility);
  // 배송
  const analysisDelivery = JSON.parse(analysisinfo.delivery);
  // 점수
  const analysisScore = analysisinfo.score;

  return (
    <div>
      {/* 마스크통계 */}
      {/* 마스크 리뷰가 10,000개이상이면 통계출력 => 10,000개 이상이 아나리면 analysisInfo가 undefined  */}
      {analysisinfo ? (
        <div>
          <i>Analysis for this Mask</i>
          <hr></hr>
          <AnalysisSection>
            <ScoreAnalysis>
              <div
                style={{
                  width: "100%",
                  fontSize: "40px",
                  fontWeight: "800",
                  border: "2px solid #0ea654",
                  borderStyle: "dashed",
                  borderRadius: "10px",
                  padding: "40px 5px",
                }}
              >
                <p
                  style={{
                    fontSize: "25px",
                    margin: "5px",
                  }}
                >
                  MASINSA
                </p>
                <p
                  style={{
                    fontSize: "25px",
                    margin: "5px",
                  }}
                >
                  SCORE
                </p>
                <p style={{ margin: "10px" }}>
                  <span style={{ color: "#05735F" }}>{analysisScore}</span>
                  <span style={{ fontSize: "15px" }}> 점 </span>
                </p>
              </div>
            </ScoreAnalysis>
            <div
              style={{
                width: "80%",
                height: "90%",
                // border: "1px solid red",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <SizeBarChart analysisSize={analysisSize} />
              <FitBarChart analysisFit={analysisFit} />
              <DeliveryBarChart analysisDelivery={analysisDelivery} />
              <BreatheBarChart analysisBreathe={analysisBreathe} />
            </div>
          </AnalysisSection>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Analysis;
