import React, { useEffect, useState } from "react";
import { postWishlist } from "../api/wishlist/postWishlist";
// import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { putWishlist } from "../api/wishlist/putWishlist";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function WishBtn({ maskId, userInfo }) {
  // console.log("userInfo", userInfo);

  const [memberId, setMemberId] = useState("");

  // 찜버튼 클릭확인
  const [isClick, setIsClick] = useState(false);
  // console.log("isClick", isClick);

  // 찜여부 확인 ( 이미 찜했던 거 deletion : Y 인 경우)
  const [isWish, setIsWish] = useState("N");

  const LoginWarn = () => {
    alert("로그인이 필요한 서비스 입니다. 로그인 후, 이용부탁드립니다.");
  };

  useEffect(() => {
    if (userInfo) {
      setMemberId(userInfo.id);
      // console.log("확인");
    }
  }, []);

  useEffect(() => {
    if (isClick) {
      if (memberId != "") {
        // 찜버튼 클릭 확인
        // console.log("isClick - true", isClick);
        // // 찜버튼 클릭된 마스크 id
        // console.log("isClick - true", maskId);
        // // 사용자 id
        // console.log("memberId", memberId);

        // 찜post
        postWishlist(memberId, maskId, isWish, setIsWish);
      }
    }
  }, [isClick]);

  useEffect(() => {
    if (memberId != "") {
      if (isWish == null) {
        putWishlist(memberId, maskId);
      }
    }
  }, [isWish]);

  return (
    <div
      style={{
        width: "15%",
        height: "25px",
        margin: "0px auto",
      }}
    >
      {userInfo ? (
        <Checkbox
          style={{
            width: "auto",
            height: "95%",
          }}
          {...label}
          // 체크 전 하트모양
          icon={<FavoriteBorder />}
          // 체크되었을때 모양
          checkedIcon={<Favorite />}
          // 색조정
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
          // 클릭 event
          onClick={() => {
            setIsClick(!isClick);
          }}
        ></Checkbox>
      ) : (
        <Checkbox
          style={{
            width: "100%",
            height: "95%",
            margin: "0px auto",
          }}
          {...label}
          // 체크 전 하트모양
          icon={<FavoriteBorder />}
          // 체크되었을때 모양
          checkedIcon={<FavoriteBorder />}
          // 색조정
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
          // 클릭 event
          onClick={() => {
            LoginWarn();
          }}
        ></Checkbox>
      )}
    </div>
  );
}
export default WishBtn;
