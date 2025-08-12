import Image from "next/image";

// 레이아웃 설정용 임시 하드코딩
export default function Post() {
  return (
    <div className="w-full flex flex-row flex-wrap justify-between mt-5">
      <div className="w-[calc(33%-10px)] h-[150px] relative">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/11820/11820363.png"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[calc(33%-10px)] h-[150px] relative">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/11820/11820363.png"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[calc(33%-10px)] h-[150px] relative">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/11820/11820363.png"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[calc(33%-10px)] h-[150px] relative">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/11820/11820363.png"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
