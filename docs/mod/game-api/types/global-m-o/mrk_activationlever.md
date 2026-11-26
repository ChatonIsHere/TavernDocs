---
title: "MRK_ActivationLever"
description: "A pay-to-activate mechanism: filling the input dock with as many items as the cost dock shows makes it active, raises a column and fires events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MRK_ActivationLever

A **class** in `Root.Township`, the global namespace.

A pay-to-activate mechanism: filling the input dock with as many items as the cost dock shows makes it active, raises a column and fires events. The server decides; `Refresh` resets it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MRK_ActivationLeverSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<MRK_ActivationLeverSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MRK_ActivationLeverSaveData`](/mod/game-api/types/global-m-o/mrk_activationleversavedata)
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MRK_ActivationLever()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-columnanimation" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" columnAnimation"}</code> | <span className="api-desc">The running column animation coroutine.</span> |
| <Link id="m-columnmovement" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" columnMovement"}</code> | <span className="api-desc">Duration and curve for the column's height.</span> |
| <Link id="m-costcolumn" /><code>{"private Transform costColumn"}</code> | <span className="api-desc">Transform moved up when active.</span> |
| <Link id="m-costdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDefinition"}</code> | <span className="api-desc">Dock whose stored items set the price, both item type and amount.</span> |
| <Link id="m-costinput" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costInput"}</code> | <span className="api-desc">Dock players pay into.</span> |
| <Link id="m-costoverflowtarget" /><code>{"private Transform costOverflowTarget"}</code> | <span className="api-desc">Where extra items above the price are put.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">True once paid. Saved with the entity.</span> |
| <Link id="m-onbecameactive" /><code>{"private UnityEvent onBecameActive"}</code> | <span className="api-desc">Event raised when it becomes active, on server and clients.</span> |
| <Link id="m-onbecameinactive" /><code>{"private UnityEvent onBecameInactive"}</code> | <span className="api-desc">Event raised when it's reset.</span> |
| <Link id="m-syncactive" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncActive"}</code> | <span className="api-desc">Method sync for the active state. Its value says whether clients snap instead of animate.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Adds the input dock filter and creates the active state sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Hooks docking on the input and snaps the column up if it loaded as active.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a joining player the active state so their column snaps into place.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Server: destroys the paid items, becomes inactive, lowers the column and syncs.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatecolumn" /><code>{"private IEnumerator AnimateColumn() (iterator)"}</code> | <span className="api-desc">Coroutine that moves the column up or down along `columnMovement`'s curve.</span> |
| <Link id="m-checkquantity" /><code>{"private void CheckQuantity("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: once the input holds enough, becomes active, pushes any extra items out to `costOverflowTarget`, animates and syncs.</span> |
| <Link id="m-filterinput" /><code>{"private void FilterInput("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Blocks docking while active, and allows only items the cost dock would accept.</span> |
| <Link id="m-startanimatecolumn" /><code>{"private void StartAnimateColumn()"}</code> | <span className="api-desc">Starts the column animation unless it's already running.</span> |
| <Link id="m-syncactive-2" /><code>{"private void SyncActive("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSnapping)"}</code> | <span className="api-desc">Server to client sync of `isActive`. Client: snaps or animates the column and raises the matching event.</span> |

</details>
