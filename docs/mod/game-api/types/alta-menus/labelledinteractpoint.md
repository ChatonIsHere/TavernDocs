---
title: "LabelledInteractPoint"
description: "A SimpleInteractPoint with a text label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LabelledInteractPoint

A **class** in `Root.Township`, `Alta.UserInterface`.

A `SimpleInteractPoint` with a text label.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`SimpleInteractPoint`](/mod/game-api/types/alta-menus/simpleinteractpoint)
- **Derived types** [`FeedbackInteractionPoint`](/mod/game-api/types/alta-menus/feedbackinteractionpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LabelledInteractPoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-label" /><code>{"private string label"}</code> | <span className="api-desc">Backing field for `Label`.</span> |
| <Link id="m-labeltextrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" labelTextRenderer"}</code> | <span className="api-desc">Text that shows the label.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | <span className="api-desc">The label text. Setting it updates the text renderer.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Shows the set label if there is one.</span> |

</details>
