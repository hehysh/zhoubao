module.exports = {
  plugins: [
    [
      "@mr-hope/comment",
      {
        type: 'waline',
        comment: 'true',
        serverURL: 'waline.hehysh.eu.org'
      },
    ],
  ],
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap', media: 'print' }]
  ],
  title: '周五晚报',
  description: '独属于我们的报纸'
}