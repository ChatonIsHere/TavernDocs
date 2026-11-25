---
title: "SkillShrineTestingArea"
description: "The practice area of a skill shrine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineTestingArea

A **class** in `Root.Township`, no namespace.

The practice area of a skill shrine. When a skill orb is opened it spawns that skill's practice objects, shows the border and moves a copy of the orb into place. Get it from `SkillShrine.TestingArea`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SpawnedEntity`](/game-api/types/global-s/skillshrinetestingarea-spawnedentity)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SkillShrineTestingArea()"}</code> |

## Fields

<details>
<summary>36 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |
| <Link id="m-actionglyphplacer" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionglyphsplacer">{"ActionGlyphsPlacer"}</Link>{" actionGlyphPlacer"}</code> |
| <Link id="m-activeorb" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOrb"}</code> |
| <Link id="m-androidborderyscale" /><code>{"private float androidBorderYScale"}</code> |
| <Link id="m-areaanimation" /><code>{"private Coroutine areaAnimation"}</code> |
| <Link id="m-borderfadeduration" /><code>{"private float borderFadeDuration"}</code> |
| <Link id="m-bordermaterial" /><code>{"private Material borderMaterial"}</code> |
| <Link id="m-borderrenderer" /><code>{"private Renderer borderRenderer"}</code> |
| <Link id="m-borderrendererparent" /><code>{"private Transform borderRendererParent"}</code> |
| <Link id="m-borderrendererprefab" /><code>{"private Renderer borderRendererPrefab"}</code> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |
| <Link id="m-lastopenedslothash" /><code>{"private uint lastOpenedSlotHash"}</code> |
| <Link id="m-maxdistanceforitemssquared" /><code>{"private float maxDistanceForItemsSquared"}</code> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |
| <Link id="m-objectfadeouteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" objectFadeOutEffect"}</code> |
| <Link id="m-objectfadeoutmaterial" /><code>{"private Material objectFadeOutMaterial"}</code> |
| <Link id="m-onpracticedcurrentskill" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onPracticedCurrentSkill"}</code> |
| <Link id="m-openskillorb" /><code>{"private "}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" openSkillOrb"}</code> |
| <Link id="m-orbanimation" /><code>{"private Coroutine orbAnimation"}</code> |
| <Link id="m-orbeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" orbEffectDefinition"}</code> |
| <Link id="m-practicedconfirmationrenderer" /><code>{"private Renderer practicedConfirmationRenderer"}</code> |
| <Link id="m-practicedconfirmationrendererparent" /><code>{"private Transform practicedConfirmationRendererParent"}</code> |
| <Link id="m-practicedconfirmationrendererprefab" /><code>{"private Renderer practicedConfirmationRendererPrefab"}</code> |
| <Link id="m-scaleanimation" /><code>{"private Coroutine scaleAnimation"}</code> |
| <Link id="m-scaleanimationduration" /><code>{"private float scaleAnimationDuration"}</code> |
| <Link id="m-scalecurveonpracticedvertical" /><code>{"private AnimationCurve scaleCurveOnPracticedVertical"}</code> |
| <Link id="m-scalelerpspeed" /><code>{"private float scaleLerpSpeed"}</code> |
| <Link id="m-shrine" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> |
| <Link id="m-spawnedentities" /><code>{"private List<"}<Link to="/game-api/types/global-s/skillshrinetestingarea-spawnedentity">{"SkillShrineTestingArea.SpawnedEntity"}</Link>{"> spawnedEntities"}</code> |
| <Link id="m-spawnedstaticcontent" /><code>{"private List<"}<Link to="/game-api/types/global-p/practiceareashrinkfader">{"PracticeAreaShrinkFader"}</Link>{"> spawnedStaticContent"}</code> |
| <Link id="m-spawnfolder" /><code>{"private Transform spawnFolder"}</code> |
| <Link id="m-syncskill" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSkill"}</code> |
| <Link id="m-trainingorbposition" /><code>{"private Transform trainingOrbPosition"}</code> |
| <Link id="m-trainingorbreachedposition" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" trainingOrbReachedPosition"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istestingorbinplace" /><code>{"bool IsTestingOrbInPlace { get; private set; }"}</code> | Client: true once the orb copy has reached `TestingOrbTarget`. |
| <Link id="m-maxdistanceforitemssquared-2" /><code>{"float MaxDistanceForItemsSquared { get; }"}</code> | Squared horizontal distance a movable practice object may wander before it's respawned. |
| <Link id="m-objectfadeouteffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ObjectFadeOutEffect { get; }"}</code> | Pooled effect played when practice content fades out. |
| <Link id="m-objectfadeoutmaterial-2" /><code>{"Material ObjectFadeOutMaterial { get; }"}</code> | Material used to fade practice content out. |
| <Link id="m-spawnfolder-2" /><code>{"Transform SpawnFolder { get; }"}</code> | Parent transform for spawned practice content. Its position is the centre for the distance check. |
| <Link id="m-testingorbtarget" /><code>{"Vector3 TestingOrbTarget { get; }"}</code> | World position the orb copy flies to. |
| <Link id="m-trainingorbreachedposition-2" /><code><Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" TrainingOrbReachedPosition { get; }"}</code> | Event raised when the orb copy reaches its target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Closes the area: clears spawned content, fades the border out and, on the server, syncs the closed state. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network method that syncs which skill is open. |
| <Link id="m-initialsync" /><code>{"void InitialSync("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the open or closed state (and the open orb) to one player. |
| <Link id="m-open" /><code>{"void Open("}<Link to="/game-api/types/global-s/skillorb">{"SkillOrb"}</Link>{" orb)"}</code> | Opens the area for a skill orb. The server spawns the skill's practice entities; reopening the same skill just respawns the movable ones. |
| <Link id="m-practiced" /><code>{"void Practiced(bool isFirstTime)"}</code> | Client: plays the practiced animation, with the border scale effect on the first time only. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatearea" /><code>{"private IEnumerator AnimateArea(bool isFadingIn) (iterator)"}</code> |  |
| <Link id="m-animateorb" /><code>{"private IEnumerator AnimateOrb() (iterator)"}</code> |  |
| <Link id="m-borderscaleanimation" /><code>{"private IEnumerator BorderScaleAnimation(bool needToReadjust) (iterator)"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |
| <Link id="m-clearspawned" /><code>{"private void ClearSpawned()"}</code> |  |
| <Link id="m-clearstaticcontent" /><code>{"private void ClearStaticContent()"}</code> |  |
| <Link id="m-drawcapsulegizmos" /><code>{"private void DrawCapsuleGizmos(float radius, Color color)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-open-2" /><code>{"private void Open()"}</code> | Opens the area for a skill orb. The server spawns the skill's practice entities; reopening the same skill just respawns the movable ones. |
| <Link id="m-spawnentities" /><code>{"private void SpawnEntities()"}</code> |  |
| <Link id="m-spawnstaticcontent" /><code>{"private void SpawnStaticContent()"}</code> |  |
| <Link id="m-syncskill-2" /><code>{"private void SyncSkill("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatedistances" /><code>{"private void UpdateDistances()"}</code> |  |

</details>

## Used in

Members of other types that take, return or hold a `SkillShrineTestingArea`:

[`PracticeAreaShrinkFader.RegisterTestingArea`](/game-api/types/global-p/practiceareashrinkfader#m-registertestingarea), [`PracticeAreaShrinkFader.testingArea`](/game-api/types/global-p/practiceareashrinkfader#m-testingarea), [`PracticeObjectFader.RegisterTestingArea`](/game-api/types/global-p/practiceobjectfader#m-registertestingarea), [`SkillShrine.testingArea`](/game-api/types/global-s/skillshrine#m-testingarea), [`SkillShrine.TestingArea`](/game-api/types/global-s/skillshrine#m-testingarea-2), [`SkillShrineTestingArea.SpawnedEntity.SpawnedEntity`](/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-ctor), [`SkillShrineTestingArea.SpawnedEntity.testingArea`](/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-testingarea).
