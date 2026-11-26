---
title: "AnalyticsTest"
description: "Obsolete debug component that logs a Xsolla login event as JSON and creates an empty gzip file.txt."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnalyticsTest

A **class** in `Root.Township`, the global namespace.

Obsolete debug component that logs a Xsolla login event as JSON and creates an empty gzip `file.txt`. Marked obsolete in favour of the new analytics system.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnalyticsTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

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
