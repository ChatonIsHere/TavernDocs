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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlatformLight()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastposition" /><code>{"Vector3 lastPosition"}</code> | <span className="api-desc">Position recorded by the last `GetPosition` call.</span> |

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmesh" /><code>{"private Mesh androidMesh"}</code> | <span className="api-desc">Mesh used for the fake light on Android. With none set, no fake light is made.</span> |
| <Link id="m-androidmeshcolor" /><code>{"private Color androidMeshColor"}</code> | <span className="api-desc">Colour baked into the Android fake light mesh.</span> |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Serialized colour value. The `Color` property reads the `Light` component instead.</span> |
| <Link id="m-fakelightrenderer" /><code>{"private Renderer fakeLightRenderer"}</code> | <span className="api-desc">Renderer of the Android fake light mesh, made in `Setup`.</span> |
| <Link id="m-hasfakelight" /><code>{"private bool hasFakeLight"}</code> | <span className="api-desc">True on Android when a fake light mesh was made.</span> |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | <span className="api-desc">Intensity used to build the Android fake light mesh. The `Intensity` property reads the `Light` instead.</span> |
| <Link id="m-isnotimportant" /><code>{"private bool isNotImportant"}</code> | <span className="api-desc">Marks the light as low priority: deprioritised as a pixel light on PC and ignored for darkness on Android.</span> |
| <Link id="m-issetup" /><code>{"private bool isSetup"}</code> | <span className="api-desc">Set once `Setup` has run, so it only runs once.</span> |
| <Link id="m-lightscontroller" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/baselightscontroller">{"BaseLightsController"}</Link>{" lightsController"}</code> | <span className="api-desc">Backing field for `LightsController`, made on first use (Android or PC version).</span> |
| <Link id="m-range" /><code>{"private float range"}</code> | <span className="api-desc">Range used to scale the Android fake light mesh (twice the range).</span> |
| <Link id="m-targetlight" /><code>{"private Light targetLight"}</code> | <span className="api-desc">Backing field for `TargetLight`, the `Light` component on this object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-avoidbake" /><code>{"static bool AvoidBake { get; set; }"}</code> | <span className="api-desc">Static flag read during the build bake. Has no effect in this code.</span> |
| <Link id="m-color-2" /><code>{"Color Color { get; set; }"}</code> | <span className="api-desc">Colour of the Unity light.</span> |
| <Link id="m-intensity-2" /><code>{"float Intensity { get; set; }"}</code> | <span className="api-desc">Intensity of the Unity light.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">Set by the lights controller, probably to say whether the light is currently in use.</span> |
| <Link id="m-isnotimportant-2" /><code>{"bool IsNotImportant { get; }"}</code> | <span className="api-desc">If true, it is a low priority pixel light on PC and does not count against darkness on Android.</span> |
| <Link id="m-lightscontroller-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/baselightscontroller">{"BaseLightsController"}</Link>{" LightsController { get; }"}</code> | <span className="api-desc">The shared controller for the platform: Android or PC. Made on first use.</span> |
| <Link id="m-maxlightcount" /><code>{"static int MaxLightCount { get; }"}</code> | <span className="api-desc">Pixel light budget from quality settings, minus one.</span> |
| <Link id="m-range-2" /><code>{"float Range { get; set; }"}</code> | <span className="api-desc">Range of the Unity light.</span> |
| <Link id="m-shadows" /><code>{"LightShadows Shadows { get; set; }"}</code> | <span className="api-desc">Shadow mode of the Unity light.</span> |
| <Link id="m-targetlight-2" /><code>{"Light TargetLight { get; }"}</code> | <span className="api-desc">The Unity `Light` on this object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition()"}</code> | <span className="api-desc">Returns the current position and stores it in `lastPosition`.</span> |
| <Link id="m-setenablefakelight" /><code>{"void SetEnableFakeLight(bool isEnabled)"}</code> | <span className="api-desc">Shows or hides the Android fake light mesh, if there is one.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Runs `Setup` if the light hasn't been set up yet.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Removes the light from the lights controller and hides the Android fake light mesh.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Adds the light to the platform's lights controller.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build bake hook. Does nothing in this build apart from reading `AvoidBake`.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">On Android, builds a child "Fake Light" mesh renderer scaled to the range. On PC, caches the `Light` component.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlatformLight`:

<div className="api-used-in">

[`RecipePlacer.crystalLight`](/mod/game-api/types/alta-crafting/recipeplacer#m-crystallight), [`DisableLightOnDock.targetLight`](/mod/game-api/types/alta-crafting/disablelightondock#m-targetlight), [`FireBug.shakeLight`](/mod/game-api/types/alta-intelligence/firebug#m-shakelight), [`AndroidLightsController.buffer`](/mod/game-api/types/alta-world/androidlightscontroller#m-buffer), [`AndroidLightsController.SortedLight.Light`](/mod/game-api/types/alta-world/androidlightscontroller-sortedlight#m-light), [`AndroidLightsController.SortedLight.SortedLight`](/mod/game-api/types/alta-world/androidlightscontroller-sortedlight#m-ctor), [`BaseLightsController.activeLights`](/mod/game-api/types/alta-world/baselightscontroller#m-activelights), [`BaseLightsController.ActiveLights`](/mod/game-api/types/alta-world/baselightscontroller#m-activelights-2), [`BaseLightsController.AddLight`](/mod/game-api/types/alta-world/baselightscontroller#m-addlight), [`BaseLightsController.RemoveLight`](/mod/game-api/types/alta-world/baselightscontroller#m-removelight), [`ISortedLight.Light`](/mod/game-api/types/alta-world/isortedlight#m-light), [`PCLightsController.AddLight`](/mod/game-api/types/alta-world/pclightscontroller#m-addlight), [`PCLightsController.RemoveLight`](/mod/game-api/types/alta-world/pclightscontroller#m-removelight), [`PCLightsController.PCSortedLight.Light`](/mod/game-api/types/alta-world/pclightscontroller-pcsortedlight#m-light), [`PCLightsController.PCSortedLight.PCSortedLight`](/mod/game-api/types/alta-world/pclightscontroller-pcsortedlight#m-ctor), [`ColoredParticleSystem.lightToColor`](/mod/game-api/types/global-c-d/coloredparticlesystem#m-lighttocolor), [`EmberComposerFireEffect.target`](/mod/game-api/types/global-e-h/embercomposerfireeffect#m-target), [`VariableIntensityPlayerLight.platformLight`](/mod/game-api/types/game-other-namespaces/variableintensityplayerlight#m-platformlight), [`FlintSpark.sparkLight`](/mod/game-api/types/global-e-h/flintspark#m-sparklight), [`LightCluster.clusterLight`](/mod/game-api/types/global-i-l/lightcluster#m-clusterlight), [`LightFader.target`](/mod/game-api/types/global-i-l/lightfader#m-target), [`LightFlicker.targetLight`](/mod/game-api/types/global-i-l/lightflicker#m-targetlight), [`LightHands.lightObject`](/mod/game-api/types/global-i-l/lighthands#m-lightobject), [`PlayerEffectManager.LightEffect.light`](/mod/game-api/types/global-p/playereffectmanager-lighteffect#m-light), [`PooledFireEffect.target`](/mod/game-api/types/global-p/pooledfireeffect#m-target).

</div>
