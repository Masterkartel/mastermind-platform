export async function createPosSale(payload:any){
  const res = await fetch("/api/sales",{
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify(payload)
  });

  if(!res.ok){
    throw new Error("Failed to create sale");
  }

  return res.json();
}
