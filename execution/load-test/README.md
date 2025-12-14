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


### Patient Update Load Test – CLI Run
- Test Plan: jmeter/scripts/patient_update.jmx
- Total Requests: 50
- Test Duration: 30 seconds
- CLI run summary:
    - Throughput: 1.7 requests/sec
    - Avg Response Time: 192 ms
    - Min Response Time: 88 ms
    - Max Response Time: 1482 ms
    - Errors: 1 (2%)
- Notes: Only 1 request failed, system handled load successfully.


### Patient Read (GET) Load Test – CLI Run
- Test Plan: jmeter/scripts/patient_read.jmx
- Total Requests: 200  (Loop count = 4 for 50 users)
- Test Duration: 31 seconds
- CLI run summary:
    - Throughput: 6.4 requests/sec
    - Avg Response Time: 335 ms
    - Min Response Time: 121 ms
    - Max Response Time: 1389 ms
    - Errors: 0 (0%)
- Notes: GET requests do not use request body. System handled frequent read operations efficiently under load.
