---
title: "ExperienceFillVisualizer"
description: "Skill shrine visual that fills with a player's XP toward the next level on one path, and animates buying and selling skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExperienceFillVisualizer

A **class** in `Root.Township`, the global namespace.

Skill shrine visual that fills with a player's XP toward the next level on one path, and animates buying and selling skills. The server sends the values; clients animate.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`SkillShrineVisualizer`](/mod/game-api/types/global-s/skillshrinevisualizer)
- **Derived types** [`ProfessionDiskAvailablePointsVisualizer`](/mod/game-api/types/global-p/professiondiskavailablepointsvisualizer), [`ShrineStructureAvailablePointsVisualizer`](/mod/game-api/types/global-s/shrinestructureavailablepointsvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExperienceFillVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property ID for the main fill amount.</span> |
| <Link id="m-negativechangeprogress" /><code>{"private static readonly int _NegativeChangeProgress"}</code> | <span className="api-desc">Shader property ID for the fill shown while selling points.</span> |
| <Link id="m-positivechangeprogress" /><code>{"private static readonly int _PositiveChangeProgress"}</code> | <span className="api-desc">Shader property ID for the fill gained, shown while buying.</span> |
| <Link id="m-animationcoroutine" /><code>{"private Coroutine animationCoroutine"}</code> | <span className="api-desc">The running fill animation, stopped before a new one starts.</span> |
| <Link id="m-availablepointvisualizer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/availablepointvisualizermanager">{"AvailablePointVisualizerManager"}</Link>{" availablePointVisualizer"}</code> | <span className="api-desc">Shows the orbs for free skill points.</span> |
| <Link id="m-currentfillvalue" /><code>{"private float currentFillValue"}</code> | <span className="api-desc">Current fill from 0 to 1, progress to the next level.</span> |
| <Link id="m-currentfreepoints" /><code>{"private int currentFreePoints"}</code> | <span className="api-desc">Free skill points on this path, synced from the server.</span> |
| <Link id="m-fillingcurve" /><code>{"private AnimationCurve fillingCurve"}</code> | <span className="api-desc">Easing for that fill.</span> |
| <Link id="m-filltotargettime" /><code>{"private float fillToTargetTime"}</code> | <span className="api-desc">Seconds to fill to current progress after opening. Default 0.7.</span> |
| <Link id="m-hassold" /><code>{"private bool hasSold"}</code> | <span className="api-desc">True once selling has gone past a full level and a temporary point orb is showing.</span> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">True while the shrine is open for a player.</span> |
| <Link id="m-openinganimationtime" /><code>{"private float openingAnimationTime"}</code> | <span className="api-desc">Seconds the per-point fill animation takes in total. Default 2.</span> |
| <Link id="m-renderertoanimate" /><code>{"private Renderer rendererToAnimate"}</code> | <span className="api-desc">Backing field for `RendererToAnimate`, whose material gets the fill values.</span> |
| <Link id="m-sellingprogress" /><code>{"private AnimationCurve sellingProgress"}</code> | <span className="api-desc">Curve for how the fill moves while selling.</span> |
| <Link id="m-soldfillprogress" /><code>{"private float soldFillProgress"}</code> | <span className="api-desc">Fill level after refunding experience by selling a point, worked out by the server in `Serialize`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderertoanimate-2" /><code>{"Renderer RendererToAnimate { get; }"}</code> | <span className="api-desc">The renderer whose fill shader values are animated.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Empties the fill and hides the available points.</span> |
| <Link id="m-finishbuy" /><code>{"void FinishBuy(bool wasConfirmed)"}</code> | <span className="api-desc">Animates the end of a buy, confirmed or cancelled.</span> |
| <Link id="m-finishsell" /><code>{"void FinishSell()"}</code> | <span className="api-desc">Clears the sell preview and restores the normal fill.</span> |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">On a non-headless host, reads the player's progress and animates.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Server writes free points, fill toward the next level and the fill after a sale; clients read them and animate.</span> |
| <Link id="m-setbuyprogress" /><code>{"void SetBuyProgress(float progress)"}</code> | <span className="api-desc">Shows the fill draining while a buy is held.</span> |
| <Link id="m-setsellprogress" /><code>{"void SetSellProgress(float progress)"}</code> | <span className="api-desc">Shows the fill rising toward the after-sale value while a sell is held.</span> |
| <Link id="m-openinternal" /><code>{"protected virtual void OpenInternal()"}</code> | <span className="api-desc">Hook for subclasses when the visualizer first opens. Empty in the base class.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private void Animate(float percentageToNextLevel)"}</code> | <span className="api-desc">Fades the fill to a new level if the shrine is open; otherwise opens it with the level-up animation.</span> |
| <Link id="m-animatebuyfinish" /><code>{"private IEnumerator AnimateBuyFinish(bool wasConfirmed) (iterator)"}</code> | <span className="api-desc">Coroutine that settles the fill after buying a point, confirmed or cancelled.</span> |
| <Link id="m-animateopenforplayer" /><code>{"private IEnumerator AnimateOpenForPlayer(int levels, float percentageToNextLevel) (iterator)"}</code> | <span className="api-desc">Coroutine run when the shrine opens: fills once per free point, opening each point visual, then fills to current progress.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: resets the fill shader values to 0.</span> |
| <Link id="m-fadeto" /><code>{"private IEnumerator FadeTo(float target) (iterator)"}</code> | <span className="api-desc">Coroutine that lerps the fill to a target value.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Client: cleans up the material instance it made.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ExperienceFillVisualizer`:

<div className="api-used-in">

[`BoughtSkillOrbReplacer.RepositionAndAnchor`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-repositionandanchor), [`BoughtSkillOrbReplacer.visualizer`](/mod/game-api/types/global-a-b/boughtskillorbreplacer#m-visualizer), [`ProfessionsProgressShrine.availablePointsVisualizers`](/mod/game-api/types/global-p/professionsprogressshrine#m-availablepointsvisualizers), [`ProfessionsProgressShrine.GetVisualizer`](/mod/game-api/types/global-p/professionsprogressshrine#m-getvisualizer), [`ProfessionsProgressShrine.pathVisualizerPrefab`](/mod/game-api/types/global-p/professionsprogressshrine#m-pathvisualizerprefab), [`ProgressionShrine.GetVisualizer`](/mod/game-api/types/global-p/progressionshrine#m-getvisualizer), [`SkillOrbOperator.fillVisualizer`](/mod/game-api/types/global-s/skillorboperator#m-fillvisualizer), [`SkillShrine.fillVisualizer`](/mod/game-api/types/global-s/skillshrine#m-fillvisualizer), [`SkillShrine.GetVisualizer`](/mod/game-api/types/global-s/skillshrine#m-getvisualizer).

</div>
