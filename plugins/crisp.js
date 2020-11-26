export default ({ $config: { crispID } }) => {
  window.$crisp = []
  // console.log($config)
  window.CRISP_WEBSITE_ID = crispID
  ;(function () {
    const d = document
    const s = d.createElement('script')

    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    d.getElementsByTagName('head')[0].appendChild(s)
  })()
}
