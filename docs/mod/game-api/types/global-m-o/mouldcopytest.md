---
title: "MouldCopyTest"
description: "Test component that applies a mould pattern item placed in a dock to a target Mould, once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldCopyTest

A **class** in `Root.Township`, the global namespace.

Test component that applies a mould pattern item placed in a dock to a target `Mould`, once.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldCopyTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" inputDock"}</code> | <span className="api-desc">Dock the pattern item goes in.</span> |
| <Link id="m-isused" /><code>{"private bool isUsed"}</code> | <span className="api-desc">True once the copy has happened.</span> |
| <Link id="m-mould" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/mould">{"Mould"}</Link>{" mould"}</code> | <span className="api-desc">Mould that receives the definition.</span> |
| <Link id="m-useddock" /><code>{"private GameObject usedDock"}</code> | <span className="api-desc">Object shown while the copy is in progress.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkmoulddock" /><code>{"void CheckMouldDock("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" input, "}<Link to="/mod/game-api/types/global-m-o/mould">{"Mould"}</Link>{" targetMould)"}</code> | <span className="api-desc">If the docked item has a `MouldItemComponent`, sets the target mould's definition from it and destroys one item.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the input dock's docked event.</span> |
| <Link id="m-handleitemdocked" /><code>{"private void HandleItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On the first dock, applies the pattern and unhooks itself.</span> |

</details>
