---
title: "PlayerModeUtilities"
description: "Static helper that works out the player mode (Quest, Pico, OpenXR, OpenVR, Fly and so on) from the platform, an override and the command line."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerModeUtilities

A **static class** in `Root.Township`, the global namespace.

Static helper that works out the player mode (Quest, Pico, OpenXR, OpenVR, Fly and so on) from the platform, an override and the command line.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Documented in** [Joining a server](/mod/game-api/networking/joining), [Startup and app state](/mod/game-api/console-and-utilities/startup-and-app-state)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" current"}</code> | <span className="api-desc">Cached mode worked out on first read.</span> |
| <Link id="m-forbiddensavemodes" /><code>{"private static readonly IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{"> forbiddenSaveModes"}</code> | <span className="api-desc">AutoCam and Fly.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridemode" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" OverrideMode { get; set; }"}</code> | <span className="api-desc">Mode forced by code. Wins over everything except the Android platform check.</span> |
| <Link id="m-playermode" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | <span className="api-desc">The current mode: Quest or Pico on Android, then `OverrideMode`, then the cached value, then `/fly` or the XR mode from the command line.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isnormalplayermode" /><code>{"static bool IsNormalPlayerMode("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> | <span className="api-desc">False for AutoCam and Fly, which are modes that shouldn't be saved.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-geteditormode" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" GetEditorMode("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" input)"}</code> | <span className="api-desc">Returns the input unchanged in this build.</span> |
| <Link id="m-trygetplayermodeforandroid" /><code>{"private static bool TryGetPlayerModeForAndroid(out "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> | <span className="api-desc">Picks PicoXR or MetaQuest from the platform.</span> |

</details>
