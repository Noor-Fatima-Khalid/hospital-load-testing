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
