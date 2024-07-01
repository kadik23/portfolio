import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sheets_v4 } from 'googleapis/build/src/apis/sheets/v4';
import fs from 'fs';
import path from 'path';
import os from 'os';

export async function POST(req: NextRequest) {
    const base64Credentials: string = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64 as string;
    const tmpDir = os.tmpdir();
    const credentialsPath = path.join(tmpDir, 'secrets.json');

    // Ensure the tmp directory exists
    if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir);
    }

    fs.writeFileSync(credentialsPath, Buffer.from(base64Credentials, 'base64'));
    process.env.GOOGLE_APPLICATION_CREDENTIALS = credentialsPath;
    try {
        // Auth
        const auth = await google.auth.getClient({
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth }) as sheets_v4.Sheets;
        const body = await req.json();
        const { Firstname, Lastname, Email, Phone, Service, Message } = body;

        if (!Firstname || !Lastname || !Email || !Phone || !Service || !Message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range: 'Contact!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [Firstname, Lastname, Email, Phone, Service, Message],
                ],
            },
        });

        return NextResponse.json({ message: 'Success' });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
