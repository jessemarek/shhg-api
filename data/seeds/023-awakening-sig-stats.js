
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sig_stats').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sig_stats').insert([
        {
          stat: 'max-health',
          value: 1100,
          enchant: 987,
          awakening_id: 1
        },
        {
          stat: 'magic-attack',
          value: 200,
          enchant: 182,
          awakening_id: 1
        },
        {
          stat: 'physical-armor',
          value: 20,
          enchant: 21,
          awakening_id: 1
        },
        {
          stat: 'magic-armor',
          value: 15,
          enchant: 14,
          awakening_id: 1
        },
        {
          stat: 'none',
          value: 0,
          enchant: 0,
          awakening_id: 2
        },
        {
          stat: 'none',
          value: 0,
          enchant: 0,
          awakening_id: 3
        },
        {
          stat: 'none',
          value: 0,
          enchant: 0,
          awakening_id: 4
        },
        {
          stat: 'none',
          value: 0,
          enchant: 0,
          awakening_id: 5
        },
        {
          stat: 'none',
          value: 0,
          enchant: 0,
          awakening_id: 6
        },
      ]);
    });
};
