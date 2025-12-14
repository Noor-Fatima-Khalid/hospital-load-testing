# Performance Metrics - GET /patients

| Concurrent Users | Avg Response Time (ms) | Min Response (ms) | Max Response (ms) | Throughput (req/sec) | Error % | Status |
|------------------|------------------------|-------------------|-------------------|----------------------|---------|--------|
| 1000             | 8075                   | 258               | 13182             | 93.3                 | 0%      | OK     |
| 3000             | 646                    | 0                 | 2280              | 205.2                | 98.36%  | Failed |


## Performance Metrics - POST /register
| Metric                       | Value                             |
|-------------------------------|----------------------------------|
| Total Requests               | 1527                             |
| Requests per Second (Throughput) | 293.5/s                          |
| Average Response Time (ms)   | 645                              |
| Minimum Response Time (ms)   | 0                                |
| Maximum Response Time (ms)   | 2497                             |
| Errors                       | 1527 (100%)                      |
| Active Threads (at peak)     | 1212                             |

## Observations
- System failed under extreme load (100% requests errored)
- Maximum response time before failure: 2497 ms
- Indicates server breaking point reached

## Conclusion
Server cannot handle 1200+ concurrent GET requests. This identifies the stress threshold.
