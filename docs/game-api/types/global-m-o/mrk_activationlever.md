---
title: "MRK_ActivationLever"
description: "A pay-to-activate mechanism: filling the input dock with as many items as the cost dock shows makes it active, raises a column and fires events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MRK_ActivationLever

A **class** in `Root.Township`, no namespace.

A pay-to-activate mechanism: filling the input dock with as many items as the cost dock shows makes it active, raises a column and fires events. The server decides; `Refresh` resets it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MRK_ActivationLeverSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MRK_ActivationLeverSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MRK_ActivationLeverSaveData`](/game-api/types/global-m-o/mrk_activationleversavedata)
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MRK_ActivationLever()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-columnanimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" columnAnimation"}</code> | The running column animation coroutine. |
| <Link id="m-columnmovement" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" columnMovement"}</code> | Duration and curve for the column's height. |
| <Link id="m-costcolumn" /><code>{"private Transform costColumn"}</code> | Transform moved up when active. |
| <Link id="m-costdefinition" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDefinition"}</code> | Dock whose stored items set the price, both item type and amount. |
| <Link id="m-costinput" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costInput"}</code> | Dock players pay into. |
| <Link id="m-costoverflowtarget" /><code>{"private Transform costOverflowTarget"}</code> | Where extra items above the price are put. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | True once paid. Saved with the entity. |
| <Link id="m-onbecameactive" /><code>{"private UnityEvent onBecameActive"}</code> | Event raised when it becomes active, on server and clients. |
| <Link id="m-onbecameinactive" /><code>{"private UnityEvent onBecameInactive"}</code> | Event raised when it's reset. |
| <Link id="m-syncactive" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncActive"}</code> | Method sync for the active state. Its value says whether clients snap instead of animate. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Adds the input dock filter and creates the active state sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Hooks docking on the input and snaps the column up if it loaded as active. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends a joining player the active state so their column snaps into place. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Server: destroys the paid items, becomes inactive, lowers the column and syncs. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatecolumn" /><code>{"private IEnumerator AnimateColumn() (iterator)"}</code> | Coroutine that moves the column up or down along `columnMovement`'s curve. |
| <Link id="m-checkquantity" /><code>{"private void CheckQuantity("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: once the input holds enough, becomes active, pushes any extra items out to `costOverflowTarget`, animates and syncs. |
| <Link id="m-filterinput" /><code>{"private void FilterInput("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Blocks docking while active, and allows only items the cost dock would accept. |
| <Link id="m-startanimatecolumn" /><code>{"private void StartAnimateColumn()"}</code> | Starts the column animation unless it's already running. |
| <Link id="m-syncactive-2" /><code>{"private void SyncActive("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> | Server to client sync of `isActive`. Client: snaps or animates the column and raises the matching event. |

</details>
