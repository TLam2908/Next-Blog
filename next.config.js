const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'buitunglam2003',
                mongodb_password: 'Tunglam2908',
                mongodb_clustername: 'cluster0',
                mongodb_database: 'contacts'
            }
        }
    }
    // varibles use in development phase

    return {
        env: {
            mongodb_username: 'buitunglam2003',
            mongodb_password: 'Tunglam2908',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'contacts'
        }
    }
}