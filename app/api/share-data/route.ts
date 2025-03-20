import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import type { ShareData } from '@/app/types/share';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Validate data structure
    if (!validateShareData(data[0])) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      );
    }

    // Here you would typically save the data to your database
    // For now, we'll just return the parsed data
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing Excel file:', error);
    return NextResponse.json(
      { error: 'Failed to process Excel file' },
      { status: 500 }
    );
  }
}

function validateShareData(data: any): data is ShareData {
  return (
    typeof data.date === 'string' &&
    typeof data.price === 'number' &&
    typeof data.volume === 'number' &&
    typeof data.marketCap === 'number' &&
    typeof data.peRatio === 'number' &&
    typeof data.bookValue === 'number' &&
    typeof data.dividendYield === 'number' &&
    typeof data.eps === 'number' &&
    typeof data.faceValue === 'number'
  );
}