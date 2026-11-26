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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`Agent<Phantom>`](/game-api/types/alta-intelligence/agent-tthis), [`IHasViewCone`](/game-api/types/alta-intelligence/ihasviewcone), [`IListenToMiningEcho`](/game-api/types/global-i-l/ilistentominingecho)
- **Derived types** [`Phantom`](/game-api/types/alta-intelligence/phantom), [`PlayerLikeSpectralGhost`](/game-api/types/alta-intelligence/playerlikespectralghost)
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#phantom), [Creature data](/game-api/creatures/creature-data), [Creatures and AI](/game-api/creatures/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Phantom()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>42 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actiontargetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actiontarget-tagent">{"ActionTarget"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/phantom">{"Phantom"}</Link>{">> actionTargetMap"}</code> | Static cache of the materialize, dematerialize and hit actions built from each action component. |
| <Link id="m-activevisionattackeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeVisionAttackEffect"}</code> | The playing vision attack effect, if any. |
| <Link id="m-crackedduration" /><code>{"private float crackedDuration"}</code> | Seconds a phantom stays cracked. Default 30. |
| <Link id="m-crackedentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" crackedEntry"}</code> | Timeline entry that ends the cracked state. |
| <Link id="m-dematerializeaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" deMaterializeAction"}</code> | Action started on the server when the phantom turns immaterial. |
| <Link id="m-dematerializedknockbackhurtvalue" /><code>{"private float dematerializedKnockbackHurtValue"}</code> | Hurt added towards the attacker when an immaterial phantom is hit. Default 0.5. |
| <Link id="m-dematerializeknockbackmultiplier" /><code>{"private float dematerializeKnockBackMultiplier"}</code> | Knockback distance factor for an immaterial phantom. Default 0.5. |
| <Link id="m-fadeondayeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" fadeOnDayEffect"}</code> | Effect event played where the phantom fades out. |
| <Link id="m-fadeondayserver" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" fadeOnDayServer"}</code> | Event fired on the server when the phantom fades. |
| <Link id="m-hasknockbackdetector" /><code>{"private bool hasKnockbackDetector"}</code> | Whether both the knockback detector and its collider are set. |
| <Link id="m-immateriallayer" /><code>{"private int immaterialLayer"}</code> | Physics layer the colliders use while immaterial. |
| <Link id="m-iscracked" /><code>{"private bool isCracked"}</code> | Whether the phantom is cracked (stuck after a mining echo). Synced to clients. |
| <Link id="m-isfadingonactionfail" /><code>{"private bool isFadingOnActionFail"}</code> | Whether the phantom fades when it finds nothing to do. Default true. |
| <Link id="m-isstartingimaterial" /><code>{"private bool isStartingImaterial"}</code> | Whether the phantom spawns immaterial. |
| <Link id="m-killedanimationparameter" /><code>{"private string killedAnimationParameter"}</code> | Networked animator bool set on death. |
| <Link id="m-knockbackdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/triggerimpactdetector">{"TriggerImpactDetector"}</Link>{" knockbackDetector"}</code> | Trigger impact detector used while immaterial. Cleared when the phantom turns solid. |
| <Link id="m-knockbackdetectorcollider" /><code>{"private Collider knockbackDetectorCollider"}</code> | The knockback detector's collider, only on while immaterial, and only on the server. |
| <Link id="m-knockbackdistancebasedondamage" /><code>{"private AnimationCurve knockBackDistanceBasedOnDamage"}</code> | Curve from a hit's health damage to knockback distance. |
| <Link id="m-knockbacklerpspeed" /><code>{"private float knockbackLerpSpeed"}</code> | How fast the phantom slides to the knockback position. Default 3. |
| <Link id="m-knockbackposition" /><code>{"private Vector3 knockbackPosition"}</code> | Where the current knockback is sliding the phantom to. |
| <Link id="m-knockbackrotation" /><code>{"private Quaternion? knockbackRotation"}</code> | Rotation to turn to during a knockback, facing the attacker. Null when immaterial. |
| <Link id="m-knockbackrotationlerpspeed" /><code>{"private float knockbackRotationLerpSpeed"}</code> | How fast the phantom turns during a knockback. Default 3. |
| <Link id="m-materializeaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" materializeAction"}</code> | Action started on the server when the phantom turns solid. |
| <Link id="m-materializedhitaction" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" materializedHitAction"}</code> | Action started on the server when a solid phantom is knocked back. |
| <Link id="m-materializedstatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" materializedStatDefinition"}</code> | Stat whose base is set to 0 when a cracked phantom is hit. |
| <Link id="m-maxradiusfromechotocrack" /><code>{"private float maxRadiusFromEchoToCrack"}</code> | Largest mining echo radius that can crack the phantom. Default 15. |
| <Link id="m-onbegincrackeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onBeginCrackEffect"}</code> | Effect event played when the phantom cracks. |
| <Link id="m-onfinishcrackeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onFinishCrackEffect"}</code> | Effect event played when the crack wears off. |
| <Link id="m-onknockbackspeedset" /><code>{"private float onKnockBackSpeedSet"}</code> | Speed and walker power right after a knockback ends, before recovery. Default 0.1. |
| <Link id="m-passiveactions" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" passiveActions"}</code> | The action set the phantom starts with. |
| <Link id="m-passiveactionsetmap" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{", "}<Link to="/game-api/types/alta-intelligence/actionset-tagent">{"ActionSet"}</Link>{"<"}<Link to="/game-api/types/alta-intelligence/phantom">{"Phantom"}</Link>{">> passiveActionSetMap"}</code> | Static cache of the action set built from each passive set asset. |
| <Link id="m-recoverspeed" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" recoverSpeed"}</code> | The registered knockback or speed recovery update. |
| <Link id="m-solidlayer" /><code>{"private int solidLayer"}</code> | Physics layer the colliders use while solid. |
| <Link id="m-speedrecoveryrate" /><code>{"private float speedRecoveryRate"}</code> | Speed regained per second after a knockback. Default 0.1. |
| <Link id="m-synccrackeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCrackEffect"}</code> | Network sync for the cracked state. |
| <Link id="m-syncfade" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncFade"}</code> | Network sync for fading out. |
| <Link id="m-syncmaterializedstatus" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMaterializedStatus"}</code> | Network sync for the solid or immaterial state. |
| <Link id="m-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" viewCone"}</code> | Backing field for the view cone. |
| <Link id="m-visibilitystat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" visibilityStat"}</code> | The visibility stat, set to 1 when solid and 0 when immaterial. |
| <Link id="m-visibilitystatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" visibilityStatDefinition"}</code> | Definition used to find `visibilityStat`. |
| <Link id="m-visionattackeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" visionAttackEffect"}</code> | Effect played by `ActiveVisionAttackEffect`. |
| <Link id="m-visionattackeffectroot" /><code>{"private Transform visionAttackEffectRoot"}</code> | Transform the vision attack effect is attached to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismaterialized" /><code>{"bool IsMaterialized { get; private set; }"}</code> | True while the phantom is solid. An immaterial phantom is on a different collision layer. |
| <Link id="m-speedstat" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" SpeedStat { get; private set; }"}</code> | The phantom's `speed` stat. Knockback sets it to zero and it recovers over time. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-intelligence-ihasviewcone-viewcone" /><code>{"private "}<Link to="/game-api/types/global-t-x/viewcone">{"ViewCone"}</Link>{" Alta.Intelligence.IHasViewCone.ViewCone { get; }"}</code> | The phantom's view cone, for view cone senses and actions. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activevisionattackeffect-2" /><code>{"void ActiveVisionAttackEffect()"}</code> | Client: starts the vision attack effect, replacing any one already playing. |
| <Link id="m-crack" /><code>{"void Crack()"}</code> | While immaterial, cracks the phantom for a set time (30 seconds by default) and syncs the crack effect. |
| <Link id="m-deactivevisionattackeffect" /><code>{"void DeactiveVisionAttackEffect()"}</code> | Stops the vision attack effect if it's playing. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync methods and starts the phantom immaterial if its prefab says so. |
| <Link id="m-knockback" /><code>{"void KnockBack("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Server: pushes the phantom away from a tool hit and slows it, recovering speed over time. Hitting a cracked phantom instead ends the crack. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the materialized state to a player who has just spawned the phantom. |
| <Link id="m-setmarialized" /><code>{"void SetMarialized(bool isMaterialized)"}</code> | Switches between solid and immaterial while alive. The server also plays the matching action, sets visibility and syncs it. |
| <Link id="m-initializeai" /><code>{"protected override void InitializeAi()"}</code> | Server: sets up its actions, fading at daytime or when no action is found, reveal, hit knockback and mining echo listening. |
| <Link id="m-initializestatic" /><code>{"protected override void InitializeStatic()"}</code> | Creates the shared action lookup tables for all phantoms. |
| <Link id="m-killed" /><code>{"protected override void Killed("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthobject)"}</code> | Sets the killed animation parameter as well as the normal death handling. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Server: cancels the crack timer and stops listening for mining echoes. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadenoaction" /><code>{"private void FadeNoAction()"}</code> | Fades the phantom out when a decision finds nothing to do, if `isFadingOnActionFail` is set. |
| <Link id="m-fadeonday" /><code>{"private void FadeOnDay(bool isNight)"}</code> | When it's day (or the phantom is dead), kills it, turns off collision, plays the fade effect, tells clients and fires `fadeOnDayServer`. |
| <Link id="m-finishcracked" /><code>{"private void FinishCracked()"}</code> | Ends the cracked state after `crackedDuration`, plays the end effect and tells clients. |
| <Link id="m-knockback-2" /><code>{"private void KnockBack()"}</code> | Server: pushes the phantom away from a tool hit and slows it, recovering speed over time. Hitting a cracked phantom instead ends the crack. |
| <Link id="m-onimpactreceived" /><code>{"private void OnImpactReceived("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" hit)"}</code> | Health hit handler that knocks the phantom back for tool hits. |
| <Link id="m-onscenedestroy" /><code>{"private void OnSceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Unhooks the night change event and stops any knockback or speed recovery update. |
| <Link id="m-recoverspeed-2" /><code>{"private void RecoverSpeed()"}</code> | Per frame update that raises the speed stat and walker power back to 1 after a knockback. |
| <Link id="m-reveal" /><code>{"private void Reveal()"}</code> | Called when an effect reveals the phantom. Deals 10 cripple damage and no health damage. |
| <Link id="m-synccrackedeffect" /><code>{"private void SyncCrackedEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler (`SyncD`) that sends the cracked flag and plays the start or end crack effect on clients. |
| <Link id="m-syncfade-2" /><code>{"private void SyncFade("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler (`SyncC`) that turns off collision and plays the fade effect on clients. |
| <Link id="m-syncmaterializedstatus-2" /><code>{"private void SyncMaterializedStatus("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler (`SyncB`) that sends whether the phantom is solid and applies it on clients. Also sent to each player on connect. |
| <Link id="m-update" /><code>{"private void IListenToMiningEcho.Update(Vector3 center, float radius)"}</code> | Mining echo listener: cracks an immaterial phantom inside the echo radius, if the radius is at most `maxRadiusFromEchoToCrack`. |

</details>
