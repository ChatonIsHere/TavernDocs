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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Nested types** [`Settings`](/game-api/types/alta-player/boneweighttestsmenuaction-settings)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoneWeightTestsMenuAction()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsettings" /><code>{"private int currentSettings"}</code> | Index of the applied preset, -1 for the default. |
| <Link id="m-defaultweights" /><code>{"private const SkinWeights defaultWeights"}</code> | Four bones, the weights restored after the last preset. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/boneweighttestsmenuaction-settings">{"BoneWeightTestsMenuAction.Settings"}</Link>{"[] settings"}</code> | The presets to cycle through. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | Always false. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Applies the next preset and shows its name; after the last one, resets to four bones and auto quality. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setweight" /><code>{"private static void SetWeight(SkinWeights weight)"}</code> | Sets Unity's global `QualitySettings.skinWeights`. |

</details>
