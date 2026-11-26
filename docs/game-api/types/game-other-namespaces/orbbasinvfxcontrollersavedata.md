---
title: "OrbBasinVfxControllerSaveData"
description: "Save data for OrbBasinVfxController: the state of its three effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OrbBasinVfxControllerSaveData

A **class** in `Root.Township`, `Features.Gameplay`.

Save data for `OrbBasinVfxController`: the state of its three effects.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<OrbBasinVfxController, OrbBasinVfxControllerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`OrbBasinVfxController`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller), [`OrbBasinVfxControllerSaveData`](/game-api/types/game-other-namespaces/orbbasinvfxcontrollersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OrbBasinVfxControllerSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-orbobtainedvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" OrbObtainedVfxData"}</code> | Saved state of the orb obtained effect. |
| <Link id="m-permanentunlockvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" PermanentUnlockVfxData"}</code> | Saved state of the permanent unlock effect. |
| <Link id="m-towercompletionvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" TowerCompletionVfxData"}</code> | Saved state of the tower completion effect. |

## Used in

Members of other types that take, return or hold a `OrbBasinVfxControllerSaveData`:

[`OrbBasinVfxController.Load`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-load), [`OrbBasinVfxController.Save`](/game-api/types/game-other-namespaces/orbbasinvfxcontroller#m-save).
