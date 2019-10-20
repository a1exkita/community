# Schedule
        10/10 DB, Basic HTML


# Diary
## 10/10
- check how to connect to Postgres on node.js with heroku
        https://node-postgres.com/features/connecting
- difference between client and Pool
        https://stackoverflow.com/questions/48751505/how-can-i-choose-between-client-or-pool-for-node-postgres
- learn basic syntax of postgres
        * syntax
        \q | Exit psql connection
        \c | Connect to a new database
        \dt | List all tables
        \du | List all roles
        \list | List databases

        * stop using superuser and create user me
        ```bash
        postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';
        postgres=# ALTER ROLE me CREATEDB;
        postgres= \du
                me          | Create DB                           | {}
                postgres    | Superuser, Create role, Create DB   | {}
        ```
        * use 'me' user
        ```bash
        psql -d postgres -U me
        ```
        https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

## 10/12
- re-organized the repo with MVC
        * create models and routes
        * move routing functions into the routes directory
- learn about authentication
        https://github.com/Createdd/Writing/blob/master/2017/articles/AuthenticationIntro.md#insert-data-into-mongodb

- understand SHA256 = hash([password] + [salt])
        https://en.wikipedia.org/wiki/Salt_(cryptography)#targetText=In%20cryptography%2C%20a%20salt%20is,to%20safeguard%20passwords%20in%20storage.&targetText=A%20salt%20is%20one%20of,randomly%20generated%20for%20each%20password.

- insert a sample user
        insert into users (email, username, password, created_on) values('kitaa@oregonstate.edu', 'kitaa', 'kitaa', current_timestamp);
## 10/17
- make page correspond to database
        ATSUHITOs-MacBook-Pro:community atsuhitokita$ heroku config
         ›   Warning: heroku update available from 7.26.2 to 7.30.1.
        === gentle-reaches-41737 Config Vars
        DATABASE_URL: postgres://wnpieyyjdpuafz:185eddd4ed1dd74cf4a78212e21b1d8aee8b62b8c697bc3c5020e07307da7c3d@ec2-54-235-86-101.compute-1.amazonaws.com:5432/d8766rv6h7guam
        PORT:         3000

## 10/18
- handles environment variables
        How to use custom environment variables in Node
        Create an .env file. The file should be placed in the root of your project
        Install the dotenv library: npm install dotenv.
        Require dotenv as early as possible (e.g. in app.js): require('dotenv').config({path: \__dirname + '/.env'}).
        Wherever you need to use environment variables (e.g. in GitLab, in Jenkins, in Heroku, …) you need to add your environment variables. The way depends on the platform but it is usually easy to do.
        Optional: create a function which runs at startup of your server. It should check whether all the required environment variables are set and throw an error otherwise.
        from https://itnext.io/how-to-use-environment-variables-in-node-js-cb2ef0e9574a

- drop marker to google map
        https://gist.github.com/SamSamskies/6033264

## 10/19
- design authentication site
- create user signup function
        * use passport middleware function : https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/
