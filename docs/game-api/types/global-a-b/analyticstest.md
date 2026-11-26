---
title: "AnalyticsTest"
description: "Obsolete debug component that logs a Xsolla login event as JSON and creates an empty gzip file.txt."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsTest

A **class** in `Root.Township`, no namespace.

Obsolete debug component that logs a Xsolla login event as JSON and creates an empty gzip `file.txt`. Marked obsolete in favour of the new analytics system.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnalyticsTest()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-userid" /><code>{"private string userID"}</code> | User id put in the test event ("100001" by default). |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Logs a test login event and opens `file.txt` in the working folder through a gzip stream. |

</details>
