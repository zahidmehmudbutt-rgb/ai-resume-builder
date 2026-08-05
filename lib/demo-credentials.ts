/**
 * Demo account surfaced on the sign-in form.
 *
 * This is a seeded demonstration login for the public demo deployment and holds
 * no real data. Keep it in step with the account provisioned in Supabase auth.
 */

export interface DemoAccount {
  role: string;
  email: string;
  password: string;
  blurb: string;
}

export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    role: "Demo user",
    email: "demo@resume.test",
    password: "Demo1234!",
    blurb: "Build, score, and export a resume",
  },
];
