export const CONFIG = {
  dashboard: { name: 'dashboard', route: '/dashboard' ,
  children: {
    home: { name: 'Home', route: '/dashboard/home' },
  }},
  home: { name: 'home', route: '/home' },
  about: { name: 'About', route: '/about', },
  contact: { name: 'contact', route: '/contact', },
  auth: {
    name: 'auth', route: '/auth',
    children: {
      login: { name: 'login', route: '/auth/login' },
      register: { name: 'register', route: '/auth/register' },
    }
  },
  products: {
    name: 'products', route: '/products',
    children: {
      list: { name: 'list', route: '/products/list' },
      details: { name: 'details', route: '/products/details' }
    }
  },
};
