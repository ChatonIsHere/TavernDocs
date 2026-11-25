---
title: "PlayerEffectManager.EffectApplication"
description: "class PlayerEffectManager.EffectApplication in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectApplication

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EffectApplication("}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition, "}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" definition"}</code> |
| <Link id="m-effectposition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-activeeffect" /><code><Link to="/game-api/types/global-p/playereffectparticle">{"PlayerEffectParticle"}</Link>{" ActiveEffect { get; private set; }"}</code> |
| <Link id="m-isvalid" /><code>{"bool IsValid { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> |
| <Link id="m-setsize" /><code>{"void SetSize(float size)"}</code> |

## Used in

Members of other types that take, return or hold a `EffectApplication`:

[`PlayerEffectManager.RunStatEffectCommand`](/game-api/types/global-p/playereffectmanager#m-runstateffectcommand), [`PlayerEffectManager.EffectPointStatus.burnActiveEffectDefinition`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-burnactiveeffectdefinition), [`PlayerEffectManager.EffectPointStatus.Item`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-item), [`PlayerEffectManager.EffectPointStatus.smokeActiveEffectDefinition`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-smokeactiveeffectdefinition), [`PlayerEffectManager.EffectPointStatus.statEffectsDefinition`](/game-api/types/global-p/playereffectmanager-effectpointstatus#m-stateffectsdefinition).
