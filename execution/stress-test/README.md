# Stress Test Results
# GET /patients 
## Test Run 1: 1000 Threads
- Total Requests: 7287
- Average Throughput: 93.3 req/sec
- Average Response Time: 8075 ms
- Min Response Time: 258 ms
- Max Response Time: 13182 ms
- Errors: 0%
- Active Threads: 1000
- Notes: Handled load successfully, but response time is high.

## Test Run 2: 3000 Threads
- Total Requests: 793
- Average Throughput: 205.2 req/sec
- Average Response Time: 646 ms
- Min Response Time: 0 ms
- Max Response Time: 2280 ms
- Errors: 98.36%
- Active Threads: 3000
- Notes: System failed under extreme load. Almost all requests failed, indicating the breaking point is between 2000 - 3000 or slightly above 3000 users.

# POST /register 
- Threads/Users: 2240 (started), peaked at 1218 active
- Total Requests: 1527
- Average Throughput: 293.5 req/sec
- Average Response Time: 645 ms
- Min Response Time: 0 ms
- Max Response Time: 2497 ms
- Errors: 100% (all requests failed)
- Active Threads: 0 at end of test
- Notes:
System completely failed under this load. All requests returned errors, indicating the system cannot handle >1200 concurrent users for GET /patients. This run helps identify the breaking point for write operations.

# POST /update 
- Total Requests: 325
- Average Throughput: 109.6 req/sec
- Average Response Time: 482 ms
- Min Response Time: 2 ms
- Max Response Time: 873 ms
- Errors: 100%
- Active Threads: 164 (peak)
- Notes: All requests failed under this load, indicating the system could not handle 164+ concurrent users with this configuration. Immediate failures suggest the need for performance optimization.

# DELETE /delete
- Total Requests: 2000
- Average Throughput: 100.9 req/sec
- Average Response Time: 570 ms
- Min Response Time: 29 ms
- Max Response Time: 893 ms
- Errors: 100% (2000/2000 requests failed)
- Active Threads: 2000
- Notes: System immediately returned errors under high load. 
