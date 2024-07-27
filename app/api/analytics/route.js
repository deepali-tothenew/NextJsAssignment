export async function POST(req) {
    const metrics = await req.json();
  
    // Process metrics (e.g., store in a database, send to an analytics service)
    console.log('Received Web Vitals metrics:', metrics);
  
    return new Response(JSON.stringify({ status: 'success' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }