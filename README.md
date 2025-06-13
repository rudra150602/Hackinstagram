# Hackinstagram

This repository includes a minimal React example with snapshot testing. The `react-time-example` folder contains the component and tests.

## Running the React tests

1. Install Node dependencies (requires internet access):
   ```bash
   cd react-time-example
   npm install
   ```

2. Execute the tests:
   ```bash
   npm test
   ```

The tests use Jest with fake timers to freeze `Date.now()` so that snapshots remain stable across test runs.
