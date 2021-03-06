import { ADMIN_ROUTE, CART_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import ItemPage from './pages/ItemPage';

export const authRoutes = [//только авторизованный пользователь
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: ItemPage
  }, 
  {
    path: CART_ROUTE,
    Component: Cart
  }
]