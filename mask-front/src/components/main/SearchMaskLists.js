import React, { useEffect, useState } from "react";
import WishBtn from "../WishBtn";
import styled from "styled-components";
import {
  MaskListDiv,
  MaskSummaryBox,
  MaskSummaryImg,
  MaskSummaryContent,
  MaskSummaryOption,
  MaskSummaryPriceLinkBox,
  MaskSummaryTitleLinkBox,
  MaskSummaryTopDiv,
  MaskScore,
} from "../../styles/MaskListStyles";
import { putClick } from "../../api/mask/putClick";

function SearchMaskLists({ maskList }) {
  // console.log("SearchMaskLists : ", maskList);

  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();
  // console.log(isClick);

  /* 상품 클릭 수 증가  */
  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  return (
    <>
      {maskList.length > 0 ? (
        <>
          <MaskListDiv>
            {maskList.map((mask) => {
              return (
                <div key={mask.id}>
                  <MaskSummaryBox>
                    {/* 마스크썸네일 */}
                    {mask.thumbnail ? (
                      <a
                        href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                        onClick={() => {
                          setIsClick(true);
                          setClickMaskId(mask.id);
                        }}
                      >
                        {/* 등록된 썸네일이 있을 경우 : 썸네일 보여줌*/}
                        <MaskSummaryImg src={mask.thumbnail}></MaskSummaryImg>
                      </a>
                    ) : (
                      <a
                        href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                        onClick={() => {
                          setIsClick(true);
                          setClickMaskId(mask.id);
                        }}
                      >
                        {/* 등록된 썸네일이 없을 경우 : No Image 보여줌*/}
                        <MaskSummaryImg
                          src={`${process.env.PUBLIC_URL}/NoImage.jpg`}
                        ></MaskSummaryImg>
                      </a>
                    )}
                    {/* 마스크내용 */}
                    <MaskSummaryContent>
                      <MaskSummaryTopDiv>
                        {/* 이름 */}
                        <MaskSummaryTitleLinkBox
                          href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                          onClick={() => {
                            setIsClick(true);
                            setClickMaskId(mask.id);
                          }}
                        >
                          {mask.name}
                        </MaskSummaryTitleLinkBox>
                        {/* 찜버튼 */}
                        <WishBtn />
                      </MaskSummaryTopDiv>
                      {/* 가격 (링크) */}
                      <MaskSummaryPriceLinkBox
                        href={`http://localhost:3000/aboutMask/${mask.id}/Masinsa`}
                        onClick={() => {
                          setIsClick(true);
                          setClickMaskId(mask.id);
                        }}
                      >
                        {mask.price} 원
                      </MaskSummaryPriceLinkBox>
                      {/* 옵션 */}
                      <MaskSummaryOption>
                        <li>
                          <i>Size : {mask.size} </i>
                        </li>
                      </MaskSummaryOption>
                      <MaskScore>평점 : {mask.avgScore}⭐</MaskScore>
                    </MaskSummaryContent>
                  </MaskSummaryBox>
                </div>
              );
            })}
          </MaskListDiv>
          <div
            style={{
              marginBottom: "10px",
              fontSize: "10px",
              fontWeight: "800",
              // border: "1px solid red",
              paddingBottom: "10px",
              paddingTop: "2px",
            }}
          >
            <p>
              <span style={{ color: "#05735F" }}> MASINSA </span> 내 검색 결과가
              더 이상 존재하지 않습니다.
            </p>
            <h6 style={{ color: "#0ea654" }}>
              * 더 많은 마스크가 MASINSA에 모일 수 있도록 노력하겠습니다. *
            </h6>
            <p>방문해주셔서 감사합니다.</p>
          </div>
        </>
      ) : (
        <div style={{ marginTop: "10px" }}>
          <h4>해당 상품에 대한 MASINSA 내 검색 결과가 없습니다.</h4>
          <h6>검색어를 확인 후 다시 이용 부탁드립니다.</h6>
          <h6>만약 검색어가 없다면 도움을 드리기 어렵습니다.</h6>
          <h6 style={{ color: "#0ea654" }}>
            * 더 많은 마스크가 MASINSA에 모일 수 있도록 노력하겠습니다. *
          </h6>
          <h6>도움을 드리지 못해 죄송합니다.</h6>
        </div>
      )}
    </>
  );
}

export default SearchMaskLists;
