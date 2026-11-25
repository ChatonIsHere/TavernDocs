---
title: "BoneWeightTestsMenuAction"
description: "class BoneWeightTestsMenuAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoneWeightTestsMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

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

| Member |
| --- |
| <Link id="m-currentsettings" /><code>{"private int currentSettings"}</code> |
| <Link id="m-defaultweights" /><code>{"private const SkinWeights defaultWeights"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/boneweighttestsmenuaction-settings">{"BoneWeightTestsMenuAction.Settings"}</Link>{"[] settings"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-setweight" /><code>{"private static void SetWeight(SkinWeights weight)"}</code> |

</details>
