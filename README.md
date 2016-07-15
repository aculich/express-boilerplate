```
____ ___  ________________   ____   ______ ______ \_ |__   ____ |__|  |   _________________ |  | _____ _/  |_  ____  
_/ __ \\  \/  /\____ \_  __ \_/ __ \ /  ___//  ___/  | __ \ /  _ \|  |  | _/ __ \_  __ \____ \|  | \__  \\   __\/ __ \
\  ___/ >    < |  |_> >  | \/\  ___/ \___ \ \___ \   | \_\ (  <_> )  |  |_\  ___/|  | \/  |_> >  |__/ __ \|  | \  ___/
 \___  >__/\_ \|   __/|__|    \___  >____  >____  >  |___  /\____/|__|____/\___  >__|  |   __/|____(____  /__|  \___  >
     \/      \/|__|               \/     \/     \/       \/                    \/      |__|             \/          \/
```

[Express](https://www.npmjs.com/package/express) boilerplate.

Inspired by this great post by David Hunt: ["Making a new Node.js app feel more like Rails"](http://davidhunt.io/making-a-new-node-js-app-feel-more-like-rails-part-1)

## Quick Start

Create an express application from boilerplate

```sh
$ wget -O - https://raw.githubusercontent.com/talmago/express-boilerplate/master/bin/setup.sh | bash -s myapp
```

Install dependencies

```sh
$ npm install
```

Install command line dependencies (Optional)

```sh
$ npm install knex -g
```

Rock and Roll

```sh
$ npm start
```

Bundle with docker

```sh
$ docker-compose up
```

Run tests

```sh
$ npm test
```

Create a migration file

```sh
$ knex migrate:make <description> (See example in migrations/20160715163633_users.js)
```

Run migration

```sh
$ knex migrate:latest
$ knex migrate:currentVersion
```

## Usage

#### Project structure

```sh
$ tree -d
.
├── bin
├── config
├── controllers
│   └── v1
├── migrations
├── model
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── services
└── views
```

-  `config`: configuration files (See knexfile.js for structure example)
-  `bin`: command line scripts (e.g ./bin/www, which starts the application)
-  `public`: static files (html|js|css|images)
-  `views`: view template files (e.g jade)
-  `services`: application facilities (e.g `logging.js`, a logging facility)
-  `controllers`: application routes.
                Directories are mounted by name respectfully (e.g routes declared exported by `v1` directory
                will be mounted to /v1). Other files will be mounted under the root level. Each controller should
                export [`express.Router`](http://expressjs.com/en/api.html).
- `model`: SQL/NoSQL model classes.
- `migrations`: [`knex.js`](http://knexjs.org/) migration files.
