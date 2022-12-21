import React from "react";
import axios from "axios";

export const postMemberReview = async ({
  memberId,
  maskId,
  content,
  reviewType,
  // setMemberReview,
}) => {
  console.log("memberId: ", memberId);
  console.log("maskId: ", maskId);
  console.log("content: ", content);
  console.log("reviewType: ", reviewType);

  const response = await axios.post(
    // "http://localhost:8080/member_review",
    "http://34.64.239.97:8080/member_review",

    {
      memberId: memberId,
      // memberId: 2,
      maskId: maskId,
      content: content,
      reviewType: reviewType,
    }
  );

  console.log("리뷰제출");
  // setMemberReview(response.data.result);
};
