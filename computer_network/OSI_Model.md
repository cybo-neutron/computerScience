# **OSI Model**
Open System Interconnect   
formalized by ISO (Internation Organization fro Standardization) in 1984

## **Trick to remember OSI Model**
- All -> Application
- People -> Presentation
- Seems -> Session
- To -> Transmission
- Need -> Network
- Data -> Data Link
- Processing -> Physical

## **Small brief on each layers**
1. Application

2. Presentation Layer
    * Translation
    * Encryption and decryption
    * Compression and expansion of info.

3. Session Layer
   * Create a session

4. Transport Layer
   * **Segmentation** : Breaks the message to smaller chunks.
   * **Sequencing** : Assign the segmented parts sequence number
   * **Port addressing** : Setting the source and destination port numbers  

5. Network layer
   *  packets
   *  **Logical addressing** : Adding IP address to the packets
   *  **Routing** : Selecting the best route for the packets
   *  2 way of comm. -> 1) Connection oriented 2) Connection less

6. Data Link Layer
   * Error free delivery
   * **Framing** : Data to stream of bits
   * **Physical addressing** : MAC address
   
   head -> physical address of source and destination 
   tail -> error detection and correction bits

7. Physical Layer
   * Medium of actual data transfer
