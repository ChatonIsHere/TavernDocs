---
title: "Bellows"
description: "Part of a smelter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Bellows

A **class** in `Root.Township`, no namespace.

Part of a smelter. Updates while its handle is held and until it settles.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#bellows)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Bellows()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alignvector" /><code>{"private Vector3 alignVector"}</code> |  |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> |  |
| <Link id="m-bellowshandlepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bellowsHandlePickup"}</code> |  |
| <Link id="m-bellowsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" bellowSound"}</code> |  |
| <Link id="m-belowshavebeenopened" /><code>{"private bool belowsHaveBeenOpened"}</code> |  |
| <Link id="m-coals" /><code>{"private Renderer coals"}</code> |  |
| <Link id="m-coalsbrightness" /><code>{"private AnimationCurve coalsBrightness"}</code> |  |
| <Link id="m-cooldownpersecond" /><code>{"private float cooldownPerSecond"}</code> |  |
| <Link id="m-down" /><code>{"private float down"}</code> |  |
| <Link id="m-duringpumpaddition" /><code>{"private AnimationCurve duringPumpAddition"}</code> |  |
| <Link id="m-handlerotatingaxis" /><code>{"private Vector3 handleRotatingAxis"}</code> |  |
| <Link id="m-handlerotatingtransform" /><code>{"private Transform handleRotatingTransform"}</code> |  |
| <Link id="m-isoffcenter" /><code>{"private bool isOffCenter"}</code> |  |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> |  |
| <Link id="m-lastbellowsoundtime" /><code>{"private float lastBellowSoundTime"}</code> |  |
| <Link id="m-lightfader" /><code>{"private "}<Link to="/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{" lightFader"}</code> |  |
| <Link id="m-maxdifferencefromneutral" /><code>{"private float maxDifferenceFromNeutral"}</code> |  |
| <Link id="m-maximumlight" /><code>{"private float maximumLight"}</code> |  |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> |  |
| <Link id="m-minimumlight" /><code>{"private float minimumLight"}</code> |  |
| <Link id="m-minpercentagetotriggerbellowsound" /><code>{"private float minPercentageToTriggerBellowSound"}</code> |  |
| <Link id="m-minpercenttoresetbellowsound" /><code>{"private float minPercentToResetBellowSound"}</code> |  |
| <Link id="m-minsecondsbetweenbellowsounds" /><code>{"private float minSecondsBetweenBellowSounds"}</code> |  |
| <Link id="m-neutralrotation" /><code>{"private Quaternion neutralRotation"}</code> |  |
| <Link id="m-oldprogress" /><code>{"private float oldProgress"}</code> |  |
| <Link id="m-particleposition" /><code>{"private Transform[] particlePosition"}</code> |  |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> |  |
| <Link id="m-particlesalpha" /><code>{"private AnimationCurve particlesAlpha"}</code> |  |
| <Link id="m-particlesdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particlesDefinition"}</code> |  |
| <Link id="m-particlesobjects" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{"[] particlesObjects"}</code> |  |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> |  |
| <Link id="m-pivotaxis" /><code>{"private Vector3 pivotAxis"}</code> |  |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> |  |
| <Link id="m-pumpefficiency" /><code>{"private AnimationCurve pumpEfficiency"}</code> |  |
| <Link id="m-pumpingvaluemaxdecreasespeed" /><code>{"private float pumpingValueMaxDecreaseSpeed"}</code> |  |
| <Link id="m-smoothpumpingvalue" /><code>{"private float smoothPumpingValue"}</code> |  |
| <Link id="m-up" /><code>{"private float up"}</code> |  |
| <Link id="m-updatemovement" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovement"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-smelter" /><code><Link to="/game-api/types/alta-crafting/smelter">{"Smelter"}</Link>{" "}<Link to="/game-api/types/alta-crafting/smelter">{"Smelter"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-steadyvalue" /><code>{"float SteadyValue { get; private set; }"}</code> |  |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatessteadyvalue" /><code>{"event Action<"}<Link to="/game-api/types/global-a-b/bellows">{"Bellows"}</Link>{", float> UpdatesSteadyValue"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-arebellowsopen" /><code>{"private bool AreBellowsOpen(float progress)"}</code> |  |
| <Link id="m-cantriggerbellowsound" /><code>{"private bool CanTriggerBellowSound(float progress)"}</code> |  |
| <Link id="m-evaluateaudio" /><code>{"private void EvaluateAudio(float progress)"}</code> |  |
| <Link id="m-getbellowangle" /><code>{"private float GetBellowAngle()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-startparticlesystems" /><code>{"private void StartParticleSystems()"}</code> |  |
| <Link id="m-startupdatingbellows" /><code>{"private void StartUpdatingBellows("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |
| <Link id="m-stopparticlesystems" /><code>{"private void StopParticleSystems()"}</code> |  |
| <Link id="m-stopparticlesystemsdelayed" /><code>{"private IEnumerator StopParticleSystemsDelayed() (iterator)"}</code> |  |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> |  |
| <Link id="m-updatecoals" /><code>{"private void UpdateCoals(float lightProgress)"}</code> |  |
| <Link id="m-updatelightfader" /><code>{"private void UpdateLightFader(float lightProgress)"}</code> |  |
| <Link id="m-updatemovement-2" /><code>{"private void UpdateMovement()"}</code> |  |
| <Link id="m-updateparticlesystemalpha" /><code>{"private void UpdateParticleSystemAlpha(float alpha)"}</code> |  |
| <Link id="m-updateparticlesystems" /><code>{"private void UpdateParticleSystems(float lightProgress)"}</code> |  |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Bellows`:

[`Smelter.bellows`](/game-api/types/alta-crafting/smelter#m-bellows).
