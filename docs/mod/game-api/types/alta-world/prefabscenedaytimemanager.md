---
title: "PrefabSceneDayTimeManager"
description: "Editor tool for prefab scenes: previews the sun, moon, sky and fog for a set time of day while not playing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabSceneDayTimeManager

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Editor tool for prefab scenes: previews the sun, moon, sky and fog for a set time of day while not playing.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabSceneDayTimeManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnconvert" /><code>{"private bool btnConvert"}</code> | <span className="api-desc">Inspector button that converts the fog colour gradient each update while ticked.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-moonlight" /><code>{"private Light moonLight"}</code> | <span className="api-desc">Moon light; found under the moon rotator if not set.</span> |
| <Link id="m-moonrotator" /><code>{"private Transform moonRotator"}</code> | <span className="api-desc">Transform tagged `MoonRotator`.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/prefabscenesettings">{"PrefabSceneSettings"}</Link>{" settings"}</code> | <span className="api-desc">Prefab scene settings with the debug time and sky curves.</span> |
| <Link id="m-sunlight" /><code>{"private Light sunLight"}</code> | <span className="api-desc">Sun light; found under the sun rotator if not set.</span> |
| <Link id="m-sunrotator" /><code>{"private Transform sunRotator"}</code> | <span className="api-desc">Transform tagged `SunRotator`.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gradienttogamaconverter" /><code>{"private void GradientToGamaConverter(Gradient gradient)"}</code> | <span className="api-desc">Converts a gradient's colours from sRGB to linear. Not called.</span> |
| <Link id="m-gradienttolinearconverter" /><code>{"private void GradientToLinearConverter(Gradient gradient)"}</code> | <span className="api-desc">Converts a gradient's colours from linear to sRGB. Run by the Convert button on the fog gradient.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Edit mode: finds the sun and moon, rotates them for the debug day and month progress, and sets ambient, fog, lights and skybox.</span> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation(float dayProgress, float monthProgress)"}</code> | <span className="api-desc">Rotates the sun and moon for a day and month progress and passes their directions to the skybox.</span> |

</details>
