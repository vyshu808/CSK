import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import type { ShareData } from '@/app/types/share'; // Assuming this is the correct path to your type definition

// Define the expected structure for ShareData (adjust this to match your Excel columns)
interface ExcelRow {
  date?: string;  //Date should be a String format
  price?: number;
  volume?: number;
  marketCap?: number;
  peRatio?: number;
  bookValue?: number;
  dividendYield?: number;
  eps?: number;
  faceValue?: number;
  [key: string]: any; // Allow other columns
}

// Function to validate each row of the Excel data
function isValidExcelRow(row: any): row is ExcelRow {
  return (
    typeof row === 'object' &&
    row !== null &&
    (row.date === undefined || typeof row.date === 'string') &&
    (row.price === undefined || typeof row.price === 'number') &&
    (row.volume === undefined || typeof row.volume === 'number') &&
    (row.marketCap === undefined || typeof row.marketCap === 'number') &&
    (row.peRatio === undefined || typeof row.peRatio === 'number') &&
    (row.bookValue === undefined || typeof row.bookValue === 'number') &&
    (row.dividendYield === undefined || typeof row.dividendYield === 'number') &&
    (row.eps === undefined || typeof row.eps === 'number') &&
    (row.faceValue === undefined || typeof row.faceValue === 'number')
  );
}

// Main POST handler for the /api/share-data route
export async function POST(request: Request) {
  try {
    // 1. Extract the file from the FormData
    const formData = await request.formData();
    const file = formData.get('file') as File | null; // Get the file from the FormData

    // 2. Handle the case where no file was uploaded
    if (!file) {
      console.warn('No file was uploaded.');
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 }); // Return a 400 Bad Request
    }

    // 3. Read the file as an ArrayBuffer
    const buffer = await file.arrayBuffer();

    // 4. Parse the Excel data
    const workbook = XLSX.read(buffer);
    const sheetName = workbook.SheetNames[0]; // Get the name of the first sheet
    const worksheet = workbook.Sheets[sheetName]; // Get the worksheet
    const rawData: any[] = XLSX.utils.sheet_to_json(worksheet); // Convert the sheet to JSON

    // 5. Validate the data
    const validatedData: ExcelRow[] = [];
    for (const row of rawData) {
      if (!isValidExcelRow(row)) {
        console.error('Invalid data format in row:', row);
        return NextResponse.json({ error: 'Invalid data format in Excel file' }, { status: 400 });
      }
      validatedData.push(row);
    }

    // 6. Transform the data to ShareData (assuming it needs transformation)

    // 7. Save the data to your database (replace this with your actual database logic)

    // 8. Return a success response
    console.log('Excel file processed successfully.');
    return NextResponse.json({ success: true, data: validatedData }, { status: 200 });

  } catch (error) {
    // 9. Handle errors
    console.error('Error processing Excel file:', error);
    return NextResponse.json({ error: 'Failed to process Excel file' }, { status: 500 }); // Return a 500 Internal Server Error
  }
}