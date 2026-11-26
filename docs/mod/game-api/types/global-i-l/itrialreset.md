---
title: "ITrialReset"
description: "Something that resets with a trial."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITrialReset

An **interface** in `Root.Township`, the global namespace.

Something that resets with a trial. `TrialLogic` finds these in its children and resets them.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`TrialReset`](/mod/game-api/types/global-t-x/trialreset)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trialreset" /><code>{"void TrialReset()"}</code> | Puts the object back to its starting state for a new trial. |

## Used in

Members of other types that take, return or hold a `ITrialReset`:

[`TrialLogic.toReset`](/mod/game-api/types/global-t-x/triallogic#m-toreset).
