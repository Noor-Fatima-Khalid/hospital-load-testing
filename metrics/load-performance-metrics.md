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

# Performance Metrics – Patient Read Test
| Metric                  | Value            |
|-------------------------|------------------|
| Total Requests          | 200              |
| Test Duration           | 31 sec           |
| Throughput              | 6.4 requests/sec |
| Avg Response Time       | 335 ms           |
| Min Response Time       | 121 ms           |
| Max Response Time       | 1389 ms          |
| Error Count             | 0                |
| Error %                 | 0%               |
Notes: Loop count = 4 for 50 users; GET requests without request body; system handled frequent reads efficiently.

# Performance Metrics – Patient Delete Test
| Metric                  | Value              |
|-------------------------|-----------------|
| Total Requests          | 50               |
| Test Duration           | 30 sec           |
| Throughput              | 1.7 requests/sec |
| Avg Response Time       | 132 ms           |
| Min Response Time       | 116 ms           |
| Max Response Time       | 488 ms           |
| Error Count             | 5                |
| Error %                 | 10%               |
Notes: Delete requests performed using patient `name` from CSV; 5 requests failed likely due to already deleted patients.
