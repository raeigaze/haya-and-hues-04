# Haya & Hues — storefront + studio

Editorial hijab commerce foundation built for Vercel + Supabase.

## Pages
Home, Shop, Collections, Product detail, About, Contact, Cart, Checkout and Admin route.

## Product model
The public catalogue starts empty. Published products are read from Supabase. Product fields support name, slug, category, price, compare-at price, short description, description, image URL, gallery images, features, colors, stock and published status.

## Visual assets
Add the supplied visual assets under `public/assets/`. The current UI expects `hero.jpg`, `collection.jpg`, and `fabric.jpg`. If your filenames differ, update the `demo` array in `src/main.jsx`.

## Supabase
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. Create an Auth admin account.
4. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel project environment variables.
5. Add the authenticated admin policies/storage bucket before enabling browser-side product CRUD.

## Vercel
Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

This checkout stores orders in Supabase when connected. Payment processing is intentionally not claimed as live until a payment provider is connected.