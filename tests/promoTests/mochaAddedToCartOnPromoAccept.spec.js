import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.ESPRESSO, 1),
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText('$4.00');
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.CAPPUCCINO),
    1,
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText('$7.00');
});
