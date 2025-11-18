import type { BarFinish, Duration, Pitch } from "@/types/piano";

export const NOTE_COLORS: Record<Pitch, string> = {
  C: "#ff5252ff", // Red
  D: "#ffb162ff", // Orange
  E: "#f1f148ff", // Yellow
  F: "#59e759ff", // Green
  G: "#6804afff", // Indigo
  A: "#5858ffff", // Blue
  H: "#b760ffff", // Violet
};

/** If note is outside of bars, it should get an extra line over it. */
export const EXTRA_LINE_WIDTH = 12;

/** Padding for a single bar */
export const BAR_PADDING = 8;

export const BAR_HEIGHT = 70;

/** Width available for the notes */
export const SVG_WIDTH = 190 + 190 * 0.5;

/** Height available for the notes */
export const SVG_HEIGHT = 247 + 247 * 0.5;

export const CONFIG_WIDTH = 35;

export const NOTE_FULL = 1;
export const NOTE_HALF = 0.5;
export const NOTE_QUARTER = 0.25;
export const NOTE_EIGHTH = 0.125;
export const NOTE_SIXTEENTH = 0.0625;

export const ALL_PITCHES: Pitch[] = ["C", "D", "E", "F", "G", "A", "H"];
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
