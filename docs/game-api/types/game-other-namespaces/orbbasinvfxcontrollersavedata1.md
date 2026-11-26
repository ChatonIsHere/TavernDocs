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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OrbBasinVfxControllerSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-climbingunlockvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" ClimbingUnlockVfxData"}</code> | Old climbing unlock effect, used as the permanent unlock effect if there is no stamina one. |
| <Link id="m-orbobtainedvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" OrbObtainedVfxData"}</code> | Orb obtained effect, carried over. |
| <Link id="m-staminaunlockvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" StaminaUnlockVfxData"}</code> | Old stamina unlock effect, preferred as the permanent unlock effect. |
| <Link id="m-towercompletionvfxdata" /><code><Link to="/game-api/types/game-other-namespaces/vfxdata">{"VfxData"}</Link>{" TowerCompletionVfxData"}</code> | Tower completion effect, carried over. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current format, using the stamina or else the climbing effect as the permanent unlock effect. |
