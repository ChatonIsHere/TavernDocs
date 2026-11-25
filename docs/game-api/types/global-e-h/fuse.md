---
title: "Fuse"
description: "Burns down over fuseTime once lit, then raises finishedOnServer (explosives use this). An IFlammable, so fires and sparks can light it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Fuse

A **class** in `Root.Township`, no namespace.

Burns down over `fuseTime` once lit, then raises `finishedOnServer` (explosives use this). An `IFlammable`, so fires and sparks can light it.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<FuseSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<FuseSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IFlammable`](/game-api/types/alta-stats-effects/iflammable), [`ICleanOnSerialize`](/game-api/types/global-i-l/icleanonserialize)
- **Derived types** [`FuseSaveData`](/game-api/types/global-e-h/fusesavedata)
- **Nested types** [`DockSettings`](/game-api/types/global-e-h/fuse-docksettings)
- **Documented in** [Other systems](/game-api/game-systems/other-systems#fuse)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Fuse()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentfuseamount" /><code>{"private float currentFuseAmount"}</code> |  |
| <Link id="m-damagethreshold" /><code>{"private float damageThreshold"}</code> |  |
| <Link id="m-docksettings" /><code>{"private "}<Link to="/game-api/types/global-e-h/fuse-docksettings">{"Fuse.DockSettings"}</Link>{" dockSettings"}</code> |  |
| <Link id="m-finishedonserver" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" finishedOnServer"}</code> |  |
| <Link id="m-finishsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" finishSync"}</code> |  |
| <Link id="m-fuse" /><code>{"private Transform fuse"}</code> |  |
| <Link id="m-fusecoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" fuseCoroutine"}</code> |  |
| <Link id="m-fuselength" /><code>{"private float fuseLength"}</code> |  |
| <Link id="m-fusetime" /><code>{"private float fuseTime"}</code> |  |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |  |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> |  |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> |  |
| <Link id="m-ispreventingdockingwhenlit" /><code>{"private bool isPreventingDockingWhenLit"}</code> |  |
| <Link id="m-liteffect" /><code>{"private GameObject litEffect"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-started" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" started"}</code> |  |
| <Link id="m-stopped" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" stopped"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-whenlitacceptonlytags" /><code>{"private "}<Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"[] whenLitAcceptOnlyTags"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentfuseamount-2" /><code>{"float CurrentFuseAmount { get; set; }"}</code> |  |
| <Link id="m-fuselength-2" /><code>{"float FuseLength { get; set; }"}</code> |  |
| <Link id="m-fusetime-2" /><code>{"float FuseTime { get; set; }"}</code> |  |
| <Link id="m-isfinished-2" /><code>{"bool IsFinished { get; }"}</code> |  |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; }"}</code> |  |
| <Link id="m-alta-heat-iflammable-isignoringsparks" /><code>{"private bool Alta.Heat.IFlammable.IsIgnoringSparks { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action Finished"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-togglelight" /><code>{"void ToggleLight(bool isLit)"}</code> |  |
| <Link id="m-trylight" /><code>{"void TryLight()"}</code> |  |
| <Link id="m-unlight" /><code>{"void Unlight()"}</code> |  |
| <Link id="m-updatefuse" /><code>{"void UpdateFuse()"}</code> |  |
| <Link id="m-block" /><code>{"private void Block("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isBlocked)"}</code> |  |
| <Link id="m-cancelfuse" /><code>{"private void CancelFuse("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-checkblock" /><code>{"private void CheckBlock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-filteralldocking" /><code>{"private void FilterAllDocking("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-finishsync-2" /><code>{"private void FinishSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-fusetimer" /><code>{"private IEnumerator FuseTimer() (iterator)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onhit" /><code>{"private void OnHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-onserialize" /><code>{"private void ICleanOnSerialize.OnSerialize()"}</code> |  |
| <Link id="m-serialize" /><code>{"private void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-starttimer" /><code>{"private void StartTimer()"}</code> |  |
| <Link id="m-syncfuse" /><code>{"private void SyncFuse("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unblock" /><code>{"private void Unblock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
