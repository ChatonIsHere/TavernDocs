---
title: "Phantom"
description: "The phantom creature agent."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Phantom

A **class** in `Root.Township`, `Alta.Intelligence`.

The phantom creature agent. It switches between solid and immaterial, gets knocked back by tool hits, cracks when a mining echo goes off near it, and fades away at daytime. The server runs its AI and syncs its state.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Phantom>`](/mod/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/mod/game-api/types/alta-intelligence/ihasviewcone), [`IListenToMiningEcho`](/mod/game-api/types/global-i-l/ilistentominingecho)
- **Derived types** [`Phantom`](/mod/game-api/types/alta-intelligence/phantom), [`PlayerLikeSpectralGhost`](/mod/game-api/types/alta-intelligence/playerlikespectralghost)
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures#phantom), [Creature data](/mod/game-api/creatures/creature-data), [Creatures and AI](/mod/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Phantom()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>42 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actiontargetmap" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/phantom">{"Phantom"}</Link>{">> actionTargetMap"}</code> | <span className="api-desc">Static cache of the materialize, dematerialize and hit actions built from each action component.</span> |
| <Link id="m-activevisionattackeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeVisionAttackEffect"}</code> | <span className="api-desc">The playing vision attack effect, if any.</span> |
| <Link id="m-crackedduration" /><code>{"private float crackedDuration"}</code> | <span className="api-desc">Seconds a phantom stays cracked. Default 30.</span> |
| <Link id="m-crackedentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" crackedEntry"}</code> | <span className="api-desc">Timeline entry that ends the cracked state.</span> |
| <Link id="m-dematerializeaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" deMaterializeAction"}</code> | <span className="api-desc">Action started on the server when the phantom turns immaterial.</span> |
| <Link id="m-dematerializedknockbackhurtvalue" /><code>{"private float dematerializedKnockbackHurtValue"}</code> | <span className="api-desc">Hurt added towards the attacker when an immaterial phantom is hit. Default 0.5.</span> |
| <Link id="m-dematerializeknockbackmultiplier" /><code>{"private float dematerializeKnockBackMultiplier"}</code> | <span className="api-desc">Knockback distance factor for an immaterial phantom. Default 0.5.</span> |
| <Link id="m-fadeondayeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" fadeOnDayEffect"}</code> | <span className="api-desc">Effect event played where the phantom fades out.</span> |
| <Link id="m-fadeondayserver" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" fadeOnDayServer"}</code> | <span className="api-desc">Event fired on the server when the phantom fades.</span> |
| <Link id="m-hasknockbackdetector" /><code>{"private bool hasKnockbackDetector"}</code> | <span className="api-desc">Whether both the knockback detector and its collider are set.</span> |
| <Link id="m-immateriallayer" /><code>{"private int immaterialLayer"}</code> | <span className="api-desc">Physics layer the colliders use while immaterial.</span> |
| <Link id="m-iscracked" /><code>{"private bool isCracked"}</code> | <span className="api-desc">Whether the phantom is cracked (stuck after a mining echo). Synced to clients.</span> |
| <Link id="m-isfadingonactionfail" /><code>{"private bool isFadingOnActionFail"}</code> | <span className="api-desc">Whether the phantom fades when it finds nothing to do. Default true.</span> |
| <Link id="m-isstartingimaterial" /><code>{"private bool isStartingImaterial"}</code> | <span className="api-desc">Whether the phantom spawns immaterial.</span> |
| <Link id="m-killedanimationparameter" /><code>{"private string killedAnimationParameter"}</code> | <span className="api-desc">Networked animator bool set on death.</span> |
| <Link id="m-knockbackdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/triggerimpactdetector">{"TriggerImpactDetector"}</Link>{" knockbackDetector"}</code> | <span className="api-desc">Trigger impact detector used while immaterial. Cleared when the phantom turns solid.</span> |
| <Link id="m-knockbackdetectorcollider" /><code>{"private Collider knockbackDetectorCollider"}</code> | <span className="api-desc">The knockback detector's collider, only on while immaterial, and only on the server.</span> |
| <Link id="m-knockbackdistancebasedondamage" /><code>{"private AnimationCurve knockBackDistanceBasedOnDamage"}</code> | <span className="api-desc">Curve from a hit's health damage to knockback distance.</span> |
| <Link id="m-knockbacklerpspeed" /><code>{"private float knockbackLerpSpeed"}</code> | <span className="api-desc">How fast the phantom slides to the knockback position. Default 3.</span> |
| <Link id="m-knockbackposition" /><code>{"private Vector3 knockbackPosition"}</code> | <span className="api-desc">Where the current knockback is sliding the phantom to.</span> |
| <Link id="m-knockbackrotation" /><code>{"private Quaternion? knockbackRotation"}</code> | <span className="api-desc">Rotation to turn to during a knockback, facing the attacker. Null when immaterial.</span> |
| <Link id="m-knockbackrotationlerpspeed" /><code>{"private float knockbackRotationLerpSpeed"}</code> | <span className="api-desc">How fast the phantom turns during a knockback. Default 3.</span> |
| <Link id="m-materializeaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" materializeAction"}</code> | <span className="api-desc">Action started on the server when the phantom turns solid.</span> |
| <Link id="m-materializedhitaction" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" materializedHitAction"}</code> | <span className="api-desc">Action started on the server when a solid phantom is knocked back.</span> |
| <Link id="m-materializedstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" materializedStatDefinition"}</code> | <span className="api-desc">Stat whose base is set to 0 when a cracked phantom is hit.</span> |
| <Link id="m-maxradiusfromechotocrack" /><code>{"private float maxRadiusFromEchoToCrack"}</code> | <span className="api-desc">Largest mining echo radius that can crack the phantom. Default 15.</span> |
| <Link id="m-onbegincrackeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onBeginCrackEffect"}</code> | <span className="api-desc">Effect event played when the phantom cracks.</span> |
| <Link id="m-onfinishcrackeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFinishCrackEffect"}</code> | <span className="api-desc">Effect event played when the crack wears off.</span> |
| <Link id="m-onknockbackspeedset" /><code>{"private float onKnockBackSpeedSet"}</code> | <span className="api-desc">Speed and walker power right after a knockback ends, before recovery. Default 0.1.</span> |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | <span className="api-desc">The action set the phantom starts with.</span> |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/mod/game-api/types/alta-intelligence/phantom">{"Phantom"}</Link>{">> passiveActionSetMap"}</code> | <span className="api-desc">Static cache of the action set built from each passive set asset.</span> |
| <Link id="m-recoverspeed" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" recoverSpeed"}</code> | <span className="api-desc">The registered knockback or speed recovery update.</span> |
| <Link id="m-solidlayer" /><code>{"private int solidLayer"}</code> | <span className="api-desc">Physics layer the colliders use while solid.</span> |
| <Link id="m-speedrecoveryrate" /><code>{"private float speedRecoveryRate"}</code> | <span className="api-desc">Speed regained per second after a knockback. Default 0.1.</span> |
| <Link id="m-synccrackeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCrackEffect"}</code> | <span className="api-desc">Network sync for the cracked state.</span> |
| <Link id="m-syncfade" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFade"}</code> | <span className="api-desc">Network sync for fading out.</span> |
| <Link id="m-syncmaterializedstatus" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMaterializedStatus"}</code> | <span className="api-desc">Network sync for the solid or immaterial state.</span> |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> | <span className="api-desc">Backing field for the view cone.</span> |
| <Link id="m-visibilitystat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" visibilityStat"}</code> | <span className="api-desc">The visibility stat, set to 1 when solid and 0 when immaterial.</span> |
| <Link id="m-visibilitystatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" visibilityStatDefinition"}</code> | <span className="api-desc">Definition used to find `visibilityStat`.</span> |
| <Link id="m-visionattackeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" visionAttackEffect"}</code> | <span className="api-desc">Effect played by `ActiveVisionAttackEffect`.</span> |
| <Link id="m-visionattackeffectroot" /><code>{"private Transform visionAttackEffectRoot"}</code> | <span className="api-desc">Transform the vision attack effect is attached to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismaterialized" /><code>{"bool IsMaterialized { get; private set; }"}</code> | <span className="api-desc">True while the phantom is solid. An immaterial phantom is on a different collision layer.</span> |
| <Link id="m-speedstat" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" SpeedStat { get; private set; }"}</code> | <span className="api-desc">The phantom's `speed` stat. Knockback sets it to zero and it recovers over time.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-ihasviewcone-viewcone" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" Alta.Intelligence.IHasViewCone.ViewCone { get; }"}</code> | <span className="api-desc">The phantom's view cone, for view cone senses and actions.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activevisionattackeffect-2" /><code>{"void ActiveVisionAttackEffect()"}</code> | <span className="api-desc">Client: starts the vision attack effect, replacing any one already playing.</span> |
| <Link id="m-crack" /><code>{"void Crack()"}</code> | <span className="api-desc">While immaterial, cracks the phantom for a set time (30 seconds by default) and syncs the crack effect.</span> |
| <Link id="m-deactivevisionattackeffect" /><code>{"void DeactiveVisionAttackEffect()"}</code> | <span className="api-desc">Stops the vision attack effect if it's playing.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the sync methods and starts the phantom immaterial if its prefab says so.</span> |
| <Link id="m-knockback" /><code>{"void KnockBack("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Server: pushes the phantom away from a tool hit and slows it, recovering speed over time. Hitting a cracked phantom instead ends the crack.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the materialized state to a player who has just spawned the phantom.</span> |
| <Link id="m-setmarialized" /><code>{"void SetMarialized(bool isMaterialized)"}</code> | <span className="api-desc">Switches between solid and immaterial while alive. The server also plays the matching action, sets visibility and syncs it.</span> |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | <span className="api-desc">Server: sets up its actions, fading at daytime or when no action is found, reveal, hit knockback and mining echo listening.</span> |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | <span className="api-desc">Creates the shared action lookup tables for all phantoms.</span> |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | <span className="api-desc">Sets the killed animation parameter as well as the normal death handling.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Server: cancels the crack timer and stops listening for mining echoes.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadenoaction" /><code>{"private void FadeNoAction()"}</code> | <span className="api-desc">Fades the phantom out when a decision finds nothing to do, if `isFadingOnActionFail` is set.</span> |
| <Link id="m-fadeonday" /><code>{"private void FadeOnDay(bool isNight)"}</code> | <span className="api-desc">When it's day (or the phantom is dead), kills it, turns off collision, plays the fade effect, tells clients and fires `fadeOnDayServer`.</span> |
| <Link id="m-finishcracked" /><code>{"private void FinishCracked()"}</code> | <span className="api-desc">Ends the cracked state after `crackedDuration`, plays the end effect and tells clients.</span> |
| <Link id="m-knockback-2" /><code>{"private void KnockBack()"}</code> | <span className="api-desc">Server: pushes the phantom away from a tool hit and slows it, recovering speed over time. Hitting a cracked phantom instead ends the crack.</span> |
| <Link id="m-onimpactreceived" /><code>{"private void OnImpactReceived("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Health hit handler that knocks the phantom back for tool hits.</span> |
| <Link id="m-onscenedestroy" /><code>{"private void OnSceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Unhooks the night change event and stops any knockback or speed recovery update.</span> |
| <Link id="m-recoverspeed-2" /><code>{"private void RecoverSpeed()"}</code> | <span className="api-desc">Per frame update that raises the speed stat and walker power back to 1 after a knockback.</span> |
| <Link id="m-reveal" /><code>{"private void Reveal()"}</code> | <span className="api-desc">Called when an effect reveals the phantom. Deals 10 cripple damage and no health damage.</span> |
| <Link id="m-synccrackedeffect" /><code>{"private void SyncCrackedEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler (`SyncD`) that sends the cracked flag and plays the start or end crack effect on clients.</span> |
| <Link id="m-syncfade-2" /><code>{"private void SyncFade("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler (`SyncC`) that turns off collision and plays the fade effect on clients.</span> |
| <Link id="m-syncmaterializedstatus-2" /><code>{"private void SyncMaterializedStatus("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler (`SyncB`) that sends whether the phantom is solid and applies it on clients. Also sent to each player on connect.</span> |
| <Link id="m-update" /><code>{"private void IListenToMiningEcho.Update(Vector3 center, float radius)"}</code> | <span className="api-desc">Mining echo listener: cracks an immaterial phantom inside the echo radius, if the radius is at most `maxRadiusFromEchoToCrack`.</span> |

</details>
