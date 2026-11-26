---
title: "PickupExtension"
description: "An interactable that passes grabs on to another interactable, such as an extra handle on a larger pickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupExtension

A **class** in `Root.Township`, the global namespace.

An interactable that passes grabs on to another interactable, such as an extra handle on a larger pickup. It can refuse while the target is held, or held by the same player.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable)
- **Nested types** [`Allowance`](/mod/game-api/types/global-p/pickupextension-allowance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupExtension()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowance" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupextension-allowance">{"PickupExtension.Allowance"}</Link>{" allowance"}</code> | <span className="api-desc">Rule for when to refuse: never, when the same player holds the target, or whenever the target is held.</span> |
| <Link id="m-targetinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" targetInteractable"}</code> | <span className="api-desc">The interactable grabs are passed to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-assessinteraction" /><code>{"override bool AssessInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out float score)"}</code> | <span className="api-desc">Refuses the interaction when the allowance rule blocks it, otherwise scores it as usual.</span> |
| <Link id="m-checkforward" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" CheckForward("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out bool isForced)"}</code> | <span className="api-desc">Returns `targetInteractable` so the grab goes there, or null when the allowance rule blocks it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-swapinteract" /><code>{"private void SwapInteract("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable)"}</code> | <span className="api-desc">Swaps the interactor over to `targetInteractable`. Not called in this class.</span> |

</details>
