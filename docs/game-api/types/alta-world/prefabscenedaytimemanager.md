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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PrefabSceneDayTimeManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnconvert" /><code>{"private bool btnConvert"}</code> | Inspector button that converts the fog colour gradient each update while ticked. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-moonlight" /><code>{"private Light moonLight"}</code> | Moon light; found under the moon rotator if not set. |
| <Link id="m-moonrotator" /><code>{"private Transform moonRotator"}</code> | Transform tagged `MoonRotator`. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world/prefabscenesettings">{"PrefabSceneSettings"}</Link>{" settings"}</code> | Prefab scene settings with the debug time and sky curves. |
| <Link id="m-sunlight" /><code>{"private Light sunLight"}</code> | Sun light; found under the sun rotator if not set. |
| <Link id="m-sunrotator" /><code>{"private Transform sunRotator"}</code> | Transform tagged `SunRotator`. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gradienttogamaconverter" /><code>{"private void GradientToGamaConverter(Gradient gradient)"}</code> | Converts a gradient's colours from sRGB to linear. Not called. |
| <Link id="m-gradienttolinearconverter" /><code>{"private void GradientToLinearConverter(Gradient gradient)"}</code> | Converts a gradient's colours from linear to sRGB. Run by the Convert button on the fog gradient. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Edit mode: finds the sun and moon, rotates them for the debug day and month progress, and sets ambient, fog, lights and skybox. |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation(float dayProgress, float monthProgress)"}</code> | Rotates the sun and moon for a day and month progress and passes their directions to the skybox. |

</details>
