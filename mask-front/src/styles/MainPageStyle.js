import React from "react";
import styled from "styled-components";

/* Top3 부분 section */

// TOP3 부분
export const Top3Section = styled.section`
  width: auto;
  height: 340px;
  padding: 5px;
  margin: 5px;
  // border: 2px solid blue;
`;

// MASINSA'S BEST 부분 section
export const Top3ArticleSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: auto;
  height: 30px;
  padding: 2px;
  overflow: hidden;
  // border: 2px solid green;
`;

// 공백
export const Top3BlankSection = styled.div`
  width: 30%;
  // border: 2px solid blue;
`;

// MASINSA'S BEST
export const Top3Article = styled.div`
  width: 35%;
  font-weight: 800;
  font-size: 20px;
  // border: 2px solid blue;
`;

// 마신사 기준이동 LinkBox
export const IntroLinkBox = styled.a`
  width: 30%;
  float: right;
  font-size: 13px;
  text-align: right;
  padding: 12px 2px 0 0;
  // border: 2px solid blue;
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #ff7d04;
  }
`;

// TOP3마스크 띄워주는 Section\Introduce\Masinsa
export const Top3MaskSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: auto;
  height: 300px;
  // border: 2px solid red;
  // padding: 2px;
`;

// 1등 마스크 (오른쪽)
export const FirstMaskLinkBox = styled.a`
  width: 30%;
  float: left;
  border-radius: 15px;
  margin: 10px;
  border: 1px solid #9a9a9a;
`;

// 2등 마스크(중간)
export const SecondMaskLinkBox = styled.a`
  width: 30%;
  margin: 10px;
  border-radius: 15px;
  border: 1px solid #9a9a9a;
`;

// 3등 마스크(왼쪽)
export const ThirdMaskLinkBox = styled.a`
  width: 30%;
  float: right;
  margin: 10px;
  border-radius: 15px;
  border: 1px solid #9a9a9a;
`;

/* 전체 */
/* 키워드 검색된 마스크리스트 띄워주는 부분 */

// Search 부분
export const SearchSection = styled.section`
  width: auto;
  height: 900px;
  padding: 5px;
  margin: 5px;
  // border: 2px solid blue;
`;

/* SearchBox 부분 */

// ALL MASINSA MASK 부분
export const SearchArticle = styled.section`
  width: auto;
  height: 30px;
  font-weight: 800;
  font-size: 20px;
  padding: 2px;
  margin: 2px;
  // border: 2px solid red;
`;

// SearchBox ( 검색창 Section )
export const SearchBoxSection = styled.section`
  display: flex;
  flex: wrap;
  width: auto;
  height: 50px;
  padding: 2px;
  margin: 2px;
  // border: 2px solid red;
`;

// SearchBox 왼쪽 공백
export const SearchLeftBlank = styled.div`
  width: 30%;
  // border: 1px solid blue;
`;

// 검색창이 들어가는 div ( fieldset(input + btn) )
export const SearchCenter = styled.div`
  padding: 5px;
  width: 40%;
  // border: 1px solid blue;
`;

// 정렬기준 변경 section
export const SortSection = styled.section`
  width: 30%;
  float: right;
  margin: 2px;
  padding-top: 20px;
  // border: 2px solid red;
`;

// Search 기능들을 담은 곳 ( input + btn )
export const SearchFieldset = styled.fieldset`
  display: flex;
  flex: nowrap;
  width: auto;
  height: 30px;
  align-items: center;
  // align-content: center;
  border: 1px solid #9a9a9a;
  border-radius: 2px;
  padding: 1px;
`;

//  검색어를 입력하는 검색창
export const SearchInput = styled.input`
  width: 85%;
  // height: 30px;
  outline: 0;
  border: none;
`;

// 검색 버튼
export const SearchBtn = styled.button`
  position: left;
  width: 15%;
  height: 31px;
  // background: #9a9a9a;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

// 검색된 마스크 보여주는 부분 Section
export const SearchMaskListSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 2px;
  margin: 2px;
  // border: 2px solid red;
`;
