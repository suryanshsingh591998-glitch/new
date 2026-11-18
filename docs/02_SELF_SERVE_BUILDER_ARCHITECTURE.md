# 🛠️ Self-Serve Builder Architecture & Technical Blueprint

This document explains the full technical implementation plan to build the self-serve creator tool (`/create`) and the dynamic gift viewer (`/b/[id]`).

---

## 🏗️ 1. High-Level Architecture

```
                    ┌──────────────────────────────────────────────┐
                    │               /create (Builder)              │
                    │  - Multi-step form for text & photos         │
                    │  - Photo cropper / upload dropzones          │
                    │  - Live 3D Flipbook Preview modal            │
                    │  - Passcode verification (VIP payment check) │
                    └──────────────────────┬───────────────────────┘
                                           │
                                           │ Uploads media & JSON payload
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │       Storage & Database (e.g. Supabase)     │
                    │  - Storage Bucket: 'photos' (CDN URLs)       │
                    │  - Table: 'celebrations' (JSON config)       │
                    └──────────────────────┬───────────────────────┘
                                           │
                                           │ Fetches config by ID or Slug
                                           ▼
                    ┌──────────────────────────────────────────────┐
                    │             /b/[id] (Gift Viewer)            │
                    │  - Same 3D Flipbook, Curtain, & Music engine │
                    │  - Injects dynamic text, photos & letters    │
                    │  - Fast SSR/ISR rendering for mobile viewers │
                    └──────────────────────────────────────────────┘
```

---

## 📝 2. The `/create` Multi-Step Wizard Flow

When a paying customer opens `/create`, guide them through a clean 4-step wizard:

### Step 1: Basic Information
- **Recipient Name:** (e.g. "Riya", "Kabir")
- **Nickname / Pet Name:** (e.g. "Chotu", "My Love")
- **Relationship Type:** Dropdown selector:
  - *Girlfriend / Wife*
  - *Boyfriend / Husband*
  - *Best Friend*
  - *Sister / Brother*
- **Age & Date:** (e.g., "21st Birthday", "October 24, 2026")

### Step 2: Custom Text & Memories
- **Cover Headline:** (Default: *"VOGUE - SPECIAL BIRTHDAY EDITION"*)
- **Personal Love Letter / Note:** Rich textarea for Page 8/9.
- **"10 Reasons Why You're Special":** 10 editable inputs (pre-filled with heartwarming defaults).
- **Final Page Quote:** (e.g., *"To infinity and beyond"*)

### Step 3: Photos & The 11-Photo Heart Collage
Provide labeled upload boxes with instant preview thumbnails:
1. **Cover Photo:** Portrait (3:4 ratio)
2. **Page 2 & 3 Polaroids:** 3 casual photos
3. **The 11-Photo Heart Collage (Pages 11 & 12):**
   * Render a mini interactive visual diagram of the heart with 11 numbered slots:
     - Slot 1 & 2: Top left & right lobes
     - Slot 3, 4, 5: Upper middle row (Slot 4 crosses the spine fold)
     - Slot 6, 7, 8: Center row (Slot 7 crosses the spine fold)
     - Slot 9, 10: Lower tapered row
     - Slot 11: Bottom tip (crosses the spine fold)
4. **Hero Portraits:** 2-3 full page editorial shots.

### Step 4: Music & Background
- **Audio Selector:**
  - Option A: Choose from 5 romantic preset tracks (pre-uploaded royalty-free songs).
  - Option B: Paste custom MP3 / audio link.
- **Passcode Field:**
  - Client enters the secret code provided after payment (e.g., `VIP-8492`).

---

## 🗄️ 3. Supabase Database Schema (Copy & Paste)

If using Supabase (recommended free tier), create this table in the SQL Editor:

```sql
-- 1. Create Celebrations Table
CREATE TABLE celebrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  access_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  data JSONB NOT NULL,
  is_active BOOLEAN DEFAULT TRUE
);

-- 2. Create Storage Bucket for Uploaded Photos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('celebration-photos', 'celebration-photos', true);

-- 3. Set Public Read Access for Photos
CREATE POLICY "Public Photos Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'celebration-photos');

-- 4. Enable Insert for Authorized Uploads
CREATE POLICY "Public Upload Access"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'celebration-photos');
```

---

## 📁 4. Files to Create When Ready to Implement

1. **`types/celebration-config.ts`**: Unified TypeScript interface matching the entire magazine layout. *(Already generated for you!)*
2. **`lib/supabaseClient.ts`**: Simple client to handle image uploads and data fetching.
3. **`app/create/page.tsx`**: The customer-facing form & live preview wizard.
4. **`app/b/[slug]/page.tsx`**: The personalized gift page that loads data from Supabase and passes it to `<Book data={celebrationData} />`.
5. **`components/Book.tsx` & `components/MagazinePages.tsx`**: Update components to accept `props.data` with fallback to default demo data.

---

## 💡 Quick Tips for Maximum Sales Conversion
- Provide default sample text in every input box so the user never faces a "blank page" block.
- Support a **"Quick Autofill for Best Friend"** and **"Quick Autofill for Partner"** button to fill in standard romantic or friendship quotes automatically.
