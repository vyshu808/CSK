import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const spreadsheetId = process.env.SPREADSHEET_ID;

export async function appendToGoogleSheet(data) {
    try {
        const values = [[data.name, data.email, data.phone, data.message]];  //Format the data to be appended

        const request = {
            spreadsheetId,
            range: 'Sheet1', // Change 'Sheet1' if your sheet has a different name
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                values,
            },
            auth,
        };

        const response = (await sheets.spreadsheets.values.append(request)).data;
        console.log(JSON.stringify(response, null, 2));
        return response;
    } catch (err) {
        console.error('Error appending to sheet', err);
        throw err;
    }
}

export async function updateGoogleSheet(data) { //Sample implementation that takes excel data and pushes it to the sheet
    try {
        // Assuming you want to write the whole data at once to the sheet
        const values = data.map(item => Object.values(item));

        const request = {
            spreadsheetId,
            range: 'Sheet1', // Adjust to your desired sheet and range
            valueInputOption: 'USER_ENTERED',
            resource: {
                values,
            },
            auth,
        };

        const response = (await sheets.spreadsheets.values.update(request)).data;
        console.log(JSON.stringify(response, null, 2));
        return response;
    } catch (error) {
        console.error('Error updating Google Sheet:', error);
        throw error;
    }
}