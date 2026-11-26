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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CategoryScrubberController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" scroller"}</code> | Item scroller showing the categories. |
| <Link id="m-scrollmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/categoryscrollmanager">{"CategoryScrollManager"}</Link>{" scrollManager"}</code> | Category scroll manager. |
| <Link id="m-scrubber" /><code>{"private "}<Link to="/game-api/types/alta-items/scrubber">{"Scrubber"}</Link>{" scrubber"}</code> | Scrubber whose steps are set. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Sets scrubber steps to the number of available categories minus the scroller's visible count. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Runs `Setup` now if owned cosmetics are loaded, otherwise when the customization manager initializes. |

</details>
