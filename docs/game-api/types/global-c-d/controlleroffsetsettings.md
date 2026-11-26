---
title: "ControllerOffsetSettings"
description: "Scriptable object with per-platform transform offsets for each VR controller hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerOffsetSettings

A **class** in `Root.Township`, no namespace.

Scriptable object with per-platform transform offsets for each VR controller hand.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerOffsetSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lefthandalignment" /><code>{"private "}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] leftHandAlignment"}</code> | Per-platform offsets for the left hand. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-righthandalignment" /><code>{"private "}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] rightHandAlignment"}</code> | Per-platform offsets for the right hand. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrolleroffsetforhand" /><code>{"SerializableTransform GetControllerOffsetForHand("}<Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" hand, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> | Returns the hand's offset for the player mode. OpenVR falls back to the OpenXR entry; otherwise an identity transform with an error log. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandalignmentsforhandindex" /><code>{"private "}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] GetHandAlignmentsForHandIndex("}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex)"}</code> | Returns the left or right alignment list. Logs an error and returns null for both hands. |
| <Link id="m-offsetisopenxr" /><code>{"private static bool OffsetIsOpenXr("}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{" handRotation)"}</code> | True if the alignment entry is for OpenXR. |

</details>

## Used in

Members of other types that take, return or hold a `ControllerOffsetSettings`:

[`Hand.controllerOffsetSettings`](/game-api/types/alta-player/hand#m-controlleroffsetsettings).
