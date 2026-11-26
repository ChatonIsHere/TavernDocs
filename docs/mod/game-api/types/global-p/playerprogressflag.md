---
title: "PlayerProgressFlag"
description: "Base for per-player completion flags looked up by hash: game achievements and micro tutorials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerProgressFlag

An **abstract class** in `Root.Township`, the global namespace.

Base for per-player completion flags looked up by hash: game achievements and micro tutorials.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PlayerProgressFlag>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`MicroTutorialSettings`](/mod/game-api/types/game-other-namespaces/microtutorialsettings), [`GameAchievement`](/mod/game-api/types/global-e-h/gameachievement), [`PlayerProgressFlag`](/mod/game-api/types/global-p/playerprogressflag)
- **Attributes** `HashedPath`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerProgressFlag()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tryget" /><code>{"static bool TryGet<TProgressFlagType>(uint hash, out TProgressFlagType flag)"}</code> | <span className="api-desc">Looks up a flag by hash or name and checks it is the type you asked for.</span> |
| <Link id="m-tryget-2" /><code>{"static bool TryGet<T>(string input, out T flag, bool isLogging = true)"}</code> | <span className="api-desc">Looks up a flag by hash or name and checks it is the type you asked for.</span> |

## Used in

Members of other types that take, return or hold a `PlayerProgressFlag`:

<div className="api-used-in">

[`GameTaskManager.IsProgressFlagLocallyCompleted`](/mod/game-api/types/global-e-h/gametaskmanager#m-isprogressflaglocallycompleted), [`GameTaskManager.ProgressFlagSync.Completed`](/mod/game-api/types/global-e-h/gametaskmanager-progressflagsync#m-completed), [`GameTaskManager.ProgressFlagSync.WriteProgressFlags`](/mod/game-api/types/global-e-h/gametaskmanager-progressflagsync#m-writeprogressflags).

</div>
