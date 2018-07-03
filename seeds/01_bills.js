
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {
          id: 10000001,
          userId: 10000001,
          name: 'Mortgage',
          amount: 1400,
          dueDate: '2018-08-01'
        },
        {
          id: 10000002,
          userId: 10000002,
          name: 'Rent',
          amount: 1800,
          dueDate: '2018-08-01'
        },
        {
          id: 10000003,
          userId: 10000003,
          name: 'Rent',
          amount: 2200,
          dueDate: '2018-08-05'
        },
        {
          id: 10000004,
          userId: 10000001,
          name: 'Car',
          amount: 250,
          dueDate: '2018-08-01'
        },
        {
          id: 10000005,
          userId: 10000002,
          name: 'Car Insurance',
          amount: 140,
          dueDate: '2018-08-01'
        },
        {
          id: 10000006,
          userId: 10000003,
          name: 'Scooter',
          amount: 40,
          dueDate: '2018-08-12'
        },
        {
          id: 10000007,
          userId: 10000001,
          name: 'Cable',
          amount: 150,
          dueDate: '2018-08-10'
        },
        {
          id: 10000008,
          userId: 10000002,
          name: 'Gym',
          amount: 85,
          dueDate: '2018-08-11'
        }
      ]);
    })
};
