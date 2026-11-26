---
title: "MouldCopyTest"
description: "Test component that applies a mould pattern item placed in a dock to a target Mould, once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldCopyTest

A **class** in `Root.Township`, no namespace.

Test component that applies a mould pattern item placed in a dock to a target `Mould`, once.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldCopyTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock"}</code> | Dock the pattern item goes in. |
| <Link id="m-isused" /><code>{"private bool isUsed"}</code> | True once the copy has happened. |
| <Link id="m-mould" /><code>{"private "}<Link to="/game-api/types/global-m-o/mould">{"Mould"}</Link>{" mould"}</code> | Mould that receives the definition. |
| <Link id="m-useddock" /><code>{"private GameObject usedDock"}</code> | Object shown while the copy is in progress. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmoulddock" /><code>{"void CheckMouldDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" input, "}<Link to="/game-api/types/global-m-o/mould">{"Mould"}</Link>{" targetMould)"}</code> | If the docked item has a `MouldItemComponent`, sets the target mould's definition from it and destroys one item. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the input dock's docked event. |
| <Link id="m-handleitemdocked" /><code>{"private void HandleItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On the first dock, applies the pattern and unhooks itself. |

</details>
