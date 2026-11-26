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
| <Link id="m-ctor" /><code>{"RopeBone()"}</code> | <span className="api-desc">Creates an `UltimateRope.RopeBone` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bcreatedcollider" /><code>{"bool bCreatedCollider"}</code> | <span className="api-desc">True if the rope added the collider, so it is removed again on cleanup.</span> |
| <Link id="m-bcreatedrigidbody" /><code>{"bool bCreatedRigidbody"}</code> | <span className="api-desc">True if the rope added the rigidbody, so it is removed again on cleanup.</span> |
| <Link id="m-bisstatic" /><code>{"bool bIsStatic"}</code> | <span className="api-desc">Whether the bone stays fixed under its non-bone parent instead of moving with the rope.</span> |
| <Link id="m-flength" /><code>{"float fLength"}</code> | <span className="api-desc">Length of the bone, used to size its collider.</span> |
| <Link id="m-gobone" /><code>{"GameObject goBone"}</code> | <span className="api-desc">The bone object.</span> |
| <Link id="m-noriginallayer" /><code>{"int nOriginalLayer"}</code> | <span className="api-desc">Layer the bone had before the rope changed it.</span> |
| <Link id="m-qoriginallocalrot" /><code>{"Quaternion qOriginalLocalRot"}</code> | <span className="api-desc">Original local rotation.</span> |
| <Link id="m-tfnonboneparent" /><code>{"Transform tfNonBoneParent"}</code> | <span className="api-desc">The first parent of the bone that isn't itself a bone.</span> |
| <Link id="m-tfparent" /><code>{"Transform tfParent"}</code> | <span className="api-desc">The bone's original parent.</span> |
| <Link id="m-v3originallocalpos" /><code>{"Vector3 v3OriginalLocalPos"}</code> | <span className="api-desc">Original local position.</span> |
| <Link id="m-v3originallocalscale" /><code>{"Vector3 v3OriginalLocalScale"}</code> | <span className="api-desc">Original local scale.</span> |

## Used in

Members of other types that take, return or hold a `RopeBone`:

<div className="api-used-in">

[`UltimateRope.BuildImportedBoneList`](/mod/game-api/types/global-t-x/ultimaterope#m-buildimportedbonelist), [`UltimateRope.BuildImportedBoneListTry`](/mod/game-api/types/global-t-x/ultimaterope#m-buildimportedbonelisttry), [`UltimateRope.ImportedBones`](/mod/game-api/types/global-t-x/ultimaterope#m-importedbones).

</div>
