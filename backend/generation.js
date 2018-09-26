const {REFRESH_RATE, SECONDS} = require('./config');

const refreshRate = REFRESH_RATE * SECONDS;


class Generation {

    constructor() {

        this.expiration = thios.calculateExpiration();
    }

    calculateExpiration() {
        this.expiration = null;

        const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));

        const msUntilExpartion = Math.random() < 0.5 ?
            refreshRate - expirationPeriod :
            refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpartion);
    }


}