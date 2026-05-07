# EmailJS Setup Guide for Final Journey Contact Form

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. The free tier allows 200 emails/month

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID** (e.g., `service_finaljourney`)

## Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Give it a name and note the **Template ID** (e.g., `template_contact`)
4. Use the following template content:

### Subject:

```
New Enquiry from {{from_name}} - {{funeral_type}}
```

### Content (HTML):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body
    style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #faf8f5;"
  >
    <table
      role="presentation"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="max-width: 600px; margin: 0 auto; background-color: #ffffff;"
    >
      <!-- Header -->
      <tr>
        <td
          style="background-color: #4a4a47; padding: 30px 40px; text-align: center;"
        >
          <h1
            style="margin: 0; color: #c9a962; font-family: Georgia, serif; font-size: 28px; font-weight: 600;"
          >
            Final Journey
          </h1>
          <p
            style="margin: 10px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;"
          >
            Funeral Directors, Carlisle
          </p>
        </td>
      </tr>

      <!-- Gold Accent Bar -->
      <tr>
        <td style="background-color: #c9a962; height: 4px;"></td>
      </tr>

      <!-- Main Content -->
      <tr>
        <td style="padding: 40px;">
          <h2
            style="margin: 0 0 20px; color: #4a4a47; font-family: Georgia, serif; font-size: 24px; font-weight: 600;"
          >
            New Contact Enquiry
          </h2>

          <p style="margin: 0 0 30px; color: #5a5a56; line-height: 1.6;">
            You have received a new enquiry through the website contact form.
          </p>

          <!-- Enquiry Details Box -->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="background-color: #faf8f5; border-left: 4px solid #c9a962; margin-bottom: 30px;"
          >
            <tr>
              <td style="padding: 25px;">
                <table
                  role="presentation"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                >
                  <tr>
                    <td
                      style="padding: 8px 0; color: #8b8b88; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;"
                    >
                      Name
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="padding: 0 0 20px; color: #4a4a47; font-size: 16px;"
                    >
                      {{from_name}}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="padding: 8px 0; color: #8b8b88; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;"
                    >
                      Email
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 0 20px;">
                      <a
                        href="mailto:{{from_email}}"
                        style="color: #c9a962; text-decoration: none; font-size: 16px;"
                        >{{from_email}}</a
                      >
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="padding: 8px 0; color: #8b8b88; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;"
                    >
                      Phone
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 0 0 20px;">
                      <a
                        href="tel:{{phone}}"
                        style="color: #c9a962; text-decoration: none; font-size: 16px;"
                        >{{phone}}</a
                      >
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="padding: 8px 0; color: #8b8b88; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;"
                    >
                      Service Type
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="padding: 0 0 20px; color: #4a4a47; font-size: 16px;"
                    >
                      {{funeral_type}}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="padding: 8px 0; color: #8b8b88; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;"
                    >
                      Message
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="padding: 0; color: #4a4a47; font-size: 16px; line-height: 1.6;"
                    >
                      {{message}}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Action Button -->
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            style="margin: 0 auto;"
          >
            <tr>
              <td style="background-color: #c9a962; border-radius: 4px;">
                <a
                  href="mailto:{{from_email}}"
                  style="display: inline-block; padding: 14px 30px; color: #4a4a47; text-decoration: none; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;"
                >
                  Reply to Enquiry
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td
          style="background-color: #4a4a47; padding: 30px 40px; text-align: center;"
        >
          <p
            style="margin: 0 0 10px; color: rgba(255,255,255,0.7); font-size: 14px;"
          >
            2 Durdar Road, Carlisle, Cumbria, CA2 4SA
          </p>
          <p
            style="margin: 0 0 10px; color: rgba(255,255,255,0.7); font-size: 14px;"
          >
            <a
              href="tel:01228595060"
              style="color: #c9a962; text-decoration: none;"
              >01228 595060</a
            >
            |
            <a
              href="tel:07745354100"
              style="color: #c9a962; text-decoration: none;"
              >07745 354100</a
            >
          </p>
          <p
            style="margin: 15px 0 0; color: rgba(255,255,255,0.5); font-size: 12px;"
          >
            This email was sent from the Final Journey website contact form
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
```

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update the Contact Page

Open `/app/contact/page.tsx` and update these values:

```typescript
await emailjs.send(
  'service_finaljourney', // Replace with your Service ID
  'template_contact', // Replace with your Template ID
  {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    funeral_type: funeralTypeOptions.find(
      (opt) => opt.value === data.funeralType,
    )?.label,
    message: data.message,
    to_email: 'ceden1983@gmail.com',
  },
  'YOUR_PUBLIC_KEY', // Replace with your Public Key
);
```

## Step 6: Set the Recipient Email

In your EmailJS template settings:

1. Set the **To Email** field to: `{{to_email}}` or directly to `ceden1983@gmail.com`
2. Set **Reply To** to: `{{from_email}}`

## Testing

1. Run `npm run dev` to start the development server
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your inbox for the styled email

## Production Notes

- For production, consider storing your EmailJS credentials as environment variables
- You can create a `.env.local` file:
  ```
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_finaljourney
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
  ```
- Then update the contact page to use: `process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID`, etc.
