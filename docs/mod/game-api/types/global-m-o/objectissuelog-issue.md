---
title: "ObjectIssueLog.Issue"
description: "Editor issue log entry: an object and the problem messages logged about it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectIssueLog.Issue

A **class** in `Root.Township`, the global namespace.

Editor issue log entry: an object and the problem messages logged about it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`ObjectIssueLog`](/mod/game-api/types/global-m-o/objectissuelog)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Issue()"}</code> | <span className="api-desc">Creates an `ObjectIssueLog.Issue` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-messages" /><code>{"List<string> messages"}</code> | <span className="api-desc">Messages for the object; duplicates are skipped.</span> |
| <Link id="m-topic" /><code>{"Object topic"}</code> | <span className="api-desc">The object the issues are about.</span> |

## Used in

Members of other types that take, return or hold a `Issue`:

<div className="api-used-in">

[`ObjectIssueLog.issues`](/mod/game-api/types/global-m-o/objectissuelog#m-issues), [`ObjectIssueLog.map`](/mod/game-api/types/global-m-o/objectissuelog#m-map).

</div>
