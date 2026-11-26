---
title: "MODSMicMuteQuickAccessAction"
description: "Quick access menu action for moderators that toggles a mod mic mute through ModsMicMuteManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MODSMicMuteQuickAccessAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access menu action for moderators that toggles a mod mic mute through `ModsMicMuteManager`. The mute turns itself off after `maxMuteDuration`. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MODSMicMuteQuickAccessAction()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | Timeline entry for the automatic unmute, cancelled when the mute is turned off by hand. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActive`. |
| <Link id="m-maxmuteduration" /><code>{"private float maxMuteDuration"}</code> | Seconds before the mute turns itself off (default 30). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive-2" /><code>{"override bool IsActive { get; }"}</code> | True while the mod mute is on. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Toggles the mute and sends the request for the local player. When turned on, schedules a second `Run` after `maxMuteDuration` to turn it off. |

## Used in

Members of other types that take, return or hold a `MODSMicMuteQuickAccessAction`:

[`FlyCamHands.modMuteAction`](/mod/game-api/types/global-e-h/flycamhands#m-modmuteaction).
