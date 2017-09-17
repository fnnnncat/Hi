import 'whatwg-fetch'

const $$ = {}
const PREFIX_URL = ''

/**
 * AJAX
 * @prop url 请求地址的尾部
 * @prop args 参数
 * @prop args.method GET OR POST
 * @prop args.data  GET DATA
 * @prop args.body REQUEST POST DATA
 * @prop args.headers REQUEST HEADER
 */
$$.ajax = async (url, args) => {
  const opts = {}

  args = Object.assign({}, {
    method: 'GET',
    data: {},
    body: {},
  }, args)

  url = _handleUrl(url, args.data)
  opts.method = args.method || 'GET'

  opts.headers = opts.headers || {}
  opts.headers.Accept = 'application/json'
  opts.headers['Content-Type'] = 'application/json'
  opts.headers = Object.assign({}, opts.headers, args.headers)

  if (opts.method.toUpperCase() === 'POST') {
    if (typeof args.body === 'object') {
      opts.body = JSON.stringify(args.body)
    } else {
      opts.body = args.body
    }
  }

  try {
    const response = await fetch(url, opts).then(res => res.json())
    const code = response.code

    // 特殊的返回值列表以及处理方式
    // 200: 正常
    if (code === 200) {
      return response.data || true
    } else {
      // TODO SHOW ERROR
      return null
    }
  } catch (err) {
    return null
  }
}

/**
 * Handle URL
 *
 * Connect data
 * Connect prefix
 */
const _handleUrl = (url, data) => {
  if (url.indexOf('http') !== 0) {
    url =  PREFIX_URL + url
  }

  if (data && Object.keys(data).length) {
    url += '?'
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        url = `${url}${key}=${data[key]}&`
      }
    }
    url = url.replace(/&$/, '')
  }

  return url
}

export default $$
