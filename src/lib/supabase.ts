import { createClient} from "@supabase/supabase-js";

const supabaseURL = 'https://bxhqpeeagzrhounodrrq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4aHFwZWVhZ3pyaG91bm9kcnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3OTg4MTcsImV4cCI6MjA3NzM3NDgxN30.WUGZ1GjetN6H6jcsYDhX1s7jT_x4CSVlFUDgIgeIHOU'

export const supabase = createClient(supabaseURL,supabaseKey)