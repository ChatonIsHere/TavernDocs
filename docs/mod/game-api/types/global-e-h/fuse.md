---
title: "Fuse"
description: "A burning fuse, as on dynamite."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fuse

A **class** in `Root.Township`, the global namespace.

A burning fuse, as on dynamite. Once lit (a hit lights it) it burns down over `FuseTime` and the server raises `Finished`, probably what sets off the explosion.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<FuseSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<FuseSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IFlammable`](/mod/game-api/types/alta-stats-effects/iflammable), [`ICleanOnSerialize`](/mod/game-api/types/global-i-l/icleanonserialize)
- **Derived types** [`FuseSaveData`](/mod/game-api/types/global-e-h/fusesavedata)
- **Nested types** [`DockSettings`](/mod/game-api/types/global-e-h/fuse-docksettings)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems#fuse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Fuse()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentfuseamount" /><code>{"private float currentFuseAmount"}</code> | <span className="api-desc">Fuse left, from 1 (full) to 0 (exploded). Backing field for `CurrentFuseAmount`.</span> |
| <Link id="m-damagethreshold" /><code>{"private float damageThreshold"}</code> | <span className="api-desc">Damage that should set it off, per the tooltip. Not used in this file.</span> |
| <Link id="m-docksettings" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fuse-docksettings">{"Fuse.DockSettings"}</Link>{" dockSettings"}</code> | <span className="api-desc">How a lit fuse limits docking: Default, Single (only into an empty dock, then blocks it) or Blocked.</span> |
| <Link id="m-finishedonserver" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" finishedOnServer"}</code> | <span className="api-desc">Event raised on the server when the fuse burns out. Exposed as `Finished`.</span> |
| <Link id="m-finishsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" finishSync"}</code> | <span className="api-desc">Method sync for the `DynamiteExplosion` message.</span> |
| <Link id="m-fuse" /><code>{"private Transform fuse"}</code> | <span className="api-desc">Transform scaled along Y to show how much fuse is left.</span> |
| <Link id="m-fusecoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" fuseCoroutine"}</code> | <span className="api-desc">The running `FuseTimer` coroutine.</span> |
| <Link id="m-fuselength" /><code>{"private float fuseLength"}</code> | <span className="api-desc">Full length of the fuse visual. Backing field for `FuseLength`.</span> |
| <Link id="m-fusetime" /><code>{"private float fuseTime"}</code> | <span className="api-desc">Seconds from lighting to finishing. Backing field for `FuseTime`.</span> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">Optional impact detector. Any hit lights the fuse.</span> |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> | <span className="api-desc">True once the fuse has burnt out. Backing field for `IsFinished`.</span> |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | <span className="api-desc">True while burning. Backing field for `IsLit`.</span> |
| <Link id="m-ispreventingdockingwhenlit" /><code>{"private bool isPreventingDockingWhenLit"}</code> | <span className="api-desc">If set, a lit fuse can only dock into docks with one of `whenLitAcceptOnlyTags`.</span> |
| <Link id="m-liteffect" /><code>{"private GameObject litEffect"}</code> | <span className="api-desc">Object shown while lit, hidden when docked small.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup holding the fuse. Made transient while lit.</span> |
| <Link id="m-started" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" started"}</code> | <span className="api-desc">Event raised when the fuse is lit.</span> |
| <Link id="m-stopped" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" stopped"}</code> | <span className="api-desc">Event raised when the fuse is put out.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the `DynamiteFuseProgress` message. Sent to players as they connect.</span> |
| <Link id="m-whenlitacceptonlytags" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"[] whenLitAcceptOnlyTags"}</code> | <span className="api-desc">Dock tags a lit fuse may still dock into when `isPreventingDockingWhenLit` is set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfuseamount-2" /><code>{"float CurrentFuseAmount { get; set; }"}</code> | <span className="api-desc">How much fuse is left, from 1 (full) to 0. Setting it updates the fuse visual.</span> |
| <Link id="m-fuselength-2" /><code>{"float FuseLength { get; set; }"}</code> | <span className="api-desc">Full length of the fuse visual. Setting it updates the visual.</span> |
| <Link id="m-fusetime-2" /><code>{"float FuseTime { get; set; }"}</code> | <span className="api-desc">Seconds from lighting to burning out.</span> |
| <Link id="m-isfinished-2" /><code>{"bool IsFinished { get; }"}</code> | <span className="api-desc">True once the fuse has burned out. A finished fuse cannot be lit again.</span> |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; }"}</code> | <span className="api-desc">True while the fuse is burning.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-heat-iflammable-isignoringsparks" /><code>{"private bool Alta.Heat.IFlammable.IsIgnoringSparks { get; }"}</code> | <span className="api-desc">Always false, so sparks can light the fuse.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action Finished"}</code> | <span className="api-desc">Server: raised when the fuse burns out. Adds to the `finishedOnServer` event set in the prefab.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the fuse syncs and the dock rules (default, single, or blocked while lit).</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: restarts the burn timer if the fuse was saved while lit.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the fuse state to the joining player.</span> |
| <Link id="m-togglelight" /><code>{"void ToggleLight(bool isLit)"}</code> | <span className="api-desc">Calls `TryLight` or `Unlight`.</span> |
| <Link id="m-trylight" /><code>{"void TryLight()"}</code> | <span className="api-desc">Server: lights the fuse, makes the pickup transient, syncs and starts the burn timer. Ignored if already lit or finished.</span> |
| <Link id="m-unlight" /><code>{"void Unlight()"}</code> | <span className="api-desc">Server: puts the fuse out and resets it to full length.</span> |
| <Link id="m-updatefuse" /><code>{"void UpdateFuse()"}</code> | <span className="api-desc">Client: scales the fuse visual to the remaining amount and shows the lit effect while burning.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-block" /><code>{"private void Block("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isBlocked)"}</code> | <span className="api-desc">Dock filter that blocks everything. Added to the dock a lit fuse sits in when `dockSettings` is Single.</span> |
| <Link id="m-cancelfuse" /><code>{"private void CancelFuse("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops the fuse coroutine when the scene destroys the entity.</span> |
| <Link id="m-checkblock" /><code>{"private void CheckBlock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On docking while lit, blocks that dock from taking anything else.</span> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">While lit, stops the pickup docking at all (Blocked) or into a dock that already holds something (Single).</span> |
| <Link id="m-filteralldocking" /><code>{"private void FilterAllDocking("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">While lit with `isPreventingDockingWhenLit`, only allows docks whose tags include one of `whenLitAcceptOnlyTags`.</span> |
| <Link id="m-finishsync-2" /><code>{"private void FinishSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: marks the fuse finished and undocks the pickup when the server says it exploded.</span> |
| <Link id="m-fusetimer" /><code>{"private IEnumerator FuseTimer() (iterator)"}</code> | <span className="api-desc">Coroutine that burns the fuse down over `fuseTime` seconds. Server: at zero, syncs, undocks and drops the pickup, and raises `Finished`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks the impact detector.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks the impact detector so a hit lights the fuse.</span> |
| <Link id="m-onhit" /><code>{"private void OnHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Clears the impact detector's settings and tries to light the fuse.</span> |
| <Link id="m-onserialize" /><code>{"private void ICleanOnSerialize.OnSerialize()"}</code> | <span className="api-desc">Puts the fuse out before the entity is serialized, so copies aren't saved lit.</span> |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the finished flag, and if not finished, the lit flag and fuse amount. Updates the visual on read.</span> |
| <Link id="m-starttimer" /><code>{"private void StartTimer()"}</code> | <span className="api-desc">Restarts the fuse coroutine and hooks cancelling it if the entity is destroyed.</span> |
| <Link id="m-syncfuse" /><code>{"private void SyncFuse("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Server to client sync of the fuse state. Client: starts or stops the burn, effects and dock rules to match.</span> |
| <Link id="m-unblock" /><code>{"private void Unblock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Removes the `Block` filter from the dock the pickup left.</span> |

</details>
