---
title: "ShellAnimator"
description: "Client: draws an extra copy of a player's clothes with a shell material and animates its _Progress value, for effects like combat, stat effects and spirit mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShellAnimator

An **abstract class** in `Root.Township`, `Alta.PlayerEffects`.

Client: draws an extra copy of a player's clothes with a shell material and animates its `_Progress` value, for effects like combat, stat effects and spirit mode.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`CombatShellAnimator`](/mod/game-api/types/alta-player/combatshellanimator), [`StatEffectShellAnimator`](/mod/game-api/types/alta-player/stateffectshellanimator), [`SpiritModeShellAnimator`](/mod/game-api/types/global-s/spiritmodeshellanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShellAnimator("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> | <span className="api-desc">Creates a `ShellAnimator` from `character` and `shellMaterialSample`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentanimation" /><code>{"protected Coroutine currentAnimation"}</code> | <span className="api-desc">The running progress coroutine, if any.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property id for `_Progress`, the value the shell animation drives.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether the shell renderers are on; new renderers made in `Initialize` start with this.</span> |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | <span className="api-desc">Shell copies of the clothing renderers made in `Initialize`. Destroyed ones are dropped on the next toggle.</span> |
| <Link id="m-shellmaterial" /><code>{"private Material shellMaterial"}</code> | <span className="api-desc">Backing field for `ShellMaterial`, made on first use from `shellMaterialSample`.</span> |
| <Link id="m-shellmaterialsample" /><code>{"private Material shellMaterialSample"}</code> | <span className="api-desc">Template material that `ShellMaterial` copies.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Character { get; }"}</code> | <span className="api-desc">The player character the shell is on.</span> |
| <Link id="m-currentsetting" /><code><Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CurrentSetting { get; set; }"}</code> | <span className="api-desc">The shell setting currently applied.</span> |
| <Link id="m-shellmaterial-2" /><code>{"Material ShellMaterial { get; }"}</code> | <span className="api-desc">This shell's own copy of the shell material, made on first use with progress 0.</span> |
| <Link id="m-meshname" /><code>{"protected abstract string MeshName { get; }"}</code> | <span className="api-desc">Name of the mesh the shell is for, set by subclasses.</span> |
| <Link id="m-renderers-2" /><code>{"protected IEnumerable<Renderer> Renderers { get; }"}</code> | <span className="api-desc">The shell renderers made by `Initialize`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(LODGroup lodGroup, SkinnedMeshRenderer[] opaqueClothes, SkinnedMeshRenderer[] headOpaqueClothes, bool isFirstPerson)"}</code> | <span className="api-desc">Client: copies the clothing renderers with the shell material and adds them to the LOD group. First person copies only one.</span> |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> | <span className="api-desc">Cleans up the shell material.</span> |
| <Link id="m-setshellrenderersenabled" /><code>{"void SetShellRenderersEnabled(bool isActive)"}</code> | <span className="api-desc">Shows or hides every shell renderer.</span> |
| <Link id="m-animateprogress" /><code>{"protected IEnumerator AnimateProgress(float start, float target, "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" baseCurve, Action callback = null) (iterator)"}</code> | <span className="api-desc">Coroutine that animates the shell's progress along a curve, hiding the shell if it ends near 0 or 1, then runs the callback.</span> |
