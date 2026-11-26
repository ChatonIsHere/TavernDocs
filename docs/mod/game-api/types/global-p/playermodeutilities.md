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

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" current"}</code> | Cached mode worked out on first read. |
| <Link id="m-forbiddensavemodes" /><code>{"private static readonly IEnumerable<"}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{"> forbiddenSaveModes"}</code> | AutoCam and Fly. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overridemode" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" OverrideMode { get; set; }"}</code> | Mode forced by code. Wins over everything except the Android platform check. |
| <Link id="m-playermode" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | The current mode: Quest or Pico on Android, then `OverrideMode`, then the cached value, then `/fly` or the XR mode from the command line. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isnormalplayermode" /><code>{"static bool IsNormalPlayerMode("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> | False for AutoCam and Fly, which are modes that shouldn't be saved. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-geteditormode" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" GetEditorMode("}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" input)"}</code> | Returns the input unchanged in this build. |
| <Link id="m-trygetplayermodeforandroid" /><code>{"private static bool TryGetPlayerModeForAndroid(out "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> | Picks PicoXR or MetaQuest from the platform. |

</details>
