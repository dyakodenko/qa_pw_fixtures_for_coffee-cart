import { test } from '../fixtures/fixtures';
import { COFFEE_PRICES } from '../../src/constants';
import { unitPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(
    unitPriceFormatStr(COFFEE_PRICES.ESPRESSO, 1),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.ESPRESSO),
  );
});
