---
title: "Phantom"
description: "A night creature that can be solid or immaterial. Prefabs: Phantom (2 health) and Phantom Head (0.5 health, takes double spiritual damage)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Phantom

A **class** in `Root.Township`, `Alta.Intelligence`.

A night creature that can be solid or immaterial. Prefabs: Phantom (2 health) and Phantom Head (0.5 health, takes double spiritual damage).

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Phantom>`](/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/game-api/types/alta-intelligence/ihasviewcone), [`IListenToMiningEcho`](/game-api/types/global-i-l/ilistentominingecho)
- **Derived types** [`Phantom`](/game-api/types/alta-intelligence/phantom), [`PlayerLikeSpectralGhost`](/game-api/types/alta-intelligence/playerlikespectralghost)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#phantom), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Phantom()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actiontargetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/phantom">{"Phantom"}</Link>{">> actionTargetMap"}</code> |  |
| <Link id="m-activevisionattackeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeVisionAttackEffect"}</code> |  |
| <Link id="m-crackedduration" /><code>{"private float crackedDuration"}</code> |  |
| <Link id="m-crackedentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" crackedEntry"}</code> |  |
| <Link id="m-dematerializeaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" deMaterializeAction"}</code> |  |
| <Link id="m-dematerializedknockbackhurtvalue" /><code>{"private float dematerializedKnockbackHurtValue"}</code> |  |
| <Link id="m-dematerializeknockbackmultiplier" /><code>{"private float dematerializeKnockBackMultiplier"}</code> |  |
| <Link id="m-fadeondayeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" fadeOnDayEffect"}</code> |  |
| <Link id="m-fadeondayserver" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" fadeOnDayServer"}</code> |  |
| <Link id="m-hasknockbackdetector" /><code>{"private bool hasKnockbackDetector"}</code> |  |
| <Link id="m-immateriallayer" /><code>{"private int immaterialLayer"}</code> |  |
| <Link id="m-iscracked" /><code>{"private bool isCracked"}</code> |  |
| <Link id="m-isfadingonactionfail" /><code>{"private bool isFadingOnActionFail"}</code> |  |
| <Link id="m-isstartingimaterial" /><code>{"private bool isStartingImaterial"}</code> |  |
| <Link id="m-killedanimationparameter" /><code>{"private string killedAnimationParameter"}</code> |  |
| <Link id="m-knockbackdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/triggerimpactdetector">{"TriggerImpactDetector"}</Link>{" knockbackDetector"}</code> |  |
| <Link id="m-knockbackdetectorcollider" /><code>{"private Collider knockbackDetectorCollider"}</code> |  |
| <Link id="m-knockbackdistancebasedondamage" /><code>{"private AnimationCurve knockBackDistanceBasedOnDamage"}</code> |  |
| <Link id="m-knockbacklerpspeed" /><code>{"private float knockbackLerpSpeed"}</code> |  |
| <Link id="m-knockbackposition" /><code>{"private Vector3 knockbackPosition"}</code> |  |
| <Link id="m-knockbackrotation" /><code>{"private Quaternion? knockbackRotation"}</code> |  |
| <Link id="m-knockbackrotationlerpspeed" /><code>{"private float knockbackRotationLerpSpeed"}</code> |  |
| <Link id="m-materializeaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" materializeAction"}</code> |  |
| <Link id="m-materializedhitaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" materializedHitAction"}</code> |  |
| <Link id="m-materializedstatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" materializedStatDefinition"}</code> |  |
| <Link id="m-maxradiusfromechotocrack" /><code>{"private float maxRadiusFromEchoToCrack"}</code> |  |
| <Link id="m-onbegincrackeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onBeginCrackEffect"}</code> |  |
| <Link id="m-onfinishcrackeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFinishCrackEffect"}</code> |  |
| <Link id="m-onknockbackspeedset" /><code>{"private float onKnockBackSpeedSet"}</code> |  |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> |  |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/phantom">{"Phantom"}</Link>{">> passiveActionSetMap"}</code> |  |
| <Link id="m-recoverspeed" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" recoverSpeed"}</code> |  |
| <Link id="m-solidlayer" /><code>{"private int solidLayer"}</code> |  |
| <Link id="m-speedrecoveryrate" /><code>{"private float speedRecoveryRate"}</code> |  |
| <Link id="m-synccrackeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCrackEffect"}</code> |  |
| <Link id="m-syncfade" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFade"}</code> |  |
| <Link id="m-syncmaterializedstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMaterializedStatus"}</code> |  |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> |  |
| <Link id="m-visibilitystat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" visibilityStat"}</code> |  |
| <Link id="m-visibilitystatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" visibilityStatDefinition"}</code> |  |
| <Link id="m-visionattackeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" visionAttackEffect"}</code> |  |
| <Link id="m-visionattackeffectroot" /><code>{"private Transform visionAttackEffectRoot"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismaterialized" /><code>{"bool IsMaterialized { get; private set; }"}</code> |  |
| <Link id="m-speedstat" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" SpeedStat { get; private set; }"}</code> |  |
| <Link id="m-alta-intelligence-ihasviewcone-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" Alta.Intelligence.IHasViewCone.ViewCone { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activevisionattackeffect-2" /><code>{"void ActiveVisionAttackEffect()"}</code> |  |
| <Link id="m-crack" /><code>{"void Crack()"}</code> |  |
| <Link id="m-deactivevisionattackeffect" /><code>{"void DeactiveVisionAttackEffect()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-knockback" /><code>{"void KnockBack("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setmarialized" /><code>{"void SetMarialized(bool isMaterialized)"}</code> |  |
| <Link id="m-fadenoaction" /><code>{"private void FadeNoAction()"}</code> |  |
| <Link id="m-fadeonday" /><code>{"private void FadeOnDay(bool isNight)"}</code> |  |
| <Link id="m-finishcracked" /><code>{"private void FinishCracked()"}</code> |  |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> |  |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> |  |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> |  |
| <Link id="m-knockback-2" /><code>{"private void KnockBack()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-onimpactreceived" /><code>{"private void OnImpactReceived("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> |  |
| <Link id="m-onscenedestroy" /><code>{"private void OnSceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-recoverspeed-2" /><code>{"private void RecoverSpeed()"}</code> |  |
| <Link id="m-reveal" /><code>{"private void Reveal()"}</code> |  |
| <Link id="m-synccrackedeffect" /><code>{"private void SyncCrackedEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncfade-2" /><code>{"private void SyncFade("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncmaterializedstatus-2" /><code>{"private void SyncMaterializedStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-update" /><code>{"private void IListenToMiningEcho.Update(Vector3 center, float radius)"}</code> |  |
