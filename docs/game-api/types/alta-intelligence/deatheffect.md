---
title: "DeathEffect"
description: "class DeathEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeathEffect

A **class** in `Root.Township`, `Alta.Creatures`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DeathEvent`](/game-api/types/alta-intelligence/deathevent), [`DeathUnityEvent`](/game-api/types/alta-intelligence/deathunityevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DeathEffect()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-atlasingswitch" /><code>{"private static readonly string _AtlasingSwitch"}</code> |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> |
| <Link id="m-colora1" /><code>{"private static readonly int _ColorA1"}</code> |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-isatlased" /><code>{"private bool isAtlased"}</code> |
| <Link id="m-onend" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathevent">{"DeathEvent"}</Link>{" onEnd"}</code> |
| <Link id="m-onstart" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathevent">{"DeathEvent"}</Link>{" onStart"}</code> |
| <Link id="m-renderers" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderers"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" settings"}</code> |
| <Link id="m-startdelay" /><code>{"private float startDelay"}</code> |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-playanimation" /><code>{"void PlayAnimation()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> |
| <Link id="m-getmaterialfromcolor" /><code>{"private Texture GetMaterialFromColor(Material original)"}</code> |
| <Link id="m-setmaterial" /><code>{"private void SetMaterial(Material original, Material newMaterial)"}</code> |

</details>
