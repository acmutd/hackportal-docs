---
sidebar_position: 3
---

# Sidebar Generation

The sidebar will display `h1` and `h2` headings, with the `h2` tags nested under their respective `h1` tag. This will differ in generation methods based on how you generate your main content. The sidebar is automatically generated if content is either rendered from Markdown or from Notion.

* If the `mainContent` attribute is set to `markdown`, the sidebar will be generated based on `# [main headings]` and `## [subheadings]` as the `h1` and `h2` tags.
* If the `mainContent` attribute is set to `notion`, the sidebar will be generated based on Notion's `Heading 1` and `Heading 2` blocks.

**NOTE**: Pages should contain a main heading (`# [heading name]` or Notion's `Heading 1`) first to generate the sidebar correctly, as subheadings are nested under the main headings.

Unfortunately, there is no good way to read hardcoded HTML and generate a sidebar, so if you have a custom HTML page, you will need to modify the `sidebar-content.json` file to generate a working sidebar.
