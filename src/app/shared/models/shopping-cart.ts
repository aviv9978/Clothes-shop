import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    itemsMap = itemsMap || {};

    for (const productId in itemsMap) {
      const item = itemsMap[productId];
      this.items.push(new ShoppingCartItem({ ...item, key: productId }));
    }
  }

  getQuantity(product: Product) {
    if (!this.itemsMap) return 0;
    const item = this.itemsMap[product.key!];
    return item ? item.quantity : 0;
  }

  get totalItemsCount() {
    let count = 0;
    for (let productId in this.itemsMap)
      count += this.itemsMap[productId].quantity || 0;

    return count;
  }

  get totalPrice() {
    let sum = 0;
    for (const productId in this.items) sum += this.items[productId].totalPrice;

    return sum;
  }
}
