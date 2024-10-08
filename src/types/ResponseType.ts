export interface commonResType<T> {
  status: string;
  message: string;
  data: T;
}

export interface shippingAddressType {
  id: number;
  address: string;
  isDefault: boolean;
  addressName: string;
  phone: string;
}

export interface userDataType {
  loginId: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  solar: true;
  birth: Date;
  nickname: string;
  grade: string;
  profileImg: string;
}

export interface couponAmountType {
  couponAmount: number;
}

export interface userStarAmountType {
  starAmount: number;
  greenStarAmount: number;
}

export interface RunningSeasonType {
  id: number;
  name: string;
  description?: string;
  thumbsImgUrl: string;
}

export type IsFavoriteType = {
  favorite: boolean;
};

export interface StarHistoryType {
  expirationDate: Date;
  createdAt: Date;
  isEcho: boolean;
  starAmount: number;
  description: string;
}

export interface ProductType {
  productCode: string;
  productName: string;
  description: string;
  releaseDate: Date;
  content: string;
  categoryId: number;
  productPrice: number;
}

export interface ProductMediaType {
  id: number;
  productId: number;
  mediaName: string;
  mediaType: string;
  mediaURL: string;
}
export interface ProductOptionType {
  productCode: string;
  PriorOptionId: string;
}
export interface CouponType {
  id: number;
  name: string;
  couponType: string;
  expiredDate: string;
  value: number;
  validity: number;
}

export interface myCouponType {
  couponId: number;
  name: string;
  couponType: string;
  isUsed: boolean;
  usedAt: string;
  expiredDate: string;
}

export interface noiticationType {
  id: number;
  title: string;
  activeData: string;
  expireDate: string;
  mediaUrl: string;
}

export interface optionType {
  optionsId: number;
  optionValue: string;
  depth: number;
  children: optionType[];
}

export interface ProductPageType {
  productCode: string;
  productName: string;
  productPrice: number;
  description: string;
  productReleaseDate: string;
  content: string;
  categoryId: number;
}
export interface ProductContent {
  productCode: string;
  content: string;
}

export interface MyOrderItemType {
  productData: ProductType;
  //Option Data는 아직 Response값을 몰라서 일단 String으로 설정해놓았습니다.
  optionData: OptionData;
}

// OptionData는 getOptionDetail에서 사용중이며
// Option_detail 테이블 조회시 사용
export interface OptionData {
  min_stock: number;
  quantity: number;
  state: string;
  variable_price: number;
}
export interface CheckBoxType {
  checkBox: boolean;
}

export interface PurchaseItemType {
  productCode: string;
  optionsId: number;
  options: string;
  quantity: number;
  price: number;
}

export interface Purchase {
  purchaseCode: number;
  purchaseDate: string;
  status: string;
  itemList: PurchaseItemType[];
}
export interface PurchaseDetailType {
  purchaseCode: number;
  paymentCode: number;
  purchaseDate: string;
  address: string;
  name: string;
  phone: string;
  couponId: number;
  method: string;
  totalPrice: number;
  discountPrice: number;
  shippingPrice: number;
  amount: number;
  status: string;
  itemList: PurchaseItemType[];
}

export interface getCategoryDataType {
  id: number;
  name: string;
  depth: number;
  children: getCategoryDataType[];
}

export interface ReviewResType {
  data: Review[];
  nextPage: boolean;
  nowPage: number;
  totalPage: number;
}

export interface Review {
  reviewCode: number;
  productCode: string;
  options: string;
  creationDate: string;
  rating: number;
  text: string;
  nickName: string;
}

export interface SearchResultType {
  productCode: string;
  productName: string;
  categoryId: number;
}
