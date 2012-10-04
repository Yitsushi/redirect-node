module.exports.domain = {
  'localhost'            : 'http://google.com',
  'plus.folyam.info'     : 'https://plus.google.com/u/0/105853491239853198987',
  'hatvanimagnosklub.hu' : 'http://www.hatvanimagnosklub.hu'
};

module.exports.url = {
  'localhost': {
    '/plus.html'  : 'https://plus.google.com/u/0/105853491239853198987',
  },
  'plus.folyam.info': {
    '/yitsushi'   : 'https://plus.google.com/u/0/104695723888883478740'
  },
  '*': {
    '/+'          : 'http://plus.google.com',
    '/github'     : 'https://github.com/Yitsushi/redirect-node'
  }
};