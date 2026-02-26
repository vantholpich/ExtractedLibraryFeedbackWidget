"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
var supabase_js_1 = require("@supabase/supabase-js");
// Replace these with your actual Supabase URL and Anon Key
var supabaseUrl = 'https://cepncaweaxczveipoxqb.supabase.co';
var supabaseKey = 'sb_publishable_v63Xq8bZ1hehm5qrwAU_nQ_-GtUKgPv';
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
