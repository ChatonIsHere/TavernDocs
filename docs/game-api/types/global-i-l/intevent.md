---
title: "IntEvent"
description: "A serializable AltaEvent that passes an int, so it can be wired up in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IntEvent

A **class** in `Root.Township`, no namespace.

A serializable `AltaEvent` that passes an `int`, so it can be wired up in the inspector.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`AltaEvent<int, IntUnityEvent>`](/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IntEvent()"}</code> | Creates an `IntEvent` with default values. |

## Used in

Members of other types that take, return or hold a `IntEvent`:

[`LevelSelector.updatedLevel`](/game-api/types/alta-world-generation/levelselector#m-updatedlevel), [`Scrubber.updatedStep`](/game-api/types/alta-items/scrubber#m-updatedstep), [`LevelStatModifier.onCurrentLevelChanged`](/game-api/types/alta-stats-effects/levelstatmodifier#m-oncurrentlevelchanged), [`SelectionLever.selectionEvent`](/game-api/types/global-s/selectionlever#m-selectionevent), [`StageBasedPrefab.progressedToStage`](/game-api/types/global-s/stagebasedprefab#m-progressedtostage), [`SwipeInteractionController.OnSwipeExecuted`](/game-api/types/global-s/swipeinteractioncontroller#m-onswipeexecuted), [`ThrottleCounter.changedByInt`](/game-api/types/global-t-x/throttlecounter#m-changedbyint).
