---
title: "PrefabSceneDayTimeManager"
description: "class PrefabSceneDayTimeManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PrefabSceneDayTimeManager

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PrefabSceneDayTimeManager()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-btnconvert" /><code>{"private bool btnConvert"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-moonlight" /><code>{"private Light moonLight"}</code> |
| <Link id="m-moonrotator" /><code>{"private Transform moonRotator"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-world/prefabscenesettings">{"PrefabSceneSettings"}</Link>{" settings"}</code> |
| <Link id="m-sunlight" /><code>{"private Light sunLight"}</code> |
| <Link id="m-sunrotator" /><code>{"private Transform sunRotator"}</code> |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gradienttogamaconverter" /><code>{"private void GradientToGamaConverter(Gradient gradient)"}</code> |
| <Link id="m-gradienttolinearconverter" /><code>{"private void GradientToLinearConverter(Gradient gradient)"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |
| <Link id="m-updaterotation" /><code>{"private void UpdateRotation(float dayProgress, float monthProgress)"}</code> |

</details>
