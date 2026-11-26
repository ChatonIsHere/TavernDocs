---
title: "HealthObject"
description: "Gives an entity health."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthObject

A **class** in `Root.Township`, no namespace.

Gives an entity health. Listens to its impact detectors, applies damage on the server through the `health` stat of its `StatManager`, and syncs death to clients. A component on creatures, players and breakable objects.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`FakePlayerHealth`](/game-api/types/global-e-h/fakeplayerhealth), [`HealthObjectEvent`](/game-api/types/global-e-h/healthobjectevent), [`HealthObjectUnityEvent`](/game-api/types/global-e-h/healthobjectunityevent), [`PlayerHealth`](/game-api/types/global-p/playerhealth), [`Rock`](/game-api/types/global-q-r/rock)
- **Nested types** [`DeathAnalytics`](/game-api/types/global-e-h/healthobject-deathanalytics), [`HealthChangedHandler`](/game-api/types/global-e-h/healthobject-healthchangedhandler), [`RegenUnit`](/game-api/types/global-e-h/healthobject-regenunit)
- **Documented in** [Health and damage](/game-api/items/health-and-damage#healthobject), [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HealthObject()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-healthstat" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" healthStat"}</code> | Cached health stat backing `HealthStat`. |
| <Link id="m-impactdetectors" /><code>{"protected List<"}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{"> impactDetectors"}</code> | Serialized list of impact detectors behind `ImpactDetectors`. |

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-core" /><code>{"private Transform core"}</code> | Backing field for `Core`. Falls back to the object's own transform if empty. |
| <Link id="m-crippledamageprotectionstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" crippleDamageProtectionStat"}</code> | Stat that divides incoming cripple damage, if the stat manager has it. |
| <Link id="m-cripplestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" crippleStat"}</code> | Backing field for `CrippleStat`. |
| <Link id="m-damageprotectionstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" damageProtectionStat"}</code> | Stat that divides incoming health damage, if the stat manager has it. |
| <Link id="m-destroyed" /><code>{"private "}<Link to="/game-api/types/global-e-h/healthobjectevent">{"HealthObjectEvent"}</Link>{" destroyed"}</code> | Backing field for `Destroyed`, the event invoked when the object is killed. |
| <Link id="m-effecthandler" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" effectHandler"}</code> | Backing field for `EffectHandler`. |
| <Link id="m-hascrippledamageprotection" /><code>{"private bool hasCrippleDamageProtection"}</code> | True if the stat manager has the cripple damage protection stat. |
| <Link id="m-hasdamageprotection" /><code>{"private bool hasDamageProtection"}</code> | True if the stat manager has the damage protection stat. |
| <Link id="m-impacttypemultipliers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{", float> impactTypeMultipliers"}</code> | Damage multiplier per impact type, built from `multipliers` in `Start`. |
| <Link id="m-iscombatant" /><code>{"private bool isCombatant"}</code> | Backing field for `IsCombatant`. Player hits on a combatant mark the player as in combat. |
| <Link id="m-multipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] multipliers"}</code> | Backing field for `Multipliers`: damage multipliers per impact type. |
| <Link id="m-positionhelper" /><code>{"private "}<Link to="/game-api/types/global-p/positionfromoriginhelper">{"PositionFromOriginHelper"}</Link>{" positionHelper"}</code> | Helper passed to the `PositionHandler` created in `Awake`. |
| <Link id="m-statmanager" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" statManager"}</code> | Backing field for `StatManager`. |
| <Link id="m-syncdeath" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncDeath"}</code> | Method sync the server uses to tell clients the object died. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-core-2" /><code>{"Transform Core { get; }"}</code> | The central transform of the object, used as its main position. |
| <Link id="m-cripplestat-2" /><code><Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" CrippleStat { get; }"}</code> | The cripple health stat, if the stat manager has one. |
| <Link id="m-destroyed-2" /><code><Link to="/game-api/types/global-e-h/healthobjectevent">{"HealthObjectEvent"}</Link>{" Destroyed { get; }"}</code> | Unity event invoked when the object is killed, on both sides. |
| <Link id="m-effecthandler-2" /><code><Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/effecthandler">{"EffectHandler"}</Link>{" { get; }"}</code> | The alchemy effect handler for this object, if set. |
| <Link id="m-hascripplestat" /><code>{"bool HasCrippleStat { get; private set; }"}</code> | True if a cripple health stat was found on initialize. |
| <Link id="m-health" /><code>{"float Health { get; set; }"}</code> | Current health value. Setting it sets the stat's base value. |
| <Link id="m-impactdetectors-2" /><code>{"IEnumerable ImpactDetectors { get; }"}</code> | The impact detectors that feed hits into this object. |
| <Link id="m-iscombatant-2" /><code>{"bool IsCombatant { get; }"}</code> | If true, a player hitting this object is marked as having caused combat. |
| <Link id="m-lasthit" /><code><Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" LastHit { get; protected set; }"}</code> | The most recent damage data, used to work out who or what killed it. |
| <Link id="m-maxhealth" /><code>{"float MaxHealth { get; set; }"}</code> | Maximum health. Setting it keeps the object at full health if it was full. |
| <Link id="m-multipliers-2" /><code><Link to="/game-api/types/global-a-b/attacktypemultiplier">{"AttackTypeMultiplier"}</Link>{"[] Multipliers { get; }"}</code> | Damage multipliers per attack type (blunt, slash and so on). |
| <Link id="m-positionhandler" /><code><Link to="/game-api/types/global-p/positionfromoriginhandler">{"PositionFromOriginHandler"}</Link>{" PositionHandler { get; private set; }"}</code> | Gives the object's position relative to the world origin. |
| <Link id="m-statmanager-2" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | The stat manager that holds health and related stats. |
| <Link id="m-analyticsrecord" /><code>{"protected virtual "}<Link to="/game-api/types/global-e-h/healthobject-deathanalytics">{"HealthObject.DeathAnalytics"}</Link>{" AnalyticsRecord { get; }"}</code> | Death analytics data (victim, killer name, position) built from the last hit. |
| <Link id="m-healthstat-2" /><code>{"protected "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" HealthStat { get; }"}</code> | The `health` stat. If there is no stat manager or no such stat, a temporary stat with max 1 is made. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-healthchanged" /><code>{"event "}<Link to="/game-api/types/global-e-h/healthobject-healthchangedhandler">{"HealthObject.HealthChangedHandler"}</Link>{" HealthChanged"}</code> | Raised when health changes, with the change amount (negative for damage) and the last hit. |
| <Link id="m-killed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Killed"}</code> | Raised when the object dies, with the killing hit. |
| <Link id="m-onhit" /><code>{"event "}<Link to="/game-api/types/global-i-l/impacthandler">{"ImpactHandler"}</Link>{" OnHit"}</code> | Raised after each valid hit has been applied. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-detectimpact" /><code>{"void DetectImpact("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Handles a valid hit from a detector: applies attack type and armour multipliers, then `ReceiveDamage`, then raises `OnHit`. |
| <Link id="m-die" /><code>{"void Die()"}</code> | Sets health to zero, which kills the object on the server. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up death sync and looks up the cripple and damage protection stats. |
| <Link id="m-onkilled" /><code>{"void OnKilled()"}</code> | Raises `Killed`. On the server also fires the console kill event, counts a task kill for the wielder and sends death to clients. |
| <Link id="m-onvalidate2" /><code>{"virtual void OnValidate2()"}</code> | Empty validation hook for subclasses. |
| <Link id="m-receivedamage" /><code>{"virtual void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact = null)"}</code> | Server: lowers health and cripple health, divided by any damage protection stats. Does nothing once health is zero. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Points each listed impact detector's `HealthTarget` at this object. |
| <Link id="m-handleobjectreachedzerohealth" /><code>{"protected virtual void HandleObjectReachedZeroHealth()"}</code> | Server: called when health hits zero. Calls `OnKilled` by default; subclasses override it (for example to down a player). |
| <Link id="m-markassailant" /><code>{"protected void MarkAssailant("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" assailant, float damage)"}</code> | Tells the attacking player's character they caused combat, with the distance and damage. |
| <Link id="m-onhealthchanged" /><code>{"protected void OnHealthChanged(float changeAmount, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Raises `HealthChanged` with a given amount and hit. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Builds the attack type multiplier table and starts listening to the health stat. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-markassailant-2" /><code>{"private void MarkAssailant("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" assailant, float damage)"}</code> | Tells the attacking player's character they caused combat, with the distance and damage. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks `DetectImpact` from the impact detectors' hit and particle hit events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Hooks `DetectImpact` to every listed impact detector's hit and particle hit events. |
| <Link id="m-statchanged" /><code>{"private void StatChanged("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Health stat handler: records the last hit, raises `HealthChanged`, and on the server handles reaching 0 health. |
| <Link id="m-syncdeath-2" /><code>{"private void SyncDeath("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler. Clients run `OnKilled` when the server reports the death. |

</details>

## Used in

Members of other types that take, return or hold a `HealthObject`:

[`EffectHandler.health`](/game-api/types/alta-stats-effects/effecthandler#m-health), [`EffectHandler.Health`](/game-api/types/alta-stats-effects/effecthandler#m-health-2), [`HeatManager.damageTarget`](/game-api/types/alta-stats-effects/heatmanager#m-damagetarget), [`EmbeddableManager.health`](/game-api/types/alta-items/embeddablemanager#m-health), [`ImpactDetector.healthTarget`](/game-api/types/alta-items/impactdetector#m-healthtarget), [`ImpactDetector.HealthTarget`](/game-api/types/alta-items/impactdetector#m-healthtarget-2), [`TriggerImpactTool.hitHealthObjects`](/game-api/types/alta-items/triggerimpacttool#m-hithealthobjects), [`Agent.HealthChanged`](/game-api/types/alta-intelligence/agent#m-healthchanged), [`Agent.Killed`](/game-api/types/alta-intelligence/agent#m-killed), [`Babu.Killed`](/game-api/types/alta-intelligence/babu#m-killed), [`DeathFern.Killed`](/game-api/types/alta-intelligence/deathfern#m-killed), [`Dragonfly.Killed`](/game-api/types/alta-intelligence/dragonfly#m-killed), [`FireBug.Killed`](/game-api/types/alta-intelligence/firebug#m-killed), [`Gotera.Killed`](/game-api/types/alta-intelligence/gotera#m-killed), [`GreaterGotera.Killed`](/game-api/types/alta-intelligence/greatergotera#m-killed), [`Phantom.Killed`](/game-api/types/alta-intelligence/phantom#m-killed), [`SeedSpray.InitializeSpray`](/game-api/types/alta-intelligence/seedspray#m-initializespray), [`SeedSpray.Unchild`](/game-api/types/alta-intelligence/seedspray#m-unchild), [`SeedSprayManager.healthObject`](/game-api/types/alta-intelligence/seedspraymanager#m-healthobject), [`Spriggull.Killed`](/game-api/types/alta-intelligence/spriggull#m-killed), [`Target.healthObject`](/game-api/types/alta-intelligence/target#m-healthobject), [`Target.HealthObject`](/game-api/types/alta-intelligence/target#m-healthobject-2), [`Target.Killed`](/game-api/types/alta-intelligence/target#m-killed), [`Turabada.Killed`](/game-api/types/alta-intelligence/turabada#m-killed), [`Wyrm.Killed`](/game-api/types/alta-intelligence/wyrm#m-killed), [`ToCombatTransition<TFrom>.CheckEnterCombat`](/game-api/types/alta-player/tocombattransition-tfrom#m-checkentercombat), [`StaminaBarVisibility.PlayerDeath`](/game-api/types/alta-stats-effects/staminabarvisibility#m-playerdeath), [`StatBarVisibilityGroup.PlayerDeath`](/game-api/types/alta-stats-effects/statbarvisibilitygroup#m-playerdeath), [`WoodcutTree.healthObject`](/game-api/types/alta-crafting/woodcuttree#m-healthobject), [`WoodcutTree.HealthObject`](/game-api/types/alta-crafting/woodcuttree#m-healthobject-2), [`Explosive.healths`](/game-api/types/global-e-h/explosive#m-healths), [`HealthObject.HealthChangedHandler.BeginInvoke`](/game-api/types/global-e-h/healthobject-healthchangedhandler#m-begininvoke), [`HealthObject.HealthChangedHandler.Invoke`](/game-api/types/global-e-h/healthobject-healthchangedhandler#m-invoke), [`PlayerController.Health`](/game-api/types/global-p/playercontroller#m-health), [`PlayerController.healthTarget`](/game-api/types/global-p/playercontroller#m-healthtarget), [`PlayerEventsManager.OnHealthChanged`](/game-api/types/global-p/playereventsmanager#m-onhealthchanged), [`PlayerHealth.CheckForDamage`](/game-api/types/global-p/playerhealth#m-checkfordamage).
