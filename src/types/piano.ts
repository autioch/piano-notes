export type Pitch = "C" | "D" | "E" | "F" | "G" | "A" | "H";
export type Duration = 1 | 0.5 | 0.25 | 0.125;
export type BarFinish =
  | "normal"
  | "double"
  | "double-end"
  | "repeat-start"
  | "repeat-end";

export type Note = {
  pitch: Pitch;
  duration: Duration;
};

export type Bar = {
  notes: Note[];
  type: BarFinish;
};

export type SheetMusic = {
  title: string;
  composer: string;
  key: "violin" | "bass";
  meter: [number, number];
  bars: Bar[];
};
