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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`CombatShellAnimator`](/game-api/types/alta-player/combatshellanimator), [`StatEffectShellAnimator`](/game-api/types/alta-player/stateffectshellanimator), [`SpiritModeShellAnimator`](/game-api/types/global-s/spiritmodeshellanimator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShellAnimator("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentanimation" /><code>{"protected Coroutine currentAnimation"}</code> | The running progress coroutine, if any. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader property id for `_Progress`, the value the shell animation drives. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Whether the shell renderers are on; new renderers made in `Initialize` start with this. |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | Shell copies of the clothing renderers made in `Initialize`. Destroyed ones are dropped on the next toggle. |
| <Link id="m-shellmaterial" /><code>{"private Material shellMaterial"}</code> | Backing field for `ShellMaterial`, made on first use from `shellMaterialSample`. |
| <Link id="m-shellmaterialsample" /><code>{"private Material shellMaterialSample"}</code> | Template material that `ShellMaterial` copies. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Character { get; }"}</code> | The player character the shell is on. |
| <Link id="m-currentsetting" /><code><Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CurrentSetting { get; set; }"}</code> | The shell setting currently applied. |
| <Link id="m-shellmaterial-2" /><code>{"Material ShellMaterial { get; }"}</code> | This shell's own copy of the shell material, made on first use with progress 0. |
| <Link id="m-meshname" /><code>{"protected abstract string MeshName { get; }"}</code> | Name of the mesh the shell is for, set by subclasses. |
| <Link id="m-renderers-2" /><code>{"protected IEnumerable<Renderer> Renderers { get; }"}</code> | The shell renderers made by `Initialize`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(LODGroup lodGroup, SkinnedMeshRenderer[] opaqueClothes, SkinnedMeshRenderer[] headOpaqueClothes, bool isFirstPerson)"}</code> | Client: copies the clothing renderers with the shell material and adds them to the LOD group. First person copies only one. |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> | Cleans up the shell material. |
| <Link id="m-setshellrenderersenabled" /><code>{"void SetShellRenderersEnabled(bool isActive)"}</code> | Shows or hides every shell renderer. |
| <Link id="m-animateprogress" /><code>{"protected IEnumerator AnimateProgress(float start, float target, "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" baseCurve, Action callback = null) (iterator)"}</code> | Coroutine that animates the shell's progress along a curve, hiding the shell if it ends near 0 or 1, then runs the callback. |
