---
title: "OrbBasinVfxControllerSaveData1"
description: "Old save data (version 1) for OrbBasinVfxController, when stamina and climbing unlocks had separate effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OrbBasinVfxControllerSaveData1

A **class** in `Root.Township`, `Features.Gameplay`.

Old save data (version 1) for `OrbBasinVfxController`, when stamina and climbing unlocks had separate effects.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OrbBasinVfxControllerSaveData1()"}</code> | <span className="api-desc">Creates an `OrbBasinVfxControllerSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-climbingunlockvfxdata" /><code><Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" ClimbingUnlockVfxData"}</code> | <span className="api-desc">Old climbing unlock effect, used as the permanent unlock effect if there is no stamina one.</span> |
| <Link id="m-orbobtainedvfxdata" /><code><Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" OrbObtainedVfxData"}</code> | <span className="api-desc">Orb obtained effect, carried over.</span> |
| <Link id="m-staminaunlockvfxdata" /><code><Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" StaminaUnlockVfxData"}</code> | <span className="api-desc">Old stamina unlock effect, preferred as the permanent unlock effect.</span> |
| <Link id="m-towercompletionvfxdata" /><code><Link to="/mod/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" TowerCompletionVfxData"}</code> | <span className="api-desc">Tower completion effect, carried over.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the current format, using the stamina or else the climbing effect as the permanent unlock effect.</span> |
