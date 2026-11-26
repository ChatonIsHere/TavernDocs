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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccountRequiredPopupAnalytics()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-analyticseventname" /><code>{"private const string AnalyticsEventName"}</code> | <span className="api-desc">The screen name reported, "Choose Registration Or Link Account".</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Reports the screen as finished.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Reports the screen as started.</span> |

</details>
