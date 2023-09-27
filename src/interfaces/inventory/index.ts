import { ProductInterface } from 'interfaces/product';
import { PharmacyInterface } from 'interfaces/pharmacy';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  pharmacy_id: string;
  quantity?: number;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  pharmacy?: PharmacyInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  pharmacy_id?: string;
}
