export const CONFIG = {
  home: { name: 'home', route: '/home' },
  products: {
      name: 'products', route: '/products',
      children: {
          list: { name: 'list', route: '/products/list' },
          details: { name: 'details', route: '/products/details' }
      }
  },
  admin: { name: 'admin', route: '/admin' },
  shoppingCart: { name: 'shoppingCart', route: '/shoppingCart' }
};
