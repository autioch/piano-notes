import { z } from 'zod';

// Note schema — serializable primitives only
export const NoteSchema = z.object({
  id: z.string().optional(),
  pitch: z.union([
    z.number().int().min(0).max(127),
    z.string()
  ]),
  start: z.number(),
  duration: z.number(),
  velocity: z.number().int().min(0).max(127).optional(),
  tie: z.boolean().optional(),
  annotation: z.string().optional(),
});

// Track schema
export const TrackSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  instrument: z.string().optional(),
  notes: z.array(NoteSchema),
  tempo: z.number().optional(),
  timeSignature: z.tuple([z.number(), z.number()]).optional(),
  transposition: z.number().optional(),
});

// Score/schema
export const ScoreSchema = z.object({
  title: z.string().optional(),
  composer: z.string().optional(),
  tempo: z.number().optional(),
  timeSignature: z.tuple([z.number(), z.number()]).optional(),
  metadata: z.record(z.unknown()).optional(),
  tracks: z.array(TrackSchema),
  createdAt: z.string().optional(),
});

// Top-level serialized payload
export const SerializedPianoNotesSchema = z.object({
  version: z.string(),
  score: ScoreSchema,
});

export type SerializedPianoNotes = z.infer<typeof SerializedPianoNotesSchema>;

/**
 * Validate and parse an imported JSON payload.
 * Throws on invalid input.
 */
export function validateSerializedPianoNotes(input: unknown): SerializedPianoNotes {
  return SerializedPianoNotesSchema.parse(input);
}

/**
 * Safe parse variant: returns { success, data, error }
 */
export function safeParseSerializedPianoNotes(input: unknown) {
  return SerializedPianoNotesSchema.safeParse(input);
}
