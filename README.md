# CheekyEscapes

**CheekyEscapes** is a collaborative travel planning app that lets groups plan a holiday together from idea to booking — all through a single shared link. It’s designed to make group holidays happen faster, with less friction, and more follow-through.

---

## 🚀 What We're Building

A TypeScript-based fullstack web app that lets:
- A user create a trip idea (date, budget, vibe).
- AI generate a set of holiday options (destinations + hotels + flights).
- A link be shared to the group chat.
- Friends vote on destinations Tinder-style (yes/no or 1–5 rating).
- The group converges on the best option.
- Booking links and follow-ups are auto-triggered.

We also support a B2B angle: Vendors (hotels, airlines, booking sites) can receive warm leads and automate follow-ups after a trip is finalized.

---

## 🧱 Tech Stack

**Frontend**
- React + Next.js (App Router)
- TailwindCSS
- Framer Motion for animations
- Aceternity UI for components

**Backend**
- tRPC (type-safe API routes)
- PostgreSQL (via Prisma ORM)
- Auth: Clerk or Lucia
- Realtime: Pusher or Supabase Realtime

**Infra & Tooling**
- Vercel (frontend deployment)
- Railway or Fly.io (backend + DB)
- TypeScript + GitHub

---

## 🗂️ Key Features

- Trip creation (title, budget, vibe, month)
- AI-generated travel options
- Invite links to group chat
- Live collaborative voting
- Group convergence logic
- Final trip lock-in & booking CTA
- B2B vendor follow-ups + lead tracking

---

## 🧠 Database Schema (Postgres)

- `User` — people using the app
- `Trip` — central planning entity
- `TripMember` — who’s in which trip
- `Destination` — AI-generated travel options
- `Vote` — user feedback on destinations
- `FinalChoice` — confirmed group pick
- `Vendor` — hotels, flights, etc.
- `Lead` — booking intent tracking

See `/prisma/schema.prisma` for full schema.

---

## 📁 tRPC Procedures (WIP)

- `createTrip`
- `joinTrip`
- `addDestination`
- `voteDestination`
- `finalizeTrip`
- `createVendor`
- `trackLead`

---

## 🧪 Working Style for Reviews

- I'm building this as a learning + portfolio project.
- Code reviews are welcome anytime — please point out code smells, missed patterns, or better practices.
- Don’t worry about hurting feelings — I’m optimizing for speed *and* clarity.
- If you have suggestions for architecture refactor or tRPC structure, I’m all ears.

---

## 🧭 Roadmap (High Level)

- [ ] MVP trip creation & link sharing
- [ ] Voting flow
- [ ] Real-time sync
- [ ] Final trip convergence & booking
- [ ] Admin dashboard
- [ ] B2B lead system

---

## 🙌 Thanks

Appreciate your help reviewing, building, or guiding. Ping me in the repo or DM if you ever want context, walkthroughs, or help exploring the codebase.

Let’s make this fun, useful, and launchable 🚀
