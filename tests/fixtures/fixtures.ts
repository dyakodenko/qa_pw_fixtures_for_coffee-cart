import { CartPage } from '../../src/pages/CartPage';
import { MenuPage } from '../../src/pages/MenuPage';
import { test as base } from '@playwright/test';

export const test = base.extend<{
  cartPage: CartPage;
  menuPage: MenuPage;
}>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);

    await use(menuPage);
  },
});
