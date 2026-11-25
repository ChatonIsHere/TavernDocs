---
title: "HandGrip.GripFinger"
description: "class HandGrip.GripFinger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGrip.GripFinger

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`HandGrip`](/game-api/types/alta-player/handgrip)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GripFinger()"}</code> |
| <Link id="m-ctor-2" /><code>{"GripFinger("}<Link to="/game-api/types/alta-player/handgrip">{"HandGrip"}</Link>{" hand, "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{" finger, Transform[] jointTransforms, "}<Link to="/game-api/types/alta-player/handgripconfiguration-rotationsnapshots">{"HandGripConfiguration.RotationSnapshots"}</Link>{" rotations)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-finger" /><code>{"private "}<Link to="/game-api/types/alta-player/handgripconfiguration-finger">{"HandGripConfiguration.Finger"}</Link>{" finger"}</code> |
| <Link id="m-joints" /><code>{"private "}<Link to="/game-api/types/alta-player/handgrip-gripjoint">{"HandGrip.GripJoint"}</Link>{"[] joints"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-curl" /><code>{"void Curl(Matrix4x4 parent)"}</code> |
| <Link id="m-lerptosave" /><code>{"void LerpToSave(float time, float skeleton, float splaid, bool isSkeletal, bool canGestureGripping)"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"void OnDrawGizmos(Matrix4x4 parent)"}</code> |
| <Link id="m-save" /><code>{"void Save()"}</code> |
| <Link id="m-serializegrip" /><code>{"void SerializeGrip("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

## Used in

Members of other types that take, return or hold a `GripFinger`:

[`HandGrip.fingers`](/game-api/types/alta-player/handgrip#m-fingers).
