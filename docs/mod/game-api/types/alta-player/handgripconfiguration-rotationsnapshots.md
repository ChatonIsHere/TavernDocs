---
title: "HandGripConfiguration.RotationSnapshots"
description: "Saved finger bone rotations for one hand in four poses (default, open, splayed, closed)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGripConfiguration.RotationSnapshots

A **class** in `Root.Township`, `Alta.Character`.

Saved finger bone rotations for one hand in four poses (default, open, splayed, closed). `HandGrip` reads them per bone to blend the hand's grip.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`HandGripConfiguration`](/mod/game-api/types/alta-player/handgripconfiguration)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotationSnapshots()"}</code> | <span className="api-desc">Creates a `HandGripConfiguration.RotationSnapshots` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closedhandrotations" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" closedHandRotations"}</code> | <span className="api-desc">Backing field for `Closed`.</span> |
| <Link id="m-defaultrotations" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" defaultRotations"}</code> | <span className="api-desc">Backing field for `Default`.</span> |
| <Link id="m-openhandrotations" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" openHandRotations"}</code> | <span className="api-desc">Backing field for `Open`.</span> |
| <Link id="m-splaidhandrotations" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" splaidHandRotations"}</code> | <span className="api-desc">Backing field for `Splaid`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code><Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Closed { get; }"}</code> | <span className="api-desc">Bone rotations for a closed fist.</span> |
| <Link id="m-default" /><code><Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Default { get; }"}</code> | <span className="api-desc">The hand's rest pose; `HandGrip` takes each bone's full local matrix from it.</span> |
| <Link id="m-open" /><code><Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Open { get; }"}</code> | <span className="api-desc">Bone rotations for a flat open hand.</span> |
| <Link id="m-splaid" /><code><Link to="/mod/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Splaid { get; }"}</code> | <span className="api-desc">Bone rotations for a hand with the fingers spread.</span> |

## Used in

Members of other types that take, return or hold a `RotationSnapshots`:

<div className="api-used-in">

[`HandGrip.GripFinger.GripFinger`](/mod/game-api/types/alta-player/handgrip-gripfinger#m-ctor-2), [`HandGrip.GripJoint.GripJoint`](/mod/game-api/types/alta-player/handgrip-gripjoint#m-ctor-2), [`HandGrip.ThumbGripJoint.ThumbGripJoint`](/mod/game-api/types/alta-player/handgrip-thumbgripjoint#m-ctor-2), [`HandGripConfiguration.leftRotations`](/mod/game-api/types/alta-player/handgripconfiguration#m-leftrotations), [`HandGripConfiguration.LeftRotations`](/mod/game-api/types/alta-player/handgripconfiguration#m-leftrotations-2), [`HandGripConfiguration.rightRotations`](/mod/game-api/types/alta-player/handgripconfiguration#m-rightrotations), [`HandGripConfiguration.RightRotations`](/mod/game-api/types/alta-player/handgripconfiguration#m-rightrotations-2).

</div>
