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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DeathAnimationSettings.Create`](/game-api/types/alta-intelligence/deathanimationsettings-create)
- **Nested types** [`Create`](/game-api/types/alta-intelligence/deathanimationsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathAnimationSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial" /><code>{"private Material ashesMaterial"}</code> | Backing field for `AshesMaterial`. |
| <Link id="m-deathvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisual"}</code> | Backing field for `DeathVisual`. |
| <Link id="m-deathvisualgroundposition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisualGroundPosition"}</code> | Backing field for `DeathVisualGroundPosition`. |
| <Link id="m-defaultduration" /><code>{"private float defaultDuration"}</code> | Backing field for `DefaultDuration`. |
| <Link id="m-firstburstshellsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" firstBurstShellSettings"}</code> | Backing field for `FirstBurstShellSettings`. |
| <Link id="m-predeathvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" preDeathVisual"}</code> | Backing field for `PreDeathVisual`. |
| <Link id="m-secondburstshellsettings" /><code>{"private "}<Link to="/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" secondBurstShellSettings"}</code> | Backing field for `SecondBurstShellSettings`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial-2" /><code>{"Material AshesMaterial { get; }"}</code> | Template material; `DeathEffect` swaps each renderer's materials for copies of it. |
| <Link id="m-deathvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisual { get; }"}</code> | Pooled effect spawned at the particle origin for the second burst. |
| <Link id="m-deathvisualgroundposition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisualGroundPosition { get; }"}</code> | Pooled effect for the second burst, probably placed at ground level. Not read in this build. |
| <Link id="m-defaultduration-2" /><code>{"float DefaultDuration { get; }"}</code> | Length of the death effect in seconds (default 3). |
| <Link id="m-firstburstshellsettings-2" /><code><Link to="/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" FirstBurstShellSettings { get; }"}</code> | Combat shell settings for the first burst; its material is set by `PlayerSpecialEffectsController`. |
| <Link id="m-predeathvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PreDeathVisual { get; }"}</code> | Pooled effect spawned at the particle origin for the first burst. |
| <Link id="m-secondburstshellsettings-2" /><code><Link to="/game-api/types/alta-player/combatshellsetting">{"CombatShellSetting"}</Link>{" SecondBurstShellSettings { get; }"}</code> | Combat shell settings for the second burst. |

## Used in

Members of other types that take, return or hold a `DeathAnimationSettings`:

[`DeathEffect.settings`](/game-api/types/alta-intelligence/deatheffect#m-settings), [`PlayerSpecialEffectsController.deathAnimationSettings`](/game-api/types/global-p/playerspecialeffectscontroller#m-deathanimationsettings).
