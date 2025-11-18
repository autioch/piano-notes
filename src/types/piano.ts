export type Pitch =
  | "C3"
  | "D3"
  | "E3"
  | "F3"
  | "G3"
  | "A3"
  | "H3"
  | "C4"
  | "D4"
  | "E4"
  | "F4"
  | "G4"
  | "A4"
  | "H4"
  | "C5"
  | "D5"
  | "E5"
  | "F5"
  | "G5"
  | "A5"
  | "H5";

type FullDuration = 1; // empty note head
type HalfDuration = 0.5; // empty note head with stem
type QuarterDuration = 0.25; // filled note head with stem
type EighthDuration = 0.125; // filled note head with stem and one flag
type SixteenthDuration = 0.0625; // filled note head with stem and two flags

export type Duration =
  | FullDuration
  | HalfDuration
  | QuarterDuration
  | EighthDuration
  | SixteenthDuration;

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
