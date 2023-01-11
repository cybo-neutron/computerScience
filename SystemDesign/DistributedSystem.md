# **Distributed Systems**

A distributes system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another.

## **Parts of a distributed system**
- Various parts/machines that compose a distributed system
- Netowork that separate the various parts and acts as a communication mechanism that lets them exchange messages.

## **Why do we need a distributed system.**
1. **Performance**:   Degree to which a software system or component meets its objectives for timeliness.   
    Rather than using a single machine we use multiple low-spec machines to distribute the processing.

2. **Scalability**:  Capability of a system to handle the growing amount of work.  
    
   
3. **Availability**:  Probability of a system to work as required, when required, during a mission.
    
    One of the most widely used mechanism is **redundancy** where we store data into multiple,redundant computers. So, when one computer fails, we can effectively switch to another one.

## **Fallacies of Distributed Computing**
False assumptions that people make while starting with Distributed systems
- The network is reliable
- Latency is zero
- Bandwidth is infinite
- The network is secure
- Topology doesn't change
- There is one administrator
- Transport cost is zero
- The network is homogenous.


## **Why distributed systems are hard to design**
Following properties of distributed systems make it challenging.
- **Network Asynchrony**
- **Partial failures** : some components of a distributed system fails.
- **Concurrency**: execution of multiple computations at the same time and potentially on the same piece of data.


## **Measures of correctness of a distributed system**

The correctness measures for distributed systems are the two properties they must satisfy
- **Safety property** : Defines something that must never happen in a correct system.
- **Liveness property** : Something that will eventually happen in a correct system.

An example
Safety property : an oven not exceding a max temp threshold

Liveness property: Oven will eventually reach the temp specified by the button.

**Note** : Safety property is more important than liveness in distributed systems.


