/**
 * Types for serializing piano notes, tracks, and scores.
 *
 * These types are intentionally simple and focused on serialization
 * (i.e., JSON-friendly primitives). Times/durations are represented in
 * beats unless otherwise noted. MIDI-related fields use standard 0-127 ranges.
 */

/** A single musical note event */
export type Note = {
  /** optional unique identifier for the note */
  id?: string;
  /** pitch as MIDI note number (0-127) or scientific name like "C4" */
  pitch: number | string;
  /** start position in beats (e.g., 0 = start of the track) */
  start: number;
  /** duration in beats */
  duration: number;
  /** velocity (0-127), optional — defaults to 64 when omitted */
  velocity?: number;
  /** whether the note is tied to a subsequent note */
  tie?: boolean;
  /** optional human-readable annotation (e.g., fingering, technique) */
  annotation?: string;
};

/** A monophonic or polyphonic track of notes */
export type Track = {
  /** optional unique identifier for the track */
  id?: string;
  /** display name for the track (e.g., "Right Hand", "Left Hand") */
  name?: string;
  /** optional instrument name or MIDI program string */
  instrument?: string;
  /** list of notes in this track */
  notes: Note[];
  /** tempo for this track in BPM (falls back to score tempo if omitted) */
  tempo?: number;
  /** time signature as [numerator, denominator], e.g., [4,4] */
  timeSignature?: [number, number];
  /** transposition in semitones applied on playback */
  transposition?: number;
};

/** Top-level score or composition container */
export type Score = {
  /** title of the piece */
  title?: string;
  /** composer or source */
  composer?: string;
  /** global tempo in BPM (tracks may override) */
  tempo?: number;
  /** global time signature as [numerator, denominator] */
  timeSignature?: [number, number];
  /** arbitrary metadata bag */
  metadata?: Record<string, unknown>;
  /** one or more tracks */
  tracks: Track[];
  /** ISO timestamp when the score was created */
  createdAt?: string;
};

/** Example serialized payload root used when storing or transferring data */
export type SerializedPianoNotes = {
  version: string; // e.g., "1.0"
  score: Score;
};

/** Utility: a compact note representation used by some consumers */
export type CompactNote = [number | string, number, number, number?];
/*
  CompactNote tuple meaning:
  [ pitch, start, duration, velocity? ]
  - pitch: MIDI number or note name
  - start: beats
  - duration: beats
  - velocity: optional 0-127
*/
