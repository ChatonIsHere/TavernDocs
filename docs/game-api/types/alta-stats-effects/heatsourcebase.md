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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<HeatSourceBaseSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<HeatSourceBaseSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<HeatSourceBaseSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`EnergyBasedHeatSource`](/game-api/types/alta-stats-effects/energybasedheatsource), [`Fire`](/game-api/types/alta-stats-effects/fire), [`HeatSourceBaseSaveData`](/game-api/types/alta-stats-effects/heatsourcebasesavedata)
- **Documented in** [Heat](/game-api/game-systems/heat#heatsourcebase), [Update modules](/game-api/console-and-utilities/update-modules)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatSourceBase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeeffect" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeEffect"}</code> | The fire effect currently shown. |
| <Link id="m-attachedheatpoint" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" attachedHeatPoint"}</code> | Heat point that lights the source and that it heats. |
| <Link id="m-fireeffect" /><code>{"protected "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" fireEffect"}</code> | Pooled fire effect to show while lit. |
| <Link id="m-hasheatpoint" /><code>{"protected bool hasHeatPoint"}</code> | Server: true if there is an attached heat point. |
| <Link id="m-heatupdatemodule" /><code>{"protected static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" heatUpdateModule"}</code> | Shared fixed-update module that runs `ConductToHeatPoint`. |
| <Link id="m-isextinguishing" /><code>{"protected bool isExtinguishing"}</code> | True while the fire is going out. |
| <Link id="m-isserializing" /><code>{"protected bool isSerializing"}</code> | Set while a save is loading, cleared half a second after. |
| <Link id="m-litprogress" /><code>{"protected float litProgress"}</code> | How far through its lit duration a timed source is, 0 to 1. |

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambientchecker" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienttemperaturechecker">{"AmbientTemperatureChecker"}</Link>{" ambientChecker"}</code> | Private: reads the ambient temperature, the minimum the source conducts to its heat point. |
| <Link id="m-attachedheatarea" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatarea">{"HeatArea"}</Link>{" attachedHeatArea"}</code> | Optional `HeatArea` that the server turns on while lit. |
| <Link id="m-destroytarget" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" destroyTarget"}</code> | Optional entity broken or destroyed when the fire burns out on its own. |
| <Link id="m-extinguishcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" extinguishCoroutine"}</code> | Private: the running extinguish coroutine. |
| <Link id="m-fireprogresstotemperature" /><code>{"private AnimationCurve fireProgressToTemperature"}</code> | Temperature the source pushes into its heat point over burn progress. |
| <Link id="m-firerigidbody" /><code>{"private Rigidbody fireRigidbody"}</code> | Private: the rigidbody added while lit, removed when put out. |
| <Link id="m-hasmessage" /><code>{"private bool? hasMessage"}</code> | Private: a lit state received while the object was inactive, applied on the next `Light`. |
| <Link id="m-heatpointoperation" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" heatPointOperation"}</code> | Private: the registered update that conducts heat while lit. |
| <Link id="m-ignitiontemperature" /><code>{"private float ignitionTemperature"}</code> | Heat point temperature at which the source lights. Defaults to 100. |
| <Link id="m-isaddingrigidbodywhenlit" /><code>{"private bool isAddingRigidbodyWhenLit"}</code> | If set, a kinematic rigidbody is added shortly after lighting. |
| <Link id="m-isasphixiable" /><code>{"private bool isAsphixiable"}</code> | Backing field for `IsAsphixiable`. |
| <Link id="m-isasphyxiated" /><code>{"private bool isAsphyxiated"}</code> | Private: set by `Asphixiate`. Stops lighting and heat conduction until released. |
| <Link id="m-isignoringambientwhileburning" /><code>{"private bool isIgnoringAmbientWhileBurning"}</code> | Whether the heat point ignores ambient temperature while burning. Defaults to true. |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | Backing field for `IsLit`. |
| <Link id="m-lightingcoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" lightingCoroutine"}</code> | Private: the running burn timer coroutine. |
| <Link id="m-litduration" /><code>{"private float litDuration"}</code> | Seconds the source burns before going out by itself. |
| <Link id="m-putouttemperature" /><code>{"private float putOutTemperature"}</code> | Heat point temperature below which a lit source goes out. Defaults to 80. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" settings"}</code> | Backing field for `Settings`. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Private: the state sync message. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isasphixiable-2" /><code>{"bool IsAsphixiable { get; }"}</code> | Whether `Asphixiate` has any effect. |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; protected set; }"}</code> | Whether it is burning. |
| <Link id="m-progress" /><code>{"float Progress { get; private set; }"}</code> | Burn progress shown to subclasses, from 0 to 1 for a timed source. |
| <Link id="m-settings-2" /><code><Link to="/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" Settings { get; }"}</code> | Fire effect settings. |
| <Link id="m-haseffect" /><code>{"protected bool HasEffect { get; set; }"}</code> | Whether this copy shows a fire effect. |
| <Link id="m-lightcoroutine" /><code>{"protected virtual IEnumerator LightCoroutine { get; }"}</code> | The coroutine run while lit. By default `WaitLitTimer`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-breakextinguish" /><code>{"event Action BreakExtinguish"}</code> | Raised when it goes out by burning up, as opposed to being forced out. |
| <Link id="m-extinguished" /><code>{"event Action Extinguished"}</code> | Raised when it starts going out. |
| <Link id="m-invertedtoggleevent" /><code>{"event Action<bool> InvertedToggleEvent"}</code> | Raised with the opposite of `ToggleEvent`: false when lit, true when out. |
| <Link id="m-toggleevent" /><code>{"event Action<bool> ToggleEvent"}</code> | Raised with true when it lights and false when it goes out. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-asphixiate" /><code>{"void Asphixiate()"}</code> | Smothers the source if it is asphyxiable: puts it out and stops it lighting until released. |
| <Link id="m-forceextinguish" /><code>{"void ForceExtinguish(bool isInstant)"}</code> | Puts the fire out without breaking anything, optionally at once. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync message and, on the server, watches the heat point to light or put out. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the lit state. |
| <Link id="m-releaseasphyxiate" /><code>{"void ReleaseAsphyxiate()"}</code> | Lets an asphyxiated source light again. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets up the ambient temperature check and whether to show the fire effect (never on a headless server). |
| <Link id="m-conducttoheatpoint" /><code>{"protected virtual void ConductToHeatPoint()"}</code> | Server, every fixed update while lit: heats the point from the burn-progress curve, at least to ambient. |
| <Link id="m-extinguish" /><code>{"protected IEnumerator Extinguish(bool isbreaking = true, bool isInstant = false) (iterator)"}</code> | Coroutine that puts the fire out over about a second, then resets and may break or destroy the target. |
| <Link id="m-geteffect" /><code>{"protected virtual void GetEffect()"}</code> | Spawns the fire effect on this transform. |
| <Link id="m-light" /><code>{"protected virtual void Light()"}</code> | Lights the source. On the server it syncs, forces the point up to ignition temperature, turns on the heat area and starts the burn timer. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook. Empty. |
| <Link id="m-releaseeffect" /><code>{"protected virtual void ReleaseEffect()"}</code> | Releases the fire effect. |
| <Link id="m-reset" /><code>{"protected virtual void Reset()"}</code> | Hook called when the fire has gone out. Empty by default. |
| <Link id="m-serializeproperties" /><code>{"protected virtual void SerializeProperties("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads extra sync data. By default the lit progress. |
| <Link id="m-setprogress" /><code>{"protected virtual void SetProgress(float progress)"}</code> | Sets `Progress`. Subclasses override it to react. |
| <Link id="m-simulatetime" /><code>{"protected virtual void SimulateTime(float timeDifference)"}</code> | Advances the burn for time passed while unloaded, going out if it would have burned up. |
| <Link id="m-startextuinguish" /><code>{"protected void StartExtuinguish(bool isbreaking = true, bool isInstant = false)"}</code> | Starts the `Extinguish` coroutine, replacing any running one. |
| <Link id="m-waitlittimer" /><code>{"protected IEnumerator WaitLitTimer() (iterator)"}</code> | Counts `litProgress` up to 1 over the lit duration, then the server puts the fire out. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-conducttoheatpointoperation" /><code>{"private void ConductToHeatPointOperation()"}</code> | Private: update module callback that runs `ConductToHeatPoint` each fixed update while lit. |
| <Link id="m-delayedconclude" /><code>{"private IEnumerator DelayedConclude() (iterator)"}</code> | Private: clears `isSerializing` half a second after a lit source loads. |
| <Link id="m-extinguishend" /><code>{"private void ExtinguishEnd()"}</code> | Private: last step of putting out the fire. Releases the effect, turns off the heat area, syncs and raises the toggle events. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | After loading, relights a lit source or sets the heat point just under ignition and checks it again. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Private: stops the heat point update. |
| <Link id="m-onislitchanged" /><code>{"private void OnIsLitChanged(bool newIsLitValue)"}</code> | Private: stops the heat point update when the source goes out. |
| <Link id="m-stoplightingandextinguishingcoroutines" /><code>{"private void StopLightingAndExtinguishingCoroutines()"}</code> | Private: stops any running burn or extinguish coroutine. |
| <Link id="m-syncserialize" /><code>{"private void SyncSerialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs lit, extinguishing and lit progress. Clients light, extinguish or restart the burn timer from it. |
| <Link id="m-updateheat" /><code>{"private void UpdateHeat("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | Private, server: lights the source above `ignitionTemperature` and puts it out below `putOutTemperature`. |
| <Link id="m-waittoreset" /><code>{"private IEnumerator WaitToReset() (iterator)"}</code> | Private: half a second after lighting, adds a kinematic rigidbody for `isAddingRigidbodyWhenLit`. |

</details>

## Used in

Members of other types that take, return or hold a `HeatSourceBase`:

[`FireExtinguisher.sourcesMap`](/game-api/types/alta-stats-effects/fireextinguisher#m-sourcesmap), [`HeatSourceBaseEventTriggers.heatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebaseeventtriggers#m-heatsourcebase), [`PooledFireEffect.UpdateSettings`](/game-api/types/global-p/pooledfireeffect#m-updatesettings).
