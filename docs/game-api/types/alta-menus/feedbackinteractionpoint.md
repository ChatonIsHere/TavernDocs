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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`LabelledInteractPoint`](/game-api/types/alta-menus/labelledinteractpoint)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FeedbackInteractionPoint()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basecolor" /><code>{"private Color baseColor"}</code> | The box's colour at enable time. |
| <Link id="m-boxrenderer" /><code>{"private Renderer boxRenderer"}</code> | Renderer of the box that changes colour. |
| <Link id="m-disabledcolor" /><code>{"private Color disabledColor"}</code> | Colour while disabled (grey by default). |
| <Link id="m-interactedcolor" /><code>{"private Color interactedColor"}</code> | Colour while pressed. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The box's material instance. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onbuttondisabled" /><code>{"protected override void OnButtonDisabled()"}</code> | Shows the disabled colour, or the base colour when enabled again. |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> | Gets the box material and its base colour and hooks the press and release events. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oninteracted" /><code>{"private void OnInteracted()"}</code> | Shows the pressed colour. |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | Goes back to the base colour. |

</details>
