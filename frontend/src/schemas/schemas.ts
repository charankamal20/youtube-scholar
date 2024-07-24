import * as z from "zod";

export const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  note: z
    .string()
    .min(10, {
      message: "Note must be at least 10 characters.",
    })
    .max(160, {
      message: "Note must not be longer than 30 characters.",
    }),
});

export const TimerSchema = z.object({
  pin: z.string().min(4, {
    message: "Time cannot be empty.",
  }),
});



export const PomodoroSchema = z.object({
  workMinutes: z.string().min(1).max(2).regex(/^\d+$/, "Invalid input"),
  shortBreakMinutes: z.string().min(1).max(2).regex(/^\d+$/, "Invalid input"),
  longBreakMinutes: z.string().min(1).max(2).regex(/^\d+$/, "Invalid input"),
  cyclesBeforeLongBreak: z.string().min(1).regex(/^\d+$/, "Invalid input"),
});