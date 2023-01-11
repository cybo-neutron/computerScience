# REST APIs

REpresentational   
State  
Transfer  

### Guidelines for REST
1. It works on Client Server architecture.
2. Cacheable
3. Layered
4. Stateless
5. Uniform interface
6. Code on demand : means that a server can send code to client that it should execute on runtime(like Java Applets or JavaScript)


### HTTP methods and their functions
- GET - fetch data
- POST - create a new data
- PUT  - Update data
- DELETE - delete a data
  
Q. We say that REST should be stateless but yet in the definition of REST it is mentioned State transfer?

Sol : 
State transfer refers to the state of the data stored in DB.

By stateless we mean that the requests should be stateless.



### HTTP responses
- 200 : Success / OK
- 201 : Created {}
- 301 : REdirect
- 400 : Bad request
- 409 : conflict (data you are trying to create already exist)
- 412 : Sending data which server is not able to process it
- 500 : Server failure.

