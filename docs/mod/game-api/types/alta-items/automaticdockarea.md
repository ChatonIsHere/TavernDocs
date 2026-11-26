---
title: "AutomaticDockArea"
description: "A trigger area that docks loose pickups dropped into it, first into a dock of the same item type and then into any dock that takes it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutomaticDockArea

A **class** in `Root.Township`, `Alta.Inventory`.

A trigger area that docks loose pickups dropped into it, first into a dock of the same item type and then into any dock that takes it. Server only; clients turn its colliders off.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RejectDockArea`](/mod/game-api/types/alta-items/rejectdockarea)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutomaticDockArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | <span className="api-desc">The trigger colliders of this area.</span> |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> | <span className="api-desc">Backing field for `Docks`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-recheckcount" /><code>{"private int recheckCount"}</code> | <span className="api-desc">Counter that sets how often `OnTriggerStay` retries; starts at a random value so areas don't all recheck together.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">The registered budgeted update for `UpdateCount`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-docks-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] Docks { get; set; }"}</code> | <span className="api-desc">The docks pickups are put into, in order of preference.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order, always 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlereject" /><code>{"protected virtual void HandleReject("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Called when no dock would take a pickup. Does nothing here; subclasses can override it.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Build bake hook. Does nothing.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Build bake clean hook. Does nothing.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Once the first dock's entity is ready: the server starts the recheck counter; clients disable the trigger colliders.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the recheck counter update.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Server: docks a loose, unheld, non-kinematic pickup into the first matching dock, then any accepting dock, else calls `HandleReject`.</span> |
| <Link id="m-ontriggerstay" /><code>{"private void OnTriggerStay(Collider other)"}</code> | <span className="api-desc">Retries docking for objects still in the trigger, once every 30 budgeted updates.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: warns about null docks and, if no colliders are set, fills `colliders` with the trigger colliders on this object or its rigidbody.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Removes the component if it has no docks, otherwise initializes once the first dock's entity is ready.</span> |
| <Link id="m-updatecount" /><code>{"private void UpdateCount()"}</code> | <span className="api-desc">Budgeted update that steps `recheckCount` round from 0 to 29.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AutomaticDockArea`:

<div className="api-used-in">

[`Chest.autoDocks`](/mod/game-api/types/alta-items/chest#m-autodocks).

</div>
