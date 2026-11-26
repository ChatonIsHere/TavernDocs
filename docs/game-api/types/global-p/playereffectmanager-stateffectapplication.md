---
title: "PlayerEffectManager.StatEffectApplication"
description: "class PlayerEffectManager.StatEffectApplication in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.StatEffectApplication

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatEffectApplication("}<Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" statDrive, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, bool isBuff, "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" shellAnimator, Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, bool> activeChanged, Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, float> sizeChanged)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-activechanged" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, bool> ActiveChanged"}</code> |
| <Link id="m-sizechanged" /><code>{"Action<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", bool, float> SizeChanged"}</code> |

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" handler"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-isbuff" /><code>{"private bool isBuff"}</code> |
| <Link id="m-magnitudedefinition" /><code>{"private Func<float, float, float> MagnitudeDefinition"}</code> |
| <Link id="m-shellanimator" /><code>{"private "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" shellAnimator"}</code> |
| <Link id="m-statdrive" /><code>{"private "}<Link to="/game-api/types/alta-player/statdriveneffect">{"StatDrivenEffect"}</Link>{" statDrive"}</code> |
| <Link id="m-value" /><code>{"private float Value"}</code> |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |

</details>
