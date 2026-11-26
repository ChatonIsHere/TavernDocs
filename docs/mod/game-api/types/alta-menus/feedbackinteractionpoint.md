---
title: "FeedbackInteractionPoint"
description: "A labelled interact point whose box changes colour when pressed and when disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FeedbackInteractionPoint

A **class** in `Root.Township`, `Alta.UserInterface`.

A labelled interact point whose box changes colour when pressed and when disabled.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`LabelledInteractPoint`](/mod/game-api/types/alta-menus/labelledinteractpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FeedbackInteractionPoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecolor" /><code>{"private Color baseColor"}</code> | <span className="api-desc">The box's colour at enable time.</span> |
| <Link id="m-boxrenderer" /><code>{"private Renderer boxRenderer"}</code> | <span className="api-desc">Renderer of the box that changes colour.</span> |
| <Link id="m-disabledcolor" /><code>{"private Color disabledColor"}</code> | <span className="api-desc">Colour while disabled (grey by default).</span> |
| <Link id="m-interactedcolor" /><code>{"private Color interactedColor"}</code> | <span className="api-desc">Colour while pressed.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The box's material instance.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onbuttondisabled" /><code>{"protected override void OnButtonDisabled()"}</code> | <span className="api-desc">Shows the disabled colour, or the base colour when enabled again.</span> |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> | <span className="api-desc">Gets the box material and its base colour and hooks the press and release events.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oninteracted" /><code>{"private void OnInteracted()"}</code> | <span className="api-desc">Shows the pressed colour.</span> |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | <span className="api-desc">Goes back to the base colour.</span> |

</details>
