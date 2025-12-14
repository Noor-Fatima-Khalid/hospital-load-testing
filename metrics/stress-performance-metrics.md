# Performance Metrics
## GET /patients

| Concurrent Users | Avg Response Time (ms) | Min Response (ms) | Max Response (ms) | Throughput (req/sec) | Error % | Status |
|------------------|------------------------|-------------------|-------------------|----------------------|---------|--------|
| 1000             | 8075                   | 258               | 13182             | 93.3                 | 0%      | OK     |
| 3000             | 646                    | 0                 | 2280              | 205.2                | 98.36%  | Failed |


## POST /register
| Metric                       | Value                             |
|-------------------------------|----------------------------------|
| Total Requests               | 1527                             |
| Requests per Second (Throughput) | 293.5/s                          |
| Average Response Time (ms)   | 645                              |
| Minimum Response Time (ms)   | 0                                |
| Maximum Response Time (ms)   | 2497                             |
| Errors                       | 1527 (100%)                      |
| Active Threads (at peak)     | 1212                             |
- System failed under extreme load (100% requests errored)
- Maximum response time before failure: 2497 ms
- Indicates server breaking point reached
Server cannot handle 1200+ concurrent GET requests. This identifies the stress threshold.

## POST /update
| Metric                | Value         |
| --------------------- | ------------- |
| Total Requests        | 325           |
| Average Throughput    | 109.6 req/sec |
| Average Response Time | 482 ms        |
| Minimum Response Time | 2 ms          |
| Maximum Response Time | 873 ms        |
| Error Percentage      | 100%          |
| Active Threads (peak) | 164           |
-System failed (100% requests errored)
Maximum response time before failure: 2 ms
Indicates server breaking point reached Server cannot handle 150+ concurrent GET requests. This identifies the stress threshold.

## Delete /delete
| Metric                   | Value         |
|---------------------------|---------------|
| Total Requests            | 793           |
| Average Throughput        | 205.2 req/sec |
| Average Response Time     | 646 ms        |
| Min Response Time         | 0 ms          |
| Max Response Time         | 2280 ms       |
| Errors                    | 98.36%        |
| Active Threads            | 3000          |
Maximum response time before failure: 2280 ms
Indicates server breaking point reached Server cannot handle 150+ concurrent GET requests. This identifies the stress threshold.
