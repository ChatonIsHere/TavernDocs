---
title: "UpdateGripEachFrame"
description: "Keeps re-checking the grip on a held pickup every frame while it is held, without letting that move the object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateGripEachFrame

A **class** in `Root.Township`, no namespace.

Keeps re-checking the grip on a held pickup every frame while it is held, without letting that move the object.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateGripEachFrame()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's grab event. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Turns the component on when the pickup is grabbed. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | For each holder, tries a grab change and then restores the transform; turns itself off when nobody holds it. |

</details>
