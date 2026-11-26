---
title: "PlayerEffectParticle"
description: "Effect on a player that fades and releases, with a radius you can set across all its particle systems."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectParticle

A **class** in `Root.Township`, the global namespace.

Effect on a player that fades and releases, with a radius you can set across all its particle systems.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`EffectReleaseOnFade`](/mod/game-api/types/global-e-h/effectreleaseonfade)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEffectParticle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> | The particle systems whose shape radius is set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-radius" /><code>{"float Radius { get; set; }"}</code> | Shape radius of the particles in world scale. Setting it updates every system. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"override void PostBake()"}</code> | Build step: removes null particle systems. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills `particles` from children if empty. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEffectParticle`:

[`PlayerEffectManager.EffectApplication.ActiveEffect`](/mod/game-api/types/global-p/playereffectmanager-effectapplication#m-activeeffect), [`PlayerEffectManager.EffectPosition.Position`](/mod/game-api/types/global-p/playereffectmanager-effectposition#m-position-2).
