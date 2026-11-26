---
title: "ButtonCounter.TextRendererSettings"
description: "A text label on a ButtonCounter that shows the amount, hidden below a minimum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter.TextRendererSettings

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A text label on a `ButtonCounter` that shows the amount, hidden below a minimum.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`ButtonCounter`](/mod/game-api/types/global-a-b/buttoncounter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextRendererSettings()"}</code> | <span className="api-desc">Creates a `ButtonCounter.TextRendererSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumquantityfortext" /><code>{"private int minimumQuantityForText"}</code> | <span className="api-desc">Smallest amount that is shown. Defaults to 1.</span> |
| <Link id="m-renderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer"}</code> | <span className="api-desc">The text renderer to write to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetext" /><code>{"void UpdateText(int value)"}</code> | <span className="api-desc">Shows the value, or blank text if it is below `minimumQuantityForText`.</span> |

## Used in

Members of other types that take, return or hold a `TextRendererSettings`:

<div className="api-used-in">

[`ButtonCounter.labels`](/mod/game-api/types/global-a-b/buttoncounter#m-labels).

</div>
