# How to Connect Leads to a Google Sheet

Every form submission across the site (lead magnet downloads + the 4 business tools at /businesstools) will appear in one Google Sheet, plus an email notification.

**Time required:** ~5 minutes.

## Step 1 — Create the Google Sheet

1. Go to <https://sheets.google.com>
2. Create a blank spreadsheet, rename it: **AI Freedom — Leads**
3. In Row 1, paste these column headers (copy this whole line and paste into A1, it auto-splits):

```
Timestamp	Tool	Name	Email	Phone	Business	Source	Magnet ID
```

You should now have 8 columns: A–H.

## Step 2 — Add the Apps Script

1. In your Google Sheet: **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Paste this code:

```javascript
// AI Freedom Institute — Leads handler
// Receives form data from aifreedom.in/api/lead and appends to this sheet.

const NOTIFICATION_EMAIL = "info@aifreedom.in"; // change if needed
const SEND_EMAIL = true;                         // set false to silence emails

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    sheet.appendRow([
      timestamp,
      data.tool || data.role || "",     // Tool (e.g., "AI Growth Consultant Report")
      data.name || "",
      data.email || "",
      data.phone || "",
      data.business || "",
      data.source || "",
      data.magnet || ""                 // the slug, useful for filtering
    ]);

    if (SEND_EMAIL && NOTIFICATION_EMAIL) {
      const subj = "🎯 New lead: " + (data.tool || "Form submission") + (data.business ? " — " + data.business : "");
      const body = [
        "New lead from aifreedom.in",
        "================================",
        "",
        "Tool:     " + (data.tool || "(none)"),
        "Name:     " + (data.name || "(none)"),
        "Email:    " + (data.email || "(none)"),
        "Phone:    " + (data.phone || "(none)"),
        "Business: " + (data.business || "(none)"),
        "Source:   " + (data.source || "(none)"),
        "",
        "Submitted: " + timestamp,
      ].join("\n");

      MailApp.sendEmail({ to: NOTIFICATION_EMAIL, subject: subj, body: body });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "AI Freedom Leads handler active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Save (⌘S / Ctrl+S). Name it: **AI Freedom Leads Handler**.

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the gear icon (top-left of the dialog) → choose **Web app**
3. Settings:
   - **Description:** AI Freedom Leads
   - **Execute as:** Me (your email)
   - **Who has access:** **Anyone** ← critical, must be Anyone (not "Anyone with Google account")
4. Click **Deploy**
5. Click **Authorize access** → pick your Google account → **Allow**
6. Copy the **Web app URL**. It looks like:

```
https://script.google.com/macros/s/AKfycbx.../exec
```

## Step 4 — Plug the URL into Vercel

Two ways:

### Option A — let Claude do it (paste the URL in chat)

Just paste the URL here and Claude will add it as the `LEAD_FORWARDING_URL` env var on Vercel and redeploy.

### Option B — DIY in your terminal

```bash
cd "/Users/ajitovhal/ai-freedom-engine/landing"
echo "https://script.google.com/macros/s/AKfycbx.../exec" | vercel env add LEAD_FORWARDING_URL production
vercel --prod
```

## Step 5 — Test

Submit any of the 4 tools at <https://www.aifreedom.in/businesstools> with your real details. Within a few seconds, you should see:

- A new row in your Google Sheet
- An email notification at info@aifreedom.in

## Updating the Apps Script later

If you change the script, you must **Deploy → Manage deployments → pencil icon → New version → Deploy**. The URL stays the same.

## Backfilling old leads

Leads submitted before you set this up are in Vercel function logs at <https://vercel.com/ajitovs-projects/landing/logs> (filter for `[lead]`). Anything from before today is recoverable from there.
