export async function GET() {
  return Response.json({ random: Math.random() })
}
