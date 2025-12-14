# Performance Metrics 

# Patient Create Test
| Metric                  | Value            |
|-------------------------|------------------|
| Total Requests          | 50               |
| Test Duration           | 30 sec           |
| Throughput              | 1.7 requests/sec |
| Avg Response Time       | 5 ms             |
| Min Response Time       | 1 ms             |
| Max Response Time       | 124 ms           |
| Error Count             | 50               |
| Error %                 | 100%             |
Notes: All requests failed; likely causes: server not running, URL or request body mismatch 
Next steps: Verify server is running, check HTTP request URLs, headers, and body format.

# Patient Create Test
| Metric                  | Value            |
|-------------------------|------------------|
| Total Requests          | 50               |
| Test Duration           | 31 sec           |
| Throughput              | 1.6 requests/sec |
| Avg Response Time       | 400 ms           |
| Min Response Time       | 200 ms           |
| Max Response Time       | 426 ms           |
| Error Count             | 2                |
| Error %                 | 4%               |
Notes: System handled load well; minor errors occurred, possibly due to test data or timing issues.

# Patient Update Test
| Metric                  | Value              |
|-------------------------|-----------------|
| Total Requests          | 50               |
| Test Duration           | 30 sec           |
| Throughput              | 1.7 requests/sec |
| Avg Response Time       | 192 ms           |
| Min Response Time       | 88 ms            |
| Max Response Time       | 1482 ms           |
| Error Count             | 1                |
| Error %                 | 2%               |
Notes: Updates performed using patient `name` from CSV. Minor error occurred; system performed well under load.
