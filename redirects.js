module.exports.domain = {
  'localhost'            : 'http://google.com',
  'plus.folyam.info'     : 'https://plus.google.com/u/0/105853491239853198987',
  'dev.folyam.info'      : 'https://plus.google.com/u/0/105613682641367710983',
  'hatvanimagnosklub.hu' : 'http://www.hatvanimagnosklub.hu',
  'plus.dirtywindows.hu' : 'https://plus.google.com/113237392793237478295',
  'plus.blakedashed.org' : 'https://plus.google.com/108438016412516478289'
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
