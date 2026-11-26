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
| <Link id="m-ctor" /><code>{"PlatformLight()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastposition" /><code>{"Vector3 lastPosition"}</code> | Position recorded by the last `GetPosition` call. |

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmesh" /><code>{"private Mesh androidMesh"}</code> | Mesh used for the fake light on Android. With none set, no fake light is made. |
| <Link id="m-androidmeshcolor" /><code>{"private Color androidMeshColor"}</code> | Colour baked into the Android fake light mesh. |
| <Link id="m-color" /><code>{"private Color color"}</code> | Serialized colour value. The `Color` property reads the `Light` component instead. |
| <Link id="m-fakelightrenderer" /><code>{"private Renderer fakeLightRenderer"}</code> | Renderer of the Android fake light mesh, made in `Setup`. |
| <Link id="m-hasfakelight" /><code>{"private bool hasFakeLight"}</code> | True on Android when a fake light mesh was made. |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | Intensity used to build the Android fake light mesh. The `Intensity` property reads the `Light` instead. |
| <Link id="m-isnotimportant" /><code>{"private bool isNotImportant"}</code> | Marks the light as low priority: deprioritised as a pixel light on PC and ignored for darkness on Android. |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | Set once `Setup` has run, so it only runs once. |
| <Link id="m-lightscontroller" /><code>{"private static "}<Link to="/game-api/types/alta-world/baselightscontroller">{"BaseLightsController"}</Link>{" lightsController"}</code> | Backing field for `LightsController`, made on first use (Android or PC version). |
| <Link id="m-range" /><code>{"private float range"}</code> | Range used to scale the Android fake light mesh (twice the range). |
| <Link id="m-targetlight" /><code>{"private Light targetLight"}</code> | Backing field for `TargetLight`, the `Light` component on this object. |

</details>

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

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Runs `Setup` if the light hasn't been set up yet. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Removes the light from the lights controller and hides the Android fake light mesh. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Adds the light to the platform's lights controller. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build bake hook. Does nothing in this build apart from reading `AvoidBake`. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | On Android, builds a child "Fake Light" mesh renderer scaled to the range. On PC, caches the `Light` component. |

</details>

## Used in

Members of other types that take, return or hold a `PlatformLight`:

[`RecipePlacer.crystalLight`](/game-api/types/alta-crafting/recipeplacer#m-crystallight), [`DisableLightOnDock.targetLight`](/game-api/types/alta-crafting/disablelightondock#m-targetlight), [`FireBug.shakeLight`](/game-api/types/alta-intelligence/firebug#m-shakelight), [`AndroidLightsController.buffer`](/game-api/types/alta-world/androidlightscontroller#m-buffer), [`AndroidLightsController.SortedLight.Light`](/game-api/types/alta-world/androidlightscontroller-sortedlight#m-light), [`AndroidLightsController.SortedLight.SortedLight`](/game-api/types/alta-world/androidlightscontroller-sortedlight#m-ctor), [`BaseLightsController.activeLights`](/game-api/types/alta-world/baselightscontroller#m-activelights), [`BaseLightsController.ActiveLights`](/game-api/types/alta-world/baselightscontroller#m-activelights-2), [`BaseLightsController.AddLight`](/game-api/types/alta-world/baselightscontroller#m-addlight), [`BaseLightsController.RemoveLight`](/game-api/types/alta-world/baselightscontroller#m-removelight), [`ISortedLight.Light`](/game-api/types/alta-world/isortedlight#m-light), [`PCLightsController.AddLight`](/game-api/types/alta-world/pclightscontroller#m-addlight), [`PCLightsController.RemoveLight`](/game-api/types/alta-world/pclightscontroller#m-removelight), [`PCLightsController.PCSortedLight.Light`](/game-api/types/alta-world/pclightscontroller-pcsortedlight#m-light), [`PCLightsController.PCSortedLight.PCSortedLight`](/game-api/types/alta-world/pclightscontroller-pcsortedlight#m-ctor), [`ColoredParticleSystem.lightToColor`](/game-api/types/global-c-d/coloredparticlesystem#m-lighttocolor), [`EmberComposerFireEffect.target`](/game-api/types/global-e-h/embercomposerfireeffect#m-target), [`VariableIntensityPlayerLight.platformLight`](/game-api/types/game-other-namespaces/variableintensityplayerlight#m-platformlight), [`FlintSpark.sparkLight`](/game-api/types/global-e-h/flintspark#m-sparklight), [`LightCluster.clusterLight`](/game-api/types/global-i-l/lightcluster#m-clusterlight), [`LightFader.target`](/game-api/types/global-i-l/lightfader#m-target), [`LightFlicker.targetLight`](/game-api/types/global-i-l/lightflicker#m-targetlight), [`LightHands.lightObject`](/game-api/types/global-i-l/lighthands#m-lightobject), [`PlayerEffectManager.LightEffect.light`](/game-api/types/global-p/playereffectmanager-lighteffect#m-light), [`PooledFireEffect.target`](/game-api/types/global-p/pooledfireeffect#m-target).
