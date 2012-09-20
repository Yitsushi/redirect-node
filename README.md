# redirect-node

Simple Node.js application that redirects a given domain _(or a path)_ to a specified URL.

## How does it work?

* Listen on a given port _(default: PORT environment variable or 5000)_
* Catch all requests
* Search for the requested domain under `url` section
* * if found then search for the requested path under the domain
* Search for a wildcard _(*)_ under `url` section
* * if found then search for the requested path under the wildcard
* Search for the requested domain under `domain` section

If the app found a matching entry anywhere then all subsequent sections will be skipped
and executes the redirection with code 302.

## Configuration

You can find a `redirects.js`... so... This file is your configuration file.

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

**What does it mean?**

    *Request*: http://localhost/plus.html
    *redirect to*: https://plus.google.com/u/0/105853491239853198987

**because** `localhost` domain found under `url` and `/plus.html` found under url['localhost'].

    *Request*: http://localhost/+
    *redirect to*: http://plus.google.com

**because** `localhost` domain found under `url` but `/+` does not found under url['localhost'],
so wildcard found under `url` and `/+` found under url['*'].

    *Request*: http://localhost/
    *redirect to*: http://google.com

**because** `localhost` domain found under `url` but `/` does not found under url['localhost'],
so wildcard found under `url` but `/` does not found under url['*']
and `localhost` found under `domain`.

## How can I run it on Heroku?

    git clone https://github.com/Yitsushi/redirect-node.git
    cd redirect-node
    heroku create --stack cedar
    heroku domains:add your.domain.tld
    git push -u heroku master

Yes, You need to add each domain what you want to use. If you make some changes on `redirects.js`
then you need to commit and push it to Heroku with `git push`.