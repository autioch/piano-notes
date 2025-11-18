import {
  EXTRA_LINE_WIDTH,
  BAR_PADDING,
  SVG_WIDTH,
  CONFIG_WIDTH,
  BAR_HEIGHT,
} from "@/consts";
import type { Bar, BarFinish, Note } from "@/types/piano";

export function calculateNoteWidth(note: Note) {
  if (note.duration < 0.5) {
    /** @TODO Calculate size of a tail for a note */
    return EXTRA_LINE_WIDTH;
  }
  return EXTRA_LINE_WIDTH;
}

const endingWidths: Record<BarFinish, number> = {
  normal: 1,
  double: 5,
  "double-end": 6,
  "repeat-start": 1,
  "repeat-end": 1,
};

export function calculateBarWidth(bar: Bar) {
  const { notes, type } = bar;

  const spacesWidth = BAR_PADDING * 2 + (notes.length - 1) * BAR_PADDING;
  const endingWidth = endingWidths[type] || 0;
  const notesWidth = notes.reduce(
    (total, note) => total + calculateNoteWidth(note),
    0
  );

  return spacesWidth + endingWidth + notesWidth;
}

/*
 * Split bars into multiple rows if they exceed page width.
 * Available space is 560 (600 - CONFIG_WIDTH for config).
 * Each line should start with config.
 * Return an array of arrays, where each item is the bar and it's translate x and y.*/
export function calculateBarTranslates(bars: Bar[]) {
  const lines: { bar: Bar; x: number; y: number; width: number }[][] = [];
  let currentLine: { bar: Bar; x: number; y: number; width: number }[] = [];
  let currentX = CONFIG_WIDTH;
  let currentY = 0;

  for (const bar of bars) {
    const barWidth = calculateBarWidth(bar);
    if (currentX + barWidth > SVG_WIDTH) {
      if (currentLine.length > 0) {
        currentLine[currentLine.length - 1].width += SVG_WIDTH - currentX;
      }
      lines.push(currentLine);
      currentLine = [];
      currentX = CONFIG_WIDTH;
      currentY += BAR_HEIGHT;
    }
    currentLine.push({ bar, x: currentX, y: currentY, width: barWidth });
    currentX += barWidth;
  }
  if (currentLine.length > 0) {
    if (currentX < SVG_WIDTH) {
      currentLine[currentLine.length - 1].width += SVG_WIDTH - currentX;
    }
    lines.push(currentLine);
  }
  return lines;
}
