import { Sequelize, DataTypes } from 'sequelize';

import config from '../config';
import user from './User';
import usim from './Usim';
import album from './Album';
import card from './Card';
import expression from './Expression';

const db: any = {};

const sequelize: any = new Sequelize({
    host: config.db.host,
    port: 3306,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    dialect: 'mysql',
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = user(sequelize, DataTypes);
db.usim = usim(sequelize, DataTypes);
db.album = album(sequelize, DataTypes);
db.card = card(sequelize, DataTypes);
db.expression = expression(sequelize, DataTypes);

export default db;