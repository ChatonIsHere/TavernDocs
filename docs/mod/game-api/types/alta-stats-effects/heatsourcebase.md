---
title: "HeatSourceBase"
description: "Something that burns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatSourceBase

A **class** in `Root.Township`, `Alta.Heat`.

Something that burns. On the server it lights when its attached heat point passes the ignition temperature, heats that point while lit, and goes out when it cools or its burn time runs out. The lit state is synced and saved.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<HeatSourceBaseSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<HeatSourceBaseSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<HeatSourceBaseSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`EnergyBasedHeatSource`](/mod/game-api/types/alta-stats-effects/energybasedheatsource), [`Fire`](/mod/game-api/types/alta-stats-effects/fire), [`HeatSourceBaseSaveData`](/mod/game-api/types/alta-stats-effects/heatsourcebasesavedata)
- **Documented in** [Heat](/mod/game-api/game-systems/heat#heatsourcebase), [Update modules](/mod/game-api/console-and-utilities/update-modules)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatSourceBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffect" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeEffect"}</code> | <span className="api-desc">The fire effect currently shown.</span> |
| <Link id="m-attachedheatpoint" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" attachedHeatPoint"}</code> | <span className="api-desc">Heat point that lights the source and that it heats.</span> |
| <Link id="m-fireeffect" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" fireEffect"}</code> | <span className="api-desc">Pooled fire effect to show while lit.</span> |
| <Link id="m-hasheatpoint" /><code>{"protected bool hasHeatPoint"}</code> | <span className="api-desc">Server: true if there is an attached heat point.</span> |
| <Link id="m-heatupdatemodule" /><code>{"protected static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" heatUpdateModule"}</code> | <span className="api-desc">Shared fixed-update module that runs `ConductToHeatPoint`.</span> |
| <Link id="m-isextinguishing" /><code>{"protected bool isExtinguishing"}</code> | <span className="api-desc">True while the fire is going out.</span> |
| <Link id="m-isserializing" /><code>{"protected bool isSerializing"}</code> | <span className="api-desc">Set while a save is loading, cleared half a second after.</span> |
| <Link id="m-litprogress" /><code>{"protected float litProgress"}</code> | <span className="api-desc">How far through its lit duration a timed source is, 0 to 1.</span> |

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambientchecker" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientChecker"}</code> | <span className="api-desc">Private: reads the ambient temperature, the minimum the source conducts to its heat point.</span> |
| <Link id="m-attachedheatarea" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" attachedHeatArea"}</code> | <span className="api-desc">Optional `HeatArea` that the server turns on while lit.</span> |
| <Link id="m-destroytarget" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" destroyTarget"}</code> | <span className="api-desc">Optional entity broken or destroyed when the fire burns out on its own.</span> |
| <Link id="m-extinguishcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" extinguishCoroutine"}</code> | <span className="api-desc">Private: the running extinguish coroutine.</span> |
| <Link id="m-fireprogresstotemperature" /><code>{"private AnimationCurve fireProgressToTemperature"}</code> | <span className="api-desc">Temperature the source pushes into its heat point over burn progress.</span> |
| <Link id="m-firerigidbody" /><code>{"private Rigidbody fireRigidbody"}</code> | <span className="api-desc">Private: the rigidbody added while lit, removed when put out.</span> |
| <Link id="m-hasmessage" /><code>{"private bool? hasMessage"}</code> | <span className="api-desc">Private: a lit state received while the object was inactive, applied on the next `Light`.</span> |
| <Link id="m-heatpointoperation" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" heatPointOperation"}</code> | <span className="api-desc">Private: the registered update that conducts heat while lit.</span> |
| <Link id="m-ignitiontemperature" /><code>{"private float ignitionTemperature"}</code> | <span className="api-desc">Heat point temperature at which the source lights. Defaults to 100.</span> |
| <Link id="m-isaddingrigidbodywhenlit" /><code>{"private bool isAddingRigidbodyWhenLit"}</code> | <span className="api-desc">If set, a kinematic rigidbody is added shortly after lighting.</span> |
| <Link id="m-isasphixiable" /><code>{"private bool isAsphixiable"}</code> | <span className="api-desc">Backing field for `IsAsphixiable`.</span> |
| <Link id="m-isasphyxiated" /><code>{"private bool isAsphyxiated"}</code> | <span className="api-desc">Private: set by `Asphixiate`. Stops lighting and heat conduction until released.</span> |
| <Link id="m-isignoringambientwhileburning" /><code>{"private bool isIgnoringAmbientWhileBurning"}</code> | <span className="api-desc">Whether the heat point ignores ambient temperature while burning. Defaults to true.</span> |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | <span className="api-desc">Backing field for `IsLit`.</span> |
| <Link id="m-lightingcoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" lightingCoroutine"}</code> | <span className="api-desc">Private: the running burn timer coroutine.</span> |
| <Link id="m-litduration" /><code>{"private float litDuration"}</code> | <span className="api-desc">Seconds the source burns before going out by itself.</span> |
| <Link id="m-putouttemperature" /><code>{"private float putOutTemperature"}</code> | <span className="api-desc">Heat point temperature below which a lit source goes out. Defaults to 80.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" settings"}</code> | <span className="api-desc">Backing field for `Settings`.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Private: the state sync message.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isasphixiable-2" /><code>{"bool IsAsphixiable { get; }"}</code> | <span className="api-desc">Whether `Asphixiate` has any effect.</span> |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; protected set; }"}</code> | <span className="api-desc">Whether it is burning.</span> |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> | <span className="api-desc">Burn progress shown to subclasses, from 0 to 1 for a timed source.</span> |
| <Link id="m-settings-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">Fire effect settings.</span> |
| <Link id="m-haseffect" /><code>{"protected bool HasEffect { get; set; }"}</code> | <span className="api-desc">Whether this copy shows a fire effect.</span> |
| <Link id="m-lightcoroutine" /><code>{"protected virtual IEnumerator LightCoroutine { get; }"}</code> | <span className="api-desc">The coroutine run while lit. By default `WaitLitTimer`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-breakextinguish" /><code>{"event Action BreakExtinguish"}</code> | <span className="api-desc">Raised when it goes out by burning up, as opposed to being forced out.</span> |
| <Link id="m-extinguished" /><code>{"event Action Extinguished"}</code> | <span className="api-desc">Raised when it starts going out.</span> |
| <Link id="m-invertedtoggleevent" /><code>{"event Action<bool> InvertedToggleEvent"}</code> | <span className="api-desc">Raised with the opposite of `ToggleEvent`: false when lit, true when out.</span> |
| <Link id="m-toggleevent" /><code>{"event Action<bool> ToggleEvent"}</code> | <span className="api-desc">Raised with true when it lights and false when it goes out.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-asphixiate" /><code>{"void Asphixiate()"}</code> | <span className="api-desc">Smothers the source if it is asphyxiable: puts it out and stops it lighting until released.</span> |
| <Link id="m-forceextinguish" /><code>{"void ForceExtinguish(bool isInstant)"}</code> | <span className="api-desc">Puts the fire out without breaking anything, optionally at once.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync message and, on the server, watches the heat point to light or put out.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player the lit state.</span> |
| <Link id="m-releaseasphyxiate" /><code>{"void ReleaseAsphyxiate()"}</code> | <span className="api-desc">Lets an asphyxiated source light again.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Sets up the ambient temperature check and whether to show the fire effect (never on a headless server).</span> |
| <Link id="m-conducttoheatpoint" /><code>{"protected virtual void ConductToHeatPoint()"}</code> | <span className="api-desc">Server, every fixed update while lit: heats the point from the burn-progress curve, at least to ambient.</span> |
| <Link id="m-extinguish" /><code>{"protected IEnumerator Extinguish(bool isbreaking = true, bool isInstant = false) (iterator)"}</code> | <span className="api-desc">Coroutine that puts the fire out over about a second, then resets and may break or destroy the target.</span> |
| <Link id="m-geteffect" /><code>{"protected virtual void GetEffect()"}</code> | <span className="api-desc">Spawns the fire effect on this transform.</span> |
| <Link id="m-light" /><code>{"protected virtual void Light()"}</code> | <span className="api-desc">Lights the source. On the server it syncs, forces the point up to ignition temperature, turns on the heat area and starts the burn timer.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook. Empty.</span> |
| <Link id="m-releaseeffect" /><code>{"protected virtual void ReleaseEffect()"}</code> | <span className="api-desc">Releases the fire effect.</span> |
| <Link id="m-reset" /><code>{"protected virtual void Reset()"}</code> | <span className="api-desc">Hook called when the fire has gone out. Empty by default.</span> |
| <Link id="m-serializeproperties" /><code>{"protected virtual void SerializeProperties("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads extra sync data. By default the lit progress.</span> |
| <Link id="m-setprogress" /><code>{"protected virtual void SetProgress(float progress)"}</code> | <span className="api-desc">Sets `Progress`. Subclasses override it to react.</span> |
| <Link id="m-simulatetime" /><code>{"protected virtual void SimulateTime(float timeDifference)"}</code> | <span className="api-desc">Advances the burn for time passed while unloaded, going out if it would have burned up.</span> |
| <Link id="m-startextuinguish" /><code>{"protected void StartExtuinguish(bool isbreaking = true, bool isInstant = false)"}</code> | <span className="api-desc">Starts the `Extinguish` coroutine, replacing any running one.</span> |
| <Link id="m-waitlittimer" /><code>{"protected IEnumerator WaitLitTimer() (iterator)"}</code> | <span className="api-desc">Counts `litProgress` up to 1 over the lit duration, then the server puts the fire out.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-conducttoheatpointoperation" /><code>{"private void ConductToHeatPointOperation()"}</code> | <span className="api-desc">Private: update module callback that runs `ConductToHeatPoint` each fixed update while lit.</span> |
| <Link id="m-delayedconclude" /><code>{"private IEnumerator DelayedConclude() (iterator)"}</code> | <span className="api-desc">Private: clears `isSerializing` half a second after a lit source loads.</span> |
| <Link id="m-extinguishend" /><code>{"private void ExtinguishEnd()"}</code> | <span className="api-desc">Private: last step of putting out the fire. Releases the effect, turns off the heat area, syncs and raises the toggle events.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">After loading, relights a lit source or sets the heat point just under ignition and checks it again.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Private: stops the heat point update.</span> |
| <Link id="m-onislitchanged" /><code>{"private void OnIsLitChanged(bool newIsLitValue)"}</code> | <span className="api-desc">Private: stops the heat point update when the source goes out.</span> |
| <Link id="m-stoplightingandextinguishingcoroutines" /><code>{"private void StopLightingAndExtinguishingCoroutines()"}</code> | <span className="api-desc">Private: stops any running burn or extinguish coroutine.</span> |
| <Link id="m-syncserialize" /><code>{"private void SyncSerialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs lit, extinguishing and lit progress. Clients light, extinguish or restart the burn timer from it.</span> |
| <Link id="m-updateheat" /><code>{"private void UpdateHeat("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Private, server: lights the source above `ignitionTemperature` and puts it out below `putOutTemperature`.</span> |
| <Link id="m-waittoreset" /><code>{"private IEnumerator WaitToReset() (iterator)"}</code> | <span className="api-desc">Private: half a second after lighting, adds a kinematic rigidbody for `isAddingRigidbodyWhenLit`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HeatSourceBase`:

<div className="api-used-in">

[`FireExtinguisher.sourcesMap`](/mod/game-api/types/alta-stats-effects/fireextinguisher#m-sourcesmap), [`HeatSourceBaseEventTriggers.heatSourceBase`](/mod/game-api/types/alta-stats-effects/heatsourcebaseeventtriggers#m-heatsourcebase), [`PooledFireEffect.UpdateSettings`](/mod/game-api/types/global-p/pooledfireeffect#m-updatesettings).

</div>
