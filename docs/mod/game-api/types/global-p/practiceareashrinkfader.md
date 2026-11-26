---
title: "PracticeAreaShrinkFader"
description: "Base class for a skill shrine practice area object that fades in from the testing orb's position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PracticeAreaShrinkFader

An **abstract class** in `Root.Township`, the global namespace.

Base class for a skill shrine practice area object that fades in from the testing orb's position. Objects that don't use the fade material turn on near the end.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`FadeInOutBase`](/mod/game-api/types/global-e-h/fadeinoutbase)
- **Derived types** [`FadeInOutNetworkEntity`](/mod/game-api/types/global-e-h/fadeinoutnetworkentity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PracticeAreaShrinkFader()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-testingarea" /><code>{"protected "}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> | <span className="api-desc">The testing area this object belongs to.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-shrinkpoint" /><code>{"private readonly int _ShrinkPoint"}</code> | <span className="api-desc">Shader property id for the point the effect shrinks to.</span> |
| <Link id="m-nonanimatedobjects" /><code>{"private List<GameObject> nonAnimatedObjects"}</code> | <span className="api-desc">Objects that can't use the fade shader, so they're just turned on.</span> |
| <Link id="m-toggleenabletarget" /><code>{"private float toggleEnableTarget"}</code> | <span className="api-desc">Progress value below which the other objects turn on.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"override void PostBake()"}</code> | <span className="api-desc">Removes destroyed objects from `nonAnimatedObjects`.</span> |
| <Link id="m-registertestingarea" /><code>{"virtual void RegisterTestingArea("}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea)"}</code> | <span className="api-desc">Links the testing area, sets the shrink point and starts the fade once the orb is in place.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Client: hides the objects that don't animate.</span> |
| <Link id="m-fade" /><code>{"protected override IEnumerator Fade() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the shader progress from 1 to 0 and turns the other objects on below `toggleEnableTarget`.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">If the list is empty, fills `nonAnimatedObjects` with children whose renderer doesn't use the base material.</span> |
| <Link id="m-togglerenderersenabled" /><code>{"protected void ToggleRenderersEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns all `nonAnimatedObjects` on or off.</span> |

## Used in

Members of other types that take, return or hold a `PracticeAreaShrinkFader`:

<div className="api-used-in">

[`SkillShrineTestingArea.spawnedStaticContent`](/mod/game-api/types/global-s/skillshrinetestingarea#m-spawnedstaticcontent).

</div>
