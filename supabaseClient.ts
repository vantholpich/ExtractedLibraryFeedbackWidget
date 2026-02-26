import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and Anon Key
const supabaseUrl = 'https://cepncaweaxczveipoxqb.supabase.co';
const supabaseKey = 'sb_publishable_v63Xq8bZ1hehm5qrwAU_nQ_-GtUKgPv';

export const supabase = createClient(supabaseUrl, supabaseKey);
