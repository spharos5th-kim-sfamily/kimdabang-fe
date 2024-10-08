import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MyPageCoupon({
  couponAmount,
}: {
  couponAmount: number;
}) {
  return (
    <article className="mypage-article">
      <p className="font-extrabold">쿠폰</p>
      <p>{couponAmount}장</p>
      <Button variant="starbucks" size="s">
        <Link href="/mypage/coupon/allCoupon">쿠폰함</Link>
      </Button>
    </article>
  );
}
