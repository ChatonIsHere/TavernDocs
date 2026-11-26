---
title: "RigMap"
description: "Maps each BoneIdentifier in a required bone list to the matching transform in a character rig."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigMap

A **class** in `Root.Township`, no namespace.

Maps each `BoneIdentifier` in a required bone list to the matching transform in a character rig. Used, for example, to attach orbs to the player's body.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigMap()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private List<Transform> bones"}</code> | Transforms in the same order as the required list. |
| <Link id="m-btnfind" /><code>{"private bool btnFind"}</code> | Inspector button that calls `Find`. |
| <Link id="m-map" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> map"}</code> | Cached bone map. |
| <Link id="m-requiredlist" /><code>{"private "}<Link to="/game-api/types/global-q-r/rigbonelist">{"RigBoneList"}</Link>{" requiredList"}</code> | List of bones the rig must have. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> Bones { get; }"}</code> | Bone identifier to transform map, built on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-find" /><code>{"void Find()"}</code> | Editor: refills `bones` by finding each required bone by name under this transform. |
| <Link id="m-map-2" /><code>{"Transform[] Map("}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] boneIdentifiers)"}</code> | Returns the transforms for an array of bone identifiers, in the same order. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Builds the bone map. |
| <Link id="m-getbones" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> GetBones()"}</code> | Builds the map from `requiredList` and `bones` the first time and returns it. Later changes to `bones` are not picked up. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: re-runs `Find` when the bone count doesn't match the required list. |

</details>

## Used in

Members of other types that take, return or hold a `RigMap`:

[`CharacterDummy.rigMap`](/game-api/types/alta-player/characterdummy#m-rigmap), [`CharacterDummy.RigMap`](/game-api/types/alta-player/characterdummy#m-rigmap-2).
