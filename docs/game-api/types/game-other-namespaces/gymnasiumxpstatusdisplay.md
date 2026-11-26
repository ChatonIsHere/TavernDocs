---
title: "GymnasiumXpStatusDisplay"
description: "Debug panel in the feature test gymnasium that shows and changes the nearest player's XP for one progression path (or all of them)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumXpStatusDisplay

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

Debug panel in the feature test gymnasium that shows and changes the nearest player's XP for one progression path (or all of them). The server handles the buttons and syncs the text to clients.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GymnasiumXpStatusDisplay()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" backButton"}</code> | Button that selects the previous path. |
| <Link id="m-currentpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentPath"}</code> | Local copy of the selected path, used when there is no shrine. |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" forwardButton"}</code> | Button that selects the next path. |
| <Link id="m-increasexpbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" increaseXpButton"}</code> | Button that levels up the nearest player once. |
| <Link id="m-maxoutxpbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" maxOutXpButton"}</code> | Button that maxes out the nearest player's XP. |
| <Link id="m-maxxp" /><code>{"private int MaxXp"}</code> | XP cap read from `ProgressionSettings.UncapSkillPoints` in `OnEnable`. |
| <Link id="m-pathname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pathName"}</code> | Text showing the selected path. |
| <Link id="m-pathnames" /><code>{"private string[] pathNames"}</code> | Names of the `ProgressionPath` values, cached in `OnEnable`. |
| <Link id="m-pathxpdisplay" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pathXpDisplay"}</code> | Text showing the nearest player's XP for the selected path. |
| <Link id="m-resetxpbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" resetXpButton"}</code> | Button that clears the nearest player's XP slots. |
| <Link id="m-shrine" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | Backing field for `Shrine`. |
| <Link id="m-syncpath" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPath"}</code> | Method sync for the selected path. |
| <Link id="m-syncstatustext" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStatusText"}</code> | Method sync for the XP status text. |

</details>

## Properties

<details>
<summary>5 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentpath-2" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; set; }"}</code> | The selected path. Reads from and writes to the child `SkillShrine` when there is one; on clients it also updates the path label. |
| <Link id="m-isallpaths" /><code>{"private bool isAllPaths { get; }"}</code> | True when the selected path is `DevDebug`, which makes the buttons act on every path. |
| <Link id="m-maxpathvalue" /><code>{"private int maxPathValue { get; }"}</code> | Upper bound used when serializing the path index (the number of path names). |
| <Link id="m-pathcount" /><code>{"private static int PathCount { get; }"}</code> | Number of values in the `ProgressionPath` enum. |
| <Link id="m-shrine-2" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" Shrine { get; }"}</code> | Optional child `SkillShrine`, found lazily. When present, the path is taken from and pushed to it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the two method syncs (SyncA for the path, SyncB for the status text). |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current path and status text to the chunks when a player connects. |

<details>
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allpathsxp" /><code>{"private string AllPathsXp("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Builds the all-paths status text: first letter of each non-debug path and a level. Bug: it reads `CurrentPath`'s level for every entry. |
| <Link id="m-changeprogressionpathbackwards" /><code>{"private void ChangeProgressionPathBackwards()"}</code> | Server: button handler that moves to the previous progression path and syncs it. |
| <Link id="m-changeprogressionpathforwards" /><code>{"private void ChangeProgressionPathForwards()"}</code> | Server: button handler that moves to the next progression path and syncs it. |
| <Link id="m-getclosestplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" GetClosestPlayer(Vector3 position)"}</code> | Returns the player nearest a position, from `Player.AllPlayers`. The buttons act on this player. |
| <Link id="m-increasexp" /><code>{"private void IncreaseXp()"}</code> | Server: button handler that gives the nearest player enough XP for one level in the current path, or in every path when on `DevDebug`. |
| <Link id="m-increasexpallpaths" /><code>{"private void IncreaseXpAllPaths("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Runs `IncreaseXpSinglePath` for every progression path. |
| <Link id="m-increasexpsinglepath" /><code>{"private void IncreaseXpSinglePath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Gives the player the XP left to reach their next level in one path, through `PlayerProgressionManager.GainExperience`. |
| <Link id="m-maxoutxp" /><code>{"private void MaxOutXp()"}</code> | Server: button handler that raises the nearest player's XP to the uncapped maximum in the current path, or all paths on `DevDebug`. |
| <Link id="m-maxoutxpallpaths" /><code>{"private void MaxOutXpAllPaths("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Runs `MaxOutXpSinglePath` for every progression path. |
| <Link id="m-maxoutxpsinglepath" /><code>{"private void MaxOutXpSinglePath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Gives the player the XP missing up to `MaxXp` in one path. Logs an error if they have no entry for it. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Server: unhooks the button handlers. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Caches the path names, reads `MaxXp` and hooks the buttons. |
| <Link id="m-parseplayerxp" /><code>{"private string ParsePlayerXp("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: builds the status text for a player (current XP, XP for the level and next level). Returns empty on clients. |
| <Link id="m-resetxp" /><code>{"private void ResetXp()"}</code> | Server: button handler that clears the nearest player's slots in the current path (or all paths) and recounts their points. |
| <Link id="m-resetxpallpaths" /><code>{"private void ResetXpAllPaths("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Runs `ResetXpSinglePath` for every progression path. |
| <Link id="m-resetxpsinglepath" /><code>{"private void ResetXpSinglePath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Calls `DebugClearSlots` on the player's experience for one path. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Server: hooks the five buttons' `Released` events to their handlers. |
| <Link id="m-shiftprogressionpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" ShiftProgressionPath(int offset)"}</code> | Returns the path a given offset away from the current one, wrapping around the enum. |
| <Link id="m-syncpath-2" /><code>{"private void SyncPath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync body for the path index. Clients apply the value they read. |
| <Link id="m-syncstatustext-2" /><code>{"private void SyncStatusText("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync body for the status text. The server writes `ParsePlayerXp`, clients show it. |
| <Link id="m-updatepath" /><code>{"private void UpdatePath()"}</code> | Sends both the path and the status text to the chunks. |

</details>
