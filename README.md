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
-
