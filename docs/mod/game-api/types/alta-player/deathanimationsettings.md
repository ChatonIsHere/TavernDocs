---
title: "DeathAnimationSettings"
description: "Settings for a two-burst death dissolve effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeathAnimationSettings

A **class** in `Root.Township`, `Alta.PlayerStates`.

Settings for a two-burst death dissolve effect. `DeadStateSettings.AnimationSettings` holds one, but nothing reads it; the effect in use takes `Alta.Combat.DeathAnimationSettings`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathAnimationSettings()"}</code> | <span className="api-desc">Creates a `DeathAnimationSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial" /><code>{"private Material ashesMaterial"}</code> | <span className="api-desc">Material for the ashes left by the death effect.</span> |
| <Link id="m-deathvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisual"}</code> | <span className="api-desc">Pooled effect spawned for the death.</span> |
| <Link id="m-deathvisualgroundposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisualGroundPosition"}</code> | <span className="api-desc">Pooled effect spawned at ground level for the death.</span> |
| <Link id="m-defaultduration" /><code>{"private float defaultDuration"}</code> | <span className="api-desc">Length of the death animation in seconds (default 3).</span> |
| <Link id="m-firstdissolvestrength" /><code>{"private float firstDissolveStrength"}</code> | <span className="api-desc">Dissolve strength for the first burst.</span> |
| <Link id="m-firstramp1" /><code>{"private Texture2D firstRamp1"}</code> | <span className="api-desc">First colour ramp texture of the first burst.</span> |
| <Link id="m-firstramp2" /><code>{"private Texture2D firstRamp2"}</code> | <span className="api-desc">Second colour ramp texture of the first burst.</span> |
| <Link id="m-predeathvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" preDeathVisual"}</code> | <span className="api-desc">Pooled effect spawned before the death burst.</span> |
| <Link id="m-seconddissolvestrength" /><code>{"private float secondDissolveStrength"}</code> | <span className="api-desc">Dissolve strength for the second burst.</span> |
| <Link id="m-secondramp1" /><code>{"private Texture2D secondRamp1"}</code> | <span className="api-desc">First colour ramp texture of the second burst.</span> |
| <Link id="m-secondramp2" /><code>{"private Texture2D secondRamp2"}</code> | <span className="api-desc">Second colour ramp texture of the second burst.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial-2" /><code>{"Material AshesMaterial { get; }"}</code> | <span className="api-desc">Material for the ashes.</span> |
| <Link id="m-deathvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisual { get; }"}</code> | <span className="api-desc">Pooled particles for the second burst.</span> |
| <Link id="m-deathvisualgroundposition-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisualGroundPosition { get; }"}</code> | <span className="api-desc">Pooled visual placed at ground level.</span> |
| <Link id="m-defaultduration-2" /><code>{"float DefaultDuration { get; }"}</code> | <span className="api-desc">Default duration in seconds (3).</span> |
| <Link id="m-firstdissolvestrength-2" /><code>{"float FirstDissolveStrength { get; }"}</code> | <span className="api-desc">Shell dissolve strength for the first burst.</span> |
| <Link id="m-firstramp1-2" /><code>{"Texture2D FirstRamp1 { get; }"}</code> | <span className="api-desc">First colour ramp texture for the first burst.</span> |
| <Link id="m-firstramp2-2" /><code>{"Texture2D FirstRamp2 { get; }"}</code> | <span className="api-desc">Second colour ramp texture for the first burst.</span> |
| <Link id="m-predeathvisual-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PreDeathVisual { get; }"}</code> | <span className="api-desc">Pooled particles for the first burst.</span> |
| <Link id="m-seconddissolvestrength-2" /><code>{"float SecondDissolveStrength { get; }"}</code> | <span className="api-desc">Shell dissolve strength for the second burst.</span> |
| <Link id="m-secondramp1-2" /><code>{"Texture2D SecondRamp1 { get; }"}</code> | <span className="api-desc">First colour ramp texture for the second burst.</span> |
| <Link id="m-secondramp2-2" /><code>{"Texture2D SecondRamp2 { get; }"}</code> | <span className="api-desc">Second colour ramp texture for the second burst.</span> |

## Used in

Members of other types that take, return or hold a `DeathAnimationSettings`:

<div className="api-used-in">

[`DeadStateSettings.animationSettings`](/mod/game-api/types/alta-player/deadstatesettings#m-animationsettings), [`DeadStateSettings.AnimationSettings`](/mod/game-api/types/alta-player/deadstatesettings#m-animationsettings-2).

</div>
