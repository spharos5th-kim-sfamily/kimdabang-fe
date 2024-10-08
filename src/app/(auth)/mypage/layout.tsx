"use client";
import MypageHeader from "@/components/layouts/MypageHeader";
import { usePathname } from "next/navigation"; // next/navigation에서 usePathname을 가져옵니다.
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // useRouter 대신 usePathname 사용

  const getTitle = () => {
    if (pathname.startsWith("/mypage/coupon")) {
      return "쿠폰함";
    } else if (pathname.startsWith("/mypage/purchase-history")) {
      return "주문내역 조회";
    } else if (pathname.startsWith("/mypage/review")) return "리뷰 작성하기";
    else return "마이페이지";
  };

  return (
    <>
      <MypageHeader title={getTitle()} />
      {children}
    </>
  );
}

export default Layout;
