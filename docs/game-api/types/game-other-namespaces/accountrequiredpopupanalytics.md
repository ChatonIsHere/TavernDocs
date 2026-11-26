---
title: "AccountRequiredPopupAnalytics"
description: "Obsolete client UI helper that reports the \"Choose Registration Or Link Account\" screen opening and closing to SignupAnalyticsReporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccountRequiredPopupAnalytics

A **class** in `Root.Township`, `Features.Analytics.Registration`.

Obsolete client UI helper that reports the "Choose Registration Or Link Account" screen opening and closing to `SignupAnalyticsReporter`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccountRequiredPopupAnalytics()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticseventname" /><code>{"private const string AnalyticsEventName"}</code> | The screen name reported, "Choose Registration Or Link Account". |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Reports the screen as finished. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Reports the screen as started. |

</details>
