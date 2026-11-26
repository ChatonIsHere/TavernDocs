---
title: "UltimateRope.RopeBone"
description: "One imported bone of a skinned rope in the third-party Ultimate Rope asset, with what the rope added to it and its original transform so it can be put back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRope.RopeBone

A **class** in `Root.Township`, the global namespace.

One imported bone of a skinned rope in the third-party Ultimate Rope asset, with what the rope added to it and its original transform so it can be put back.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`UltimateRope`](/mod/game-api/types/global-t-x/ultimaterope)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeBone()"}</code> | Creates an `UltimateRope.RopeBone` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bcreatedcollider" /><code>{"bool bCreatedCollider"}</code> | True if the rope added the collider, so it is removed again on cleanup. |
| <Link id="m-bcreatedrigidbody" /><code>{"bool bCreatedRigidbody"}</code> | True if the rope added the rigidbody, so it is removed again on cleanup. |
| <Link id="m-bisstatic" /><code>{"bool bIsStatic"}</code> | Whether the bone stays fixed under its non-bone parent instead of moving with the rope. |
| <Link id="m-flength" /><code>{"float fLength"}</code> | Length of the bone, used to size its collider. |
| <Link id="m-gobone" /><code>{"GameObject goBone"}</code> | The bone object. |
| <Link id="m-noriginallayer" /><code>{"int nOriginalLayer"}</code> | Layer the bone had before the rope changed it. |
| <Link id="m-qoriginallocalrot" /><code>{"Quaternion qOriginalLocalRot"}</code> | Original local rotation. |
| <Link id="m-tfnonboneparent" /><code>{"Transform tfNonBoneParent"}</code> | The first parent of the bone that isn't itself a bone. |
| <Link id="m-tfparent" /><code>{"Transform tfParent"}</code> | The bone's original parent. |
| <Link id="m-v3originallocalpos" /><code>{"Vector3 v3OriginalLocalPos"}</code> | Original local position. |
| <Link id="m-v3originallocalscale" /><code>{"Vector3 v3OriginalLocalScale"}</code> | Original local scale. |

## Used in

Members of other types that take, return or hold a `RopeBone`:

[`UltimateRope.BuildImportedBoneList`](/mod/game-api/types/global-t-x/ultimaterope#m-buildimportedbonelist), [`UltimateRope.BuildImportedBoneListTry`](/mod/game-api/types/global-t-x/ultimaterope#m-buildimportedbonelisttry), [`UltimateRope.ImportedBones`](/mod/game-api/types/global-t-x/ultimaterope#m-importedbones).
