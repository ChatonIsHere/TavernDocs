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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`BoneWeightTestsMenuAction`](/mod/game-api/types/alta-player/boneweighttestsmenuaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Settings()"}</code> | <span className="api-desc">Creates a `BoneWeightTestsMenuAction.Settings` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-globalboneweights" /><code>{"private SkinWeights globalBoneweights"}</code> | <span className="api-desc">Global skin weights used when `isGlobal` is set.</span> |
| <Link id="m-isapplyingonlod0only" /><code>{"private bool isApplyingOnLOD0Only"}</code> | <span className="api-desc">If set, only LOD 0 gets `playerWeightLevel`; other LODs go to Auto.</span> |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> | <span className="api-desc">Whether to change the global skin weights setting.</span> |
| <Link id="m-name" /><code>{"private string name"}</code> | <span className="api-desc">Backing field for `Name`.</span> |
| <Link id="m-playerweightlevel" /><code>{"private SkinQuality playerWeightLevel"}</code> | <span className="api-desc">Skinned mesh quality applied to players.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name-2" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Preset name shown in the menu.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply()"}</code> | <span className="api-desc">Sets global skin weights (or four bones if not global) and applies the player quality, to LOD 0 only or all LODs.</span> |
| <Link id="m-applyonplayers" /><code>{"static void ApplyOnPlayers(SkinQuality lod0, SkinQuality remanining)"}</code> | <span className="api-desc">Sets skinned mesh quality on every `PlayerCharacter`: one value for LOD 0, another for the rest.</span> |

## Used in

Members of other types that take, return or hold a `Settings`:

<div className="api-used-in">

[`BoneWeightTestsMenuAction.settings`](/mod/game-api/types/alta-player/boneweighttestsmenuaction#m-settings).

</div>
