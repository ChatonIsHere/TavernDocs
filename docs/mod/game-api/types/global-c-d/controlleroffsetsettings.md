---
title: "ControllerOffsetSettings"
description: "Scriptable object with per-platform transform offsets for each VR controller hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerOffsetSettings

A **class** in `Root.Township`, the global namespace.

Scriptable object with per-platform transform offsets for each VR controller hand.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerOffsetSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lefthandalignment" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] leftHandAlignment"}</code> | <span className="api-desc">Per-platform offsets for the left hand.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-righthandalignment" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] rightHandAlignment"}</code> | <span className="api-desc">Per-platform offsets for the right hand.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcontrolleroffsetforhand" /><code>{"SerializableTransform GetControllerOffsetForHand("}<Link to="/mod/game-api/types/alta-player/hand">{"Hand"}</Link>{" hand, "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> | <span className="api-desc">Returns the hand's offset for the player mode. OpenVR falls back to the OpenXR entry; otherwise an identity transform with an error log.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandalignmentsforhandindex" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] GetHandAlignmentsForHandIndex("}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex)"}</code> | <span className="api-desc">Returns the left or right alignment list. Logs an error and returns null for both hands.</span> |
| <Link id="m-offsetisopenxr" /><code>{"private static bool OffsetIsOpenXr("}<Link to="/mod/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{" handRotation)"}</code> | <span className="api-desc">True if the alignment entry is for OpenXR.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerOffsetSettings`:

<div className="api-used-in">

[`Hand.controllerOffsetSettings`](/mod/game-api/types/alta-player/hand#m-controlleroffsetsettings).

</div>
