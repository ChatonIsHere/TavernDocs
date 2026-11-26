---
title: "HandGrip.GripFinger"
description: "One finger of a HandGrip: its configuration and its joints."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGrip.GripFinger

A **class** in `Root.Township`, `Alta.Character`.

One finger of a `HandGrip`: its configuration and its joints. Thumbs get `ThumbGripJoint`s, other fingers plain `GripJoint`s.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`HandGrip`](/game-api/types/alta-player/handgrip)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GripFinger()"}</code> | Creates a `HandGrip.GripFinger` from `hand`, `finger`, `jointTransforms` and `rotations`. |
| <Link id="m-ctor-2" /><code>{"GripFinger("}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand, "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{" finger, Transform[] jointTransforms, "}<Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rotations)"}</code> | Creates a `HandGrip.GripFinger` from `hand`, `finger`, `jointTransforms` and `rotations`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finger" /><code>{"private "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{" finger"}</code> | The finger's settings from the `HandGripConfiguration`. |
| <Link id="m-joints" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip-gripjoint">{"HandGrip.GripJoint"}</Link>{"[] joints"}</code> | The finger's joints, from the knuckle outwards. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-curl" /><code>{"void Curl(Matrix4x4 parent)"}</code> | Resets the joints, then curls them step by step (up to 100 steps) until each touches something or reaches its maximum curl. |
| <Link id="m-lerptosave" /><code>{"void LerpToSave(float time, float skeleton, float splaid, bool isSkeletal, bool canGestureGripping)"}</code> | Blends every joint towards its saved grip pose, passing the skeletal input through the finger's correction curve first. |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos(Matrix4x4 parent)"}</code> | Draws each joint's box, chained from the given parent matrix. |
| <Link id="m-save" /><code>{"void Save()"}</code> | Stores each joint's current curl as its grip pose. |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes each joint's curl step for networking. |

## Used in

Members of other types that take, return or hold a `GripFinger`:

[`HandGrip.fingers`](/game-api/types/alta-player/handgrip#m-fingers).
