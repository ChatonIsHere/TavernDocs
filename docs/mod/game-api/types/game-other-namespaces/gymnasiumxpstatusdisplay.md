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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumXpStatusDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" backButton"}</code> | <span className="api-desc">Button that selects the previous path.</span> |
| <Link id="m-currentpath" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentPath"}</code> | <span className="api-desc">Local copy of the selected path, used when there is no shrine.</span> |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" forwardButton"}</code> | <span className="api-desc">Button that selects the next path.</span> |
| <Link id="m-increasexpbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" increaseXpButton"}</code> | <span className="api-desc">Button that levels up the nearest player once.</span> |
| <Link id="m-maxoutxpbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" maxOutXpButton"}</code> | <span className="api-desc">Button that maxes out the nearest player's XP.</span> |
| <Link id="m-maxxp" /><code>{"private int MaxXp"}</code> | <span className="api-desc">XP cap read from `ProgressionSettings.UncapSkillPoints` in `OnEnable`.</span> |
| <Link id="m-pathname" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pathName"}</code> | <span className="api-desc">Text showing the selected path.</span> |
| <Link id="m-pathnames" /><code>{"private string[] pathNames"}</code> | <span className="api-desc">Names of the `ProgressionPath` values, cached in `OnEnable`.</span> |
| <Link id="m-pathxpdisplay" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pathXpDisplay"}</code> | <span className="api-desc">Text showing the nearest player's XP for the selected path.</span> |
| <Link id="m-resetxpbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" resetXpButton"}</code> | <span className="api-desc">Button that clears the nearest player's XP slots.</span> |
| <Link id="m-shrine" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | <span className="api-desc">Backing field for `Shrine`.</span> |
| <Link id="m-syncpath" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPath"}</code> | <span className="api-desc">Method sync for the selected path.</span> |
| <Link id="m-syncstatustext" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStatusText"}</code> | <span className="api-desc">Method sync for the XP status text.</span> |

</details>

## Properties

<details className="api-private">
<summary>5 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentpath-2" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; set; }"}</code> | <span className="api-desc">The selected path. Reads from and writes to the child `SkillShrine` when there is one; on clients it also updates the path label.</span> |
| <Link id="m-isallpaths" /><code>{"private bool isAllPaths { get; }"}</code> | <span className="api-desc">True when the selected path is `DevDebug`, which makes the buttons act on every path.</span> |
| <Link id="m-maxpathvalue" /><code>{"private int maxPathValue { get; }"}</code> | <span className="api-desc">Upper bound used when serializing the path index (the number of path names).</span> |
| <Link id="m-pathcount" /><code>{"private static int PathCount { get; }"}</code> | <span className="api-desc">Number of values in the `ProgressionPath` enum.</span> |
| <Link id="m-shrine-2" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" Shrine { get; }"}</code> | <span className="api-desc">Optional child `SkillShrine`, found lazily. When present, the path is taken from and pushed to it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the two method syncs (SyncA for the path, SyncB for the status text).</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current path and status text to the chunks when a player connects.</span> |

<details className="api-private">
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allpathsxp" /><code>{"private string AllPathsXp("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Builds the all-paths status text: first letter of each non-debug path and a level. Bug: it reads `CurrentPath`'s level for every entry.</span> |
| <Link id="m-changeprogressionpathbackwards" /><code>{"private void ChangeProgressionPathBackwards()"}</code> | <span className="api-desc">Server: button handler that moves to the previous progression path and syncs it.</span> |
| <Link id="m-changeprogressionpathforwards" /><code>{"private void ChangeProgressionPathForwards()"}</code> | <span className="api-desc">Server: button handler that moves to the next progression path and syncs it.</span> |
| <Link id="m-getclosestplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" GetClosestPlayer(Vector3 position)"}</code> | <span className="api-desc">Returns the player nearest a position, from `Player.AllPlayers`. The buttons act on this player.</span> |
| <Link id="m-increasexp" /><code>{"private void IncreaseXp()"}</code> | <span className="api-desc">Server: button handler that gives the nearest player enough XP for one level in the current path, or in every path when on `DevDebug`.</span> |
| <Link id="m-increasexpallpaths" /><code>{"private void IncreaseXpAllPaths("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Runs `IncreaseXpSinglePath` for every progression path.</span> |
| <Link id="m-increasexpsinglepath" /><code>{"private void IncreaseXpSinglePath("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Gives the player the XP left to reach their next level in one path, through `PlayerProgressionManager.GainExperience`.</span> |
| <Link id="m-maxoutxp" /><code>{"private void MaxOutXp()"}</code> | <span className="api-desc">Server: button handler that raises the nearest player's XP to the uncapped maximum in the current path, or all paths on `DevDebug`.</span> |
| <Link id="m-maxoutxpallpaths" /><code>{"private void MaxOutXpAllPaths("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Runs `MaxOutXpSinglePath` for every progression path.</span> |
| <Link id="m-maxoutxpsinglepath" /><code>{"private void MaxOutXpSinglePath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Gives the player the XP missing up to `MaxXp` in one path. Logs an error if they have no entry for it.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Server: unhooks the button handlers.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Caches the path names, reads `MaxXp` and hooks the buttons.</span> |
| <Link id="m-parseplayerxp" /><code>{"private string ParsePlayerXp("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: builds the status text for a player (current XP, XP for the level and next level). Returns empty on clients.</span> |
| <Link id="m-resetxp" /><code>{"private void ResetXp()"}</code> | <span className="api-desc">Server: button handler that clears the nearest player's slots in the current path (or all paths) and recounts their points.</span> |
| <Link id="m-resetxpallpaths" /><code>{"private void ResetXpAllPaths("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Runs `ResetXpSinglePath` for every progression path.</span> |
| <Link id="m-resetxpsinglepath" /><code>{"private void ResetXpSinglePath("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Calls `DebugClearSlots` on the player's experience for one path.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Server: hooks the five buttons' `Released` events to their handlers.</span> |
| <Link id="m-shiftprogressionpath" /><code>{"private "}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" ShiftProgressionPath(int offset)"}</code> | <span className="api-desc">Returns the path a given offset away from the current one, wrapping around the enum.</span> |
| <Link id="m-syncpath-2" /><code>{"private void SyncPath("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync body for the path index. Clients apply the value they read.</span> |
| <Link id="m-syncstatustext-2" /><code>{"private void SyncStatusText("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync body for the status text. The server writes `ParsePlayerXp`, clients show it.</span> |
| <Link id="m-updatepath" /><code>{"private void UpdatePath()"}</code> | <span className="api-desc">Sends both the path and the status text to the chunks.</span> |

</details>
