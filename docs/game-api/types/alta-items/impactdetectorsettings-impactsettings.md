---
title: "ImpactDetectorSettings.ImpactSettings"
description: "The effect and sound for one impact outcome (critical, good or bad) in ImpactDetectorSettings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactDetectorSettings.ImpactSettings

A **class** in `Root.Township`, `Alta.Impact`.

The effect and sound for one impact outcome (critical, good or bad) in `ImpactDetectorSettings`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Nested in** [`ImpactDetectorSettings`](/game-api/types/alta-items/impactdetectorsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSettings()"}</code> | Creates an `ImpactDetectorSettings.ImpactSettings` from `sound` and `objectDefinition`. |
| <Link id="m-ctor-2" /><code>{"ImpactSettings("}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" sound, "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" objectDefinition)"}</code> | Creates an `ImpactDetectorSettings.ImpactSettings` from `sound` and `objectDefinition`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-objectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" objectDefinition"}</code> | Backing field for `ObjectDefinition`, the pooled effect spawned on the impact. |
| <Link id="m-sound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" sound"}</code> | Backing field for `Sound`, the sound effect played on the impact (none by default). |
| <Link id="m-soundeffectset" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffectSet"}</code> | Backing field for `SoundEffectSet`, a set of sounds for the impact. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-objectdefinition-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ObjectDefinition { get; }"}</code> | Pooled effect spawned at the hit point. Its scale follows hit effectiveness. |
| <Link id="m-sound-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" Sound { get; }"}</code> | Sound played at the hit point, or `None`. |
| <Link id="m-soundeffectset-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" { get; }"}</code> | A sound effect set for this outcome. Not used by `PlayEffects`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True if the sound and pooled effect match. Ignores `SoundEffectSet`. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of the sound and pooled effect. |

## Used in

Members of other types that take, return or hold a `ImpactSettings`:

[`ImpactDetectorSettings.bad`](/game-api/types/alta-items/impactdetectorsettings#m-bad), [`ImpactDetectorSettings.critical`](/game-api/types/alta-items/impactdetectorsettings#m-critical), [`ImpactDetectorSettings.good`](/game-api/types/alta-items/impactdetectorsettings#m-good), [`ImpactGenerator.EffectOnBlock`](/game-api/types/alta-items/impactgenerator#m-effectonblock), [`ImpactGenerator.EffectOnDamage`](/game-api/types/alta-items/impactgenerator#m-effectondamage), [`ImpactorSettings.effectOnBlock`](/game-api/types/alta-items/impactorsettings#m-effectonblock), [`ImpactorSettings.EffectOnBlock`](/game-api/types/alta-items/impactorsettings#m-effectonblock-2), [`ImpactorSettings.effectOnDamage`](/game-api/types/alta-items/impactorsettings#m-effectondamage), [`ImpactorSettings.EffectOnDamage`](/game-api/types/alta-items/impactorsettings#m-effectondamage-2), [`PickupTypeSettings.GetHardnessInnefectiveHitEffect`](/game-api/types/global-p/pickuptypesettings#m-gethardnessinnefectivehiteffect), [`PickupTypeSettings.ChannelInneficientHardnessHitEffect.settings`](/game-api/types/global-p/pickuptypesettings-channelinneficienthardnesshiteffect#m-settings).
