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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`SimpleInteractPoint`](/game-api/types/alta-menus/simpleinteractpoint)
- **Derived types** [`FeedbackInteractionPoint`](/game-api/types/alta-menus/feedbackinteractionpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LabelledInteractPoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-label" /><code>{"private string label"}</code> | Backing field for `Label`. |
| <Link id="m-labeltextrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" labelTextRenderer"}</code> | Text that shows the label. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-label-2" /><code>{"string Label { get; set; }"}</code> | The label text. Setting it updates the text renderer. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Shows the set label if there is one. |

</details>
