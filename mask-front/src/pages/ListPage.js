import React, { useState, useEffect } from "react";
// import Pagination from "../components/Pagination";
import FilterBox from "../components/productList/FilterBox";
import FilterMaskList from "../components/productList/FilterMaskList";
import styled from "styled-components";
import { Main } from "../styles/OtherStyles";
import SortChange2 from "../components/SortChange2";
import { Pagination } from "@mui/material";
import { FilterSection, FilterMaskListSection } from "../styles/ListPageStyle";
import { useParams } from "react-router-dom";
import { getFilterMaskSort } from "../api/mask/getFilterMaskSort";
import Header from "../components/Header";

function ListPage() {
  const [maskKF, setMaskKF] = useState("");
  const [maskSize, setMaskSize] = useState("");
  const [maskShape, setMaskShape] = useState("");
  const [sortCol, setSortCol] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const page = 1; // currentPage
  const size = 5; // Pagination Size

  // 마스크리스트
  const [maskList, setMaskList] = useState([]);

  // kf 파라미터 설정
  const { blockingindex } = useParams();
  // KF94 면 94 slice / KF-AD면 AD
  // console.log("ListPage : ", blockingindex.slice(-2, blockingindex.length));
  useEffect(() => {
    setMaskKF(blockingindex.slice(-2, blockingindex.length));
    // console.log(maskKF);
  });

  // 값이 바뀔때마다 axios 요청
  useEffect(() => {
    getFilterMaskSort({
      sortCol,
      sortOrder,
      page,
      size,
      maskKF,
      maskSize,
      maskShape,
      setMaskList,
    });
  }, [
    sortCol,
    sortOrder,
    page,
    size,
    maskKF,
    maskSize,
    maskShape,
    FilterMaskList,
  ]);

  // console.log("maskList : ", maskList);

  return (
    <div>
      <Main>
        {/* 필터가 들어있는 공간 */}
        <FilterSection>
          <FilterBox
            blockingindex={blockingindex}
            setMaskSize={setMaskSize}
            setMaskShape={setMaskShape}
            maskShape={maskShape}
          />
        </FilterSection>
        {/* 정렬변경 */}
        <SortChange2
          sortCol={sortCol}
          sortOrder={sortOrder}
          setSortCol={setSortCol}
          setSortOrder={setSortOrder}
        />
        {/* 마스크 리스트공간 */}
        {maskList.length >= 1 ? (
          <>
            <FilterMaskListSection>
              {/* 필터걸린 마스크 리스트 */}
              <FilterMaskList maskList={maskList} />
              {/* 페이지네이션 */}
              <Pagination></Pagination>
            </FilterMaskListSection>
          </>
        ) : (
          <>
            <FilterMaskListSection>
              <div style={{ marginTop: "10px" }}>
                <h4>해당 상품에 대한 MASINSA 내 검색 결과가 없습니다.</h4>
                <h6>다른 필터를 선택하여 다시 검색해 주세요</h6>
                <h6 style={{ color: "#0ea654" }}>
                  * 더 많은 마스크가 MASINSA에 모일 수 있도록 노력하겠습니다. *
                </h6>
                <h6>도움을 드리지 못해 죄송합니다.</h6>
              </div>
              {/* <Pagination></Pagination> */}
            </FilterMaskListSection>
          </>
        )}
        {/* 필터걸린 마스크 리스트
          <FilterMaskList maskList={maskList} />
          페이지네이션
          <Pagination></Pagination> */}
      </Main>
    </div>
  );
}

export default ListPage;
