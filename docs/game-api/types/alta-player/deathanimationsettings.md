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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeathAnimationSettings()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-ashesmaterial" /><code>{"private Material ashesMaterial"}</code> |
| <Link id="m-deathvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisual"}</code> |
| <Link id="m-deathvisualgroundposition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" deathVisualGroundPosition"}</code> |
| <Link id="m-defaultduration" /><code>{"private float defaultDuration"}</code> |
| <Link id="m-firstdissolvestrength" /><code>{"private float firstDissolveStrength"}</code> |
| <Link id="m-firstramp1" /><code>{"private Texture2D firstRamp1"}</code> |
| <Link id="m-firstramp2" /><code>{"private Texture2D firstRamp2"}</code> |
| <Link id="m-predeathvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" preDeathVisual"}</code> |
| <Link id="m-seconddissolvestrength" /><code>{"private float secondDissolveStrength"}</code> |
| <Link id="m-secondramp1" /><code>{"private Texture2D secondRamp1"}</code> |
| <Link id="m-secondramp2" /><code>{"private Texture2D secondRamp2"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ashesmaterial-2" /><code>{"Material AshesMaterial { get; }"}</code> | Material for the ashes. |
| <Link id="m-deathvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisual { get; }"}</code> | Pooled particles for the second burst. |
| <Link id="m-deathvisualgroundposition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DeathVisualGroundPosition { get; }"}</code> | Pooled visual placed at ground level. |
| <Link id="m-defaultduration-2" /><code>{"float DefaultDuration { get; }"}</code> | Default duration in seconds (3). |
| <Link id="m-firstdissolvestrength-2" /><code>{"float FirstDissolveStrength { get; }"}</code> | Shell dissolve strength for the first burst. |
| <Link id="m-firstramp1-2" /><code>{"Texture2D FirstRamp1 { get; }"}</code> | First colour ramp texture for the first burst. |
| <Link id="m-firstramp2-2" /><code>{"Texture2D FirstRamp2 { get; }"}</code> | Second colour ramp texture for the first burst. |
| <Link id="m-predeathvisual-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" PreDeathVisual { get; }"}</code> | Pooled particles for the first burst. |
| <Link id="m-seconddissolvestrength-2" /><code>{"float SecondDissolveStrength { get; }"}</code> | Shell dissolve strength for the second burst. |
| <Link id="m-secondramp1-2" /><code>{"Texture2D SecondRamp1 { get; }"}</code> | First colour ramp texture for the second burst. |
| <Link id="m-secondramp2-2" /><code>{"Texture2D SecondRamp2 { get; }"}</code> | Second colour ramp texture for the second burst. |

## Used in

Members of other types that take, return or hold a `DeathAnimationSettings`:

[`DeadStateSettings.animationSettings`](/game-api/types/alta-player/deadstatesettings#m-animationsettings), [`DeadStateSettings.AnimationSettings`](/game-api/types/alta-player/deadstatesettings#m-animationsettings-2).
