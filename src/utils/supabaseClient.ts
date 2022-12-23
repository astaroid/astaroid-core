import { createClient } from "@supabase/supabase-js"

const {
    SUPABASE_KEY,
    SUPABASE_URL
} = import.meta.env

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabaseClient