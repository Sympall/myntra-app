export interface IProductData {
  totalCount: number;
  totalPLAShown: number;
  totalPLACount: number;
  products: Product[];
  sortOptions: string[];
  nextBestResults: any[];
  pageTitle?: any;
  storefrontId: string;
  guidedNavigation: GuidedNavigation;
  upsInfo: UpsInfo;
  changeLog: any[];
  appliedParams: AppliedParams;
  templateMessage?: any;
  querySubstitution?: any;
}

export interface AppliedParams {
  filters: any[];
  geoFilters: any[];
  rangeFilters: any[];
  sort: string;
}

export interface UpsInfo {
  personalizationSortAlgoUsed: string;
  numPersonalizedProductShown: number;
  isPersonalized: boolean;
}

export interface GuidedNavigation {
  name: string;
  guidedNavEntries: any[];
}

export interface Product {
  landingPageUrl: string;
  productId: number;
  product: string;
  productName: string;
  rating: number;
  ratingCount: number;
  discount: number;
  brand: string;
  searchImage: string;
  effectiveDiscountPercentageAfterTax: number;
  effectiveDiscountAmountAfterTax: number;
  inventoryInfo: InventoryInfo[];
  sizes: string;
  images: Image[];
  gender: string;
  primaryColour: string;
  discountLabel: string;
  discountDisplayLabel: string;
  additionalInfo: string;
  category: string;
  mrp: number;
  price: number;
  colorVariantAvailable: boolean;
  discountType: string;
  catalogDate: string;
  season: string;
  year: string;
  systemAttributes: SystemAttribute[];
}

export interface SystemAttribute {
  attribute: string;
  value: string;
}

export interface Image {
  view: string;
  src: string;
}

export interface InventoryInfo {
  skuId: number;
  label: string;
  inventory: number;
  available: boolean;
}

export interface CountObj {
  name: string;
  count: number;
}
