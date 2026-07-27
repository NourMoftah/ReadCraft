import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { generateMockReadme } from "@/features/readme/mock-readme";

export async function POST(request: Request) {
  try {
    const { isAuthenticated } = await auth();
    if (!isAuthenticated) return NextResponse.json({ error: "Authentication is required." }, { status: 401 });
    const body = await request.json() as { repositoryUrl?: unknown };
    if (typeof body.repositoryUrl !== "string" || !/^https:\/\/github\.com\/[^/]+\/[^/]+/i.test(body.repositoryUrl)) {
      return NextResponse.json({ error: "Enter a valid GitHub repository URL." }, { status: 400 });
    }
    return NextResponse.json({ markdown: generateMockReadme(body.repositoryUrl), source: "mock" });
  } catch {
    return NextResponse.json({ error: "The request could not be processed. Please try again." }, { status: 400 });
  }
}
