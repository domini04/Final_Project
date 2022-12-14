// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React, { useState, useEffect } from "react";
import LoginBtn from "./LoginBtn";
import MyPageBtn from "./MyPageBtn";
import styled from "styled-components";
import {
  HeaderSection,
  TopDiv,
  LogoImg,
  TopBtnDiv,
  BockingIndexNav,
  BlockingBtn,
  TopBlank,
} from "../styles/HeaderStyle";

function Header() {
  return (
    <div>
      <HeaderSection>
        <TopDiv>
          {/* 마신사로고 : home버튼 */}
          <a href="/">
            {/* 로고이미지 : public 폴더에 넣은 후, 경로지정 */}
            <LogoImg
              src={`${process.env.PUBLIC_URL}/MasinsaLogo.png`}
              alt="masinsa"
            ></LogoImg>
          </a>
          <TopBlank></TopBlank>
          <TopBtnDiv>
            {/* 마이페이지버튼 */}
            <MyPageBtn />
            {/* 네이버로그인버튼 */}
            <LoginBtn />
          </TopBtnDiv>
        </TopDiv>
        <BockingIndexNav>
          <a href="/MaskList/Masinsa/KF94">
            {/* <BlockingLeft>KF94</BlockingLeft> */}
            <BlockingBtn>KF94</BlockingBtn>
            {/* <BlockingBtn>KF94</BlockingBtn> */}
          </a>
          <a href="/MaskList/Masinsa/KF80">
            {/* <BlockingCenter>KF80</BlockingCenter> */}
            <BlockingBtn>KF80</BlockingBtn>
          </a>
          <a href="/MaskList/Masinsa/KF-AD">
            {/* <BlockingRight>KF-AD</BlockingRight> */}
            <BlockingBtn>KF-AD</BlockingBtn>
          </a>
        </BockingIndexNav>
      </HeaderSection>
    </div>
  );
}

export default Header;
