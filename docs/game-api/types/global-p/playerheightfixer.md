---
title: "PlayerHeightFixer"
description: "Client: on the VR camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHeightFixer

A **class** in `Root.Township`, no namespace.

Client: on the VR camera. Before each cull it raises or lowers the camera rig by the player's height setting plus any active platform offsets, clamped to a height range, and copies the result to another transform.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerHeightFixer()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | This object's own transform (the tracked camera). |
| <Link id="m-copyto" /><code>{"private Transform copyTo"}</code> | Transform that gets the camera's local position plus the offset, and its rotation. |
| <Link id="m-fixer" /><code>{"private Transform fixer"}</code> | Parent transform that is moved up or down by the offset. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxheight" /><code>{"private float maxHeight"}</code> | Highest local camera height allowed after the offset (default 3). |
| <Link id="m-minheight" /><code>{"private float minHeight"}</code> | Lowest local camera height allowed after the offset (default 0.1). |
| <Link id="m-platformheightoffsets" /><code>{"private "}<Link to="/game-api/types/global-p/platformheightoffsetsettings">{"PlatformHeightOffsetSettings"}</Link>{" platformHeightOffsets"}</code> | Per-platform offsets added when active. |
| <Link id="m-playeradjustableheightfixersettings" /><code>{"private "}<Link to="/game-api/types/global-p/playeradjustableheightfixersettings">{"PlayerAdjustableHeightFixerSettings"}</Link>{" playerAdjustableHeightFixerSettings"}</code> | Settings asset holding the player's chosen height adjustment. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actualheightfix" /><code>{"static float ActualHeightFix { get; private set; }"}</code> | The vertical offset applied this frame. The OpenXR, SteamVR and player input code add it to tracked positions. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getplatformheightoffset" /><code>{"private float GetPlatformHeightOffset()"}</code> | Adds up the offsets of every active entry in `platformHeightOffsets`. Warns and returns 0 if none are set. |
| <Link id="m-onprecull" /><code>{"private void OnPreCull()"}</code> | Unity camera callback: works out `ActualHeightFix`, clamps the camera height between `minHeight` and `maxHeight`, and moves `fixer` and `copyTo`. |
| <Link id="m-setupfixer" /><code>{"private bool SetupFixer()"}</code> | Editor apply step that sets `fixer` to this object's parent. |

</details>
