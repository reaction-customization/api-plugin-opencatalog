import mockContext from "@reactioncommerce/api-utils/tests/mockContext.js";
import availableShops from "./availableShops.js";

beforeEach(() => {
  jest.resetAllMocks();
});

test('availableShops', async () => {
  mockContext.collections.Shops.find.mockReturnValueOnce("CURSOR");
  const result = await availableShops(mockContext, {});
  expect(mockContext.collections.Shops.find).toHaveBeenCalledWith({
    "active": true,
  });
  expect(result).toBe("CURSOR");
})