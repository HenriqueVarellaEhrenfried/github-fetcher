-- To run this script: psql -U postgres -f database.sql
-- psql -U postgres -f database.sql -h 192.168.25.8
DROP DATABASE IF EXISTS git_fetcher;
CREATE DATABASE git_fetcher;

-- Connect to database on local databasee cluster
\c git_fetcher;

--Even though it is recommended to create a table to license and another to owner,
--I decided to use only one table, repository, because of simplicity.
--Future versions may be upgrade to the best model of the database.

CREATE TABLE repository(
    ID SERIAL PRIMARY KEY,
    repository_created_at TIMESTAMP,
    forks_count INTEGER,
    language_used  VARCHAR(256),
    repository_name  VARCHAR(256),
    license_name VARCHAR(256),
    open_issues_count INTEGER,
    repository_html_url VARCHAR(256),
    owner_html VARCHAR(256),
    owner_login VARCHAR(256),
    pushed_at TIMESTAMP,
    stargazers_count INTEGER,
    watchers_count INTEGER
);