---
title: "IAutoSave"
description: "Something that saves itself during the world's regular save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAutoSave

An **interface** in `Root.Township`, the global namespace.

Something that saves itself during the world's regular save. `StreamerManager` calls every entry in `AutoSavingBehaviours` before saving players. Server.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`GameTaskManager`](/mod/game-api/types/global-e-h/gametaskmanager), [`PerPlayerManager<TThis, TContent, TSaveFormat>`](/mod/game-api/types/global-p/perplayermanager-tthis-tcontent-tsaveformat)
- **Documented in** [Saving](/mod/game-api/networking/saving)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-autosave" /><code>{"void AutoSave()"}</code> | Saves this object's data. Called by `StreamerManager` during each world save. |

## Used in

Members of other types that take, return or hold a `IAutoSave`:

[`StreamerManager.AutoSavingBehaviours`](/mod/game-api/types/global-s/streamermanager#m-autosavingbehaviours).
