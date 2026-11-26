---
title: "QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent"
description: "Pair of sound and visual effects played when a quick access bubble is selected, one for active bubbles and one for inactive ones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent

A **struct** in `Root.Township`, `Alta.QuickAccessActions`.

Pair of sound and visual effects played when a quick access bubble is selected, one for active bubbles and one for inactive ones. Held in `QuickAccessMenuSettings`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`QuickAccessMenuSettings`](/mod/game-api/types/alta-player/quickaccessmenusettings)
- **Nested types** [`VfxAndSfxEventSplit`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code><Link to="/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit">{"QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit"}</Link>{" active"}</code> | Effects played when the selected bubble's action is active. |
| <Link id="m-inactive" /><code><Link to="/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit">{"QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit"}</Link>{" inactive"}</code> | Effects played when the selected bubble's action is inactive. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke("}<Link to="/mod/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> | Plays the sound and visual effect for the bubble, using the active or inactive set depending on its state. |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuBubbleSelectEvent`:

[`QuickAccessMenuSettings.onSelectBubbleEvents`](/mod/game-api/types/alta-player/quickaccessmenusettings#m-onselectbubbleevents).
