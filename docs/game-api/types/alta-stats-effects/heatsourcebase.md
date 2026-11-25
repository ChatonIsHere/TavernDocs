---
title: "HeatSourceBase"
description: "Something that burns: it lights when its attached heat point passes ignitionTemperature (100 by default in code) and goes out when it drops below putO"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatSourceBase

A **class** in `Root.Township`, `Alta.Heat`.

Something that burns: it lights when its attached heat point passes `ignitionTemperature` (100 by default in code) and goes out when it drops below `putOutTemperature` (80).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<HeatSourceBaseSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<HeatSourceBaseSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<HeatSourceBaseSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`EnergyBasedHeatSource`](/game-api/types/alta-stats-effects/energybasedheatsource), [`Fire`](/game-api/types/alta-stats-effects/fire), [`HeatSourceBaseSaveData`](/game-api/types/alta-stats-effects/heatsourcebasesavedata)
- **Documented in** [Heat](/game-api/game-systems/heat#heatsourcebase), [Update modules](/game-api/console-and-utilities/update-modules)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatSourceBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffect" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeEffect"}</code> |  |
| <Link id="m-ambientchecker" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientChecker"}</code> |  |
| <Link id="m-attachedheatarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" attachedHeatArea"}</code> |  |
| <Link id="m-attachedheatpoint" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" attachedHeatPoint"}</code> |  |
| <Link id="m-destroytarget" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" destroyTarget"}</code> |  |
| <Link id="m-extinguishcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" extinguishCoroutine"}</code> |  |
| <Link id="m-fireeffect" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" fireEffect"}</code> |  |
| <Link id="m-fireprogresstotemperature" /><code>{"private AnimationCurve fireProgressToTemperature"}</code> |  |
| <Link id="m-firerigidbody" /><code>{"private Rigidbody fireRigidbody"}</code> |  |
| <Link id="m-hasheatpoint" /><code>{"protected bool hasHeatPoint"}</code> |  |
| <Link id="m-hasmessage" /><code>{"private bool? hasMessage"}</code> |  |
| <Link id="m-heatpointoperation" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" heatPointOperation"}</code> |  |
| <Link id="m-heatupdatemodule" /><code>{"protected static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" heatUpdateModule"}</code> |  |
| <Link id="m-ignitiontemperature" /><code>{"private float ignitionTemperature"}</code> |  |
| <Link id="m-isaddingrigidbodywhenlit" /><code>{"private bool isAddingRigidbodyWhenLit"}</code> |  |
| <Link id="m-isasphixiable" /><code>{"private bool isAsphixiable"}</code> |  |
| <Link id="m-isasphyxiated" /><code>{"private bool isAsphyxiated"}</code> |  |
| <Link id="m-isextinguishing" /><code>{"protected bool isExtinguishing"}</code> |  |
| <Link id="m-isignoringambientwhileburning" /><code>{"private bool isIgnoringAmbientWhileBurning"}</code> |  |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> |  |
| <Link id="m-isserializing" /><code>{"protected bool isSerializing"}</code> |  |
| <Link id="m-lightingcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" lightingCoroutine"}</code> |  |
| <Link id="m-litduration" /><code>{"private float litDuration"}</code> |  |
| <Link id="m-litprogress" /><code>{"protected float litProgress"}</code> |  |
| <Link id="m-putouttemperature" /><code>{"private float putOutTemperature"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isasphixiable-2" /><code>{"bool IsAsphixiable { get; }"}</code> |  |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; protected set; }"}</code> |  |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> |  |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" Settings { get; }"}</code> |  |
| <Link id="m-haseffect" /><code>{"protected bool HasEffect { get; set; }"}</code> |  |
| <Link id="m-lightcoroutine" /><code>{"protected virtual IEnumerator LightCoroutine { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-breakextinguish" /><code>{"event Action BreakExtinguish"}</code> |  |
| <Link id="m-extinguished" /><code>{"event Action Extinguished"}</code> |  |
| <Link id="m-invertedtoggleevent" /><code>{"event Action<bool> InvertedToggleEvent"}</code> |  |
| <Link id="m-toggleevent" /><code>{"event Action<bool> ToggleEvent"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-asphixiate" /><code>{"void Asphixiate()"}</code> |  |
| <Link id="m-forceextinguish" /><code>{"void ForceExtinguish(bool isInstant)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-releaseasphyxiate" /><code>{"void ReleaseAsphyxiate()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-conducttoheatpoint" /><code>{"protected virtual void ConductToHeatPoint()"}</code> |  |
| <Link id="m-conducttoheatpointoperation" /><code>{"private void ConductToHeatPointOperation()"}</code> |  |
| <Link id="m-delayedconclude" /><code>{"private IEnumerator DelayedConclude() (iterator)"}</code> |  |
| <Link id="m-extinguish" /><code>{"protected IEnumerator Extinguish(bool isbreaking = true, bool isInstant = false) (iterator)"}</code> |  |
| <Link id="m-extinguishend" /><code>{"private void ExtinguishEnd()"}</code> |  |
| <Link id="m-geteffect" /><code>{"protected virtual void GetEffect()"}</code> |  |
| <Link id="m-light" /><code>{"protected virtual void Light()"}</code> |  |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onislitchanged" /><code>{"private void OnIsLitChanged(bool newIsLitValue)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-releaseeffect" /><code>{"protected virtual void ReleaseEffect()"}</code> |  |
| <Link id="m-reset" /><code>{"protected virtual void Reset()"}</code> |  |
| <Link id="m-serializeproperties" /><code>{"protected virtual void SerializeProperties("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setprogress" /><code>{"protected virtual void SetProgress(float progress)"}</code> |  |
| <Link id="m-simulatetime" /><code>{"protected virtual void SimulateTime(float timeDifference)"}</code> |  |
| <Link id="m-startextuinguish" /><code>{"protected void StartExtuinguish(bool isbreaking = true, bool isInstant = false)"}</code> |  |
| <Link id="m-stoplightingandextinguishingcoroutines" /><code>{"private void StopLightingAndExtinguishingCoroutines()"}</code> |  |
| <Link id="m-syncserialize" /><code>{"private void SyncSerialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateheat" /><code>{"private void UpdateHeat("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |
| <Link id="m-waitlittimer" /><code>{"protected IEnumerator WaitLitTimer() (iterator)"}</code> |  |
| <Link id="m-waittoreset" /><code>{"private IEnumerator WaitToReset() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatSourceBase`:

[`FireExtinguisher.sourcesMap`](/game-api/types/alta-stats-effects/fireextinguisher#m-sourcesmap), [`HeatSourceBaseEventTriggers.heatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebaseeventtriggers#m-heatsourcebase), [`PooledFireEffect.UpdateSettings`](/game-api/types/global-p/pooledfireeffect#m-updatesettings).
