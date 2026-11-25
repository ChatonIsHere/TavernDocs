---
title: "PlatformLight"
description: "A light that registers with a platform lights controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlatformLight

A **class** in `Root.Township`, `Alta.Lighting`.

A light that registers with a platform lights controller. On PC it wraps a Unity `Light`; on Android it uses a fake light mesh instead. Enabling and disabling it adds and removes it from the controller.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLight()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastposition" /><code>{"Vector3 lastPosition"}</code> | Position recorded by the last `GetPosition` call. |
| <Link id="m-androidmesh" /><code>{"private Mesh androidMesh"}</code> |  |
| <Link id="m-androidmeshcolor" /><code>{"private Color androidMeshColor"}</code> |  |
| <Link id="m-color" /><code>{"private Color color"}</code> |  |
| <Link id="m-fakelightrenderer" /><code>{"private Renderer fakeLightRenderer"}</code> |  |
| <Link id="m-hasfakelight" /><code>{"private bool hasFakeLight"}</code> |  |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> |  |
| <Link id="m-isnotimportant" /><code>{"private bool isNotImportant"}</code> |  |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> |  |
| <Link id="m-lightscontroller" /><code>{"private static "}<Link to="/game-api/types/alta-world/baselightscontroller">{"BaseLightsController"}</Link>{" lightsController"}</code> |  |
| <Link id="m-range" /><code>{"private float range"}</code> |  |
| <Link id="m-targetlight" /><code>{"private Light targetLight"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-avoidbake" /><code>{"static bool AvoidBake { get; set; }"}</code> | Static flag read during the build bake. Has no effect in this code. |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | Colour of the Unity light. |
| <Link id="m-intensity-2" /><code>{"float Intensity { get; set; }"}</code> | Intensity of the Unity light. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | Set by the lights controller, probably to say whether the light is currently in use. |
| <Link id="m-isnotimportant-2" /><code>{"bool IsNotImportant { get; }"}</code> | If true, it is a low priority pixel light on PC and does not count against darkness on Android. |
| <Link id="m-lightscontroller-2" /><code>{"static "}<Link to="/game-api/types/alta-world/baselightscontroller">{"BaseLightsController"}</Link>{" LightsController { get; }"}</code> | The shared controller for the platform: Android or PC. Made on first use. |
| <Link id="m-maxlightcount" /><code>{"static int MaxLightCount { get; }"}</code> | Pixel light budget from quality settings, minus one. |
| <Link id="m-range-2" /><code>{"float Range { get; set; }"}</code> | Range of the Unity light. |
| <Link id="m-shadows" /><code>{"LightShadows Shadows { get; set; }"}</code> | Shadow mode of the Unity light. |
| <Link id="m-targetlight-2" /><code>{"Light TargetLight { get; }"}</code> | The Unity `Light` on this object. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition()"}</code> | Returns the current position and stores it in `lastPosition`. |
| <Link id="m-setenablefakelight" /><code>{"void SetEnableFakeLight(bool isEnabled)"}</code> | Shows or hides the Android fake light mesh, if there is one. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlatformLight`:

[`RecipePlacer.crystalLight`](/game-api/types/alta-crafting/recipeplacer#m-crystallight), [`DisableLightOnDock.targetLight`](/game-api/types/alta-crafting/disablelightondock#m-targetlight), [`FireBug.shakeLight`](/game-api/types/alta-intelligence/firebug#m-shakelight), [`AndroidLightsController.buffer`](/game-api/types/alta-world/androidlightscontroller#m-buffer), [`AndroidLightsController.SortedLight.Light`](/game-api/types/alta-world/androidlightscontroller-sortedlight#m-light), [`AndroidLightsController.SortedLight.SortedLight`](/game-api/types/alta-world/androidlightscontroller-sortedlight#m-ctor), [`BaseLightsController.activeLights`](/game-api/types/alta-world/baselightscontroller#m-activelights), [`BaseLightsController.ActiveLights`](/game-api/types/alta-world/baselightscontroller#m-activelights-2), [`BaseLightsController.AddLight`](/game-api/types/alta-world/baselightscontroller#m-addlight), [`BaseLightsController.RemoveLight`](/game-api/types/alta-world/baselightscontroller#m-removelight), [`ISortedLight.Light`](/game-api/types/alta-world/isortedlight#m-light), [`PCLightsController.AddLight`](/game-api/types/alta-world/pclightscontroller#m-addlight), [`PCLightsController.RemoveLight`](/game-api/types/alta-world/pclightscontroller#m-removelight), [`PCLightsController.PCSortedLight.Light`](/game-api/types/alta-world/pclightscontroller-pcsortedlight#m-light), [`PCLightsController.PCSortedLight.PCSortedLight`](/game-api/types/alta-world/pclightscontroller-pcsortedlight#m-ctor), [`ColoredParticleSystem.lightToColor`](/game-api/types/global-c-d/coloredparticlesystem#m-lighttocolor), [`EmberComposerFireEffect.target`](/game-api/types/global-e-h/embercomposerfireeffect#m-target), [`VariableIntensityPlayerLight.platformLight`](/game-api/types/game-other-namespaces/variableintensityplayerlight#m-platformlight), [`FlintSpark.sparkLight`](/game-api/types/global-e-h/flintspark#m-sparklight), [`LightCluster.clusterLight`](/game-api/types/global-i-l/lightcluster#m-clusterlight), [`LightFader.target`](/game-api/types/global-i-l/lightfader#m-target), [`LightFlicker.targetLight`](/game-api/types/global-i-l/lightflicker#m-targetlight), [`LightHands.lightObject`](/game-api/types/global-i-l/lighthands#m-lightobject), [`PlayerEffectManager.LightEffect.light`](/game-api/types/global-p/playereffectmanager-lighteffect#m-light), [`PooledFireEffect.target`](/game-api/types/global-p/pooledfireeffect#m-target).
