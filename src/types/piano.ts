export type Pitch = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'H';
export type Duration = 1 | 0.5 | 0.25 | 0.125;

export type Note = {
  pitch: Pitch;
  duration:  Duration
};

