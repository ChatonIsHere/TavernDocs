---
title: "ShowNames"
description: "class ShowNames in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShowNames

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Nested types** [`NameBoardHandler`](/game-api/types/alta-player/shownames-nameboardhandler)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShowNames()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activenames" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-player/shownames-nameboardhandler">{"ShowNames.NameBoardHandler"}</Link>{"> activeNames"}</code> |  |
| <Link id="m-delaytoactivatename" /><code>{"private float delayToActivateName"}</code> |  |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |  |
| <Link id="m-fadeafter" /><code>{"private float fadeAfter"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |  |
| <Link id="m-isinstant" /><code>{"private bool isInstant"}</code> |  |
| <Link id="m-maxdistancetoshownamessquared" /><code>{"private float maxDistanceToShowNamesSquared"}</code> |  |
| <Link id="m-nameboardsettings" /><code>{"private "}<Link to="/game-api/types/global-m-o/nameboardssettings">{"NameBoardsSettings"}</Link>{" nameBoardSettings"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"override bool IsActive { get; }"}</code> |  |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deathrun" /><code>{"void DeathRun()"}</code> |  |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-activate" /><code>{"private void Activate(bool isUsingTimer)"}</code> |  |
| <Link id="m-clearplayer" /><code>{"private void ClearPlayer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-deactivate" /><code>{"private void Deactivate()"}</code> |  |
| <Link id="m-deactivatenames" /><code>{"private void DeactivateNames("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-update-2" /><code>{"private void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ShowNames`:

[`DeadStateSettings.showNamesAction`](/game-api/types/alta-player/deadstatesettings#m-shownamesaction), [`DeadStateSettings.ShowNamesAction`](/game-api/types/alta-player/deadstatesettings#m-shownamesaction-2), [`ShowNames.NameBoardHandler.NameBoardHandler`](/game-api/types/alta-player/shownames-nameboardhandler#m-ctor), [`ShowNames.NameBoardHandler.settings`](/game-api/types/alta-player/shownames-nameboardhandler#m-settings).
