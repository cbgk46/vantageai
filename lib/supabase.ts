import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our Enquiries table
export interface Enquiry {
  id?: number;
  name: string;
  email: string | null;
  phone: number | null;
  company: string | null;
  industry: string | null;
  challenges: string | null;
}

// Function to insert enquiry
export async function insertEnquiry(enquiry: Omit<Enquiry, 'id'>) {
  const { data, error } = await supabase
    .from('Enquiries')
    .insert([enquiry])
    .select();

  if (error) {
    console.error('Error inserting enquiry:', error);
    throw error;
  }

  return data;
}

// Function to test connection
export async function testConnection() {
  const { data, error } = await supabase
    .from('Enquiries')
    .select('count');

  if (error) {
    console.error('Connection test failed:', error);
    return false;
  }

  console.log('Connection successful!');
  return true;
}
