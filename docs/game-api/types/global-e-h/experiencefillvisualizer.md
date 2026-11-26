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
| <Link id="m-ctor" /><code>{"ExperienceFillVisualizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property ID for the main fill amount. |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | Shader property ID for the fill shown while selling points. |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> | Shader property ID for the fill gained, shown while buying. |
| <Link id="m-animationcoroutine" /><code>{"private Coroutine animationCoroutine"}</code> | The running fill animation, stopped before a new one starts. |
| <Link id="m-availablepointvisualizer" /><code>{"private "}<Link to="/game-api/types/global-a-b/availablepointvisualizermanager">{"AvailablePointVisualizerManager"}</Link>{" availablePointVisualizer"}</code> | Shows the orbs for free skill points. |
| <Link id="m-currentfillvalue" /><code>{"private float currentFillValue"}</code> | Current fill from 0 to 1, progress to the next level. |
| <Link id="m-currentfreepoints" /><code>{"private int currentFreePoints"}</code> | Free skill points on this path, synced from the server. |
| <Link id="m-fillingcurve" /><code>{"private AnimationCurve fillingCurve"}</code> | Easing for that fill. |
| <Link id="m-filltotargettime" /><code>{"private float fillToTargetTime"}</code> | Seconds to fill to current progress after opening. Default 0.7. |
| <Link id="m-hassold" /><code>{"private bool hasSold"}</code> | True once selling has gone past a full level and a temporary point orb is showing. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | True while the shrine is open for a player. |
| <Link id="m-openinganimationtime" /><code>{"private float openingAnimationTime"}</code> | Seconds the per-point fill animation takes in total. Default 2. |
| <Link id="m-renderertoanimate" /><code>{"private Renderer rendererToAnimate"}</code> | Backing field for `RendererToAnimate`, whose material gets the fill values. |
| <Link id="m-sellingprogress" /><code>{"private AnimationCurve sellingProgress"}</code> | Curve for how the fill moves while selling. |
| <Link id="m-soldfillprogress" /><code>{"private float soldFillProgress"}</code> | Fill level after refunding experience by selling a point, worked out by the server in `Serialize`. |

</details>

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
| <Link id="m-openinternal" /><code>{"protected virtual void OpenInternal()"}</code> | Hook for subclasses when the visualizer first opens. Empty in the base class. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate(float percentageToNextLevel)"}</code> | Fades the fill to a new level if the shrine is open; otherwise opens it with the level-up animation. |
| <Link id="m-animatebuyfinish" /><code>{"private IEnumerator AnimateBuyFinish(bool wasConfirmed) (iterator)"}</code> | Coroutine that settles the fill after buying a point, confirmed or cancelled. |
| <Link id="m-animateopenforplayer" /><code>{"private IEnumerator AnimateOpenForPlayer(int levels, float percentageToNextLevel) (iterator)"}</code> | Coroutine run when the shrine opens: fills once per free point, opening each point visual, then fills to current progress. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: resets the fill shader values to 0. |
| <Link id="m-fadeto" /><code>{"private IEnumerator FadeTo(float target) (iterator)"}</code> | Coroutine that lerps the fill to a target value. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Client: cleans up the material instance it made. |

</details>

## Used in

Members of other types that take, return or hold a `ExperienceFillVisualizer`:

[`BoughtSkillOrbReplacer.RepositionAndAnchor`](/game-api/types/global-a-b/boughtskillorbreplacer#m-repositionandanchor), [`BoughtSkillOrbReplacer.visualizer`](/game-api/types/global-a-b/boughtskillorbreplacer#m-visualizer), [`ProfessionsProgressShrine.availablePointsVisualizers`](/game-api/types/global-p/professionsprogressshrine#m-availablepointsvisualizers), [`ProfessionsProgressShrine.GetVisualizer`](/game-api/types/global-p/professionsprogressshrine#m-getvisualizer), [`ProfessionsProgressShrine.pathVisualizerPrefab`](/game-api/types/global-p/professionsprogressshrine#m-pathvisualizerprefab), [`ProgressionShrine.GetVisualizer`](/game-api/types/global-p/progressionshrine#m-getvisualizer), [`SkillOrbOperator.fillVisualizer`](/game-api/types/global-s/skillorboperator#m-fillvisualizer), [`SkillShrine.fillVisualizer`](/game-api/types/global-s/skillshrine#m-fillvisualizer), [`SkillShrine.GetVisualizer`](/game-api/types/global-s/skillshrine#m-getvisualizer).
