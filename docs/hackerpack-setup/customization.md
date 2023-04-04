---
sidebar_position: 2
---

# Customization Options

We designed the hackerpack to be as easy as possible to customize! In the hackerpack components directory `(components/hackerpackComponents)`, you should see a `hackerpack-settings.json` file. This file contains the main toggleable options for editing the hackerpack. The format is as shown (with the example data):

```json
{
  "sidebar": true,
  "mainContent": "markdown",
  "notionPageId": "b76d2dee46474cd0a9bb7f62b384ad25"
}

```

- The `sidebar` attribute (boolean) will show the sidebar + mobile menu navigator when set to `true`. 
- The `mainContent` attribute (string) determines how the page will be displayed, with 3 possible options:
    - `markdown` - generate content from a Markdown file (replace the `pages/hackerpacks/Components/markdown/index.md` file with your custom markdown file)
    - `notion` - generate content from a Notion page
    - `html` - manually add React/JSX in the `pages/hackerpacks/index.tsx` file)
- If you pick the Notion page option, make sure to include the `notionPageId` attribute, which is an ID for a **public** Notion page (see [the official Notion docs](https://developers.notion.com/docs/working-with-page-content#creating-a-page-with-content)).

