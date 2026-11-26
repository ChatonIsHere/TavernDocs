---
title: "Bellows"
description: "The smelter's bellows."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Bellows

A **class** in `Root.Township`, the global namespace.

The smelter's bellows. Tracks the handle as players pump it and turns that into a heat value the `Smelter` reads; also drives the coal glow, light, particles and sound. Runs on both sides.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging#bellows)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Bellows()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>38 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignvector" /><code>{"private Vector3 alignVector"}</code> | Local direction on the pivot that is turned to point at the hands. |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | Resting value the bellows fall back to. Defaults to 0.1. |
| <Link id="m-bellowshandlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bellowsHandlePickup"}</code> | The handle pickup players grab to pump the bellows. |
| <Link id="m-bellowsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" bellowSound"}</code> | Sound played once per pump. |
| <Link id="m-belowshavebeenopened" /><code>{"private bool belowsHaveBeenOpened"}</code> | True once the bellows have opened since the last pump sound. |
| <Link id="m-coals" /><code>{"private Renderer coals"}</code> | Renderer of the coals whose emission glows with the value. |
| <Link id="m-coalsbrightness" /><code>{"private AnimationCurve coalsBrightness"}</code> | Curve from value progress to coal emission brightness. |
| <Link id="m-cooldownpersecond" /><code>{"private float cooldownPerSecond"}</code> | How much `SteadyValue` drops per second. Defaults to 0.1. |
| <Link id="m-down" /><code>{"private float down"}</code> | Bellows angle, in degrees, that counts as fully closed. |
| <Link id="m-duringpumpaddition" /><code>{"private AnimationCurve duringPumpAddition"}</code> | Curve for the short-lived boost a pump adds, by how open the bellows are. |
| <Link id="m-handlerotatingaxis" /><code>{"private Vector3 handleRotatingAxis"}</code> | Local axis the handle turns around to match the hand rotation. |
| <Link id="m-handlerotatingtransform" /><code>{"private Transform handleRotatingTransform"}</code> | Handle transform that turns to follow the hands' grip. |
| <Link id="m-isoffcenter" /><code>{"private bool isOffCenter"}</code> | True while the bellows are still more than a degree away from neutral after being let go. |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> | True while the particle effects are showing. |
| <Link id="m-lastbellowsoundtime" /><code>{"private float lastBellowSoundTime"}</code> | `Time.time` of the last pump sound. |
| <Link id="m-lightfader" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{" lightFader"}</code> | Optional light fader brightened by the value. |
| <Link id="m-maxdifferencefromneutral" /><code>{"private float maxDifferenceFromNeutral"}</code> | Furthest the bellows can rotate from neutral, in degrees. |
| <Link id="m-maximumlight" /><code>{"private float maximumLight"}</code> | Light multiplier at full value. |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | Cap for `Value` and `SteadyValue`. Defaults to 1. |
| <Link id="m-minimumlight" /><code>{"private float minimumLight"}</code> | Light multiplier at base value. |
| <Link id="m-minpercentagetotriggerbellowsound" /><code>{"private float minPercentageToTriggerBellowSound"}</code> | How closed the bellows must get for the pump sound to play. |
| <Link id="m-minpercenttoresetbellowsound" /><code>{"private float minPercentToResetBellowSound"}</code> | How open the bellows must get before the next pump sound can play. |
| <Link id="m-minsecondsbetweenbellowsounds" /><code>{"private float minSecondsBetweenBellowSounds"}</code> | Minimum seconds between pump sounds. |
| <Link id="m-neutralrotation" /><code>{"private Quaternion neutralRotation"}</code> | Pivot rotation the bellows return to when nobody holds the handle. |
| <Link id="m-oldprogress" /><code>{"private float oldProgress"}</code> | How open the bellows were last frame, used to measure the closing motion. |
| <Link id="m-particleposition" /><code>{"private Transform[] particlePosition"}</code> | Points where the pooled particle effects are spawned. |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> | Particle systems found in the pooled particle objects. |
| <Link id="m-particlesalpha" /><code>{"private AnimationCurve particlesAlpha"}</code> | Curve from value progress to particle alpha. |
| <Link id="m-particlesdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesDefinition"}</code> | Pooled object definition for the bellows particles. |
| <Link id="m-particlesobjects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"[] particlesObjects"}</code> | Pooled particle objects currently taken from the pool. |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> | Running delayed-release coroutine, if any. |
| <Link id="m-pivotaxis" /><code>{"private Vector3 pivotAxis"}</code> | Local axis the bellows pivot around. |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> | Transform rotated by the faux joint as the handle moves. |
| <Link id="m-pumpefficiency" /><code>{"private AnimationCurve pumpEfficiency"}</code> | Curve for how much a pump adds to `SteadyValue`, by how open the bellows are. |
| <Link id="m-pumpingvaluemaxdecreasespeed" /><code>{"private float pumpingValueMaxDecreaseSpeed"}</code> | Fastest the pump boost can fall, per second. |
| <Link id="m-smoothpumpingvalue" /><code>{"private float smoothPumpingValue"}</code> | Smoothed short-lived boost from recent pumping, added on top of `SteadyValue`. |
| <Link id="m-up" /><code>{"private float up"}</code> | Bellows angle, in degrees, that counts as fully open. |
| <Link id="m-updatemovement" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovement"}</code> | Handle for the registered `UpdateMovement` method, null when idle. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-smelter" /><code><Link to="/mod/game-api/types/alta-crafting/smelter">{"Smelter"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/smelter">{"Smelter"}</Link>{" { get; set; }"}</code> | The smelter these bellows feed. Pumping only adds to `SteadyValue` while it is smelting. |
| <Link id="m-steadyvalue" /><code>{"float SteadyValue { get; private set; }"}</code> | Heat value built up by pumping while smelting. Cools by `cooldownPerSecond` down to `baseValue`. |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | Current total heat value: `SteadyValue` plus the short boost from the current pump, capped at `maxValue`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatessteadyvalue" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-a-b/bellows">{"Bellows"}</Link>{", float> UpdatesSteadyValue"}</code> | Raised every movement update with the bellows and the new `SteadyValue`. |

## Methods

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arebellowsopen" /><code>{"private bool AreBellowsOpen(float progress)"}</code> | True when the bellows are open past `minPercentToResetBellowSound`, which re-arms the pump sound. |
| <Link id="m-cantriggerbellowsound" /><code>{"private bool CanTriggerBellowSound(float progress)"}</code> | True when the bellows have been reopened, are now nearly closed and enough time has passed since the last sound. |
| <Link id="m-evaluateaudio" /><code>{"private void EvaluateAudio(float progress)"}</code> | Client: plays the bellow sound once per pump, when the bellows close after being opened. |
| <Link id="m-getbellowangle" /><code>{"private float GetBellowAngle()"}</code> | Returns the bellows' local Z rotation, wrapped to the range -180 to 180 degrees. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the movement update and cleans up the coal material instance. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the handle pickup's `InteractionStarted` and sets `SteadyValue` to the base value. |
| <Link id="m-startparticlesystems" /><code>{"private void StartParticleSystems()"}</code> | Client: takes pooled particle effects at each `particlePosition` and starts showing them. |
| <Link id="m-startupdatingbellows" /><code>{"private void StartUpdatingBellows("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Registers `UpdateMovement` with the update loop when a player grabs the handle. |
| <Link id="m-stopparticlesystems" /><code>{"private void StopParticleSystems()"}</code> | Client: marks particles as stopped and releases them back to the pool after two seconds. |
| <Link id="m-stopparticlesystemsdelayed" /><code>{"private IEnumerator StopParticleSystemsDelayed() (iterator)"}</code> | Coroutine that waits two seconds, then releases the pooled particle objects. |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> | Rotates the bellows toward the hands holding the handle, or back toward the neutral rotation when let go. |
| <Link id="m-updatecoals" /><code>{"private void UpdateCoals(float lightProgress)"}</code> | Client: sets the coals' emission brightness from the `coalsBrightness` curve. |
| <Link id="m-updatelightfader" /><code>{"private void UpdateLightFader(float lightProgress)"}</code> | Client: sets the light fader's multiplier between `minimumLight` and `maximumLight`. |
| <Link id="m-updatemovement-2" /><code>{"private void UpdateMovement()"}</code> | Per-frame update while pumped or settling. Tracks hands and updates the value; deregisters once at rest. |
| <Link id="m-updateparticlesystemalpha" /><code>{"private void UpdateParticleSystemAlpha(float alpha)"}</code> | Client: sets the start colour alpha of the playing particle systems. |
| <Link id="m-updateparticlesystems" /><code>{"private void UpdateParticleSystems(float lightProgress)"}</code> | Client: sets particle alpha from the curve and starts or stops the particles when it crosses zero. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | Turns the closing motion into `SteadyValue` and `Value`, grants Forging experience on the server and fires `UpdatesSteadyValue`. |

</details>

## Used in

Members of other types that take, return or hold a `Bellows`:

[`Smelter.bellows`](/mod/game-api/types/alta-crafting/smelter#m-bellows).
