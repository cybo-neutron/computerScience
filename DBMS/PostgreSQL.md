**Login to db**
```postgres
psql --username=<username> --dbname=postgres
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

    CREATE TABLE table_name(column_name DATATYPE CONSTRAINTS);
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

* **Adding Constraint to columns**    
    
    ```postgres
    --Primary key 
    --You should set a primary key on every table and there can ***only be one*** per table.
    ALTER TABLE table_name ADD PRIMARY KEY(column_name);
    ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);   --composite primary key

    --Unique
    ALTER TABLE table_name ADD UNIQUE(column_name);

    --ALTER COLUMN FOR NOT NULL
    ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;
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
* **Delete all contents of table**
    ```postgres
    TRUNCATE table_name;
    ```
*  **Update table**
    ```postgres 
    UPDATE table_name SET column_name=new_value WHERE condition;
    ```

* **Foreign key**
  ```postgres
    -- creating a column and making it a foreign key
    ALTER TABLE table_name ADD COLUMN column_name DATATYPE REFERENCES referenced_table_name(referenced_column_name);

    -- making an existing column foreign key
    ALTER TABLE <table_name> ADD FOREIGN KEY(<column_name>) REFERENCES <referenced_table_name>(<referenced_column_name>);
  ```
* **JOIN**
    ```postgres
    SELECT columns FROM table_1 FULL JOIN table_2 ON table_1.primary_key_column = table_2.foreign_key_column;

    --using junction table to join 3 tables
    SELECT columns FROM junction_table
        FULL JOIN table_1 ON junction_table.foreign_key_column = table_1.primary_key_column
        FULL JOIN table_2 ON junction_table.foreign_key_column = table_2.primary_key_column;
    ```
### **Shortcut commands**

| Commands          | Description                  |
| ----------------- | ---------------------------- |
| `\d`              | display tables               |
| `\d <table_name>` | display information of table |

---
## ***Notes***
* **Junction table**  
    * Many-to-many" relationships usually use a junction table to link two tables together, forming two "one-to-many" relationships.
    * Junction table uses *primary keys* from both tables as **foreign key** to create the relationship.

* **Composite Primary Key**
  * Primary key made from two or more columns.
  ```postgres
    ALTER TABLE table_name ADD PRIMARY KEY(column1, column2);
  ```


### **Datatypes**
* INT
* VARCHAR( )
* SERIAL -> INT and NOT NULL . Automatically increase value when new row is added.
* NUMERIC( , ) -> Decimal number.



