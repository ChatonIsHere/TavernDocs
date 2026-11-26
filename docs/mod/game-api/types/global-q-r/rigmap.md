---
title: "RigMap"
description: "Maps each BoneIdentifier in a required bone list to the matching transform in a character rig."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigMap

A **class** in `Root.Township`, the global namespace.

Maps each `BoneIdentifier` in a required bone list to the matching transform in a character rig. Used, for example, to attach orbs to the player's body.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigMap()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private List<Transform> bones"}</code> | <span className="api-desc">Transforms in the same order as the required list.</span> |
| <Link id="m-btnfind" /><code>{"private bool btnFind"}</code> | <span className="api-desc">Inspector button that calls `Find`.</span> |
| <Link id="m-map" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> map"}</code> | <span className="api-desc">Cached bone map.</span> |
| <Link id="m-requiredlist" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/rigbonelist">{"RigBoneList"}</Link>{" requiredList"}</code> | <span className="api-desc">List of bones the rig must have.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> Bones { get; }"}</code> | <span className="api-desc">Bone identifier to transform map, built on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-find" /><code>{"void Find()"}</code> | <span className="api-desc">Editor: refills `bones` by finding each required bone by name under this transform.</span> |
| <Link id="m-map-2" /><code>{"Transform[] Map("}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] boneIdentifiers)"}</code> | <span className="api-desc">Returns the transforms for an array of bone identifiers, in the same order.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Builds the bone map.</span> |
| <Link id="m-getbones" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> GetBones()"}</code> | <span className="api-desc">Builds the map from `requiredList` and `bones` the first time and returns it. Later changes to `bones` are not picked up.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: re-runs `Find` when the bone count doesn't match the required list.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RigMap`:

<div className="api-used-in">

[`CharacterDummy.rigMap`](/mod/game-api/types/alta-player/characterdummy#m-rigmap), [`CharacterDummy.RigMap`](/mod/game-api/types/alta-player/characterdummy#m-rigmap-2).

</div>
