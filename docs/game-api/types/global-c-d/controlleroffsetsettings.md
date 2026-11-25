---
title: "ControllerOffsetSettings"
description: "class ControllerOffsetSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerOffsetSettings

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControllerOffsetSettings()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-lefthandalignment" /><code>{"private "}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] leftHandAlignment"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-righthandalignment" /><code>{"private "}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] rightHandAlignment"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getcontrolleroffsetforhand" /><code>{"SerializableTransform GetControllerOffsetForHand("}<Link to="/game-api/types/alta-player/hand">{"Hand"}</Link>{" hand, "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-gethandalignmentsforhandindex" /><code>{"private "}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{"[] GetHandAlignmentsForHandIndex("}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex)"}</code> |
| <Link id="m-offsetisopenxr" /><code>{"private static bool OffsetIsOpenXr("}<Link to="/game-api/types/alta-player/platformhandalignment">{"PlatformHandAlignment"}</Link>{" handRotation)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ControllerOffsetSettings`:

[`Hand.controllerOffsetSettings`](/game-api/types/alta-player/hand#m-controlleroffsetsettings).
