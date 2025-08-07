"use client";

import "./page.css";
import kakaoLoginImg from "../../../public/kakao_login_large_wide.png";
import Image from "next/image";

const handleKakaoLogin = () => {
  window.location.href = "http://localhost/oauth2/authorization/kakao";
};

export default function Test() {
  return (
    <>
      <h1 className="swiper-title title-margin">duckhang</h1>
      <div className="login-wrap">
        <div className="social">
          <button className="kakao-login-button" onClick={handleKakaoLogin}>
            <Image src={kakaoLoginImg} alt="카카오 로그인" />
          </button>
        </div>
      </div>
    </>
  );
}
