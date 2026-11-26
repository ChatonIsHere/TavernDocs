---
title: "CsvWriter"
description: "Extension methods for writing one comma-separated line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CsvWriter

A **static class** in `Root.Township`, the global namespace.

Extension methods for writing one comma-separated line. Used by debugging console commands that dump CSV files.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Attributes** `Extension`

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-writecsvline" /><code>{"static void WriteCsvLine(StreamWriter writer, params object[] parts)"}</code> | Writes the parts joined by commas plus a newline to a `StreamWriter` or `StringBuilder`. No quoting or escaping. |
| <Link id="m-writecsvline-2" /><code>{"static void WriteCsvLine(StringBuilder writer, params object[] parts)"}</code> | Writes the parts joined by commas plus a newline to a `StreamWriter` or `StringBuilder`. No quoting or escaping. |
