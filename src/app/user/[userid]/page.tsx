import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="w-full min-h-(calc(100vh-124.62px)) background-[#f9f8f7] flex justify-center">
        <div className="w-[85%] h-full flex justify-center items-center background-[#f9f8f7bb] rounded-[15px]">
          <div className="w-full h-[20vh] flex mt-[10%]">
            <div className="w-[19vh] h-[19vh] relative rounded-[50%] object-cover mr-[8%] ml-[5%]">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/11820/11820363.png"
                fill={true}
                alt="profile"
              />
            </div>
            <div className="w-[100% - 140px] h-[30vh] ml-[5%]">
              <Link href="/user/update">
                <button className="w-[120px] h-[45px] rounded-[11px] background-[#ff9a42] background-[#f9f8f7] cursor-pointer">
                  프로필 수정
                </button>
              </Link>
              <div className="text-3xl font-bold text-[#222] mb-5">닉네임</div>
              <div className="text-2xl font-normal text-[#222]">
                ⭐️별점: 4.5
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
