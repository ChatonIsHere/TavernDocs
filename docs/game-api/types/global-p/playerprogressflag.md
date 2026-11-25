---
title: "PlayerProgressFlag"
description: "abstract class PlayerProgressFlag in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressFlag

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PlayerProgressFlag>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MicroTutorialSettings`](/game-api/types/game-other-namespaces/microtutorialsettings), [`GameAchievement`](/game-api/types/global-e-h/gameachievement), [`PlayerProgressFlag`](/game-api/types/global-p/playerprogressflag)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerProgressFlag()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tryget" /><code>{"static bool TryGet<TProgressFlagType>(uint hash, out TProgressFlagType flag)"}</code> |  |
| <Link id="m-tryget-2" /><code>{"static bool TryGet<T>(string input, out T flag, bool isLogging = true)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerProgressFlag`:

[`GameTaskManager.IsProgressFlagLocallyCompleted`](/game-api/types/global-e-h/gametaskmanager#m-isprogressflaglocallycompleted), [`GameTaskManager.ProgressFlagSync.Completed`](/game-api/types/global-e-h/gametaskmanager-progressflagsync#m-completed), [`GameTaskManager.ProgressFlagSync.WriteProgressFlags`](/game-api/types/global-e-h/gametaskmanager-progressflagsync#m-writeprogressflags).
