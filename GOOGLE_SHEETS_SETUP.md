# How to Connect the Contact Form to Google Sheets

Follow these steps to receive all form submissions in a Google Sheet + email notification.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"AI Freedom Institute - Leads"**
4. In Row 1, add these headers (exactly as shown):

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| Timestamp | Name | Phone | Email | School | Role | Message |

## Step 2: Open Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Paste the following code:

```javascript
// Google Apps Script — Form Handler for AI Freedom Institute
// This receives form data and saves it to this spreadsheet

const NOTIFICATION_EMAIL = "info@aifreedom.in"; // Change if needed

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append row to sheet
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.school || "",
      data.role || "",
      data.message || ""
    ]);
    
    // Send email notification
    if (NOTIFICATION_EMAIL) {
      const subject = `🎯 New Lead: ${data.school || "Unknown School"} - AI Freedom Institute`;
      const body = `
New Workshop Inquiry Received!
================================

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
School/College: ${data.school}
Role: ${data.role || "Not specified"}
Message: ${data.message || "No message"}

Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

---
This lead was submitted via aifreedom.in
      `;
      
      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        body: body
      });
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data saved" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "AI Freedom Form Handler Active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy as Web App

1. Click **Deploy → New Deployment**
2. Click the ⚙️ gear icon → Select **Web app**
3. Set these options:
   - **Description**: "AI Freedom Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** → Choose your Google account → Allow permissions
6. **Copy the Web App URL** — it looks like:
   `https://script.google.com/macros/s/AKfycbx.../exec`

## Step 4: Add the URL to Your Website

Give me the Web App URL and I'll update the landing page code. Or replace it yourself in `index.html` — search for:

```
GOOGLE_SCRIPT_URL
```

And replace with your actual URL.

## That's it! 🎉

Every form submission will now:
- ✅ Save to your Google Sheet automatically
- ✅ Send you an email notification at info@aifreedom.in
- ✅ Show success message to the visitor
