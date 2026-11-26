---
title: "DamageState"
description: "Damage about to be applied to a player, passed to PlayerHealth.HandleDamage listeners."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageState

A **class** in `Root.Township`, `Alta.PlayerEffects.General.Health`.

Damage about to be applied to a player, passed to `PlayerHealth.HandleDamage` listeners. A listener can mark it handled to cancel it. One object is reused for each hit.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageState()"}</code> | <span className="api-desc">Creates a `DamageState` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cripple" /><code>{"float Cripple { get; private set; }"}</code> | <span className="api-desc">Cripple damage of the hit.</span> |
| <Link id="m-damage" /><code>{"float Damage { get; private set; }"}</code> | <span className="api-desc">Health damage of the hit.</span> |
| <Link id="m-damageimpact" /><code><Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" DamageImpact { get; private set; }"}</code> | <span className="api-desc">Where the damage came from.</span> |
| <Link id="m-ishandled" /><code>{"bool IsHandled { get; private set; }"}</code> | <span className="api-desc">True if a listener cancelled the damage.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setashandled" /><code>{"void SetAsHandled()"}</code> | <span className="api-desc">Cancels the damage. `PlayerHealth` then skips applying it.</span> |
| <Link id="m-setup" /><code>{"void Setup(float damage, float cripple, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">Fills in a new hit and clears the handled flag.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows damage, cripple and source.</span> |

## Used in

Members of other types that take, return or hold a `DamageState`:

<div className="api-used-in">

[`SpiritState.HandleDamage`](/mod/game-api/types/alta-player/spiritstate#m-handledamage), [`MicroTutorial.OnTutorialPlayerDamaged`](/mod/game-api/types/game-other-namespaces/microtutorial#m-ontutorialplayerdamaged), [`PlayerHealth.BlockDamageIfControlsAreLocked`](/mod/game-api/types/global-p/playerhealth#m-blockdamageifcontrolsarelocked), [`PlayerHealth.HandleDamage`](/mod/game-api/types/global-p/playerhealth#m-handledamage), [`PlayerHealth.playerDamageState`](/mod/game-api/types/global-p/playerhealth#m-playerdamagestate).

</div>
