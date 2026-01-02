// Test script to verify Supabase connection
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Anon Key exists:', !!supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  console.log('\n🔄 Testing database connection...\n');

  // Test 1: Check if table exists and count records
  const { data: countData, error: countError } = await supabase
    .from('Enquiries')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('❌ Connection failed:', countError.message);
    return false;
  }

  console.log('✅ Connection successful!');
  console.log(`📊 Current records in Enquiries table: ${countData?.length || 0}\n`);

  // Test 2: Insert a dummy record
  console.log('🔄 Inserting test record...\n');

  const testEnquiry = {
    name: 'Test User',
    email: 'test@example.com',
    phone: 1234567890,
    company: 'Test Company',
    industry: 'Technology',
    challenges: 'This is a test enquiry to verify database connectivity.'
  };

  const { data: insertData, error: insertError } = await supabase
    .from('Enquiries')
    .insert([testEnquiry])
    .select();

  if (insertError) {
    console.error('❌ Insert failed:', insertError.message);
    return false;
  }

  console.log('✅ Test record inserted successfully!');
  console.log('📝 Inserted record:', insertData[0]);
  console.log(`🆔 Record ID: ${insertData[0].id}\n`);

  // Test 3: Retrieve the record
  console.log('🔄 Retrieving test record...\n');

  const { data: selectData, error: selectError } = await supabase
    .from('Enquiries')
    .select('*')
    .eq('id', insertData[0].id)
    .single();

  if (selectError) {
    console.error('❌ Retrieval failed:', selectError.message);
    return false;
  }

  console.log('✅ Record retrieved successfully!');
  console.log('📄 Retrieved record:', selectData);

  console.log('\n✅ All tests passed! Database is ready to use.\n');

  return true;
}

testConnection()
  .then(() => {
    console.log('🎉 Database setup complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Test failed:', error);
    process.exit(1);
  });
