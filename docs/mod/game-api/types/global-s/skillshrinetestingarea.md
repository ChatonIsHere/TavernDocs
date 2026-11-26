---
title: "SkillShrineTestingArea"
description: "The practice area of a skill shrine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineTestingArea

A **class** in `Root.Township`, the global namespace.

The practice area of a skill shrine. When a skill orb is opened it spawns that skill's practice objects, shows the border and moves a copy of the orb into place. Get it from `SkillShrine.TestingArea`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SpawnedEntity`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillShrineTestingArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>36 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the border's fade progress.</span> |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Acceleration of the orb flying to its spot.</span> |
| <Link id="m-actionglyphplacer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionglyphsplacer">{"ActionGlyphsPlacer"}</Link>{" actionGlyphPlacer"}</code> | <span className="api-desc">Shows action glyphs for the open skill.</span> |
| <Link id="m-activeorb" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOrb"}</code> | <span className="api-desc">The pooled orb effect shown at the training spot.</span> |
| <Link id="m-androidborderyscale" /><code>{"private float androidBorderYScale"}</code> | <span className="api-desc">Declared but not used in this class.</span> |
| <Link id="m-areaanimation" /><code>{"private Coroutine areaAnimation"}</code> | <span className="api-desc">The running border fade coroutine.</span> |
| <Link id="m-borderfadeduration" /><code>{"private float borderFadeDuration"}</code> | <span className="api-desc">Seconds the border takes to fade in or out.</span> |
| <Link id="m-bordermaterial" /><code>{"private Material borderMaterial"}</code> | <span className="api-desc">Material instance on the border renderer.</span> |
| <Link id="m-borderrenderer" /><code>{"private Renderer borderRenderer"}</code> | <span className="api-desc">The area's border renderer, made from the prefab on first use.</span> |
| <Link id="m-borderrendererparent" /><code>{"private Transform borderRendererParent"}</code> | <span className="api-desc">Parent for the border renderer.</span> |
| <Link id="m-borderrendererprefab" /><code>{"private Renderer borderRendererPrefab"}</code> | <span className="api-desc">Prefab for the area's border.</span> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">Whether a skill's practice area is open.</span> |
| <Link id="m-lastopenedslothash" /><code>{"private uint lastOpenedSlotHash"}</code> | <span className="api-desc">Slot hash of the last opened orb; opening the same slot again only resets movable items.</span> |
| <Link id="m-maxdistanceforitemssquared" /><code>{"private float maxDistanceForItemsSquared"}</code> | <span className="api-desc">Squared flat distance a movable practice item can stray before it respawns.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Top speed of the orb flying to its spot.</span> |
| <Link id="m-objectfadeouteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" objectFadeOutEffect"}</code> | <span className="api-desc">Effect played when practice props fade out.</span> |
| <Link id="m-objectfadeoutmaterial" /><code>{"private Material objectFadeOutMaterial"}</code> | <span className="api-desc">Material used when practice props fade out.</span> |
| <Link id="m-onpracticedcurrentskill" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onPracticedCurrentSkill"}</code> | <span className="api-desc">Event raised with this transform whenever the skill is practiced.</span> |
| <Link id="m-openskillorb" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" openSkillOrb"}</code> | <span className="api-desc">The skill orb that opened the area.</span> |
| <Link id="m-orbanimation" /><code>{"private Coroutine orbAnimation"}</code> | <span className="api-desc">The running orb flight coroutine.</span> |
| <Link id="m-orbeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" orbEffectDefinition"}</code> | <span className="api-desc">Pooled effect used for the orb at the training spot.</span> |
| <Link id="m-practicedconfirmationrenderer" /><code>{"private Renderer practicedConfirmationRenderer"}</code> | <span className="api-desc">Ring shown when a skill is practiced for the first time.</span> |
| <Link id="m-practicedconfirmationrendererparent" /><code>{"private Transform practicedConfirmationRendererParent"}</code> | <span className="api-desc">Parent for the confirmation ring.</span> |
| <Link id="m-practicedconfirmationrendererprefab" /><code>{"private Renderer practicedConfirmationRendererPrefab"}</code> | <span className="api-desc">Prefab for the confirmation ring.</span> |
| <Link id="m-scaleanimation" /><code>{"private Coroutine scaleAnimation"}</code> | <span className="api-desc">The running confirmation ring coroutine.</span> |
| <Link id="m-scaleanimationduration" /><code>{"private float scaleAnimationDuration"}</code> | <span className="api-desc">Seconds the confirmation ring animation lasts.</span> |
| <Link id="m-scalecurveonpracticedvertical" /><code>{"private AnimationCurve scaleCurveOnPracticedVertical"}</code> | <span className="api-desc">Curve for the ring's vertical scale over the animation.</span> |
| <Link id="m-scalelerpspeed" /><code>{"private float scaleLerpSpeed"}</code> | <span className="api-desc">How fast the orb scales to size as it nears its spot.</span> |
| <Link id="m-shrine" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | <span className="api-desc">The skill shrine this area belongs to.</span> |
| <Link id="m-spawnedentities" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity">{"SkillShrineTestingArea.SpawnedEntity"}</Link>{"> spawnedEntities"}</code> | <span className="api-desc">The networked practice entities spawned on the server.</span> |
| <Link id="m-spawnedstaticcontent" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/practiceareashrinkfader">{"PracticeAreaShrinkFader"}</Link>{"> spawnedStaticContent"}</code> | <span className="api-desc">The local static practice props.</span> |
| <Link id="m-spawnfolder" /><code>{"private Transform spawnFolder"}</code> | <span className="api-desc">Parent and centre point for spawned practice content.</span> |
| <Link id="m-syncskill" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSkill"}</code> | <span className="api-desc">Method sync for the open state and skill orb.</span> |
| <Link id="m-trainingorbposition" /><code>{"private Transform trainingOrbPosition"}</code> | <span className="api-desc">Where the orb flies to; its scale sets the orb's final size.</span> |
| <Link id="m-trainingorbreachedposition" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" trainingOrbReachedPosition"}</code> | <span className="api-desc">Event raised when the orb reaches its spot.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the budgeted distance check.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istestingorbinplace" /><code>{"bool IsTestingOrbInPlace { get; private set; }"}</code> | <span className="api-desc">Client: true once the orb copy has reached `TestingOrbTarget`.</span> |
| <Link id="m-maxdistanceforitemssquared-2" /><code>{"float MaxDistanceForItemsSquared { get; }"}</code> | <span className="api-desc">Squared horizontal distance a movable practice object may wander before it's respawned.</span> |
| <Link id="m-objectfadeouteffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ObjectFadeOutEffect { get; }"}</code> | <span className="api-desc">Pooled effect played when practice content fades out.</span> |
| <Link id="m-objectfadeoutmaterial-2" /><code>{"Material ObjectFadeOutMaterial { get; }"}</code> | <span className="api-desc">Material used to fade practice content out.</span> |
| <Link id="m-spawnfolder-2" /><code>{"Transform SpawnFolder { get; }"}</code> | <span className="api-desc">Parent transform for spawned practice content. Its position is the centre for the distance check.</span> |
| <Link id="m-testingorbtarget" /><code>{"Vector3 TestingOrbTarget { get; }"}</code> | <span className="api-desc">World position the orb copy flies to.</span> |
| <Link id="m-trainingorbreachedposition-2" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" TrainingOrbReachedPosition { get; }"}</code> | <span className="api-desc">Event raised when the orb copy reaches its target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Closes the area: clears spawned content, fades the border out and, on the server, syncs the closed state.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network method that syncs which skill is open.</span> |
| <Link id="m-initialsync" /><code>{"void InitialSync("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the open or closed state (and the open orb) to one player.</span> |
| <Link id="m-open" /><code>{"void Open("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Opens the area for a skill orb. The server spawns the skill's practice entities; reopening the same skill just respawns the movable ones.</span> |
| <Link id="m-practiced" /><code>{"void Practiced(bool isFirstTime)"}</code> | <span className="api-desc">Client: plays the practiced animation, with the border scale effect on the first time only.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatearea" /><code>{"private IEnumerator AnimateArea(bool isFadingIn) (iterator)"}</code> | <span className="api-desc">Client: fades the area border in or out over `borderFadeDuration`, making the border renderer on first use.</span> |
| <Link id="m-animateorb" /><code>{"private IEnumerator AnimateOrb() (iterator)"}</code> | <span className="api-desc">Client: flies a copy of the skill orb to the training orb spot, scaling it, then raises `TrainingOrbReachedPosition`. Gives up after 5 seconds.</span> |
| <Link id="m-borderscaleanimation" /><code>{"private IEnumerator BorderScaleAnimation(bool needToReadjust) (iterator)"}</code> | <span className="api-desc">Client: plays the practiced confirmation ring by scaling it along the curve.</span> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Removes the spawned practice content (server entities and static props) and forgets the last opened slot.</span> |
| <Link id="m-clearspawned" /><code>{"private void ClearSpawned()"}</code> | <span className="api-desc">Server: destroys the spawned practice entities and stops the distance check.</span> |
| <Link id="m-clearstaticcontent" /><code>{"private void ClearStaticContent()"}</code> | <span className="api-desc">Fades out and destroys the static practice props.</span> |
| <Link id="m-drawcapsulegizmos" /><code>{"private void DrawCapsuleGizmos(float radius, Color color)"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the distance check and orb animation and releases the orb effect.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor gizmo hook; draws nothing since `DrawCapsuleGizmos` is empty.</span> |
| <Link id="m-open-2" /><code>{"private void Open()"}</code> | <span className="api-desc">Opens the area for a skill orb. The server spawns the skill's practice entities; reopening the same skill just respawns the movable ones.</span> |
| <Link id="m-spawnentities" /><code>{"private void SpawnEntities()"}</code> | <span className="api-desc">Server: spawns the open skill's dynamic practice prefabs and starts the distance check if any can move.</span> |
| <Link id="m-spawnstaticcontent" /><code>{"private void SpawnStaticContent()"}</code> | <span className="api-desc">Spawns the open skill's static practice prefabs locally, adding a shrink fader to each.</span> |
| <Link id="m-syncskill-2" /><code>{"private void SyncSkill("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs whether the area is open and which skill orb opened it; clients open or close to match.</span> |
| <Link id="m-updatedistances" /><code>{"private void UpdateDistances()"}</code> | <span className="api-desc">Respawns movable practice items that have been moved too far from the area.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SkillShrineTestingArea`:

<div className="api-used-in">

[`PracticeAreaShrinkFader.RegisterTestingArea`](/mod/game-api/types/global-p/practiceareashrinkfader#m-registertestingarea), [`PracticeAreaShrinkFader.testingArea`](/mod/game-api/types/global-p/practiceareashrinkfader#m-testingarea), [`PracticeObjectFader.RegisterTestingArea`](/mod/game-api/types/global-p/practiceobjectfader#m-registertestingarea), [`SkillShrine.testingArea`](/mod/game-api/types/global-s/skillshrine#m-testingarea), [`SkillShrine.TestingArea`](/mod/game-api/types/global-s/skillshrine#m-testingarea-2), [`SkillShrineTestingArea.SpawnedEntity.SpawnedEntity`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-ctor), [`SkillShrineTestingArea.SpawnedEntity.testingArea`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-testingarea).

</div>
