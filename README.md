# basic-rest-api

## Create users table
```
CREATE TABLE users (  
  id INTEGER NOT NULL PRIMARY KEY, 
  name TEXT NOT NULL, 
  profile TEXT, 
  created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')), 
  updated_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')), 
  date_of_birth TEXT
);
```

## Create sample data
`INSERT INTO users (name, profile) VALUES ("Itadori", "生き様で後悔はしたくない");`  
`INSERT INTO users (name, profile) VALUES ("Fushiguro", "俺は不平等に人を助ける");`  
`INSERT INTO users (name, profile) VALUES ("Kugisaki", "テメェの人生は仕事かよ");`  
`INSERT INTO users (name, profile) VALUES ("Gojo", "大丈夫、僕最強だから");`  
`INSERT INTO users (name, profile) VALUES ("Nanami", "そういう小さな絶望の積み重ねが人を大人にするのです");`  

## Fetch all data from users table
`SELECT * FROM users;`