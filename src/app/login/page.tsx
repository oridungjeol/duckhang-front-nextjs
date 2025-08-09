"use client";

import kakaoLoginImg from "public/kakao_login_large_wide.png";
import Image from "next/image";

const handleKakaoLogin = () => {
  window.location.href = "http://localhost/oauth2/authorization/kakao";
};

export default function Login() {
  return (
    <>
      <div className="h-full flex flex-col justify-center align-center gap-y-8">
        <div>
          <div className="text-center text-5xl">덕행</div>
          <div className="text-center">DuckHang</div>
        </div>
        <div className="flex justify-center">
          <button className="w-sm" onClick={handleKakaoLogin}>
            <Image src={kakaoLoginImg} alt="카카오 로그인" />
          </button>
        </div>
      </div>
      {/* <h1 className="swiper-title title-margin">duckhang</h1>
      <div className="login-wrap">
        <div className="social">
          <button className="kakao-login-button" onClick={handleKakaoLogin}>
            <Image src={kakaoLoginImg} alt="카카오 로그인" />
          </button>
        </div>
      </div> */}
    </>
  );
}
