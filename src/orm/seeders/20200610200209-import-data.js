'use strict';
const data = require("../../../output.json");
const users = data.users.map(it => (
  {
    id: it.id,
    first_name: it.firstName,
    last_name: it.lastName,
    email: it.email,
    password: "test",
    role: 100,
  })
)
const content_types = data.content_types.map(it => (
  {
    id: it.id,
    title: it.title,
    description: it.description
  })
)
const content = data.content.map(it => (
  {
    id: it.id,
    history_id: it.historyId,
    content_type_id: it.contentTypeId,
    category_id: it.categoryId,
    created_by: it.createdBy,
    updated_by: it.updatedBy,
    is_permanent: it.isPermanent,
    title: it.title,
    subtitle: it.subtitle,
    slug: it.slug,
    directory: it.directory.toLowerCase(),
    content: it.content,
    filepath: `${it.directory.toLowerCase()}/${it.slug}`.replace("//", "/").replace("/index", "/")
  })
)

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .bulkInsert("users", users)
      .then(() => queryInterface.bulkInsert("content_types", content_types))
      .then(() => queryInterface.bulkInsert("content", content))
      .catch(error => {
        console.log("===============================");
        console.log(error);
        console.log("===============================");
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
