---
title: "EffectToggleColor"
description: "Switches the particle systems under it between on and off start colours and colour-over-lifetime gradients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EffectToggleColor

A **class** in `Root.Township`, the global namespace.

Switches the particle systems under it between on and off start colours and colour-over-lifetime gradients.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ParticleLifetimeColor`](/mod/game-api/types/global-e-h/effecttogglecolor-particlelifetimecolor), [`ParticleStartColor`](/mod/game-api/types/global-e-h/effecttogglecolor-particlestartcolor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectToggleColor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnvalidate" /><code>{"private bool btnValidate"}</code> | Inspector button that refreshes the system lists. |
| <Link id="m-ison" /><code>{"private bool isOn"}</code> | State previewed when the lists are refreshed. |
| <Link id="m-lifetimecolorsystems" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/effecttogglecolor-particlelifetimecolor">{"EffectToggleColor.ParticleLifetimeColor"}</Link>{"> lifetimeColorSystems"}</code> | Systems that switch both start colour and colour-over-lifetime gradient. |
| <Link id="m-startcolorsystems" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/effecttogglecolor-particlestartcolor">{"EffectToggleColor.ParticleStartColor"}</Link>{"> startColorSystems"}</code> | Systems that switch only their start colour. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoggle" /><code>{"void SetToggle(bool isOn)"}</code> | Applies the on or off colours to every listed system. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | In the editor, fills the lists from child particle systems (lifetime list if colour over lifetime is on) and drops missing ones. |

</details>
