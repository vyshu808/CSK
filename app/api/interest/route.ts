import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import type { InterestFormData } from '@/app/types/share';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export async function POST(request: Request) {
  try {
    const data: InterestFormData = await request.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Interest Form Responses!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          data.name,
          data.email,
          data.phone,
          data.investmentAmount,
          data.message,
          new Date().toISOString(),
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}