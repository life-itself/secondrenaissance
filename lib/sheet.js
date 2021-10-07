import { google } from 'googleapis';
import {readFileSync} from 'fs';
import {writeFileSync} from 'fs';
import pkg from 'papaparse';
const { parse } = pkg;
import  mql from '@microlink/mql';


export async function getOrganizations() {
  // TODO: work out nicer variable for this
  if (process.env.USE_DATA_FROM_GOOGLE_SHEETS) {
    const out = await getOrganizationsFromGoogleSheet()
    return out
  } else {
    const file = readFileSync('data/organizations-sample.csv', 'utf8');
    const result = await parseCsvFile(file);
    return result.data
  }
}

const parseCsvFile = (rawFile) => new Promise((resolve, reject) => {
  parse(rawFile, {
    header: true,
    complete: result => {
      resolve(result);
    },
    error: function(error) {
      reject(error);
    }
  });
});

async function getOrganizationsFromGoogleSheet() {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const jwt = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    // we need to replace the escaped newline characters
    // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
    process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
  );

  const sheets = google.sheets({ version: "v4", auth: jwt });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: "Organizations",
  });

  const rows = response.data.values;

  if (rows.length) {
    // first row is headers
    const headers = rows.shift()

    return rows.map((row) => {
      return row.reduce(function(result, field, index) {
        result[headers[index].toLowerCase()] = field;
        return result;
      }, {})
    });
  } else {
    return [];
  }
}

async function getMicroLinkInfo() {
  const file = readFileSync('data/orgs-spreadsheet.csv', 'utf8')
  const orgSheet = await parseCsvFile(file)

  // console.log(result.data[0])

  var results = []

  for(const item of orgSheet.data) {
    const { status, data } = await mql(item.url,
      {
        screenshot: true,
        // fullPage: true
      }
    )
    data.slug = item.slug
    results.push(data)
    console.log(`Done: ${item.slug}`)
    writeFileSync('data/orgs-microlink.json', JSON.stringify(results, null, 2))
  }
}

(async() => {
  await getMicroLinkInfo()
})();