
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 10000001,
          userName: 'Keith'
        },{
          id: 10000002,
          userName: 'Kaitlin'
        },{
          id: 10000003,
          userName: 'Brandon'
        }])
    })
};
