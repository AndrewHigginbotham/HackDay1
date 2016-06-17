DROP DATABASE IF EXISTS quotes;
CREATE DATABASE quotes;

\c quotes;

CREATE TABLE quotes (
  ID SERIAL PRIMARY KEY,
  author VARCHAR,
  content VARCHAR,

);

INSERT INTO quotes (author, content )
  VALUES ('Andrew Higginbotham', 'I hate/love APIs');