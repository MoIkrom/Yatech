const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://twdrhtuztpfplbkngyst.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZHJodHV6dHBmcGxia25neXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0NDg0NTYsImV4cCI6MTk5NTAyNDQ1Nn0.sb2F43MBaCKUgkMjDm7xPwxkMY4I0AkNK4uQqmvT3KY";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
