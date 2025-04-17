export interface CustomIconProps {
    focused?: boolean;
    name?: string;
    size?: number;
    color?: string;
  }
export interface NavbarProps {
    type?: string;
    onSearch?: (text: string) => void; 
  }
export interface CustomInputProps {
    hasIcon?: boolean;
    placeHolder: string;
    icon?: string;
    onChangeText?: (text: string) => void;
    onIconPress?: () => void; 
  }
  export interface WidgetHeaderProps {
    title: string;
    seeAll?:boolean
    
  }
  export interface CategorieCardProps {
    name?: string;
    id?:string;
    onPress:()=>void
    
  }
  export interface BestSellersCardProps {
    productName?: string;
    productImage?:string;
    productRate?:number;
    productPrice?:string;
    id:string
    
  }
  interface Price {
    amount: string;
    currency: string;
  }
  
  export interface DealCardProps {
    dealId:string;
    dealTitle:string;
    dealImg:string;
    dealPrice:Price;
    listPrice:Price;
    dealBadge:string;
    dealEnd:string;
 
    
  }
  export interface ProductListCardProps {
    productName?: string;
    productImage?:string;
    productRate?:number;
    productPrice?:string;
    id:string;
    sales_volume?:string;
    
  }
  export interface CustomCarouselProps {
    images: string[]; 
  }
  export interface ProductStarProps {
    rating: number; 
    size?: number;  
    color?: string;
  }
  export interface AboutProductProps {
    aboutProduct: string[];
  }
  export interface VariationItem {
    name: string;
    asin:string;
    photo: string;
    is_available:boolean;

  }
  export interface SizeChartItem {
    asin:string;
    value: string;
    is_available:boolean;

  }
  export interface ProductVariationsProps {
    productVariations: VariationItem[];
  }
  export interface ProductSizeChartProps {
    productSizes: SizeChartItem[];
  }
  export interface CustomButtonProps {
    title:string;
    color?:string;
    onPress: () => void; 
  }
  export interface CartItemProps {
    title: string;
    id:string;
    onPress:()=>void;
    price:string;
    quantitiy:number;
    photo:string;
    selectedSize:string | null | undefined;

    
  }
  export interface FavoriteProductCartProps {
    productName: string;
    id:string;
    onPress:()=>void;
    productPrice:string;
    productImage:string;
  }
 
 
  