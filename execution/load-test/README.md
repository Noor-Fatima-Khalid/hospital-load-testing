### Patient Create Load Test - Negative
- Test Plan: jmeter/scripts/patient_create.jmx
- Total Requests: 50
- Test Duration: ~30 seconds
- CLI run output:
    - Throughput: 1.7 requests/sec
    - Avg Response Time: 5 ms
    - Min Response Time: 1 ms
    - Max Response Time: 124 ms
    - Errors: 50 (100%)
- Notes: All requests failed; because server was not running. This was corrected by running the backend service and then testing.


### Patient Create Load Test – CLI Run - Positive
- Test Plan: jmeter/scripts/patient_create.jmx
- Total Requests: 50
- Test Duration: 31 seconds
- CLI run summary:
    - Throughput: 1.6 requests/sec
    - Avg Response Time: 400 ms
    - Min Response Time: 200 ms
    - Max Response Time: 426 ms
    - Errors: 2 (4%)
- Notes: Only 2 requests failed (4%), indicating the system handled load fairly well.
