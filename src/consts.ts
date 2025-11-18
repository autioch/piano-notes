import type { BarFinish, Duration, Pitch } from "@/types/piano";

export const NOTE_COLORS: Record<Pitch, string> = {
  C3: "#ff5252ff", // Red
  D3: "#ffb162ff", // Orange
  E3: "#f1f148ff", // Yellow
  F3: "#59e759ff", // Green
  G3: "#6804afff", // Indigo
  A3: "#5858ffff", // Blue
  H3: "#b760ffff", // Violet
  C4: "#ff5252ff", // Red
  D4: "#ffb162ff", // Orange
  E4: "#f1f148ff", // Yellow
  F4: "#59e759ff", // Green
  G4: "#6804afff", // Indigo
  A4: "#5858ffff", // Blue
  H4: "#b760ffff", // Violet
  C5: "#ff5252ff", // Red
  D5: "#ffb162ff", // Orange
  E5: "#f1f148ff", // Yellow
  F5: "#59e759ff", // Green
  G5: "#6804afff", // Indigo
  A5: "#5858ffff", // Blue
  H5: "#b760ffff", // Violet
};

/** If note is outside of bars, it should get an extra line over it. */
export const EXTRA_LINE_WIDTH = 12;

/** Padding for a single bar */
export const BAR_PADDING = 8;

export const BAR_HEIGHT = 70;

/** Width available for the notes */
export const SVG_WIDTH = 190 + 190 * 0.49;

/** Height available for the notes */
export const SVG_HEIGHT = 247 + 247 * 0.49;

export const CONFIG_WIDTH = 35;

export const NOTE_FULL = 1;
export const NOTE_HALF = 0.5;
export const NOTE_QUARTER = 0.25;
export const NOTE_EIGHTH = 0.125;
export const NOTE_SIXTEENTH = 0.0625;

export const ALL_PITCHES: Pitch[] = [
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A3",
  "H3",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A4",
  "H4",
  "C5",
  "D5",
  "E5",
  "F5",
  "G5",
  "A5",
  "H5",
];
export const ALL_DURATIONS: Duration[] = [
  NOTE_FULL,
  NOTE_HALF,
  NOTE_QUARTER,
  NOTE_EIGHTH,
  NOTE_SIXTEENTH,
];

export const ALL_FINISHES: BarFinish[] = [
  "normal",
  "double",
  "double-end",
  "repeat-start",
  "repeat-end",
];
