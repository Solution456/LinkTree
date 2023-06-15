import {createClient} from '@supabase/supabase-js'


import {Database} from '@/http/supabase_type'

const supabaseUrl = import.meta.env.VUE_PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VUE_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient<Database>(supabaseUrl,supabaseAnonKey)