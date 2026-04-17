// js/config.js
// SUPABASE CONFIGURATION
// Armed by Chairman via live directive.
const SUPABASE_URL = 'https://xmvuxryhaokkobryjeuw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdnV4cnloYW9ra29icnlqZXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzI4OTcsImV4cCI6MjA5MjAwODg5N30.-HL54tRwp16KjzLm1J8ojlWrj4PstqVc8_UlFvZAIwo';

// The Supabase CDN script automatically creates a global 'supabase' object.
// We must use 'supabase.createClient' and assign it to a differently named variable to avoid a naming collision.
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
