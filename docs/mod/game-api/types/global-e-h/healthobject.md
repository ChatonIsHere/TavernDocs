---
title: "HealthObject"
description: "Gives an entity health."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject

A **class** in `Root.Township`, the global namespace.

Gives an entity health. Listens to its impact detectors, applies damage on the server through the `health` stat of its `StatManager`, and syncs death to clients. A component on creatures, players and breakable objects.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`FakePlayerHealth`](/mod/game-api/types/global-e-h/fakeplayerhealth), [`HealthObjectEvent`](/mod/game-api/types/global-e-h/healthobjectevent), [`HealthObjectUnityEvent`](/mod/game-api/types/global-e-h/healthobjectunityevent), [`PlayerHealth`](/mod/game-api/types/global-p/playerhealth), [`Rock`](/mod/game-api/types/global-q-r/rock)
- **Nested types** [`DeathAnalytics`](/mod/game-api/types/global-e-h/healthobject-deathanalytics), [`HealthChangedHandler`](/mod/game-api/types/global-e-h/healthobject-healthchangedhandler), [`RegenUnit`](/mod/game-api/types/global-e-h/healthobject-regenunit)
- **Documented in** [Health and damage](/mod/game-api/items/health-and-damage#healthobject), [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-healthstat" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" healthStat"}</code> | <span className="api-desc">Cached health stat backing `HealthStat`.</span> |
| <Link id="m-impactdetectors" /><code>{"protected List<"}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> impactDetectors"}</code> | <span className="api-desc">Serialized list of impact detectors behind `ImpactDetectors`.</span> |

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-core" /><code>{"private Transform core"}</code> | <span className="api-desc">Backing field for `Core`. Falls back to the object's own transform if empty.</span> |
| <Link id="m-crippledamageprotectionstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" crippleDamageProtectionStat"}</code> | <span className="api-desc">Stat that divides incoming cripple damage, if the stat manager has it.</span> |
| <Link id="m-cripplestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" crippleStat"}</code> | <span className="api-desc">Backing field for `CrippleStat`.</span> |
| <Link id="m-damageprotectionstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" damageProtectionStat"}</code> | <span className="api-desc">Stat that divides incoming health damage, if the stat manager has it.</span> |
| <Link id="m-destroyed" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/healthobjectevent">{"HealthObjectEvent"}</Link>{" destroyed"}</code> | <span className="api-desc">Backing field for `Destroyed`, the event invoked when the object is killed.</span> |
| <Link id="m-effecthandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler"}</code> | <span className="api-desc">Backing field for `EffectHandler`.</span> |
| <Link id="m-hascrippledamageprotection" /><code>{"private bool hasCrippleDamageProtection"}</code> | <span className="api-desc">True if the stat manager has the cripple damage protection stat.</span> |
| <Link id="m-hasdamageprotection" /><code>{"private bool hasDamageProtection"}</code> | <span className="api-desc">True if the stat manager has the damage protection stat.</span> |
| <Link id="m-impacttypemultipliers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{", float> impactTypeMultipliers"}</code> | <span className="api-desc">Damage multiplier per impact type, built from `multipliers` in `Start`.</span> |
| <Link id="m-iscombatant" /><code>{"private bool isCombatant"}</code> | <span className="api-desc">Backing field for `IsCombatant`. Player hits on a combatant mark the player as in combat.</span> |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] multipliers"}</code> | <span className="api-desc">Backing field for `Multipliers`: damage multipliers per impact type.</span> |
| <Link id="m-positionhelper" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionfromoriginhelper">{"PositionFromOriginHelper"}</Link>{" positionHelper"}</code> | <span className="api-desc">Helper passed to the `PositionHandler` created in `Awake`.</span> |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> | <span className="api-desc">Backing field for `StatManager`.</span> |
| <Link id="m-syncdeath" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDeath"}</code> | <span className="api-desc">Method sync the server uses to tell clients the object died.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-core-2" /><code>{"Transform Core { get; }"}</code> | <span className="api-desc">The central transform of the object, used as its main position.</span> |
| <Link id="m-cripplestat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" CrippleStat { get; }"}</code> | <span className="api-desc">The cripple health stat, if the stat manager has one.</span> |
| <Link id="m-destroyed-2" /><code><Link to="/mod/game-api/types/global-e-h/healthobjectevent">{"HealthObjectEvent"}</Link>{" Destroyed { get; }"}</code> | <span className="api-desc">Unity event invoked when the object is killed, on both sides.</span> |
| <Link id="m-effecthandler-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" { get; }"}</code> | <span className="api-desc">The alchemy effect handler for this object, if set.</span> |
| <Link id="m-hascripplestat" /><code>{"bool HasCrippleStat { get; private set; }"}</code> | <span className="api-desc">True if a cripple health stat was found on initialize.</span> |
| <Link id="m-health" /><code>{"float Health { get; set; }"}</code> | <span className="api-desc">Current health value. Setting it sets the stat's base value.</span> |
| <Link id="m-impactdetectors-2" /><code>{"IEnumerable ImpactDetectors { get; }"}</code> | <span className="api-desc">The impact detectors that feed hits into this object.</span> |
| <Link id="m-iscombatant-2" /><code>{"bool IsCombatant { get; }"}</code> | <span className="api-desc">If true, a player hitting this object is marked as having caused combat.</span> |
| <Link id="m-lasthit" /><code><Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" LastHit { get; protected set; }"}</code> | <span className="api-desc">The most recent damage data, used to work out who or what killed it.</span> |
| <Link id="m-maxhealth" /><code>{"float MaxHealth { get; set; }"}</code> | <span className="api-desc">Maximum health. Setting it keeps the object at full health if it was full.</span> |
| <Link id="m-multipliers-2" /><code><Link to="/mod/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] Multipliers { get; }"}</code> | <span className="api-desc">Damage multipliers per attack type (blunt, slash and so on).</span> |
| <Link id="m-positionhandler" /><code><Link to="/mod/game-api/types/global-p/positionfromoriginhandler">{"PositionFromOriginHandler"}</Link>{" PositionHandler { get; private set; }"}</code> | <span className="api-desc">Gives the object's position relative to the world origin.</span> |
| <Link id="m-statmanager-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | <span className="api-desc">The stat manager that holds health and related stats.</span> |
| <Link id="m-analyticsrecord" /><code>{"protected virtual "}<Link to="/mod/game-api/types/global-e-h/healthobject-deathanalytics">{"HealthObject.DeathAnalytics"}</Link>{" AnalyticsRecord { get; }"}</code> | <span className="api-desc">Death analytics data (victim, killer name, position) built from the last hit.</span> |
| <Link id="m-healthstat-2" /><code>{"protected "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" HealthStat { get; }"}</code> | <span className="api-desc">The `health` stat. If there is no stat manager or no such stat, a temporary stat with max 1 is made.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-healthchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-e-h/healthobject-healthchangedhandler">{"HealthObject.HealthChangedHandler"}</Link>{" HealthChanged"}</code> | <span className="api-desc">Raised when health changes, with the change amount (negative for damage) and the last hit.</span> |
| <Link id="m-killed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Killed"}</code> | <span className="api-desc">Raised when the object dies, with the killing hit.</span> |
| <Link id="m-onhit" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/impacthandler">{"ImpactHandler"}</Link>{" OnHit"}</code> | <span className="api-desc">Raised after each valid hit has been applied.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-detectimpact" /><code>{"void DetectImpact("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Handles a valid hit from a detector: applies attack type and armour multipliers, then `ReceiveDamage`, then raises `OnHit`.</span> |
| <Link id="m-die" /><code>{"void Die()"}</code> | <span className="api-desc">Sets health to zero, which kills the object on the server.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up death sync and looks up the cripple and damage protection stats.</span> |
| <Link id="m-onkilled" /><code>{"void OnKilled()"}</code> | <span className="api-desc">Raises `Killed`. On the server also fires the console kill event, counts a task kill for the wielder and sends death to clients.</span> |
| <Link id="m-onvalidate2" /><code>{"virtual void OnValidate2()"}</code> | <span className="api-desc">Empty validation hook for subclasses.</span> |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact = null)"}</code> | <span className="api-desc">Server: lowers health and cripple health, divided by any damage protection stats. Does nothing once health is zero.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Points each listed impact detector's `HealthTarget` at this object.</span> |
| <Link id="m-handleobjectreachedzerohealth" /><code>{"protected virtual void HandleObjectReachedZeroHealth()"}</code> | <span className="api-desc">Server: called when health hits zero. Calls `OnKilled` by default; subclasses override it (for example to down a player).</span> |
| <Link id="m-markassailant" /><code>{"protected void MarkAssailant("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" assailant, float damage)"}</code> | <span className="api-desc">Tells the attacking player's character they caused combat, with the distance and damage.</span> |
| <Link id="m-onhealthchanged" /><code>{"protected void OnHealthChanged(float changeAmount, "}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Raises `HealthChanged` with a given amount and hit.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Builds the attack type multiplier table and starts listening to the health stat.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-markassailant-2" /><code>{"private void MarkAssailant("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" assailant, float damage)"}</code> | <span className="api-desc">Tells the attacking player's character they caused combat, with the distance and damage.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unhooks `DetectImpact` from the impact detectors' hit and particle hit events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks `DetectImpact` to every listed impact detector's hit and particle hit events.</span> |
| <Link id="m-statchanged" /><code>{"private void StatChanged("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Health stat handler: records the last hit, raises `HealthChanged`, and on the server handles reaching 0 health.</span> |
| <Link id="m-syncdeath-2" /><code>{"private void SyncDeath("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler. Clients run `OnKilled` when the server reports the death.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HealthObject`:

<div className="api-used-in">

[`EffectHandler.health`](/mod/game-api/types/alta-stats-effects/effecthandler#m-health), [`EffectHandler.Health`](/mod/game-api/types/alta-stats-effects/effecthandler#m-health-2), [`HeatManager.damageTarget`](/mod/game-api/types/alta-stats-effects/heatmanager#m-damagetarget), [`EmbeddableManager.health`](/mod/game-api/types/alta-items/embeddablemanager#m-health), [`ImpactDetector.healthTarget`](/mod/game-api/types/alta-items/impactdetector#m-healthtarget), [`ImpactDetector.HealthTarget`](/mod/game-api/types/alta-items/impactdetector#m-healthtarget-2), [`TriggerImpactTool.hitHealthObjects`](/mod/game-api/types/alta-items/triggerimpacttool#m-hithealthobjects), [`Agent.HealthChanged`](/mod/game-api/types/alta-intelligence/agent#m-healthchanged), [`Agent.Killed`](/mod/game-api/types/alta-intelligence/agent#m-killed), [`Babu.Killed`](/mod/game-api/types/alta-intelligence/babu#m-killed), [`DeathFern.Killed`](/mod/game-api/types/alta-intelligence/deathfern#m-killed), [`Dragonfly.Killed`](/mod/game-api/types/alta-intelligence/dragonfly#m-killed), [`FireBug.Killed`](/mod/game-api/types/alta-intelligence/firebug#m-killed), [`Gotera.Killed`](/mod/game-api/types/alta-intelligence/gotera#m-killed), [`GreaterGotera.Killed`](/mod/game-api/types/alta-intelligence/greatergotera#m-killed), [`Phantom.Killed`](/mod/game-api/types/alta-intelligence/phantom#m-killed), [`SeedSpray.InitializeSpray`](/mod/game-api/types/alta-intelligence/seedspray#m-initializespray), [`SeedSpray.Unchild`](/mod/game-api/types/alta-intelligence/seedspray#m-unchild), [`SeedSprayManager.healthObject`](/mod/game-api/types/alta-intelligence/seedspraymanager#m-healthobject), [`Spriggull.Killed`](/mod/game-api/types/alta-intelligence/spriggull#m-killed), [`Target.healthObject`](/mod/game-api/types/alta-intelligence/target#m-healthobject), [`Target.HealthObject`](/mod/game-api/types/alta-intelligence/target#m-healthobject-2), [`Target.Killed`](/mod/game-api/types/alta-intelligence/target#m-killed), [`Turabada.Killed`](/mod/game-api/types/alta-intelligence/turabada#m-killed), [`Wyrm.Killed`](/mod/game-api/types/alta-intelligence/wyrm#m-killed), [`ToCombatTransition<TFrom>.CheckEnterCombat`](/mod/game-api/types/alta-player/tocombattransition-tfrom#m-checkentercombat), [`StaminaBarVisibility.PlayerDeath`](/mod/game-api/types/alta-stats-effects/staminabarvisibility#m-playerdeath), [`StatBarVisibilityGroup.PlayerDeath`](/mod/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-playerdeath), [`WoodcutTree.healthObject`](/mod/game-api/types/alta-crafting/woodcuttree#m-healthobject), [`WoodcutTree.HealthObject`](/mod/game-api/types/alta-crafting/woodcuttree#m-healthobject-2), [`Explosive.healths`](/mod/game-api/types/global-e-h/explosive#m-healths), [`HealthObject.HealthChangedHandler.BeginInvoke`](/mod/game-api/types/global-e-h/healthobject-healthchangedhandler#m-begininvoke), [`HealthObject.HealthChangedHandler.Invoke`](/mod/game-api/types/global-e-h/healthobject-healthchangedhandler#m-invoke), [`PlayerController.Health`](/mod/game-api/types/global-p/playercontroller#m-health), [`PlayerController.healthTarget`](/mod/game-api/types/global-p/playercontroller#m-healthtarget), [`PlayerEventsManager.OnHealthChanged`](/mod/game-api/types/global-p/playereventsmanager#m-onhealthchanged), [`PlayerHealth.CheckForDamage`](/mod/game-api/types/global-p/playerhealth#m-checkfordamage).

</div>
