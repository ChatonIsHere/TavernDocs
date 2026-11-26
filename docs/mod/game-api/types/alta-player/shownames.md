---
title: "ShowNames"
description: "Client: the quick access action that shows name boards above nearby players and player proxies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShowNames

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Client: the quick access action that shows name boards above nearby players and player proxies. Names hide after a few seconds unless the player names toggle setting is on.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Nested types** [`NameBoardHandler`](/mod/game-api/types/alta-player/shownames-nameboardhandler)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShowNames()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activenames" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/shownames-nameboardhandler">{"ShowNames.NameBoardHandler"}</Link>{"> activeNames"}</code> | <span className="api-desc">Name board handlers by player entity.</span> |
| <Link id="m-delaytoactivatename" /><code>{"private float delayToActivateName"}</code> | <span className="api-desc">Delay before a newly in-range player's name appears.</span> |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">Timeline entry that hides the names.</span> |
| <Link id="m-fadeafter" /><code>{"private float fadeAfter"}</code> | <span className="api-desc">Seconds names stay before hiding.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Backing field for `IsActive`.</span> |
| <Link id="m-isinstant" /><code>{"private bool isInstant"}</code> | <span className="api-desc">Set during the first update so names shown at activation skip the delay.</span> |
| <Link id="m-maxdistancetoshownamessquared" /><code>{"private float maxDistanceToShowNamesSquared"}</code> | <span className="api-desc">Squared distance within which names show.</span> |
| <Link id="m-nameboardsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nameboardssettings">{"NameBoardsSettings"}</Link>{" nameBoardSettings"}</code> | <span className="api-desc">Global name board settings, fetched on activation.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered update.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">Whether names are showing.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">False while the local player is downed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deathrun" /><code>{"void DeathRun()"}</code> | <span className="api-desc">Shows names without a timer while the local player is dead; they hide when the player entity goes.</span> |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Toggles names on or off from the quick access menu.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate(bool isUsingTimer)"}</code> | <span className="api-desc">Shows names now and keeps them updated, and starts the hide timer if asked and the toggle setting is off.</span> |
| <Link id="m-clearplayer" /><code>{"private void ClearPlayer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Removes the name board for one player.</span> |
| <Link id="m-deactivate" /><code>{"private void Deactivate()"}</code> | <span className="api-desc">Removes every name board and stops updating.</span> |
| <Link id="m-deactivatenames" /><code>{"private void DeactivateNames("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Hides names when the local player's entity is destroyed.</span> |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> | <span className="api-desc">Adds, moves or removes name boards by each player's distance and whether they show their name.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ShowNames`:

<div className="api-used-in">

[`DeadStateSettings.showNamesAction`](/mod/game-api/types/alta-player/deadstatesettings#m-shownamesaction), [`DeadStateSettings.ShowNamesAction`](/mod/game-api/types/alta-player/deadstatesettings#m-shownamesaction-2), [`ShowNames.NameBoardHandler.NameBoardHandler`](/mod/game-api/types/alta-player/shownames-nameboardhandler#m-ctor), [`ShowNames.NameBoardHandler.settings`](/mod/game-api/types/alta-player/shownames-nameboardhandler#m-settings).

</div>
