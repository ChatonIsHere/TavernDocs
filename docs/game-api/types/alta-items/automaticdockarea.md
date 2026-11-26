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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`RejectDockArea`](/game-api/types/alta-items/rejectdockarea)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AutomaticDockArea()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | The trigger colliders of this area. |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks"}</code> | Backing field for `Docks`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-recheckcount" /><code>{"private int recheckCount"}</code> | Counter that sets how often `OnTriggerStay` retries; starts at a random value so areas don't all recheck together. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | The registered budgeted update for `UpdateCount`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-docks-2" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] Docks { get; set; }"}</code> | The docks pickups are put into, in order of preference. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order, always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlereject" /><code>{"protected virtual void HandleReject("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Called when no dock would take a pickup. Does nothing here; subclasses can override it. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build bake hook. Does nothing. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Build bake clean hook. Does nothing. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Once the first dock's entity is ready: the server starts the recheck counter; clients disable the trigger colliders. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the recheck counter update. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Server: docks a loose, unheld, non-kinematic pickup into the first matching dock, then any accepting dock, else calls `HandleReject`. |
| <Link id="m-ontriggerstay" /><code>{"private void OnTriggerStay(Collider other)"}</code> | Retries docking for objects still in the trigger, once every 30 budgeted updates. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: warns about null docks and, if no colliders are set, fills `colliders` with the trigger colliders on this object or its rigidbody. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Removes the component if it has no docks, otherwise initializes once the first dock's entity is ready. |
| <Link id="m-updatecount" /><code>{"private void UpdateCount()"}</code> | Budgeted update that steps `recheckCount` round from 0 to 29. |

</details>

## Used in

Members of other types that take, return or hold a `AutomaticDockArea`:

[`Chest.autoDocks`](/game-api/types/alta-items/chest#m-autodocks).
