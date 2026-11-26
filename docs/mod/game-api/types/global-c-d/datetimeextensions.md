---
title: "DateTimeExtensions"
description: "Formats a date for use in file and folder names, for example by profiling commands."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DateTimeExtensions

A **static class** in `Root.Township`, the global namespace.

Formats a date for use in file and folder names, for example by profiling commands.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Attributes** `Extension`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-foldersaveformat" /><code>{"const string FolderSaveFormat"}</code> | The format used: `yyyy-MM-dd_HH-mm-ss`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tofolderfriendlystring" /><code>{"static string ToFolderFriendlyString(DateTime dateTime)"}</code> | Formats the date with `FolderSaveFormat`. |
