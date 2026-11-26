---
title: "ServerElementEvent"
description: "A serializable AltaEvent that passes a ServerElement, for wiring server list callbacks in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerElementEvent

A **class** in `Root.Township`, the global namespace.

A serializable `AltaEvent` that passes a `ServerElement`, for wiring server list callbacks in the inspector. Client menu UI.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`AltaEvent<ServerElement, ServerElementUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerElementEvent()"}</code> | Creates a `ServerElementEvent` with default values. |

## Used in

Members of other types that take, return or hold a `ServerElementEvent`:

[`ServerSelectionMenu.elementSelected`](/mod/game-api/types/global-s/serverselectionmenu#m-elementselected), [`ServerSelectionOrb.validOrbLetGo`](/mod/game-api/types/global-s/serverselectionorb#m-validorbletgo), [`ServerSelector.oldElementDeselected`](/mod/game-api/types/global-s/serverselector#m-oldelementdeselected), [`ServerSelector.selectionFinished`](/mod/game-api/types/global-s/serverselector#m-selectionfinished).
