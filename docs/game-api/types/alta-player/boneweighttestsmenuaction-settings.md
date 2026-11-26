---
title: "BoneWeightTestsMenuAction.Settings"
description: "Private: one test preset for BoneWeightTestsMenuAction, setting the global skin weight quality and players' skinned mesh quality."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoneWeightTestsMenuAction.Settings

A **private class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one test preset for `BoneWeightTestsMenuAction`, setting the global skin weight quality and players' skinned mesh quality.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`BoneWeightTestsMenuAction`](/game-api/types/alta-player/boneweighttestsmenuaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Settings()"}</code> | Creates a `BoneWeightTestsMenuAction.Settings` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-globalboneweights" /><code>{"private SkinWeights globalBoneweights"}</code> | Global skin weights used when `isGlobal` is set. |
| <Link id="m-isapplyingonlod0only" /><code>{"private bool isApplyingOnLOD0Only"}</code> | If set, only LOD 0 gets `playerWeightLevel`; other LODs go to Auto. |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> | Whether to change the global skin weights setting. |
| <Link id="m-name" /><code>{"private string name"}</code> | Backing field for `Name`. |
| <Link id="m-playerweightlevel" /><code>{"private SkinQuality playerWeightLevel"}</code> | Skinned mesh quality applied to players. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | Preset name shown in the menu. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | Sets global skin weights (or four bones if not global) and applies the player quality, to LOD 0 only or all LODs. |
| <Link id="m-applyonplayers" /><code>{"static void ApplyOnPlayers(SkinQuality lod0, SkinQuality remanining)"}</code> | Sets skinned mesh quality on every `PlayerCharacter`: one value for LOD 0, another for the rest. |

## Used in

Members of other types that take, return or hold a `Settings`:

[`BoneWeightTestsMenuAction.settings`](/game-api/types/alta-player/boneweighttestsmenuaction#m-settings).
