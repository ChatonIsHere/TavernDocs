---
title: "PlayerModeExtensions"
description: "Extension methods on the PlayerMode flags."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerModeExtensions

A **static class** in `Alta.Platform`, the global namespace.

Extension methods on the `PlayerMode` flags.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Attributes** `Extension`

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cosmetics" /><code>{"private const "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Cosmetics"}</code> | <span className="api-desc">Flag mask of the modes that use cosmetics. Same as `VR`.</span> |
| <Link id="m-vr" /><code>{"private const "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" VR"}</code> | <span className="api-desc">Flag mask of the VR modes: OpenVR, Oculus and PicoXR.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkcosmetics" /><code>{"static bool CheckCosmetics("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | <span className="api-desc">True if the mode is a VR mode (OpenVR, Oculus or PicoXR). Same test as `CheckVR`.</span> |
| <Link id="m-checkvr" /><code>{"static bool CheckVR("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" mode)"}</code> | <span className="api-desc">True if the mode includes OpenVR, Oculus or PicoXR.</span> |
