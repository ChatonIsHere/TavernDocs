---
title: "CategoryScrubberController"
description: "Sets the customization category scrubber's step count once the customization manager has loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CategoryScrubberController

A **class** in `Root.Township`, `Alta.Customization`.

Sets the customization category scrubber's step count once the customization manager has loaded.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CategoryScrubberController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" scroller"}</code> | <span className="api-desc">Item scroller showing the categories.</span> |
| <Link id="m-scrollmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/categoryscrollmanager">{"CategoryScrollManager"}</Link>{" scrollManager"}</code> | <span className="api-desc">Category scroll manager.</span> |
| <Link id="m-scrubber" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/scrubber">{"Scrubber"}</Link>{" scrubber"}</code> | <span className="api-desc">Scrubber whose steps are set.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Sets scrubber steps to the number of available categories minus the scroller's visible count.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Runs `Setup` now if owned cosmetics are loaded, otherwise when the customization manager initializes.</span> |

</details>
