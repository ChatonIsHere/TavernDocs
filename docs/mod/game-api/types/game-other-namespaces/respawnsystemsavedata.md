---
title: "RespawnSystemSaveData"
description: "Save data for the RespawnSystem: the global shrine and every respawn shrine's model."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystemSaveData

A **class** in `Root.Township`, `ATT.Respawn`.

Save data for the `RespawnSystem`: the global shrine and every respawn shrine's model.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<RespawnSystem, RespawnSystemSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RespawnSystem`](/mod/game-api/types/game-other-namespaces/respawnsystem), [`RespawnSystemSaveData`](/mod/game-api/types/game-other-namespaces/respawnsystemsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystemSaveData()"}</code> | <span className="api-desc">Creates a `RespawnSystemSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguidasstring" /><code>{"string GlobalShrineGuidAsString"}</code> | <span className="api-desc">Guid of the global respawn shrine, as text.</span> |
| <Link id="m-respawnshrinemodeldictionaryasjson" /><code>{"string RespawnShrineModelDictionaryAsJson"}</code> | <span className="api-desc">All respawn shrine models, as one JSON string.</span> |

## Used in

Members of other types that take, return or hold a `RespawnSystemSaveData`:

<div className="api-used-in">

[`IRespawnSystemModel.GetSaveData`](/mod/game-api/types/game-other-namespaces/irespawnsystemmodel#m-getsavedata), [`RespawnSystem.Load`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-load), [`RespawnSystem.Save`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-save), [`RespawnSystemModel.GetSaveData`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel#m-getsavedata), [`RespawnSystemModel.RespawnSystemModel`](/mod/game-api/types/game-other-namespaces/respawnsystemmodel#m-ctor-2).

</div>
