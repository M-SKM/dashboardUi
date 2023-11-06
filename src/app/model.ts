
export interface topCard {
  header: string;
  sub_header: string;
  value: number;
}
export interface newUser {
  id: string;
  picture: string;
  name: string,
  isActive: boolean;
  country: string;
  progress: number;
}

export interface RecentOrders {
  id: string;
  name: string;
  product: string;
  delivery_date: string;
  status: string;
  tracking_no: string;
  shipping: boolean;
}

export interface ApiData {
  top_cards: topCard[];
  new_users: newUser[];
  recent_orders: RecentOrders[];
}
