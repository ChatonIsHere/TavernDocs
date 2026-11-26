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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DeathEvent`](/game-api/types/alta-intelligence/deathevent), [`DeathUnityEvent`](/game-api/types/alta-intelligence/deathunityevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeathEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atlasingswitch" /><code>{"private static readonly string _AtlasingSwitch"}</code> | Shader keyword `_ATLAS` turned on for atlased creatures. |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | Shader property ID for `_Color`. |
| <Link id="m-colora1" /><code>{"private static readonly int _ColorA1"}</code> | Shader property ID for `_ColorA1`. |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | Shader property ID for `_MainTex`. |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for the dissolve progress. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity the server destroys when the effect ends. |
| <Link id="m-isatlased" /><code>{"private bool isAtlased"}</code> | Whether the ash materials use the atlas shader keyword. |
| <Link id="m-onend" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathevent">{"DeathEvent"}</Link>{" onEnd"}</code> | Raised when the effect finishes. |
| <Link id="m-onstart" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathevent">{"DeathEvent"}</Link>{" onStart"}</code> | Raised when the effect starts, after the delay. |
| <Link id="m-renderers" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderers"}</code> | Renderers that dissolve. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/deathanimationsettings">{"DeathAnimationSettings"}</Link>{" settings"}</code> | Death animation settings: ash material and duration. |
| <Link id="m-startdelay" /><code>{"private float startDelay"}</code> | Seconds to wait before the effect starts. |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> | Ash material made for each original material. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playanimation" /><code>{"void PlayAnimation()"}</code> | On non-headless builds, gives each enabled renderer ash materials, grows skinned bounds and turns off shadows, then starts the animation. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> | Coroutine: waits the start delay, raises `onStart`, animates progress over the duration, destroys the entity on the server and raises `onEnd`. |
| <Link id="m-getmaterialfromcolor" /><code>{"private Texture GetMaterialFromColor(Material original)"}</code> | Makes a texture from a material's `_Color` or `_ColorA1`, or a blank one with a warning. |
| <Link id="m-setmaterial" /><code>{"private void SetMaterial(Material original, Material newMaterial)"}</code> | Copies the original material's main texture (or a colour texture) onto the ash material. |

</details>
