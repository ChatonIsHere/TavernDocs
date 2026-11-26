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
| <Link id="m-ctor" /><code>{"SkillShrineTestingArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>36 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader property ID for the border's fade progress. |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | Acceleration of the orb flying to its spot. |
| <Link id="m-actionglyphplacer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionglyphsplacer">{"ActionGlyphsPlacer"}</Link>{" actionGlyphPlacer"}</code> | Shows action glyphs for the open skill. |
| <Link id="m-activeorb" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOrb"}</code> | The pooled orb effect shown at the training spot. |
| <Link id="m-androidborderyscale" /><code>{"private float androidBorderYScale"}</code> | Declared but not used in this class. |
| <Link id="m-areaanimation" /><code>{"private Coroutine areaAnimation"}</code> | The running border fade coroutine. |
| <Link id="m-borderfadeduration" /><code>{"private float borderFadeDuration"}</code> | Seconds the border takes to fade in or out. |
| <Link id="m-bordermaterial" /><code>{"private Material borderMaterial"}</code> | Material instance on the border renderer. |
| <Link id="m-borderrenderer" /><code>{"private Renderer borderRenderer"}</code> | The area's border renderer, made from the prefab on first use. |
| <Link id="m-borderrendererparent" /><code>{"private Transform borderRendererParent"}</code> | Parent for the border renderer. |
| <Link id="m-borderrendererprefab" /><code>{"private Renderer borderRendererPrefab"}</code> | Prefab for the area's border. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | Whether a skill's practice area is open. |
| <Link id="m-lastopenedslothash" /><code>{"private uint lastOpenedSlotHash"}</code> | Slot hash of the last opened orb; opening the same slot again only resets movable items. |
| <Link id="m-maxdistanceforitemssquared" /><code>{"private float maxDistanceForItemsSquared"}</code> | Squared flat distance a movable practice item can stray before it respawns. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | Top speed of the orb flying to its spot. |
| <Link id="m-objectfadeouteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" objectFadeOutEffect"}</code> | Effect played when practice props fade out. |
| <Link id="m-objectfadeoutmaterial" /><code>{"private Material objectFadeOutMaterial"}</code> | Material used when practice props fade out. |
| <Link id="m-onpracticedcurrentskill" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onPracticedCurrentSkill"}</code> | Event raised with this transform whenever the skill is practiced. |
| <Link id="m-openskillorb" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" openSkillOrb"}</code> | The skill orb that opened the area. |
| <Link id="m-orbanimation" /><code>{"private Coroutine orbAnimation"}</code> | The running orb flight coroutine. |
| <Link id="m-orbeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" orbEffectDefinition"}</code> | Pooled effect used for the orb at the training spot. |
| <Link id="m-practicedconfirmationrenderer" /><code>{"private Renderer practicedConfirmationRenderer"}</code> | Ring shown when a skill is practiced for the first time. |
| <Link id="m-practicedconfirmationrendererparent" /><code>{"private Transform practicedConfirmationRendererParent"}</code> | Parent for the confirmation ring. |
| <Link id="m-practicedconfirmationrendererprefab" /><code>{"private Renderer practicedConfirmationRendererPrefab"}</code> | Prefab for the confirmation ring. |
| <Link id="m-scaleanimation" /><code>{"private Coroutine scaleAnimation"}</code> | The running confirmation ring coroutine. |
| <Link id="m-scaleanimationduration" /><code>{"private float scaleAnimationDuration"}</code> | Seconds the confirmation ring animation lasts. |
| <Link id="m-scalecurveonpracticedvertical" /><code>{"private AnimationCurve scaleCurveOnPracticedVertical"}</code> | Curve for the ring's vertical scale over the animation. |
| <Link id="m-scalelerpspeed" /><code>{"private float scaleLerpSpeed"}</code> | How fast the orb scales to size as it nears its spot. |
| <Link id="m-shrine" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | The skill shrine this area belongs to. |
| <Link id="m-spawnedentities" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity">{"SkillShrineTestingArea.SpawnedEntity"}</Link>{"> spawnedEntities"}</code> | The networked practice entities spawned on the server. |
| <Link id="m-spawnedstaticcontent" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/practiceareashrinkfader">{"PracticeAreaShrinkFader"}</Link>{"> spawnedStaticContent"}</code> | The local static practice props. |
| <Link id="m-spawnfolder" /><code>{"private Transform spawnFolder"}</code> | Parent and centre point for spawned practice content. |
| <Link id="m-syncskill" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSkill"}</code> | Method sync for the open state and skill orb. |
| <Link id="m-trainingorbposition" /><code>{"private Transform trainingOrbPosition"}</code> | Where the orb flies to; its scale sets the orb's final size. |
| <Link id="m-trainingorbreachedposition" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" trainingOrbReachedPosition"}</code> | Event raised when the orb reaches its spot. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the budgeted distance check. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istestingorbinplace" /><code>{"bool IsTestingOrbInPlace { get; private set; }"}</code> | Client: true once the orb copy has reached `TestingOrbTarget`. |
| <Link id="m-maxdistanceforitemssquared-2" /><code>{"float MaxDistanceForItemsSquared { get; }"}</code> | Squared horizontal distance a movable practice object may wander before it's respawned. |
| <Link id="m-objectfadeouteffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ObjectFadeOutEffect { get; }"}</code> | Pooled effect played when practice content fades out. |
| <Link id="m-objectfadeoutmaterial-2" /><code>{"Material ObjectFadeOutMaterial { get; }"}</code> | Material used to fade practice content out. |
| <Link id="m-spawnfolder-2" /><code>{"Transform SpawnFolder { get; }"}</code> | Parent transform for spawned practice content. Its position is the centre for the distance check. |
| <Link id="m-testingorbtarget" /><code>{"Vector3 TestingOrbTarget { get; }"}</code> | World position the orb copy flies to. |
| <Link id="m-trainingorbreachedposition-2" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" TrainingOrbReachedPosition { get; }"}</code> | Event raised when the orb copy reaches its target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Closes the area: clears spawned content, fades the border out and, on the server, syncs the closed state. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network method that syncs which skill is open. |
| <Link id="m-initialsync" /><code>{"void InitialSync("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the open or closed state (and the open orb) to one player. |
| <Link id="m-open" /><code>{"void Open("}<Link to="/mod/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | Opens the area for a skill orb. The server spawns the skill's practice entities; reopening the same skill just respawns the movable ones. |
| <Link id="m-practiced" /><code>{"void Practiced(bool isFirstTime)"}</code> | Client: plays the practiced animation, with the border scale effect on the first time only. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatearea" /><code>{"private IEnumerator AnimateArea(bool isFadingIn) (iterator)"}</code> | Client: fades the area border in or out over `borderFadeDuration`, making the border renderer on first use. |
| <Link id="m-animateorb" /><code>{"private IEnumerator AnimateOrb() (iterator)"}</code> | Client: flies a copy of the skill orb to the training orb spot, scaling it, then raises `TrainingOrbReachedPosition`. Gives up after 5 seconds. |
| <Link id="m-borderscaleanimation" /><code>{"private IEnumerator BorderScaleAnimation(bool needToReadjust) (iterator)"}</code> | Client: plays the practiced confirmation ring by scaling it along the curve. |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Removes the spawned practice content (server entities and static props) and forgets the last opened slot. |
| <Link id="m-clearspawned" /><code>{"private void ClearSpawned()"}</code> | Server: destroys the spawned practice entities and stops the distance check. |
| <Link id="m-clearstaticcontent" /><code>{"private void ClearStaticContent()"}</code> | Fades out and destroys the static practice props. |
| <Link id="m-drawcapsulegizmos" /><code>{"private void DrawCapsuleGizmos(float radius, Color color)"}</code> | Empty in this build. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the distance check and orb animation and releases the orb effect. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor gizmo hook; draws nothing since `DrawCapsuleGizmos` is empty. |
| <Link id="m-open-2" /><code>{"private void Open()"}</code> | Opens the area for a skill orb. The server spawns the skill's practice entities; reopening the same skill just respawns the movable ones. |
| <Link id="m-spawnentities" /><code>{"private void SpawnEntities()"}</code> | Server: spawns the open skill's dynamic practice prefabs and starts the distance check if any can move. |
| <Link id="m-spawnstaticcontent" /><code>{"private void SpawnStaticContent()"}</code> | Spawns the open skill's static practice prefabs locally, adding a shrink fader to each. |
| <Link id="m-syncskill-2" /><code>{"private void SyncSkill("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs whether the area is open and which skill orb opened it; clients open or close to match. |
| <Link id="m-updatedistances" /><code>{"private void UpdateDistances()"}</code> | Respawns movable practice items that have been moved too far from the area. |

</details>

## Used in

Members of other types that take, return or hold a `SkillShrineTestingArea`:

[`PracticeAreaShrinkFader.RegisterTestingArea`](/mod/game-api/types/global-p/practiceareashrinkfader#m-registertestingarea), [`PracticeAreaShrinkFader.testingArea`](/mod/game-api/types/global-p/practiceareashrinkfader#m-testingarea), [`PracticeObjectFader.RegisterTestingArea`](/mod/game-api/types/global-p/practiceobjectfader#m-registertestingarea), [`SkillShrine.testingArea`](/mod/game-api/types/global-s/skillshrine#m-testingarea), [`SkillShrine.TestingArea`](/mod/game-api/types/global-s/skillshrine#m-testingarea-2), [`SkillShrineTestingArea.SpawnedEntity.SpawnedEntity`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-ctor), [`SkillShrineTestingArea.SpawnedEntity.testingArea`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-testingarea).
