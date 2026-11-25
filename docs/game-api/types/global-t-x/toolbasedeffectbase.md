---
title: "ToolBasedEffectBase"
description: "Base for pooled skill visuals that copy an object's meshes (skipping docks) and animate a _Progress material over them, such as ToolBasedEffect and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToolBasedEffectBase

An **abstract class** in `Root.Township`, no namespace.

Base for pooled skill visuals that copy an object's meshes (skipping docks) and animate a `_Progress` material over them, such as `ToolBasedEffect` and `DissipateToolBasedEffect`. Client side.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`DissipateToolBasedEffect`](/game-api/types/global-c-d/dissipatetoolbasedeffect), [`ToolBasedEffect`](/game-api/types/global-t-x/toolbasedeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ToolBasedEffectBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"protected readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-effectcache" /><code>{"private static readonly List<MeshRenderer> effectCache"}</code> |  |
| <Link id="m-filtercache" /><code>{"private static readonly List<MeshRenderer> filterCache"}</code> |  |
| <Link id="m-material" /><code>{"protected Material material"}</code> | Copy of the base material used by every mesh effect. |
| <Link id="m-meshanimation" /><code>{"protected Coroutine meshAnimation"}</code> | The running animation coroutine. |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> |  |
| <Link id="m-mesheffects" /><code>{"private readonly List<"}<Link to="/game-api/types/global-m-o/mesheffect">{"MeshEffect"}</Link>{"> meshEffects"}</code> |  |
| <Link id="m-transformstack" /><code>{"private static readonly Stack<Transform> transformStack"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffect" /><code>{"void InitializeEffect(Component component)"}</code> | Spawns a mesh effect copy for each enabled mesh renderer (from a component's children, skipping docks, or a given list) and plays the in animation. |
| <Link id="m-initializeeffect-2" /><code>{"void InitializeEffect(IEnumerable<MeshRenderer> renderers)"}</code> | Spawns a mesh effect copy for each enabled mesh renderer (from a component's children, skipping docks, or a given list) and plays the in animation. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Plays the out animation instead of releasing straight away. |
| <Link id="m-animate" /><code>{"protected abstract IEnumerator Animate(bool isIn)"}</code> | Coroutine for the in or out animation. Subclasses drive `_Progress` here. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-cleaneffects" /><code>{"protected void CleanEffects()"}</code> | Clears and releases every mesh effect copy. |
| <Link id="m-getrendererswithoutdocks" /><code>{"private static List<MeshRenderer> GetRenderersWithoutDocks(Transform root)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ToolBasedEffectBase`:

[`ProfessionSkill.RequestEffect`](/game-api/types/global-p/professionskill#m-requesteffect), [`ProfessionSkill.ActiveEffect.PooledObject`](/game-api/types/global-p/professionskill-activeeffect#m-pooledobject).
