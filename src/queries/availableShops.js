import ReactionError from "@reactioncommerce/reaction-error";

/**
 * @name availableShops
 * @method
 * @memberof Shop/NoMeteorQueries
 * @summary query the Catalog by shop ID and/or tag ID
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @returns {Promise<MongoCursor>} - A MongoDB cursor for the proper query
 */
export default async function availableShops(context, params) {
  const { collections } = context;
  const { Shops } = collections;

  const query = {
      active: true
  }

  return Shops.find(query);
}