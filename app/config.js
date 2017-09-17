const config = {

}

if (process.env.DEV_MODE !== 'production') {
  config.PORT = '17628'
} else {
  config.PORT = '17628'
}

module.exports = config
