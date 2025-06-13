beforeAll(() => {
  // Freeze time so snapshots are stable
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2023-01-01T00:00:00Z'));
});

afterAll(() => {
  jest.useRealTimers();
});
