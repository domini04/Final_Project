import React, { useState } from "react";

function MoreBtn({ isCheck, setCheck }) {
  // const [UpdateToggle, setUpdateToggle] = useState(false);
  // const onUpdateToggle = () => {
  //   setUpdateToggle(!UpdateToggle);
  // };

  return (
    <div>
      <button
        onClick={() => {
          setCheck((e) => !e);
          console.log("btn");
        }}
        // onClick={() => console.log("btn")}
      >
        {/* {isCheck ? "더보기" : "더보기"} */}
        상세설명 보기
      </button>
    </div>
  );
}

export default MoreBtn;
