---
title: "DamageState"
description: "class DamageState in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageState

A **class** in `Root.Township`, `Alta.PlayerEffects.General.Health`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageState()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cripple" /><code>{"float Cripple { get; private set; }"}</code> |  |
| <Link id="m-damage" /><code>{"float Damage { get; private set; }"}</code> |  |
| <Link id="m-damageimpact" /><code><Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" DamageImpact { get; private set; }"}</code> |  |
| <Link id="m-ishandled" /><code>{"bool IsHandled { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setashandled" /><code>{"void SetAsHandled()"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup(float damage, float cripple, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DamageState`:

[`SpiritState.HandleDamage`](/game-api/types/alta-player/spiritstate#m-handledamage), [`MicroTutorial.OnTutorialPlayerDamaged`](/game-api/types/game-other-namespaces/microtutorial#m-ontutorialplayerdamaged), [`PlayerHealth.BlockDamageIfControlsAreLocked`](/game-api/types/global-p/playerhealth#m-blockdamageifcontrolsarelocked), [`PlayerHealth.HandleDamage`](/game-api/types/global-p/playerhealth#m-handledamage), [`PlayerHealth.playerDamageState`](/game-api/types/global-p/playerhealth#m-playerdamagestate).
