                            # PW-Assignment: JMeter Load Test

This repository contains a JMeter load testing task for frontend performance testing.

## Files

- `frontend_load_test.jmx` — JMeter test plan.
- `results/` — Folder where the test results will be saved after running.
- Any supporting files/scripts used in the test.

## How to Use

### Prerequisites

1. **Java** (JMeter requires Java to run)  
   Install Java if not already installed:
   ```bash
   sudo apt install default-jre
    ```
2. Apache JMeter
   Download and install JMeter from https://jmeter.apache.org/download_jmeter.cgi

   ## Running the Test
   
   Clone the repository:
   ```bash
   git clone https://github.com/AAKASHDEEP786/PW-Assignment.git
   cd PW-Assignment-11/frontend-load-test/
   ```
   ## Run the test in non-GUI mode
   ```bash
   jmeter -n -t frontend_load_test.jmx -l results/results.csv
   ```



