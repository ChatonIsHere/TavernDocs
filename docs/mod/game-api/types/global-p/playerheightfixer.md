---
title: "PlayerHeightFixer"
description: "Client: on the VR camera."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHeightFixer

A **class** in `Root.Township`, the global namespace.

Client: on the VR camera. Before each cull it raises or lowers the camera rig by the player's height setting plus any active platform offsets, clamped to a height range, and copies the result to another transform.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerHeightFixer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">This object's own transform (the tracked camera).</span> |
| <Link id="m-copyto" /><code>{"private Transform copyTo"}</code> | <span className="api-desc">Transform that gets the camera's local position plus the offset, and its rotation.</span> |
| <Link id="m-fixer" /><code>{"private Transform fixer"}</code> | <span className="api-desc">Parent transform that is moved up or down by the offset.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxheight" /><code>{"private float maxHeight"}</code> | <span className="api-desc">Highest local camera height allowed after the offset (default 3).</span> |
| <Link id="m-minheight" /><code>{"private float minHeight"}</code> | <span className="api-desc">Lowest local camera height allowed after the offset (default 0.1).</span> |
| <Link id="m-platformheightoffsets" /><code>{"private "}<Link to="/mod/game-api/types/global-p/platformheightoffsetsettings">{"PlatformHeightOffsetSettings"}</Link>{" platformHeightOffsets"}</code> | <span className="api-desc">Per-platform offsets added when active.</span> |
| <Link id="m-playeradjustableheightfixersettings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playeradjustableheightfixersettings">{"PlayerAdjustableHeightFixerSettings"}</Link>{" playerAdjustableHeightFixerSettings"}</code> | <span className="api-desc">Settings asset holding the player's chosen height adjustment.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-actualheightfix" /><code>{"static float ActualHeightFix { get; private set; }"}</code> | <span className="api-desc">The vertical offset applied this frame. The OpenXR, SteamVR and player input code add it to tracked positions.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getplatformheightoffset" /><code>{"private float GetPlatformHeightOffset()"}</code> | <span className="api-desc">Adds up the offsets of every active entry in `platformHeightOffsets`. Warns and returns 0 if none are set.</span> |
| <Link id="m-onprecull" /><code>{"private void OnPreCull()"}</code> | <span className="api-desc">Unity camera callback: works out `ActualHeightFix`, clamps the camera height between `minHeight` and `maxHeight`, and moves `fixer` and `copyTo`.</span> |
| <Link id="m-setupfixer" /><code>{"private bool SetupFixer()"}</code> | <span className="api-desc">Editor apply step that sets `fixer` to this object's parent.</span> |

</details>
