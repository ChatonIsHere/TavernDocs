---
title: "ShellAnimator"
description: "abstract class ShellAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShellAnimator

An **abstract class** in `Root.Township`, `Alta.PlayerEffects`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`CombatShellAnimator`](/game-api/types/alta-player/combatshellanimator), [`StatEffectShellAnimator`](/game-api/types/alta-player/stateffectshellanimator), [`SpiritModeShellAnimator`](/game-api/types/global-s/spiritmodeshellanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShellAnimator("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |  |
| <Link id="m-currentanimation" /><code>{"protected Coroutine currentAnimation"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> |  |
| <Link id="m-shellmaterial" /><code>{"private Material shellMaterial"}</code> |  |
| <Link id="m-shellmaterialsample" /><code>{"private Material shellMaterialSample"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-character" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" Character { get; }"}</code> |  |
| <Link id="m-currentsetting" /><code><Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" CurrentSetting { get; set; }"}</code> |  |
| <Link id="m-shellmaterial-2" /><code>{"Material ShellMaterial { get; }"}</code> |  |
| <Link id="m-meshname" /><code>{"protected abstract string MeshName { get; }"}</code> |  |
| <Link id="m-renderers-2" /><code>{"protected IEnumerable<Renderer> Renderers { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(LODGroup lodGroup, SkinnedMeshRenderer[] opaqueClothes, SkinnedMeshRenderer[] headOpaqueClothes, bool isFirstPerson)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> |  |
| <Link id="m-setshellrenderersenabled" /><code>{"void SetShellRenderersEnabled(bool isActive)"}</code> |  |
| <Link id="m-animateprogress" /><code>{"protected IEnumerator AnimateProgress(float start, float target, "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" baseCurve, Action callback = null) (iterator)"}</code> |  |
