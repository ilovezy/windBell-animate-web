window.CONFIG = {
  serviceUrl: {
    'localhost': '//10.17.13.232:10010/', // 本地开发构建环境 npm run buildlocal
    'test': '//10.60.10.165:9001/', // 测试构建环境 npm run build:test
    'production': '//118.25.23.224:9001/', // 上线构建环境  npm run build:prod

    // 热更新开发构建环境 npm run dev
    // 'development': '//10.60.10.165:9001/', // dev环境
    // 'development': '//10.60.10.20:9001/',   // 肥虫虫
    'development': '//192.168.0.164:9001/' // 王延吉
    // 'development': '//118.25.23.224:9001/',   // 王延吉
    // 'development': '//124.160.42.126:6599/',   // 王延吉  124.160.42.126:6510
  },

  serviceParam: {
    clientName: 'web',
    clientSecret: '1qaz2wsx',
    Version: '1.0'
  }
}
