A simple command line tool to clone my [ts-node-starter](https://github.com/LucHighwalker/ts-node-starter).

# Installation 

```
npm install -g ts-node-cli
```

# Usage

```
tsns [optional name]

cd [given name or ts-node-starter]

touch .env

npm install

tsc --watch

nodemon (or whatever you use)
```

# Example .env file

```
HOST_URL='theurlyourserverison.com'
PORT=4200

MONGO_URL='mongoLocationURL'
JWT_SECRET='averysecretsecret'

MAILGUN_API_KEY='yourmailgunapikey'
EMAIL_DOMAIN='mailgun.email.domain'
```