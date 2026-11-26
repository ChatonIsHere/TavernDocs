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
| <Link id="m-ctor" /><code>{"TextRendererSettings()"}</code> | Creates a `ButtonCounter.TextRendererSettings` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimumquantityfortext" /><code>{"private int minimumQuantityForText"}</code> | Smallest amount that is shown. Defaults to 1. |
| <Link id="m-renderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" renderer"}</code> | The text renderer to write to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetext" /><code>{"void UpdateText(int value)"}</code> | Shows the value, or blank text if it is below `minimumQuantityForText`. |

## Used in

Members of other types that take, return or hold a `TextRendererSettings`:

[`ButtonCounter.labels`](/mod/game-api/types/global-a-b/buttoncounter#m-labels).
