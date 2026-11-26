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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ToolBasedEffectBase()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"protected readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-material" /><code>{"protected Material material"}</code> | Copy of the base material used by every mesh effect. |
| <Link id="m-meshanimation" /><code>{"protected Coroutine meshAnimation"}</code> | The running animation coroutine. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> | Material copied for the effect meshes. |
| <Link id="m-effectcache" /><code>{"private static readonly List<MeshRenderer> effectCache"}</code> | Shared static list reused while gathering renderers. |
| <Link id="m-filtercache" /><code>{"private static readonly List<MeshRenderer> filterCache"}</code> | Shared static list returned by `GetRenderersWithoutDocks`. |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> | Pooled mesh effect spawned on each renderer, copying its mesh. |
| <Link id="m-mesheffects" /><code>{"private readonly List<"}<Link to="/game-api/types/global-m-o/mesheffect">{"MeshEffect"}</Link>{"> meshEffects"}</code> | Mesh effects spawned for the current target; released by `CleanEffects`. |
| <Link id="m-transformstack" /><code>{"private static readonly Stack<Transform> transformStack"}</code> | Shared static stack used to walk the hierarchy. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffect" /><code>{"void InitializeEffect(Component component)"}</code> | Spawns a mesh effect copy for each enabled mesh renderer (from a component's children, skipping docks, or a given list) and plays the in animation. |
| <Link id="m-initializeeffect-2" /><code>{"void InitializeEffect(IEnumerable<MeshRenderer> renderers)"}</code> | Spawns a mesh effect copy for each enabled mesh renderer (from a component's children, skipping docks, or a given list) and plays the in animation. |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Plays the out animation instead of releasing straight away. |
| <Link id="m-animate" /><code>{"protected abstract IEnumerator Animate(bool isIn)"}</code> | Coroutine for the in or out animation. Subclasses drive `_Progress` here. |
| <Link id="m-cleaneffects" /><code>{"protected void CleanEffects()"}</code> | Clears and releases every mesh effect copy. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes this effect's own copy of `baseMaterial`. |
| <Link id="m-getrendererswithoutdocks" /><code>{"private static List<MeshRenderer> GetRenderersWithoutDocks(Transform root)"}</code> | Collects mesh renderers under a transform, skipping any branch that has a `PickupDock` (so docked items are left out). Uses a shared static list. |

</details>

## Used in

Members of other types that take, return or hold a `ToolBasedEffectBase`:

[`ProfessionSkill.RequestEffect`](/game-api/types/global-p/professionskill#m-requesteffect), [`ProfessionSkill.ActiveEffect.PooledObject`](/game-api/types/global-p/professionskill-activeeffect#m-pooledobject).
