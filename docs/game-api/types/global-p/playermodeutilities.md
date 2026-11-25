---
title: "PlayerModeUtilities"
description: "PlayerMode (what this client will join as), OverrideMode (set it before joining to join as something else; Rover does), IsNormalPlayerMode(mode) (false for..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerModeUtilities

A **static class** in `Root.Township`, no namespace.

`PlayerMode` (what this client will join as), `OverrideMode` (set it before joining to join as something else; Rover does), `IsNormalPlayerMode(mode)` (false for Fly and AutoCam, which aren't saved).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Documented in** [Joining a server](/game-api/networking/joining), [Startup and app state](/game-api/console-and-utilities/startup-and-app-state)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-current" /><code>{"private static "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" current"}</code> |
| <Link id="m-forbiddensavemodes" /><code>{"private static readonly IEnumerable<"}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{"> forbiddenSaveModes"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-overridemode" /><code>{"static "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" OverrideMode { get; set; }"}</code> |
| <Link id="m-playermode" /><code>{"static "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-isnormalplayermode" /><code>{"static bool IsNormalPlayerMode("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-geteditormode" /><code>{"private static "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" GetEditorMode("}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" input)"}</code> |
| <Link id="m-trygetplayermodeforandroid" /><code>{"private static bool TryGetPlayerModeForAndroid(out "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" playerMode)"}</code> |

</details>
