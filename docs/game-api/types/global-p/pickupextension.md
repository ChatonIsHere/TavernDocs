---
title: "PickupExtension"
description: "An interactable that passes grabs on to another interactable, such as an extra handle on a larger pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupExtension

A **class** in `Root.Township`, no namespace.

An interactable that passes grabs on to another interactable, such as an extra handle on a larger pickup. It can refuse while the target is held, or held by the same player.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Nested types** [`Allowance`](/game-api/types/global-p/pickupextension-allowance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupExtension()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowance" /><code>{"private "}<Link to="/game-api/types/global-p/pickupextension-allowance">{"PickupExtension.Allowance"}</Link>{" allowance"}</code> | Rule for when to refuse: never, when the same player holds the target, or whenever the target is held. |
| <Link id="m-targetinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetInteractable"}</code> | The interactable grabs are passed to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessinteraction" /><code>{"override bool AssessInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | Refuses the interaction when the allowance rule blocks it, otherwise scores it as usual. |
| <Link id="m-checkforward" /><code>{"override "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> | Returns `targetInteractable` so the grab goes there, or null when the allowance rule blocks it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-swapinteract" /><code>{"private void SwapInteract("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | Swaps the interactor over to `targetInteractable`. Not called in this class. |

</details>
