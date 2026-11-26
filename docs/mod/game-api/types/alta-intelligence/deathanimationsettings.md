---
title: "DeathAnimationSettings"
description: "ScriptableObject with the visuals for a death effect: a first burst, then ashes and a second burst."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeathAnimationSettings

A **class** in `Root.Township`, `Alta.Combat`.

ScriptableObject with the visuals for a death effect: a first burst, then ashes and a second burst. Read by `PlayerSpecialEffectsController` and the creature `DeathEffect`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DeathAnimationSettings.Create`](/mod/game-api/types/alta-intelligence/deathanimationsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-intelligence/deathanimationsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathAnimationSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial" /><code>{"private Material ashesMaterial"}</code> | <span className="api-desc">Backing field for `AshesMaterial`.</span> |
| <Link id="m-deathvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisual"}</code> | <span className="api-desc">Backing field for `DeathVisual`.</span> |
| <Link id="m-deathvisualgroundposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisualGroundPosition"}</code> | <span className="api-desc">Backing field for `DeathVisualGroundPosition`.</span> |
| <Link id="m-defaultduration" /><code>{"private float defaultDuration"}</code> | <span className="api-desc">Backing field for `DefaultDuration`.</span> |
| <Link id="m-firstburstshellsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" firstBurstShellSettings"}</code> | <span className="api-desc">Backing field for `FirstBurstShellSettings`.</span> |
| <Link id="m-predeathvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" preDeathVisual"}</code> | <span className="api-desc">Backing field for `PreDeathVisual`.</span> |
| <Link id="m-secondburstshellsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" secondBurstShellSettings"}</code> | <span className="api-desc">Backing field for `SecondBurstShellSettings`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial-2" /><code>{"Material AshesMaterial { get; }"}</code> | <span className="api-desc">Template material; `DeathEffect` swaps each renderer's materials for copies of it.</span> |
| <Link id="m-deathvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisual { get; }"}</code> | <span className="api-desc">Pooled effect spawned at the particle origin for the second burst.</span> |
| <Link id="m-deathvisualgroundposition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisualGroundPosition { get; }"}</code> | <span className="api-desc">Pooled effect for the second burst, probably placed at ground level. Not read in this build.</span> |
| <Link id="m-defaultduration-2" /><code>{"float DefaultDuration { get; }"}</code> | <span className="api-desc">Length of the death effect in seconds (default 3).</span> |
| <Link id="m-firstburstshellsettings-2" /><code><Link to="/mod/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" FirstBurstShellSettings { get; }"}</code> | <span className="api-desc">Combat shell settings for the first burst; its material is set by `PlayerSpecialEffectsController`.</span> |
| <Link id="m-predeathvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PreDeathVisual { get; }"}</code> | <span className="api-desc">Pooled effect spawned at the particle origin for the first burst.</span> |
| <Link id="m-secondburstshellsettings-2" /><code><Link to="/mod/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" SecondBurstShellSettings { get; }"}</code> | <span className="api-desc">Combat shell settings for the second burst.</span> |

## Used in

Members of other types that take, return or hold a `DeathAnimationSettings`:

<div className="api-used-in">

[`DeathEffect.settings`](/mod/game-api/types/alta-intelligence/deatheffect#m-settings), [`PlayerSpecialEffectsController.deathAnimationSettings`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-deathanimationsettings).

</div>
