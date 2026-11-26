---
title: "ObjectIssueLog.Issue"
description: "Editor issue log entry: an object and the problem messages logged about it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectIssueLog.Issue

A **class** in `Root.Township`, no namespace.

Editor issue log entry: an object and the problem messages logged about it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`ObjectIssueLog`](/game-api/types/global-m-o/objectissuelog)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Issue()"}</code> | Creates an `ObjectIssueLog.Issue` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messages" /><code>{"List<string> messages"}</code> | Messages for the object; duplicates are skipped. |
| <Link id="m-topic" /><code>{"Object topic"}</code> | The object the issues are about. |

## Used in

Members of other types that take, return or hold a `Issue`:

[`ObjectIssueLog.issues`](/game-api/types/global-m-o/objectissuelog#m-issues), [`ObjectIssueLog.map`](/game-api/types/global-m-o/objectissuelog#m-map).
