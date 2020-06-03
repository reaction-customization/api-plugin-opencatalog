import pkg from "../package.json";

import schemas from './schemas'
import queries from './queries'
import resolvers from './resolvers'
import openCatalogStartup from './startup.js'

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */
export default async function register(app) {
  await app.registerPlugin({
    label: "Plugin Open Catalog",
    name: "plugin-opencatalog",
    version: pkg.version,
    functionsByType: {
      startup: [openCatalogStartup]
    },
    graphQL: {
      resolvers,
      schemas
    },
    queries
  });
}
