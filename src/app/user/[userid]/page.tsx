import Image from "next/image";
import Link from "next/link";

// import Post from "./post";
import Review from "./review";

export default function Profile() {
  return (
    <>
      <div className="w-full min-h-(calc(100vh-124.62px)) bg-(--background) flex justify-center">
        <div className="w-(--content-frame) h-full flex flex-col justify-center items-center bg-(--background)">
          <div className="w-full flex flex-row mt-10">
            <div className="w-[25vh] h-[25vh] relative rounded-lg object-cover mr-10">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/11820/11820363.png"
                fill={true}
                alt="profile"
              />
            </div>
            <div className="w-(--content-frame-20vh) h-[25vh] mt-5 ml-5">
              <Link href="/user/update">
                <button className="w-[120px] h-[45px] rounded-lg bg-(--point-orange) cursor-pointer">
                  프로필 수정
                </button>
              </Link>
              <div className="text-3xl font-bold mt-5">닉네임</div>
              <div className="text-2xl font-normal mt-5">⭐️별점: 4.5</div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-10 border-b-2 border-(--point-orange)">
            <button className="w-[120px] h-[45px] border-b-3 border-(--point-orange)">
              게시글
            </button>
            <button className="w-[120px] h-[45px] border-b-3 border-(--point-orange)">
              리뷰
            </button>
          </div>
          {/* <Post /> */}
          <Review />
        </div>
      </div>
    </>
  );
}
