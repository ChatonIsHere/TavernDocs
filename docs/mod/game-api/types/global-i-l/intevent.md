---
title: "IntEvent"
description: "A serializable AltaEvent that passes an int, so it can be wired up in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IntEvent

A **class** in `Root.Township`, the global namespace.

A serializable `AltaEvent` that passes an `int`, so it can be wired up in the inspector.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`AltaEvent<int, IntUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IntEvent()"}</code> | <span className="api-desc">Creates an `IntEvent` with default values.</span> |

## Used in

Members of other types that take, return or hold a `IntEvent`:

<div className="api-used-in">

[`LevelSelector.updatedLevel`](/mod/game-api/types/alta-world-generation/levelselector#m-updatedlevel), [`Scrubber.updatedStep`](/mod/game-api/types/alta-items/scrubber#m-updatedstep), [`LevelStatModifier.onCurrentLevelChanged`](/mod/game-api/types/alta-stats-effects/levelstatmodifier#m-oncurrentlevelchanged), [`SelectionLever.selectionEvent`](/mod/game-api/types/global-s/selectionlever#m-selectionevent), [`StageBasedPrefab.progressedToStage`](/mod/game-api/types/global-s/stagebasedprefab#m-progressedtostage), [`SwipeInteractionController.OnSwipeExecuted`](/mod/game-api/types/global-s/swipeinteractioncontroller#m-onswipeexecuted), [`ThrottleCounter.changedByInt`](/mod/game-api/types/global-t-x/throttlecounter#m-changedbyint).

</div>
