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

# POST /register Stress Test Execution

Test Run: POST /register 
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
