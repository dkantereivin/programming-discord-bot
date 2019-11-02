if (process.env.NODE_ENV !== 'production') require('dotenv');

module.exports = {
	APPNAME: process.env.APPNAME || 'CoPD',
    PORT: process.env.PORT || 3000,
    DEVMODE: (process.env.NODE_ENV !== 'production'),
};
