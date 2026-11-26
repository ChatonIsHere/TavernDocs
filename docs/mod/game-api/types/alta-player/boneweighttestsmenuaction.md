---
title: "BoneWeightTestsMenuAction"
description: "Developer quick access action that cycles through skin weight and skinned mesh quality presets for testing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoneWeightTestsMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Developer quick access action that cycles through skin weight and skinned mesh quality presets for testing. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Nested types** [`Settings`](/mod/game-api/types/alta-player/boneweighttestsmenuaction-settings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoneWeightTestsMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsettings" /><code>{"private int currentSettings"}</code> | <span className="api-desc">Index of the applied preset, -1 for the default.</span> |
| <Link id="m-defaultweights" /><code>{"private const SkinWeights defaultWeights"}</code> | <span className="api-desc">Four bones, the weights restored after the last preset.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/boneweighttestsmenuaction-settings">{"BoneWeightTestsMenuAction.Settings"}</Link>{"[] settings"}</code> | <span className="api-desc">The presets to cycle through.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Applies the next preset and shows its name; after the last one, resets to four bones and auto quality.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setweight" /><code>{"private static void SetWeight(SkinWeights weight)"}</code> | <span className="api-desc">Sets Unity's global `QualitySettings.skinWeights`.</span> |

</details>
