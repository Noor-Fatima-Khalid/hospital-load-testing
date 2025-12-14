
# Test Plan

## Test Objective
Test the performance of patient CRUD APIs under load.

## Scope
- Include: Patient CRUD operations
- Exclude: Other modules

## Environment
- Server URL: http://localhost:6005
- Database: MongoDB
- JMeter version: 5.7

## Load Profile
- Virtual Users: 50
- Ramp-up: 30s
- Loop Count: 10
- Test Duration: 5 min

## Metrics to Capture
- Response time (avg, min, max)
- Throughput (requests/sec)
- Error rate (%)
- Latency

## Tool
- JMeter
