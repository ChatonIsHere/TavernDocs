---
title: "DeathEffect"
description: "Plays a creature's death dissolve: swaps its materials for ash materials and animates them, then the server destroys the entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeathEffect

A **class** in `Root.Township`, `Alta.Creatures`.

Plays a creature's death dissolve: swaps its materials for ash materials and animates them, then the server destroys the entity. Headless servers just wait out the duration.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DeathEvent`](/mod/game-api/types/alta-intelligence/deathevent), [`DeathUnityEvent`](/mod/game-api/types/alta-intelligence/deathunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atlasingswitch" /><code>{"private static readonly string _AtlasingSwitch"}</code> | <span className="api-desc">Shader keyword `_ATLAS` turned on for atlased creatures.</span> |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | <span className="api-desc">Shader property ID for `_Color`.</span> |
| <Link id="m-colora1" /><code>{"private static readonly int _ColorA1"}</code> | <span className="api-desc">Shader property ID for `_ColorA1`.</span> |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | <span className="api-desc">Shader property ID for `_MainTex`.</span> |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the dissolve progress.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity the server destroys when the effect ends.</span> |
| <Link id="m-isatlased" /><code>{"private bool isAtlased"}</code> | <span className="api-desc">Whether the ash materials use the atlas shader keyword.</span> |
| <Link id="m-onend" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/deathevent">{"DeathEvent"}</Link>{" onEnd"}</code> | <span className="api-desc">Raised when the effect finishes.</span> |
| <Link id="m-onstart" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/deathevent">{"DeathEvent"}</Link>{" onStart"}</code> | <span className="api-desc">Raised when the effect starts, after the delay.</span> |
| <Link id="m-renderers" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderers"}</code> | <span className="api-desc">Renderers that dissolve.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" settings"}</code> | <span className="api-desc">Death animation settings: ash material and duration.</span> |
| <Link id="m-startdelay" /><code>{"private float startDelay"}</code> | <span className="api-desc">Seconds to wait before the effect starts.</span> |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> | <span className="api-desc">Ash material made for each original material.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playanimation" /><code>{"void PlayAnimation()"}</code> | <span className="api-desc">On non-headless builds, gives each enabled renderer ash materials, grows skinned bounds and turns off shadows, then starts the animation.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> | <span className="api-desc">Coroutine: waits the start delay, raises `onStart`, animates progress over the duration, destroys the entity on the server and raises `onEnd`.</span> |
| <Link id="m-getmaterialfromcolor" /><code>{"private Texture GetMaterialFromColor(Material original)"}</code> | <span className="api-desc">Makes a texture from a material's `_Color` or `_ColorA1`, or a blank one with a warning.</span> |
| <Link id="m-setmaterial" /><code>{"private void SetMaterial(Material original, Material newMaterial)"}</code> | <span className="api-desc">Copies the original material's main texture (or a colour texture) onto the ash material.</span> |

</details>
