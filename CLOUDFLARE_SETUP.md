# Cloudflare Setup Instructions

Follow these steps to configure your Cloudflare account and deploy the new form submission system.

## 1. Create a Cloudflare D1 Database

1.  **Navigate to the Cloudflare Dashboard:** Log in to your Cloudflare account and go to **Workers & Pages** > **D1**.
2.  **Create a New Database:** Click **Create database**.
3.  **Name Your Database:** Enter `artjournalfoundation-db` as the database name.
4.  **Get Your Database ID:** After the database is created, you'll be taken to its detail page. Copy the **Database ID** (a long string of letters and numbers).
5.  **Update `wrangler.toml`:** Open the `wrangler.toml` file in your project and paste the Database ID into the `database_id` field.

    ```toml
    [[d1_databases]]
    binding = "DB"
    database_name = "artjournalfoundation-db"
    database_id = "YOUR_DATABASE_ID_HERE"
    ```

## 2. Create a Cloudflare Turnstile Site

1.  **Navigate to Turnstile:** In the Cloudflare dashboard, go to **Turnstile**.
2.  **Add a New Site:** Click **Add site**.
3.  **Configure Your Site:**
    *   **Site name:** `artjournalfoundation`
    *   **Domain:** Your website's domain (e.g., `artjournalfoundation.com`).
    *   **Widget type:** `Managed`
4.  **Get Your Keys:** After the site is created, you'll be given a **Site Key** and a **Secret Key**.

## 3. Configure Environment Variables

1.  **Navigate to Your Project:** In the Cloudflare dashboard, go to **Workers & Pages** and select your `artjournalfoundation` project.
2.  **Go to Settings:** Click on **Settings** > **Environment variables**.
3.  **Add Production Variables:** Add the following two environment variables:

    *   `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Your Turnstile **Site Key**.
    *   `TURNSTILE_SECRET_KEY`: Your Turnstile **Secret Key**.

## 4. Run Database Migrations

1.  **Open a Terminal:** Open a terminal in your local project directory.
2.  **Run the Migration Command:** Run the following command to apply the database schema to your D1 database.

    ```bash
    npx wrangler d1 migrations apply artjournalfoundation-db --local
    ```

    *Note: If you're deploying directly to production, you can omit the `--local` flag.*

## 5. Test the Forms

1.  **Deploy Your Project:** Deploy your project to Cloudflare Pages.
2.  **Navigate to a Form:** Open any of the forms on your live site (e.g., the "Become a Speaker" form).
3.  **Fill Out and Submit:** Fill out the form and submit it.
4.  **Verify the Submission:**
    *   Go to your D1 database in the Cloudflare dashboard.
    *   Click on the `form_submissions` table.
    *   You should see a new row with the data you just submitted.
