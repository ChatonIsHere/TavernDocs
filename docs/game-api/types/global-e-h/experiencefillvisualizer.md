---
title: "ExperienceFillVisualizer"
description: "Skill shrine visual that fills with a player's XP toward the next level on one path, and animates buying and selling skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExperienceFillVisualizer

A **class** in `Root.Township`, no namespace.

Skill shrine visual that fills with a player's XP toward the next level on one path, and animates buying and selling skills. The server sends the values; clients animate.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`SkillShrineVisualizer`](/game-api/types/global-s/skillshrinevisualizer)
- **Derived types** [`ProfessionDiskAvailablePointsVisualizer`](/game-api/types/global-p/professiondiskavailablepointsvisualizer), [`ShrineStructureAvailablePointsVisualizer`](/game-api/types/global-s/shrinestructureavailablepointsvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExperienceFillVisualizer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> |  |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> |  |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> |  |
| <Link id="m-animationcoroutine" /><code>{"private Coroutine animationCoroutine"}</code> |  |
| <Link id="m-availablepointvisualizer" /><code>{"private "}<Link to="/game-api/types/global-a-b/availablepointvisualizermanager">{"AvailablePointVisualizerManager"}</Link>{" availablePointVisualizer"}</code> |  |
| <Link id="m-currentfillvalue" /><code>{"private float currentFillValue"}</code> |  |
| <Link id="m-currentfreepoints" /><code>{"private int currentFreePoints"}</code> |  |
| <Link id="m-fillingcurve" /><code>{"private AnimationCurve fillingCurve"}</code> |  |
| <Link id="m-filltotargettime" /><code>{"private float fillToTargetTime"}</code> |  |
| <Link id="m-hassold" /><code>{"private bool hasSold"}</code> |  |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |  |
| <Link id="m-openinganimationtime" /><code>{"private float openingAnimationTime"}</code> |  |
| <Link id="m-renderertoanimate" /><code>{"private Renderer rendererToAnimate"}</code> |  |
| <Link id="m-sellingprogress" /><code>{"private AnimationCurve sellingProgress"}</code> |  |
| <Link id="m-soldfillprogress" /><code>{"private float soldFillProgress"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderertoanimate-2" /><code>{"Renderer RendererToAnimate { get; }"}</code> | The renderer whose fill shader values are animated. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Empties the fill and hides the available points. |
| <Link id="m-finishbuy" /><code>{"void FinishBuy(bool wasConfirmed)"}</code> | Animates the end of a buy, confirmed or cancelled. |
| <Link id="m-finishsell" /><code>{"void FinishSell()"}</code> | Clears the sell preview and restores the normal fill. |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | On a non-headless host, reads the player's progress and animates. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Server writes free points, fill toward the next level and the fill after a sale; clients read them and animate. |
| <Link id="m-setbuyprogress" /><code>{"void SetBuyProgress(float progress)"}</code> | Shows the fill draining while a buy is held. |
| <Link id="m-setsellprogress" /><code>{"void SetSellProgress(float progress)"}</code> | Shows the fill rising toward the after-sale value while a sell is held. |
| <Link id="m-animate" /><code>{"private void Animate(float percentageToNextLevel)"}</code> |  |
| <Link id="m-animatebuyfinish" /><code>{"private IEnumerator AnimateBuyFinish(bool wasConfirmed) (iterator)"}</code> |  |
| <Link id="m-animateopenforplayer" /><code>{"private IEnumerator AnimateOpenForPlayer(int levels, float percentageToNextLevel) (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-fadeto" /><code>{"private IEnumerator FadeTo(float target) (iterator)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-openinternal" /><code>{"protected virtual void OpenInternal()"}</code> | Hook for subclasses when the visualizer first opens. Empty in the base class. |

## Used in

Members of other types that take, return or hold a `ExperienceFillVisualizer`:

[`BoughtSkillOrbReplacer.RepositionAndAnchor`](/game-api/types/global-a-b/boughtskillorbreplacer#m-repositionandanchor), [`BoughtSkillOrbReplacer.visualizer`](/game-api/types/global-a-b/boughtskillorbreplacer#m-visualizer), [`ProfessionsProgressShrine.availablePointsVisualizers`](/game-api/types/global-p/professionsprogressshrine#m-availablepointsvisualizers), [`ProfessionsProgressShrine.GetVisualizer`](/game-api/types/global-p/professionsprogressshrine#m-getvisualizer), [`ProfessionsProgressShrine.pathVisualizerPrefab`](/game-api/types/global-p/professionsprogressshrine#m-pathvisualizerprefab), [`ProgressionShrine.GetVisualizer`](/game-api/types/global-p/progressionshrine#m-getvisualizer), [`SkillOrbOperator.fillVisualizer`](/game-api/types/global-s/skillorboperator#m-fillvisualizer), [`SkillShrine.fillVisualizer`](/game-api/types/global-s/skillshrine#m-fillvisualizer), [`SkillShrine.GetVisualizer`](/game-api/types/global-s/skillshrine#m-getvisualizer).
