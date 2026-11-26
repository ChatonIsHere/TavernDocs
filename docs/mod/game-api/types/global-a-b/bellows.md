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
| <Link id="m-ctor" /><code>{"Bellows()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>38 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignvector" /><code>{"private Vector3 alignVector"}</code> | <span className="api-desc">Local direction on the pivot that is turned to point at the hands.</span> |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | <span className="api-desc">Resting value the bellows fall back to. Defaults to 0.1.</span> |
| <Link id="m-bellowshandlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bellowsHandlePickup"}</code> | <span className="api-desc">The handle pickup players grab to pump the bellows.</span> |
| <Link id="m-bellowsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" bellowSound"}</code> | <span className="api-desc">Sound played once per pump.</span> |
| <Link id="m-belowshavebeenopened" /><code>{"private bool belowsHaveBeenOpened"}</code> | <span className="api-desc">True once the bellows have opened since the last pump sound.</span> |
| <Link id="m-coals" /><code>{"private Renderer coals"}</code> | <span className="api-desc">Renderer of the coals whose emission glows with the value.</span> |
| <Link id="m-coalsbrightness" /><code>{"private AnimationCurve coalsBrightness"}</code> | <span className="api-desc">Curve from value progress to coal emission brightness.</span> |
| <Link id="m-cooldownpersecond" /><code>{"private float cooldownPerSecond"}</code> | <span className="api-desc">How much `SteadyValue` drops per second. Defaults to 0.1.</span> |
| <Link id="m-down" /><code>{"private float down"}</code> | <span className="api-desc">Bellows angle, in degrees, that counts as fully closed.</span> |
| <Link id="m-duringpumpaddition" /><code>{"private AnimationCurve duringPumpAddition"}</code> | <span className="api-desc">Curve for the short-lived boost a pump adds, by how open the bellows are.</span> |
| <Link id="m-handlerotatingaxis" /><code>{"private Vector3 handleRotatingAxis"}</code> | <span className="api-desc">Local axis the handle turns around to match the hand rotation.</span> |
| <Link id="m-handlerotatingtransform" /><code>{"private Transform handleRotatingTransform"}</code> | <span className="api-desc">Handle transform that turns to follow the hands' grip.</span> |
| <Link id="m-isoffcenter" /><code>{"private bool isOffCenter"}</code> | <span className="api-desc">True while the bellows are still more than a degree away from neutral after being let go.</span> |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> | <span className="api-desc">True while the particle effects are showing.</span> |
| <Link id="m-lastbellowsoundtime" /><code>{"private float lastBellowSoundTime"}</code> | <span className="api-desc">`Time.time` of the last pump sound.</span> |
| <Link id="m-lightfader" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{" lightFader"}</code> | <span className="api-desc">Optional light fader brightened by the value.</span> |
| <Link id="m-maxdifferencefromneutral" /><code>{"private float maxDifferenceFromNeutral"}</code> | <span className="api-desc">Furthest the bellows can rotate from neutral, in degrees.</span> |
| <Link id="m-maximumlight" /><code>{"private float maximumLight"}</code> | <span className="api-desc">Light multiplier at full value.</span> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | <span className="api-desc">Cap for `Value` and `SteadyValue`. Defaults to 1.</span> |
| <Link id="m-minimumlight" /><code>{"private float minimumLight"}</code> | <span className="api-desc">Light multiplier at base value.</span> |
| <Link id="m-minpercentagetotriggerbellowsound" /><code>{"private float minPercentageToTriggerBellowSound"}</code> | <span className="api-desc">How closed the bellows must get for the pump sound to play.</span> |
| <Link id="m-minpercenttoresetbellowsound" /><code>{"private float minPercentToResetBellowSound"}</code> | <span className="api-desc">How open the bellows must get before the next pump sound can play.</span> |
| <Link id="m-minsecondsbetweenbellowsounds" /><code>{"private float minSecondsBetweenBellowSounds"}</code> | <span className="api-desc">Minimum seconds between pump sounds.</span> |
| <Link id="m-neutralrotation" /><code>{"private Quaternion neutralRotation"}</code> | <span className="api-desc">Pivot rotation the bellows return to when nobody holds the handle.</span> |
| <Link id="m-oldprogress" /><code>{"private float oldProgress"}</code> | <span className="api-desc">How open the bellows were last frame, used to measure the closing motion.</span> |
| <Link id="m-particleposition" /><code>{"private Transform[] particlePosition"}</code> | <span className="api-desc">Points where the pooled particle effects are spawned.</span> |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> | <span className="api-desc">Particle systems found in the pooled particle objects.</span> |
| <Link id="m-particlesalpha" /><code>{"private AnimationCurve particlesAlpha"}</code> | <span className="api-desc">Curve from value progress to particle alpha.</span> |
| <Link id="m-particlesdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesDefinition"}</code> | <span className="api-desc">Pooled object definition for the bellows particles.</span> |
| <Link id="m-particlesobjects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"[] particlesObjects"}</code> | <span className="api-desc">Pooled particle objects currently taken from the pool.</span> |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> | <span className="api-desc">Running delayed-release coroutine, if any.</span> |
| <Link id="m-pivotaxis" /><code>{"private Vector3 pivotAxis"}</code> | <span className="api-desc">Local axis the bellows pivot around.</span> |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> | <span className="api-desc">Transform rotated by the faux joint as the handle moves.</span> |
| <Link id="m-pumpefficiency" /><code>{"private AnimationCurve pumpEfficiency"}</code> | <span className="api-desc">Curve for how much a pump adds to `SteadyValue`, by how open the bellows are.</span> |
| <Link id="m-pumpingvaluemaxdecreasespeed" /><code>{"private float pumpingValueMaxDecreaseSpeed"}</code> | <span className="api-desc">Fastest the pump boost can fall, per second.</span> |
| <Link id="m-smoothpumpingvalue" /><code>{"private float smoothPumpingValue"}</code> | <span className="api-desc">Smoothed short-lived boost from recent pumping, added on top of `SteadyValue`.</span> |
| <Link id="m-up" /><code>{"private float up"}</code> | <span className="api-desc">Bellows angle, in degrees, that counts as fully open.</span> |
| <Link id="m-updatemovement" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovement"}</code> | <span className="api-desc">Handle for the registered `UpdateMovement` method, null when idle.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-smelter" /><code><Link to="/mod/game-api/types/alta-crafting/smelter">{"Smelter"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/smelter">{"Smelter"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The smelter these bellows feed. Pumping only adds to `SteadyValue` while it is smelting.</span> |
| <Link id="m-steadyvalue" /><code>{"float SteadyValue { get; private set; }"}</code> | <span className="api-desc">Heat value built up by pumping while smelting. Cools by `cooldownPerSecond` down to `baseValue`.</span> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">Current total heat value: `SteadyValue` plus the short boost from the current pump, capped at `maxValue`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatessteadyvalue" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-a-b/bellows">{"Bellows"}</Link>{", float> UpdatesSteadyValue"}</code> | <span className="api-desc">Raised every movement update with the bellows and the new `SteadyValue`.</span> |

## Methods

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arebellowsopen" /><code>{"private bool AreBellowsOpen(float progress)"}</code> | <span className="api-desc">True when the bellows are open past `minPercentToResetBellowSound`, which re-arms the pump sound.</span> |
| <Link id="m-cantriggerbellowsound" /><code>{"private bool CanTriggerBellowSound(float progress)"}</code> | <span className="api-desc">True when the bellows have been reopened, are now nearly closed and enough time has passed since the last sound.</span> |
| <Link id="m-evaluateaudio" /><code>{"private void EvaluateAudio(float progress)"}</code> | <span className="api-desc">Client: plays the bellow sound once per pump, when the bellows close after being opened.</span> |
| <Link id="m-getbellowangle" /><code>{"private float GetBellowAngle()"}</code> | <span className="api-desc">Returns the bellows' local Z rotation, wrapped to the range -180 to 180 degrees.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the movement update and cleans up the coal material instance.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the handle pickup's `InteractionStarted` and sets `SteadyValue` to the base value.</span> |
| <Link id="m-startparticlesystems" /><code>{"private void StartParticleSystems()"}</code> | <span className="api-desc">Client: takes pooled particle effects at each `particlePosition` and starts showing them.</span> |
| <Link id="m-startupdatingbellows" /><code>{"private void StartUpdatingBellows("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Registers `UpdateMovement` with the update loop when a player grabs the handle.</span> |
| <Link id="m-stopparticlesystems" /><code>{"private void StopParticleSystems()"}</code> | <span className="api-desc">Client: marks particles as stopped and releases them back to the pool after two seconds.</span> |
| <Link id="m-stopparticlesystemsdelayed" /><code>{"private IEnumerator StopParticleSystemsDelayed() (iterator)"}</code> | <span className="api-desc">Coroutine that waits two seconds, then releases the pooled particle objects.</span> |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> | <span className="api-desc">Rotates the bellows toward the hands holding the handle, or back toward the neutral rotation when let go.</span> |
| <Link id="m-updatecoals" /><code>{"private void UpdateCoals(float lightProgress)"}</code> | <span className="api-desc">Client: sets the coals' emission brightness from the `coalsBrightness` curve.</span> |
| <Link id="m-updatelightfader" /><code>{"private void UpdateLightFader(float lightProgress)"}</code> | <span className="api-desc">Client: sets the light fader's multiplier between `minimumLight` and `maximumLight`.</span> |
| <Link id="m-updatemovement-2" /><code>{"private void UpdateMovement()"}</code> | <span className="api-desc">Per-frame update while pumped or settling. Tracks hands and updates the value; deregisters once at rest.</span> |
| <Link id="m-updateparticlesystemalpha" /><code>{"private void UpdateParticleSystemAlpha(float alpha)"}</code> | <span className="api-desc">Client: sets the start colour alpha of the playing particle systems.</span> |
| <Link id="m-updateparticlesystems" /><code>{"private void UpdateParticleSystems(float lightProgress)"}</code> | <span className="api-desc">Client: sets particle alpha from the curve and starts or stops the particles when it crosses zero.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | <span className="api-desc">Turns the closing motion into `SteadyValue` and `Value`, grants Forging experience on the server and fires `UpdatesSteadyValue`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Bellows`:

<div className="api-used-in">

[`Smelter.bellows`](/mod/game-api/types/alta-crafting/smelter#m-bellows).

</div>
