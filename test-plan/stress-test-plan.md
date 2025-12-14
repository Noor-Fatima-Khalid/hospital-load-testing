# Stress Test Plan

## Test Objective
Determine the maximum load the Hospital Management System can handle before failures.

## Scope
- Include: Patient CRUD operations
- Exclude: Other modules

## Environment
- Server URL: http://localhost:6005
- Database: MongoDB
- JMeter version: 5.7

## Stress Load Profile
- Start with 50 users, increase by 50 every 1 min until failures occur
- Ramp-up for each increment: 10s
- Test duration: Up to 10 min or until failure

## Metrics to Capture
- Response time (avg, min, max)
- Error rate (%)
- Throughput
- Latency spikes
- Successful vs failed requests

## Tools
- JMeter
- CSV test data


## Execution Steps
1. Open JMeter and load `jmeter/scripts/patient_stress_test.jmx`
2. Ensure `CSV Data Set Config` is pointing to `jmeter/test-data/patients.csv`
3. Start the test and monitor metrics in `Summary Report` and `Graph Results`
4. Gradually increase threads/users until response times degrade or errors appear
5. Save HTML and CSV reports in `execution/stress-test/`
