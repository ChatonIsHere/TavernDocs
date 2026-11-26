---
title: "QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit"
description: "The visual and sound effect events for one state (active or inactive) of a quick access menu bubble being selected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit

A **struct** in `Root.Township`, `Alta.QuickAccessActions`.

The visual and sound effect events for one state (active or inactive) of a quick access menu bubble being selected.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-soundeffect" /><code><Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" soundEffect"}</code> | Sound event played at the bubble's position, if the bubble allows sound. |
| <Link id="m-visualeffect" /><code><Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" visualEffect"}</code> | Visual effect event given the bubble's transform. |

## Used in

Members of other types that take, return or hold a `VfxAndSfxEventSplit`:

[`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.active`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent#m-active), [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.inactive`](/mod/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent#m-inactive).
