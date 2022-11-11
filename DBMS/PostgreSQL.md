**Login to db**
```postgres
psql --username=freecodecamp --dbname=postgres
```



## **Database Commands**
1. **Create Databse**
    ```postgres
    CREATE DATABASE database_name;
    ```
2. **Rename Database**
   ```postgres
   ALTER DATABASE database_name RENAME TO new_database_name;
   ```
3. **Delete/Drop Database**
   ```postgres
   DROP DATABASE <database_name>
   ```


### **Shortcut commands**
* `\l` -> list all databases
* `\c <database_name>` -> connect to database

---


## **Table commands**
* **Create table**
    ```postgres
    CREATE TABLE table_name();
    ```
*  **Add column**
    ```postgres
    ALTER TABLE table_name ADD COLUMN column_name DATATYPE;
    ALTER TABLE table_name ADD COLUMN column_name DATATYPE CONSTRAINTS;
    --eg : ALTER TABLE characters ADD COLUMN name VARCHAR(30)NOT NULL;
    ```
*  **Delete column**
    ```postgres
    ALTER TABLE table_name DROP COLUMN column_name;
    ```
* **Rename column**
    ```postgres
    ALTER TABLE table_name RENAME COLUMN column_name TO new_name;
    ```

* **Adding primary key**    
    You should set a primary key on every table and there can ***only be one*** per table.
    ```postgres
    ALTER TABLE table_name ADD PRIMARY KEY(column_name);
    ```
* **Drop constraint**   
    
    ```postgres
    ALTER TABLE table_name DROP CONSTRAINT constraint_name;
    ```

* **Insert in table**
    ```postgres
    INSERT INTO table_name(column_1, column_2) VALUES(value1, value2);
    --eg : INSERT INTO second_table(id,username) VALUES(1,'Samus');

    -- inserting multiiple rows at once
    INSERT INTO characters(name, homeland, favorite_color)
    VALUES('Mario', 'Mushroom Kingdom', 'Red'),
    ('Luigi', 'Mushroom Kingdom', 'Green'),
    ('Peach', 'Mushroom Kingdom', 'Pink');
    ```

* **Select from table (View)**
    ```postgres
    SELECT columns FROM table_name;
    --eg : SELECT * FROM table_name;

    SELECT columns FROM table_name ORDER BY column_name;  --showing in a specific order
    ```
* **Delete from table**
    ```postgres
    DELETE FROM table_name WHERE condition;
    ```
* **Delete table**
    ```postgres
    DROP TABLE table_name;
    ```

*  **Update table**
    ```postgres 
    UPDATE table_name SET column_name=new_value WHERE condition;
    ```

### **Datatypes**
* INT
* VARCHAR()
* SERIAL -> INT and NOT NULL . Automatically increase value when new row is added.

### **Shortcut commands**

| Commands          | Description                  |
| ----------------- | ---------------------------- |
| `\d`              | display tables               |
| `\d <table_name>` | display information of table |
| Row3              |                              |
| Row3              |                              |

