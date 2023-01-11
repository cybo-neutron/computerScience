## Proxies
proxy meand *on-behalf*

### Forward proxy :
- proxy talks and ***communicate with server on behalf of client***
- useful of anonimty
- Block malicious traffic from reaching an origin web server.
- Also used to block the access to certains websites and IPs
- Improves user experience by caching external site content.
- 

### Reverse proxy : 
- Proxy server sitting on server site and acts as a middle-man for all the servers.
- used for traffic control
- maintains the anonimity of the servers
- It scrubs all incoming traffic before its sent to our backend services.
- Effectively distibute the load for applications using multiple servers.
- Deflates overall impact of Distributed Denial of Service(DDoS) attaks
- Provides single configuration point to manage SSL/TSL.


Disadvantage
- Can become a single point of failure

---- 


## Scaling

Characteristics of a good scaling
- Handle Increased load
- Should not be highly complex to implement and maintain
- Performance should increase

Building scalable systems



## Database replications

Master-slave
databases that are replica of the primary DB are called slaves.

* Replication lag : Time taken for data to be copied from primary DB to secondary DB.

Q. **How to solve replcation log issue to make data consistent over all DB?**
Sol. 
1. **Read-after write / Syncronous replication**
   - When there is an update in primary DB it asks all its replicas to update the value. It waits for their acknowledgement before reporting to the main function.
   - **Advantage** : Replication lag is zero
   - **Disadvantage** 
     - Performance hit/ Higher latency
     - If any replica fails to update the whole write operation will fail.
2. **Asyncronous replication**

3. **Semisyncronous replication**
   - Waits for one one some replica DBs to update and rest will be done asyncronously.


**Replica vs Snapshot**
Snapshot is the state of a DB at a particular time.


---- 
## Partitioning

- Vertical Partitioning : Partitioning on the basis of columns.
    Basically dividing the data into multiple tables( normalization will be used over here)
- Horizontal partitioning : Partitioning on the basis of rows.
    Storing some rows of data in one db and another in another db and so on.

**Horizontal partitioning is known as SHARDING**

## SHARDING
Types of sharding
- Physical sharding
- Logical sharding


**Advantages of sharding**
- Query optimization
- Reduced latency
- We can place the physical shards in different geographical locations.
- No single point of failure.

**Concept of different sharding strategies**
- Dynamic sharding
- Algorithmic sharding


**Drawbacks of sharding**
- If the sharding strategy is not chosen correctly it will make the data distributed unevenly. Some of the shards can have more data and some less.
- Once the data is sharded it very difficult to come back to non-sharded state.
- Joins can be very expensive over different shards.

*Sharding should be the last method to increase the performance. Go with all other perfomance improvement methods and choose sharding only if you have gone through all the methods*