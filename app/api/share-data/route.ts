import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';

console.log("API route /api/share-data/route.ts is being processed"); // Add this line

export async function POST(request: Request) {
    console.log("POST request to /api/share-data received"); // Add this line
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File | null;

        if (!file) {
            console.warn('No file was uploaded.');
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        console.log("File uploaded:", file.name); // Add this line

        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rawData: any[] = XLSX.utils.sheet_to_json(worksheet);

        console.log("Excel data parsed:", rawData);  //Add this line

        return NextResponse.json({ message: "API route works!" });

    } catch (error) {
        console.error("Error processing request", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}