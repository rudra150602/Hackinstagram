import React from 'react';

export default function TimeDisplay() {
  const now = new Date(Date.now()).toLocaleString();
  return <div data-testid="time-display">{now}</div>;
}
