---
title: "ToolBasedEffectBase"
description: "Base for pooled skill visuals that copy an object's meshes (skipping docks) and animate a _Progress material over them, such as ToolBasedEffect and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToolBasedEffectBase

An **abstract class** in `Root.Township`, the global namespace.

Base for pooled skill visuals that copy an object's meshes (skipping docks) and animate a `_Progress` material over them, such as `ToolBasedEffect` and `DissipateToolBasedEffect`. Client side.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`DissipateToolBasedEffect`](/mod/game-api/types/global-c-d/dissipatetoolbasedeffect), [`ToolBasedEffect`](/mod/game-api/types/global-t-x/toolbasedeffect)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ToolBasedEffectBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"protected readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-material" /><code>{"protected Material material"}</code> | <span className="api-desc">Copy of the base material used by every mesh effect.</span> |
| <Link id="m-meshanimation" /><code>{"protected Coroutine meshAnimation"}</code> | <span className="api-desc">The running animation coroutine.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | <span className="api-desc">Material copied for the effect meshes.</span> |
| <Link id="m-effectcache" /><code>{"private static readonly List<MeshRenderer> effectCache"}</code> | <span className="api-desc">Shared static list reused while gathering renderers.</span> |
| <Link id="m-filtercache" /><code>{"private static readonly List<MeshRenderer> filterCache"}</code> | <span className="api-desc">Shared static list returned by `GetRenderersWithoutDocks`.</span> |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> | <span className="api-desc">Pooled mesh effect spawned on each renderer, copying its mesh.</span> |
| <Link id="m-mesheffects" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/global-m-o/mesheffect">{"MeshEffect"}</Link>{"> meshEffects"}</code> | <span className="api-desc">Mesh effects spawned for the current target; released by `CleanEffects`.</span> |
| <Link id="m-transformstack" /><code>{"private static readonly Stack<Transform> transformStack"}</code> | <span className="api-desc">Shared static stack used to walk the hierarchy.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffect" /><code>{"void InitializeEffect(Component component)"}</code> | <span className="api-desc">Spawns a mesh effect copy for each enabled mesh renderer (from a component's children, skipping docks, or a given list) and plays the in animation.</span> |
| <Link id="m-initializeeffect-2" /><code>{"void InitializeEffect(IEnumerable<MeshRenderer> renderers)"}</code> | <span className="api-desc">Spawns a mesh effect copy for each enabled mesh renderer (from a component's children, skipping docks, or a given list) and plays the in animation.</span> |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Plays the out animation instead of releasing straight away.</span> |
| <Link id="m-animate" /><code>{"protected abstract IEnumerator Animate(bool isIn)"}</code> | <span className="api-desc">Coroutine for the in or out animation. Subclasses drive `_Progress` here.</span> |
| <Link id="m-cleaneffects" /><code>{"protected void CleanEffects()"}</code> | <span className="api-desc">Clears and releases every mesh effect copy.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes this effect's own copy of `baseMaterial`.</span> |
| <Link id="m-getrendererswithoutdocks" /><code>{"private static List<MeshRenderer> GetRenderersWithoutDocks(Transform root)"}</code> | <span className="api-desc">Collects mesh renderers under a transform, skipping any branch that has a `PickupDock` (so docked items are left out). Uses a shared static list.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ToolBasedEffectBase`:

<div className="api-used-in">

[`ProfessionSkill.RequestEffect`](/mod/game-api/types/global-p/professionskill#m-requesteffect), [`ProfessionSkill.ActiveEffect.PooledObject`](/mod/game-api/types/global-p/professionskill-activeeffect#m-pooledobject).

</div>
