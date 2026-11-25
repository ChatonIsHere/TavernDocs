---
title: "RigMap"
description: "class RigMap in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RigMap

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RigMap()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bones" /><code>{"private List<Transform> bones"}</code> |  |
| <Link id="m-btnfind" /><code>{"private bool btnFind"}</code> |  |
| <Link id="m-map" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> map"}</code> |  |
| <Link id="m-requiredlist" /><code>{"private "}<Link to="/game-api/types/global-q-r/rigbonelist">{"RigBoneList"}</Link>{" requiredList"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bones-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> Bones { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-find" /><code>{"void Find()"}</code> |  |
| <Link id="m-map-2" /><code>{"Transform[] Map("}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{"[] boneIdentifiers)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getbones" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{", Transform> GetBones()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `RigMap`:

[`CharacterDummy.rigMap`](/game-api/types/alta-player/characterdummy#m-rigmap), [`CharacterDummy.RigMap`](/game-api/types/alta-player/characterdummy#m-rigmap-2).
