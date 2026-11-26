---
title: "AudioEnvironmentBlendSettings"
description: "Global audio settings asset with the curve for blending between audio environments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AudioEnvironmentBlendSettings

A **class** in `Root.Township`, the global namespace.

Global audio settings asset with the curve for blending between audio environments. Get it with `GlobalSettings<AudioEnvironmentBlendSettings>.Instance`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`GlobalSettings<AudioEnvironmentBlendSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`AudioEnvironmentBlendSettings`](/mod/game-api/types/global-a-b/audioenvironmentblendsettings), [`AudioEnvironmentBlendSettings.Create`](/mod/game-api/types/global-a-b/audioenvironmentblendsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/audioenvironmentblendsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AudioEnvironmentBlendSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blendcurve" /><code>{"private AnimationCurve blendCurve"}</code> | Backing field for `BlendCurve`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blendcurve-2" /><code>{"AnimationCurve BlendCurve { get; }"}</code> | Blend amount over distance, where 0 is an environment's centre and 1 the edge of its bounds. |
