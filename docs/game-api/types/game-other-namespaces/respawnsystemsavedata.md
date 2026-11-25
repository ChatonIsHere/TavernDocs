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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<RespawnSystem, RespawnSystemSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RespawnSystem`](/game-api/types/game-other-namespaces/respawnsystem), [`RespawnSystemSaveData`](/game-api/types/game-other-namespaces/respawnsystemsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystemSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-globalshrineguidasstring" /><code>{"string GlobalShrineGuidAsString"}</code> | Guid of the global respawn shrine, as text. |
| <Link id="m-respawnshrinemodeldictionaryasjson" /><code>{"string RespawnShrineModelDictionaryAsJson"}</code> | All respawn shrine models, as one JSON string. |

## Used in

Members of other types that take, return or hold a `RespawnSystemSaveData`:

[`IRespawnSystemModel.GetSaveData`](/game-api/types/game-other-namespaces/irespawnsystemmodel#m-getsavedata), [`RespawnSystem.Load`](/game-api/types/game-other-namespaces/respawnsystem#m-load), [`RespawnSystem.Save`](/game-api/types/game-other-namespaces/respawnsystem#m-save), [`RespawnSystemModel.GetSaveData`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-getsavedata), [`RespawnSystemModel.RespawnSystemModel`](/game-api/types/game-other-namespaces/respawnsystemmodel#m-ctor-2).
