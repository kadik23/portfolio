import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const apiKey = process.env.SHEET_ID;

export async function POST(req: NextRequest) {
    try {
        // Auth
        const auth = await google.auth.getClient({
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const body = await req.json();
        const { Firstname, Lastname, Email, Phone, Service, Message } = body;

        if (!Firstname || !Lastname || !Email || !Phone || !Service || !Message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        await sheets.spreadsheets.values.append({
            auth,
            spreadsheetId: apiKey,
            range: 'Contact!A:F',
            valueInputOption: 'USER_ENTERED',
            resource: {
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
