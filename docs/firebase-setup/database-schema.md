---
sidebar_position: 1
---

# Database Schema

This page describes the database schema for HackPortal. The schema is subject to change, but this page will be updated to reflect any changes.

As information is added to the database, the updates will show on the local server.

```xml
Example Layout
- collection
    - document
        - field 1 [type]
        - field 2 [type]

Challenges
- challenges
    - [document]
        - title [string]
        - description [string]
        - organization [string]
        - prizes [array of strings]
        - rank [number]

FAQs
- faqs
    - [document]
        - question [string]
        - answer [string]

Keynote Speakers
- keynotespeakers
    - [document]
        - name [string]
        - description [string]
        - fileName [string]

Team Members
- members
    - [document]
        - name [string]
        - description [string]
        - github [string]
        - linkedin [string]
        - personalSite [string]
        - fileName [string]
        - rank [number]

Event Schedule
- schedule-events
    - [document]
        - title [string]
        - description [string]
        - location [string]
        - page [string]
        - startDate [timestamp]
        - endDate [timestamp]
        - Event [number]

Sponsor Logos
- sponsors
    - [document]
        - link [string]
        - reference [string]
```

Other:
Announcements, Registrations, and Scan Types will update as added by an Admin.
Tokens will update as people accept push notifications from the site.   