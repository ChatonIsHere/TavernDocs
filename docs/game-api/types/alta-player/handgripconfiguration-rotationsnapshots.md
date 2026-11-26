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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`HandGripConfiguration`](/game-api/types/alta-player/handgripconfiguration)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RotationSnapshots()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closedhandrotations" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" closedHandRotations"}</code> | Backing field for `Closed`. |
| <Link id="m-defaultrotations" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" defaultRotations"}</code> | Backing field for `Default`. |
| <Link id="m-openhandrotations" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" openHandRotations"}</code> | Backing field for `Open`. |
| <Link id="m-splaidhandrotations" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" splaidHandRotations"}</code> | Backing field for `Splaid`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code><Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Closed { get; }"}</code> | Bone rotations for a closed fist. |
| <Link id="m-default" /><code><Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Default { get; }"}</code> | The hand's rest pose; `HandGrip` takes each bone's full local matrix from it. |
| <Link id="m-open" /><code><Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Open { get; }"}</code> | Bone rotations for a flat open hand. |
| <Link id="m-splaid" /><code><Link to="/game-api/types/global-t-x/transformsavecollection">{"TransformSaveCollection"}</Link>{" Splaid { get; }"}</code> | Bone rotations for a hand with the fingers spread. |

## Used in

Members of other types that take, return or hold a `RotationSnapshots`:

[`HandGrip.GripFinger.GripFinger`](/game-api/types/alta-player/handgrip-gripfinger#m-ctor-2), [`HandGrip.GripJoint.GripJoint`](/game-api/types/alta-player/handgrip-gripjoint#m-ctor-2), [`HandGrip.ThumbGripJoint.ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint#m-ctor-2), [`HandGripConfiguration.leftRotations`](/game-api/types/alta-player/handgripconfiguration#m-leftrotations), [`HandGripConfiguration.LeftRotations`](/game-api/types/alta-player/handgripconfiguration#m-leftrotations-2), [`HandGripConfiguration.rightRotations`](/game-api/types/alta-player/handgripconfiguration#m-rightrotations), [`HandGripConfiguration.RightRotations`](/game-api/types/alta-player/handgripconfiguration#m-rightrotations-2).
