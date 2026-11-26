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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`QuickAccessMenuSettings`](/game-api/types/alta-player/quickaccessmenusettings)
- **Nested types** [`VfxAndSfxEventSplit`](/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code><Link to="/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit">{"QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit"}</Link>{" active"}</code> | Effects played when the selected bubble's action is active. |
| <Link id="m-inactive" /><code><Link to="/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit">{"QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit"}</Link>{" inactive"}</code> | Effects played when the selected bubble's action is inactive. |

## Methods

| Member |
| --- |
| <Link id="m-invoke" /><code>{"void Invoke("}<Link to="/game-api/types/alta-player/quickaccessmenububble">{"QuickAccessMenuBubble"}</Link>{" bubble)"}</code> |

## Used in

Members of other types that take, return or hold a `QuickAccessMenuBubbleSelectEvent`:

[`QuickAccessMenuSettings.onSelectBubbleEvents`](/game-api/types/alta-player/quickaccessmenusettings#m-onselectbubbleevents).
