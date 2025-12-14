# Hospital Management System Load & Stress Testing

This repository contains the load and stress testing setup for the **Hospital Management System**. The testing is performed using **Apache JMeter** to evaluate the performance and stability of patient CRUD operations.

---

## Project Overview
This project focuses on testing the **Hospital Management System** for its **load handling, response time, and stability**. The testing includes:

- Load Testing (average load)
- Stress Testing (extreme load until failure)
- Performance metrics collection
- Automation of test execution using JMeter

The system under test is the **Patient Management module** with full CRUD operations.

---

## Test Plan

The **test plan** documents the scope, objectives, environment, load profiles, and metrics captured during testing.

- Load Testing: Simulates normal user activity (50 users, ramp-up 30s, 5 min duration)  
- Stress Testing: Gradually increases users until failures occur (increments of 50 users, ramp-up 10s, duration up to 10 min) or spikes it for extreme behaviour
---

## JMeter Scripts

All JMeter test plans are stored in `jmeter/scripts/`:

- `patient_create.jmx` – Create patient  
- `patient_read.jmx` – Read patient  
- `patient_update.jmx` – Update patient  
- `patient_delete.jmx` – Delete patient  
---

## Execution & Reports

- Execute JMeter scripts using **GUI** or **CLI** (`jmeter -n -t script.jmx -l result.jtl -e -o output-folder`)  
- Store execution results in `execution/load-test/` and `execution/stress-test/`  
- HTML and CSV reports saved in `reports/html-reports/`  
- Graphs for response times, throughput, and error rates in `reports/graphs/`  

---

## Performance Metrics

Metrics captured during testing include:

- Average, minimum, and maximum response times  
- Throughput (requests/sec)  
- Error rate (%)  
- Successful vs failed requests  

All metrics analysis can be found in `metrics/performance-metrics.md`.

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Noor-Fatima-Khalid/Hospital-Management_Testing.git
````

2. Open JMeter and load desired `.jmx` test plan from `jmeter/scripts/`
3. Ensure the **application under test** is running (`localhost:8080`)
4. Run the test and save execution reports in `execution/`
5. Analyze metrics and update `metrics/performance-metrics.md`

---

## Requirements

* Apache JMeter 5.7 or higher
* Hospital Management System running locally (or remote URL)
* Java 8+ installed
* CSV test data for patients (optional for parameterized tests)


