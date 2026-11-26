---
title: "BoolEvent"
description: "Serializable AltaEvent with a bool argument."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoolEvent

A **class** in `Root.Township`, the global namespace.

Serializable `AltaEvent` with a bool argument. Runs both inspector-wired listeners and C# `Invoked` handlers.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`AltaEvent<bool, BoolUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoolEvent()"}</code> | Creates a `BoolEvent` with default values. |

## Used in

Members of other types that take, return or hold a `BoolEvent`:

[`CaveTeleporter.IsValidTeleportChanged`](/mod/game-api/types/alta-world-generation/caveteleporter#m-isvalidteleportchanged), [`TradeStateManager.indexedEvents`](/mod/game-api/types/alta-crafting/tradestatemanager#m-indexedevents), [`TradeStateManager.onOpenForSale`](/mod/game-api/types/alta-crafting/tradestatemanager#m-onopenforsale), [`TradeStateManager.onOutOfStock`](/mod/game-api/types/alta-crafting/tradestatemanager#m-onoutofstock), [`TradeStateManager.onUnnocupied`](/mod/game-api/types/alta-crafting/tradestatemanager#m-onunnocupied), [`FlagAnimationManager.stateChanged`](/mod/game-api/types/global-e-h/flaganimationmanager#m-statechanged), [`HistoryAccess.redoPossibleChanged`](/mod/game-api/types/global-e-h/historyaccess#m-redopossiblechanged), [`HistoryAccess.undoPossibleChanged`](/mod/game-api/types/global-e-h/historyaccess#m-undopossiblechanged), [`ItemScroller.canScrollLeftChanged`](/mod/game-api/types/global-i-l/itemscroller#m-canscrollleftchanged), [`ItemScroller.canScrollRightChanged`](/mod/game-api/types/global-i-l/itemscroller#m-canscrollrightchanged), [`TeleporterPlatform.progressingChanged`](/mod/game-api/types/global-t-x/teleporterplatform#m-progressingchanged).
