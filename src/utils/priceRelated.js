export const round = num => {
  num = parseFloat(num);
  return Math.round(num / 10) * 10;
};

// 컴마를 포함한 금액 표시를 위한 함수 정리
export const calcDiscountedPrice = discountedPrice => {
  // 빈칸일 시 에러방지를 위해 0원으로 치환
  return isNaN(parseInt(discountedPrice))
    ? (0).toLocaleString('ko-KR')
    : parseInt(discountedPrice).toLocaleString('ko-KR');
};

export const calcDiscountAmount = discountAmount => {
  // 빈칸일 시 에러방지를 위해 0원으로 치환
  return isNaN(parseInt(discountAmount))
    ? (0).toLocaleString('ko-KR')
    : parseInt(discountAmount).toLocaleString('ko-KR');
};
