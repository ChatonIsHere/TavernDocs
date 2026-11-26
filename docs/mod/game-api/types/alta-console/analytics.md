---
title: "Analytics"
description: "Obsolete static analytics sender."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Analytics

A **static class** in `Root.Township`, `Alta.Analytics`.

Obsolete static analytics sender. `SendRecord` is now empty, so nothing it is given goes anywhere.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `Obsolete`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-apiendpoint" /><code>{"const string APIEndpoint"}</code> | <span className="api-desc">Old AWS endpoint the records used to be posted to.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendrecord" /><code>{"static void SendRecord<T>("}<Link to="/mod/game-api/types/alta-console/analyticstype">{"AnalyticsType"}</Link>{" type, T objectToSend, "}<Link to="/mod/game-api/types/alta-console/analyticsoptions">{"AnalyticsOptions"}</Link>{" options = 0)"}</code> | <span className="api-desc">Does nothing. Kept for old callers.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getapiendpoint" /><code>{"private static string GetAPIEndpoint("}<Link to="/mod/game-api/types/alta-console/analyticstype">{"AnalyticsType"}</Link>{" type)"}</code> | <span className="api-desc">Maps an `AnalyticsType` to the old endpoint's path segment. Unused now.</span> |

</details>
