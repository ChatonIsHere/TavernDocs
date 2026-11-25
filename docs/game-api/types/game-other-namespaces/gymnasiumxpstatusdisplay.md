---
title: "GymnasiumXpStatusDisplay"
description: "class GymnasiumXpStatusDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GymnasiumXpStatusDisplay

A **class** in `Root.Township`, `ATT.FeatureTestGymnasium`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GymnasiumXpStatusDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-backbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" backButton"}</code> |  |
| <Link id="m-currentpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" currentPath"}</code> |  |
| <Link id="m-forwardbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" forwardButton"}</code> |  |
| <Link id="m-increasexpbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" increaseXpButton"}</code> |  |
| <Link id="m-maxoutxpbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" maxOutXpButton"}</code> |  |
| <Link id="m-maxxp" /><code>{"private int MaxXp"}</code> |  |
| <Link id="m-pathname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pathName"}</code> |  |
| <Link id="m-pathnames" /><code>{"private string[] pathNames"}</code> |  |
| <Link id="m-pathxpdisplay" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pathXpDisplay"}</code> |  |
| <Link id="m-resetxpbutton" /><code>{"private "}<Link to="/game-api/types/global-i-l/labelledbuttonwrapper">{"LabelledButtonWrapper"}</Link>{" resetXpButton"}</code> |  |
| <Link id="m-shrine" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> |  |
| <Link id="m-syncpath" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPath"}</code> |  |
| <Link id="m-syncstatustext" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStatusText"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentpath-2" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" CurrentPath { get; set; }"}</code> |  |
| <Link id="m-isallpaths" /><code>{"private bool isAllPaths { get; }"}</code> |  |
| <Link id="m-maxpathvalue" /><code>{"private int maxPathValue { get; }"}</code> |  |
| <Link id="m-pathcount" /><code>{"private static int PathCount { get; }"}</code> |  |
| <Link id="m-shrine-2" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" Shrine { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-allpathsxp" /><code>{"private string AllPathsXp("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-changeprogressionpathbackwards" /><code>{"private void ChangeProgressionPathBackwards()"}</code> |  |
| <Link id="m-changeprogressionpathforwards" /><code>{"private void ChangeProgressionPathForwards()"}</code> |  |
| <Link id="m-getclosestplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" GetClosestPlayer(Vector3 position)"}</code> |  |
| <Link id="m-increasexp" /><code>{"private void IncreaseXp()"}</code> |  |
| <Link id="m-increasexpallpaths" /><code>{"private void IncreaseXpAllPaths("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-increasexpsinglepath" /><code>{"private void IncreaseXpSinglePath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-maxoutxp" /><code>{"private void MaxOutXp()"}</code> |  |
| <Link id="m-maxoutxpallpaths" /><code>{"private void MaxOutXpAllPaths("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-maxoutxpsinglepath" /><code>{"private void MaxOutXpSinglePath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-parseplayerxp" /><code>{"private string ParsePlayerXp("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-resetxp" /><code>{"private void ResetXp()"}</code> |  |
| <Link id="m-resetxpallpaths" /><code>{"private void ResetXpAllPaths("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-resetxpsinglepath" /><code>{"private void ResetXpSinglePath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |  |
| <Link id="m-shiftprogressionpath" /><code>{"private "}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" ShiftProgressionPath(int offset)"}</code> |  |
| <Link id="m-syncpath-2" /><code>{"private void SyncPath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstatustext-2" /><code>{"private void SyncStatusText("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatepath" /><code>{"private void UpdatePath()"}</code> |  |
