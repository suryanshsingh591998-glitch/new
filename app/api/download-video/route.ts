import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "videos", "magazine-flip.mp4");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Video file not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "video/mp4",
      "Content-Disposition": 'attachment; filename="sweety-birthday-magazine.mp4"',
      "Content-Length": fileBuffer.length.toString(),
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
      "Accept-Ranges": "bytes",
    },
  });
}
