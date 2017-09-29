'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: STRING(50),
    email: STRING(50),
    pno:INTEGER,
    department:STRING(20),
    pass: STRING(100),
    remember_token: (100),
    created_at: DATE,
    updated_at: DATE,
  });

  Cabrdlyc.associate = function() {
    app.model.Cabrdlyc.hasMany(app.model.Post, { as: 'posts', foreignKey: 'Cabrdlyc_text' });

  };
  Cabrdlyc.findByDate= function* (text) {
    return yield this.findOne({
      where: {text: text},
      attributes: ['text', 'text_good', 'text_bad', 'text_isweek']
    });
  };
  Cabrdlyc.findByIsWeek = function* (text_isweek) {
    return yield this.findOne({
      where: {text_isweek: text_isweek},
      attributes: ['text', 'text_good', 'text_bad', 'text_isweek']
    });
  };

  return Cabrdlyc;
};