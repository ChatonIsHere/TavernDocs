---
title: "PracticeAreaShrinkFader"
description: "abstract class PracticeAreaShrinkFader in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PracticeAreaShrinkFader

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`FadeInOutBase`](/game-api/types/global-e-h/fadeinoutbase)
- **Derived types** [`FadeInOutNetworkEntity`](/game-api/types/global-e-h/fadeinoutnetworkentity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PracticeAreaShrinkFader()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-shrinkpoint" /><code>{"private readonly int _ShrinkPoint"}</code> |  |
| <Link id="m-nonanimatedobjects" /><code>{"private List<GameObject> nonAnimatedObjects"}</code> |  |
| <Link id="m-testingarea" /><code>{"protected "}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> |  |
| <Link id="m-toggleenabletarget" /><code>{"private float toggleEnableTarget"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"override void PostBake()"}</code> |  |
| <Link id="m-registertestingarea" /><code>{"virtual void RegisterTestingArea("}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-fade" /><code>{"protected override IEnumerator Fade() (iterator)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-togglerenderersenabled" /><code>{"protected void ToggleRenderersEnabled(bool isEnabled)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PracticeAreaShrinkFader`:

[`SkillShrineTestingArea.spawnedStaticContent`](/game-api/types/global-s/skillshrinetestingarea#m-spawnedstaticcontent).
