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
| <Link id="m-ctor" /><code>{"EffectToggleColor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnvalidate" /><code>{"private bool btnValidate"}</code> | <span className="api-desc">Inspector button that refreshes the system lists.</span> |
| <Link id="m-ison" /><code>{"private bool isOn"}</code> | <span className="api-desc">State previewed when the lists are refreshed.</span> |
| <Link id="m-lifetimecolorsystems" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/effecttogglecolor-particlelifetimecolor">{"EffectToggleColor.ParticleLifetimeColor"}</Link>{"> lifetimeColorSystems"}</code> | <span className="api-desc">Systems that switch both start colour and colour-over-lifetime gradient.</span> |
| <Link id="m-startcolorsystems" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/effecttogglecolor-particlestartcolor">{"EffectToggleColor.ParticleStartColor"}</Link>{"> startColorSystems"}</code> | <span className="api-desc">Systems that switch only their start colour.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settoggle" /><code>{"void SetToggle(bool isOn)"}</code> | <span className="api-desc">Applies the on or off colours to every listed system.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">In the editor, fills the lists from child particle systems (lifetime list if colour over lifetime is on) and drops missing ones.</span> |

</details>
