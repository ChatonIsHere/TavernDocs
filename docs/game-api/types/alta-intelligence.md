---
title: Creatures and AI
description: "Types in Alta.Intelligence, Alta.Creatures, Alta.Combat and Alta.Pathfinding."
sidebar_position: 5
---

# Creatures and AI

Types in Alta.Intelligence, Alta.Creatures, Alta.Combat and Alta.Pathfinding. 267 types, 76 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Combat

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DeadPlugin`](/game-api/types/alta-intelligence/deadplugin) | class | `AtmospherePlugin` | 3 |  |
| [`DeathAnimationSettings`](/game-api/types/alta-intelligence/deathanimationsettings) | class | `ScriptableObject` | 7 | ScriptableObject with the visuals for a death effect: a first burst, then ashes and a second burst. Read by `PlayerSpecialEffectsController` and the creature `DeathEffect`. |
| [`DeathAnimationSettings.Create`](/game-api/types/alta-intelligence/deathanimationsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<DeathAnimationSettings>` | 0 |  |
| [`IndoorAmbienceBoost`](/game-api/types/alta-intelligence/indoorambienceboost) | class | `AtmospherePlugin` | 3 |  |

## Alta.Creatures

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`DeathEffect`](/game-api/types/alta-intelligence/deatheffect) | class | `MonoBehaviour` | 1 |  |
| [`DeathEvent`](/game-api/types/alta-intelligence/deathevent) | class | `AltaEvent<DeathEffect, DeathUnityEvent>` | 0 | Inspector event that passes a `DeathEffect`. Used for a death effect's start and end events. |
| [`DeathUnityEvent`](/game-api/types/alta-intelligence/deathunityevent) | class | `UnityEvent<DeathEffect>` | 0 |  |
| [`Nest`](/game-api/types/alta-intelligence/nest) | class | `MonoBehaviour` | 2 | A spot creatures can claim as a nest. Enabled nests are free and listed by type, and `ActiveNest` AI finds and claims them. |
| [`NestType`](/game-api/types/alta-intelligence/nesttype) | enum |  | 1 | Kinds of creature nest. Only `Spriggull`. |

## Alta.Intelligence

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Action<TAgent>`](/game-api/types/alta-intelligence/action-tagent) | abstract class | `IAction<TAgent>`, `IAction` | 9 | [Actions and decisions](../creatures/actions-and-decisions.md), [Docks](../items/docks.md) |
| [`ActionComponent`](/game-api/types/alta-intelligence/actioncomponent) | abstract class | `MonoBehaviour`, `IActionSettings` | 9 | [Actions and decisions](../creatures/actions-and-decisions.md#actioncomponent): The settings every action has: |
| [`ActionComponentSet`](/game-api/types/alta-intelligence/actioncomponentset) | class | `MonoBehaviour` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md): A `MonoBehaviour` whose child `ActionComponent`s make up one set of choices. |
| [`ActionDecider<TAgent>`](/game-api/types/alta-intelligence/actiondecider-tagent) | class | `IActionDecider` | 7 | [Actions and decisions](../creatures/actions-and-decisions.md): Holds the possible targets and the current set (`PossibilitySet`), and picks the best action. |
| [`ActionFinishedHandler`](/game-api/types/alta-intelligence/actionfinishedhandler) | delegate |  | 0 | Callback for an AI action that finished or was cancelled, used by `BasicActiveAction.Finished` and `Cancelled`. |
| [`ActionSet<TAgent>`](/game-api/types/alta-intelligence/actionset-tagent) | class |  | 4 | [Actions and decisions](../creatures/actions-and-decisions.md): The actions to choose from, split into `BaseActions` (no target) and `TargetActions`. |
| [`ActionSettingsUsedHandler`](/game-api/types/alta-intelligence/actionsettingsusedhandler) | delegate |  | 0 | Event handler for an AI action being used, passing the running action. Used by `IActionSettings.Used`. |
| [`ActionTarget<TAgent>`](/game-api/types/alta-intelligence/actiontarget-tagent) | struct | `IActionTarget` | 4 | [Actions and decisions](../creatures/actions-and-decisions.md): A struct: an action, its target (or null) and its score. |
| [`ActiveAgentMoveCloser`](/game-api/types/alta-intelligence/activeagentmovecloser) | class | `BasicActiveAgentMoveCloser<AgentMoveCloserSettings>` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveAgentRotateClose`](/game-api/types/alta-intelligence/activeagentrotateclose) | class | `BasicActiveAgentMoveCloser<AgentCircleCloserSettings>` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveAttackDirectionReact`](/game-api/types/alta-intelligence/activeattackdirectionreact) | class | `BasicActiveAction<Agent, AgentAttackDirectionReactSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveBlockCanceleableWander`](/game-api/types/alta-intelligence/activeblockcanceleablewander) | class | `ActiveWander` | 1 |  |
| [`ActiveCircleReposition`](/game-api/types/alta-intelligence/activecirclereposition) | class | `BasicActiveAction<Agent, AgentCircleRepositionSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveCircleTarget`](/game-api/types/alta-intelligence/activecircletarget) | class | `BasicActiveAction<Agent, AgentCircleTargetSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveCrawl`](/game-api/types/alta-intelligence/activecrawl) | class | `BasicActiveAction<Agent, AgentCrawlSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveDelayEnterSet`](/game-api/types/alta-intelligence/activedelayenterset) | class | `BasicActiveAction<Agent, AgentDelayEnterSetSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveDeleted`](/game-api/types/alta-intelligence/activedeleted) | class | `BasicActiveAction<Agent, AgentDeletedSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md): Destroys the creature's whole entity, through `AltaCoroutine.DelayCall`. A creature can despawn itself this way. |
| [`ActiveDisabled`](/game-api/types/alta-intelligence/activedisabled) | class | `BasicActiveAction<Agent, AgentDisabledSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveDistanceFromTarget`](/game-api/types/alta-intelligence/activedistancefromtarget) | class | `ActiveNavigation<ActiveDistanceFromTarget, Agent, AgentDistanceFromTargetSettings>` | 0 |  |
| [`ActiveEat`](/game-api/types/alta-intelligence/activeeat) | class | `BasicActiveAction<IInteractAgent, AgentEatSettings>` | 1 |  |
| [`ActiveFaceTarget`](/game-api/types/alta-intelligence/activefacetarget) | class | `BasicActiveAction<Agent, AgentFaceTargetSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveFollow`](/game-api/types/alta-intelligence/activefollow) | class | `ActiveNavigation<ActiveFollow, Agent, AgentFollowSettings>` | 1 |  |
| [`ActiveIdle`](/game-api/types/alta-intelligence/activeidle) | class | `BasicActiveAction<Agent, AgentIdleSettings>` | 2 | The running idle action for an agent, made from `AgentIdleSettings`. It waits a random duration and can turn to face or follow the target while it does. |
| [`ActiveInteractApproach`](/game-api/types/alta-intelligence/activeinteractapproach) | class | `ActiveNavigation<ActiveInteractApproach, Agent, AgentInteractApproachSettings>` | 1 |  |
| [`ActiveJumpAt`](/game-api/types/alta-intelligence/activejumpat) | class | `BasicActiveAction<Agent, AgentJumpAtSettings>` | 1 |  |
| [`ActiveNavigation<TThis, TAgent, TSettings>`](/game-api/types/alta-intelligence/activenavigation-tthis-tagent-tsettings) | class | `BasicActiveAction<TAgent, TSettings>` | 1 | Base for creature actions that walk the agent to its target. Applies speed and acceleration from the settings and finishes when the navigator reaches the target. |
| [`ActiveNest`](/game-api/types/alta-intelligence/activenest) | class | `ActiveNavigation<ActiveNest, Agent, AgentNestSettings>` | 1 |  |
| [`ActiveRegainControl`](/game-api/types/alta-intelligence/activeregaincontrol) | class | `BasicActiveAction<Agent, AgentRegainControlSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveSchmeecheeFlee`](/game-api/types/alta-intelligence/activeschmeecheeflee) | class | `BasicActiveAction<Schmeechee, SchmeecheeFleeSettings>` | 1 |  |
| [`ActiveSchmeecheeFlip`](/game-api/types/alta-intelligence/activeschmeecheeflip) | class | `BasicActiveAction<Schmeechee, SchmeecheeFlipSettings>` | 1 |  |
| [`ActiveSchmeecheePlant`](/game-api/types/alta-intelligence/activeschmeecheeplant) | class | `BasicActiveAction<Schmeechee, SchmeecheePlantSettings>` | 2 |  |
| [`ActiveSchmeecheePlay`](/game-api/types/alta-intelligence/activeschmeecheeplay) | class | `BasicActiveAction<Schmeechee, SchmeecheePlaySettings>` | 1 |  |
| [`ActiveSwapActionSet`](/game-api/types/alta-intelligence/activeswapactionset) | class | `BasicActiveAction<Agent, AgentSwapActionSetSettings>` | 2 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ActiveThreaten`](/game-api/types/alta-intelligence/activethreaten) | class | `BasicActiveAction<Agent, AgentThreatenSettings>` | 1 |  |
| [`ActiveWander`](/game-api/types/alta-intelligence/activewander) | class | `ActiveNavigation<ActiveWander, Agent, AgentWanderSettings>` | 0 |  |
| [`Agent`](/game-api/types/alta-intelligence/agent) | abstract class | `Target`, `IAgentDebugger`, `ILinkedAgent`, +4 more | 30 | [Agent](../creatures/agent.md): The AI parts run on the server only. |
| [`Agent.ChannelEvent`](/game-api/types/alta-intelligence/agent-channelevent) | class |  | 2 | A Unity event an agent fires on one hook event channel (by array index in `Agent.ChannelEvents`). Server-only unless marked as networked. |
| [`Agent<TThis>`](/game-api/types/alta-intelligence/agent-tthis) | abstract class | `Agent` | 8 | [Agent](../creatures/agent.md): The AI parts run on the server only. |
| [`AgentAttackDirectionReactSettings`](/game-api/types/alta-intelligence/agentattackdirectionreactsettings) | class | `RandomTimedActionComponent` | 1 |  |
| [`AgentCircleCloserSettings`](/game-api/types/alta-intelligence/agentcircleclosersettings) | class | `AgentMoveCloserSettings` | 1 |  |
| [`AgentCircleRepositionSettings`](/game-api/types/alta-intelligence/agentcirclerepositionsettings) | class | `TimedActionComponent` | 6 |  |
| [`AgentCircleTargetSettings`](/game-api/types/alta-intelligence/agentcircletargetsettings) | class | `RandomTimedActionComponent` | 3 |  |
| [`AgentCrawlSettings`](/game-api/types/alta-intelligence/agentcrawlsettings) | class | `RandomTimedActionComponent` | 8 | Action settings for a creature crawling over surfaces for a random duration (`ActiveCrawl`). Sits under an action set on the creature prefab. |
| [`AgentDelayEnterSetSettings`](/game-api/types/alta-intelligence/agentdelayentersetsettings) | class | `ActionComponent` | 2 |  |
| [`AgentDeletedSettings`](/game-api/types/alta-intelligence/agentdeletedsettings) | class | `ActionComponent` | 0 |  |
| [`AgentDisabledSettings`](/game-api/types/alta-intelligence/agentdisabledsettings) | class | `ActionComponent` | 0 |  |
| [`AgentDistanceFromTargetSettings`](/game-api/types/alta-intelligence/agentdistancefromtargetsettings) | class | `AgentNavigationSettings` | 2 |  |
| [`AgentEatSettings`](/game-api/types/alta-intelligence/agenteatsettings) | class | `ActionComponent` | 2 |  |
| [`AgentFaceTargetSettings`](/game-api/types/alta-intelligence/agentfacetargetsettings) | class | `ActionComponent` | 1 |  |
| [`AgentFollowSettings`](/game-api/types/alta-intelligence/agentfollowsettings) | class | `AgentNavigationSettings` | 4 |  |
| [`AgentIdleSettings`](/game-api/types/alta-intelligence/agentidlesettings) | class | `RandomTimedActionComponent` | 10 | Settings for a creature's idle action: how long it lasts, whether it faces or follows its target during set time windows, and a chance to wander to a new spot. Its action is `ActiveIdle`. |
| [`AgentInteractApproachSettings`](/game-api/types/alta-intelligence/agentinteractapproachsettings) | class | `AgentNavigationSettings` | 7 |  |
| [`AgentJumpAtSettings`](/game-api/types/alta-intelligence/agentjumpatsettings) | class | `RandomTimedActionComponent` | 5 |  |
| [`AgentMoveCloserSettings`](/game-api/types/alta-intelligence/agentmoveclosersettings) | class | `ActionComponent` | 3 |  |
| [`AgentNavigationSettings`](/game-api/types/alta-intelligence/agentnavigationsettings) | abstract class | `ActionComponent` | 5 | Base for a creature action component with movement settings for getting to its target. |
| [`AgentNestSettings`](/game-api/types/alta-intelligence/agentnestsettings) | class | `AgentNavigationSettings` | 6 | Action component that sends an agent to the closest free nest of a type to sleep at night. Runs `ActiveNest` on the server's AI. |
| [`AgentRegainControlSettings`](/game-api/types/alta-intelligence/agentregaincontrolsettings) | class | `RandomTimedActionComponent` | 4 |  |
| [`AgentRollUpInPlace`](/game-api/types/alta-intelligence/agentrollupinplace) | class | `BasicActiveAction<Agent, AgentRollUpInPlaceSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`AgentRollUpInPlaceSettings`](/game-api/types/alta-intelligence/agentrollupinplacesettings) | class | `ActionComponent` | 4 |  |
| [`AgentSwapActionSetSettings`](/game-api/types/alta-intelligence/agentswapactionsetsettings) | class | `ActionComponent` | 3 | Action component that switches the agent to another `ActionComponentSet` and then runs for a fixed duration. |
| [`AgentThreatenSettings`](/game-api/types/alta-intelligence/agentthreatensettings) | class | `RandomTimedActionComponent` | 4 |  |
| [`AgentUpdater`](/game-api/types/alta-intelligence/agentupdater) | class | `MonoBehaviour` | 8 | [AgentUpdater](../creatures/agent-updater.md), [Update modules](../console-and-utilities/update-modules.md): A scene `MonoBehaviour`. Ticks only on the server. |
| [`AgentWanderSettings`](/game-api/types/alta-intelligence/agentwandersettings) | class | `AgentNavigationSettings` | 2 |  |
| [`AiHook`](/game-api/types/alta-intelligence/aihook) | class | `AiHook<ActionComponent>` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Base: runs code when the action starts, finishes or is cancelled. |
| [`AiHook<T>`](/game-api/types/alta-intelligence/aihook-t) | abstract class | `MonoBehaviour`, `IAiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Base: runs code when the action starts, finishes or is cancelled. |
| [`And`](/game-api/types/alta-intelligence/and) | class | `Operator` | 3 |  |
| [`AnimatedBoolAiHook`](/game-api/types/alta-intelligence/animatedboolaihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`AnimatedFloatAiHook`](/game-api/types/alta-intelligence/animatedfloataihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`AnimatedFloatTransitionAiHook`](/game-api/types/alta-intelligence/animatedfloattransitionaihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`AnimatedLayerAiHook`](/game-api/types/alta-intelligence/animatedlayeraihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`AnimatedTriggerAiHook`](/game-api/types/alta-intelligence/animatedtriggeraihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`Atom`](/game-api/types/alta-intelligence/atom) | class | `BaseAtom` | 6 |  |
| [`Atom<T1, T2, T3, T4>`](/game-api/types/alta-intelligence/atom-t1-t2-t3-t4) | class | `BaseAtom` | 4 |  |
| [`Atom<T1, T2, T3>`](/game-api/types/alta-intelligence/atom-t1-t2-t3) | class | `BaseAtom` | 4 |  |
| [`Atom<T1, T2>`](/game-api/types/alta-intelligence/atom-t1-t2) | class | `BaseAtom` | 4 | A named AI logic atom that takes two terms. `Define` turns it into a weighted definition the AI can reason with. |
| [`Atom<T>`](/game-api/types/alta-intelligence/atom-t) | class | `BaseAtom` | 4 | A named atom in the AI knowledge system that takes one typed term. Other versions take zero to four terms. |
| [`AttackDirectionAnimationBoolSettings`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings) | class | `AttackDirectionAnimationSettings` | 0 |  |
| [`AttackDirectionAnimationBoolSettings.BoolAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation) | class | `IAttackDirectionAnimation` | 0 |  |
| [`AttackDirectionAnimationFloatSettings`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings) | class | `AttackDirectionAnimationSettings` | 0 |  |
| [`AttackDirectionAnimationFloatSettings.FloatAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation) | class | `IAttackDirectionAnimation` | 0 |  |
| [`AttackDirectionAnimationLayerLerpSettings`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings) | class | `AttackDirectionAnimationSettings` | 0 |  |
| [`AttackDirectionAnimationLayerLerpSettings.LayerAnimation`](/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation) | class | `IAttackDirectionAnimation` | 0 |  |
| [`AttackDirectionAnimationSettings`](/game-api/types/alta-intelligence/attackdirectionanimationsettings) | abstract class | `ScriptableObject` | 2 | Asset that makes an attack direction animation helper for a creature's animator parameter. |
| [`AttackDirectionCore`](/game-api/types/alta-intelligence/attackdirectioncore) | class |  | 3 | Drives an agent's attack-direction animations (a layer weight plus side and up directions) from where its target's attacks come from. Made by `AttackDirectionCoreSettings` and updated each frame. |
| [`AttackDirectionCoreSettings`](/game-api/types/alta-intelligence/attackdirectioncoresettings) | class | `ScriptableObject` | 8 | Settings asset that makes a creature animate in response to where its target is attacking from (above or either side). `GetCore` makes the runtime `AttackDirectionCore`. |
| [`AttackDirectionReactAIHook`](/game-api/types/alta-intelligence/attackdirectionreactaihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Drives animation from the direction of the target's attacks. |
| [`AttackParameters`](/game-api/types/alta-intelligence/attackparameters) | struct |  | 3 | An attack a target is making: how much damage it would do and where it is. AI reads these from `Target.Attacks` to react to incoming hits. |
| [`Babu`](/game-api/types/alta-intelligence/babu) | class | `Agent<Babu>`, `IHasViewCone`, `IInteractAgent`, +4 more | 5 | [Other creatures](../creatures/other-creatures.md#babu-dragonfly-deathfern), [Creature data](../creatures/creature-data.md) |
| [`BaseAtom`](/game-api/types/alta-intelligence/baseatom) | class | `Term` | 5 | A named constant term in the AI's logic system (predicates, compounds and variables used for creature reasoning). Its nested `Definition` pairs a compound with a goal and a weighting. |
| [`BaseAtom.Definition`](/game-api/types/alta-intelligence/baseatom-definition) | class | `IAtomDefinition` | 6 | A rule in the creature knowledge system: when the compound holds, the goal predicate follows, with a weight that fades as the event it came from ages. |
| [`BasicAction<TAgent, TActive, TSettings>`](/game-api/types/alta-intelligence/basicaction-tagent-tactive-tsettings) | class | `Action<TAgent>` | 5 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`BasicActiveAction<TAgent, TSettings>`](/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings) | abstract class | `BasicActiveAction<TAgent>` | 2 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`BasicActiveAction<TAgent>`](/game-api/types/alta-intelligence/basicactiveaction-tagent) | abstract class | `IBasicActiveAction<TAgent>`, `IActiveAction` | 10 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`BasicActiveAgentMoveCloser<T>`](/game-api/types/alta-intelligence/basicactiveagentmovecloser-t) | abstract class | `BasicActiveAction<Agent, T>` | 1 |  |
| [`BasicSense`](/game-api/types/alta-intelligence/basicsense) | class | `Sense` | 5 | [Targets and senses](../creatures/targets-and-senses.md): A fixed value the target gives off, from its `BasicSenseSet`. Up to 32 of these. |
| [`BasicSense.Create`](/game-api/types/alta-intelligence/basicsense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<BasicSense>` | 0 |  |
| [`BasicSenseSet`](/game-api/types/alta-intelligence/basicsenseset) | class |  | 7 | [Targets and senses](../creatures/targets-and-senses.md#basicsenseset) |
| [`Chance`](/game-api/types/alta-intelligence/chance) | class | `TargetOperation` | 3 |  |
| [`ChanceOperation`](/game-api/types/alta-intelligence/chanceoperation) | class | `TargetOperationComponent` | 1 |  |
| [`Character`](/game-api/types/alta-intelligence/character) | class |  | 5 | A named character in the AI knowledge system with its own atom and knowledge, optionally owned by a parent character. |
| [`CollisionImpulseReader`](/game-api/types/alta-intelligence/collisionimpulsereader) | class | `MonoBehaviour` | 0 |  |
| [`Compound`](/game-api/types/alta-intelligence/compound) | class | `Predicate`, `ITerm` | 2 | A Prolog-style term with a functor and arguments in the AI knowledge system, such as `likes(x, y)`. Evaluates by unifying with known definitions. |
| [`CompoundPart`](/game-api/types/alta-intelligence/compoundpart) | class | `Term`, `ICompoundPart` | 6 | A list of terms (a first term and the rest) in the AI's logic system, used when unifying compounds. |
| [`CreateTargetOperation`](/game-api/types/alta-intelligence/createtargetoperation) | static class |  | 12 |  |
| [`DataAtom<T>`](/game-api/types/alta-intelligence/dataatom-t) | class | `Atom`, `IData<T>`, `ITerm` | 4 |  |
| [`Day`](/game-api/types/alta-intelligence/day) | class |  | 4 | One day in an AI `History`, holding the events registered on it. |
| [`DeathFern`](/game-api/types/alta-intelligence/deathfern) | class | `Agent<DeathFern>` | 1 | [Other creatures](../creatures/other-creatures.md#babu-dragonfly-deathfern), [Creature data](../creatures/creature-data.md): Death Fern, Mother Fern, Vine Attack Fern, Targeted Geyser (also inside Chute Gcore Dynamic), Gotera Ash Bomb, Turabada Spawner Reactive |
| [`DebugResults`](/game-api/types/alta-intelligence/debugresults) | class |  | 4 |  |
| [`DistanceOperation`](/game-api/types/alta-intelligence/distanceoperation) | class | `TargetOperationComponent` | 1 |  |
| [`DistanceSense`](/game-api/types/alta-intelligence/distancesense) | class | `Sense` | 2 | [Targets and senses](../creatures/targets-and-senses.md) |
| [`DistanceSense.Create`](/game-api/types/alta-intelligence/distancesense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<DistanceSense>` | 0 |  |
| [`DistanceSquaredSense`](/game-api/types/alta-intelligence/distancesquaredsense) | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md) |
| [`DistanceSquaredSense.Create`](/game-api/types/alta-intelligence/distancesquaredsense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<DistanceSquaredSense>` | 0 |  |
| [`Dragonfly`](/game-api/types/alta-intelligence/dragonfly) | class | `Agent<Dragonfly>`, `IHasViewCone` | 4 | [Other creatures](../creatures/other-creatures.md#babu-dragonfly-deathfern), [Creature data](../creatures/creature-data.md): Dragonfly, and the Dais animals: Dais Base, Dais Variant, Dais Red, Antler, Antler Red, Child and Child Red Variant |
| [`EmptyAttackDirectionAnimation`](/game-api/types/alta-intelligence/emptyattackdirectionanimation) | class | `IAttackDirectionAnimation` | 1 |  |
| [`Event`](/game-api/types/alta-intelligence/event) | class |  | 7 | One remembered event in an AI's `History`: some knowledge atoms that fade over a lifetime. Events form a linked list of the active ones. |
| [`EventChannelAiHook`](/game-api/types/alta-intelligence/eventchannelaihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Fires a channel event when the action starts and another when it ends. |
| [`EventChannelTimedAiHook`](/game-api/types/alta-intelligence/eventchanneltimedaihook) | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Fires channel events at set delays after the action starts. |
| [`FaceTarget`](/game-api/types/alta-intelligence/facetarget) | class | `MonoBehaviour`, `INetworkSerialized` | 5 |  |
| [`Facing2DSense`](/game-api/types/alta-intelligence/facing2dsense) | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md) |
| [`Facing2DSense.Create`](/game-api/types/alta-intelligence/facing2dsense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<Facing2DSense>` | 0 |  |
| [`Facing3DSense`](/game-api/types/alta-intelligence/facing3dsense) | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md) |
| [`Facing3DSense.Create`](/game-api/types/alta-intelligence/facing3dsense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<Facing3DSense>` | 0 |  |
| [`FacingOperation`](/game-api/types/alta-intelligence/facingoperation) | class | `TargetOperationComponent` | 1 |  |
| [`FailTargetOperation`](/game-api/types/alta-intelligence/failtargetoperation) | class | `TargetOperation` | 2 |  |
| [`FireBug`](/game-api/types/alta-intelligence/firebug) | class | `Agent<FireBug>`, `IReceiveImpulseFromCollision` | 5 | [Other creatures](../creatures/other-creatures.md#firebug), [Creature data](../creatures/creature-data.md): A catchable bug that lights up when shaken. |
| [`FixedStatChangeHook`](/game-api/types/alta-intelligence/fixedstatchangehook) | class | `StatChangeHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`Formula<T>`](/game-api/types/alta-intelligence/formula-t) | class | `TargetOperation` | 3 |  |
| [`GizmosHelper`](/game-api/types/alta-intelligence/gizmoshelper) | class | `MonoBehaviour` | 2 |  |
| [`Gotera`](/game-api/types/alta-intelligence/gotera) | class | `Agent<Gotera>`, `IHasViewCone` | 4 | [Common creatures](../creatures/common-creatures.md#gotera-and-greatergotera), [Creature data](../creatures/creature-data.md): Gotera; Gotera Ash, Birch, Redwood and Walnut Variant |
| [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera) | class | `Agent<GreaterGotera>`, `IAgent`, `ITarget`, +2 more | 3 | [Common creatures](../creatures/common-creatures.md#gotera-and-greatergotera), [Creature data](../creatures/creature-data.md) |
| [`Grounded`](/game-api/types/alta-intelligence/grounded) | class | `TargetOperation` | 3 |  |
| [`GroundedOperation`](/game-api/types/alta-intelligence/groundedoperation) | class | `TargetOperationComponent` | 1 |  |
| [`History`](/game-api/types/alta-intelligence/history) | class |  | 11 | A timeline of days and knowledge events for the experimental AI reasoning system. Time is in days (1.0 is one day). Only created by the test `Intelligence` component. |
| [`HookAction`](/game-api/types/alta-intelligence/hookaction) | internal struct |  | 2 | Internal per-agent runner for an attack direction reaction hook. Updates its `AttackDirectionCore` each LateUpdate while the agent has a target. |
| [`HookEventChannel`](/game-api/types/alta-intelligence/hookeventchannel) | enum |  | 21 | Named channels (A to T, or None) an AI agent can fire hook events on, mapped to channel events set on the agent. |
| [`HurtSense`](/game-api/types/alta-intelligence/hurtsense) | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md): `agent.Hurt` for that target. |
| [`HurtSense.Create`](/game-api/types/alta-intelligence/hurtsense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<HurtSense>` | 0 |  |
| [`IAction`](/game-api/types/alta-intelligence/iaction) | interface |  | 8 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`IAction<in TAgent>`](/game-api/types/alta-intelligence/iaction-intagent) | interface | `IAction` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`IActionDecider`](/game-api/types/alta-intelligence/iactiondecider) | interface |  | 3 | Picks an AI agent's actions from the targets it knows about. `ActionDecider<TAgent>` implements it; reach it through `Agent.GeneralActionDecider`. |
| [`IActionSettings`](/game-api/types/alta-intelligence/iactionsettings) | interface |  | 9 | Settings every AI action has: its weighting and the rules for cancelling it. Implemented by `ActionComponent`. |
| [`IActionTarget`](/game-api/types/alta-intelligence/iactiontarget) | interface |  | 2 | A possible target for an AI action, with the weight it scored. |
| [`IActiveAction`](/game-api/types/alta-intelligence/iactiveaction) | interface |  | 8 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`IAgent`](/game-api/types/alta-intelligence/iagent) | interface | `ITarget`, `ITargetPointer`, `INetworkEntityBehaviour` | 24 | The interface for an AI creature's brain, implemented by `Agent`. Decisions and actions run on the server; the server registers live agents with `AgentUpdater`. |
| [`IAgentDebugger`](/game-api/types/alta-intelligence/iagentdebugger) | interface |  | 0 | Empty marker interface for AI agent debuggers. |
| [`IAiHook`](/game-api/types/alta-intelligence/iaihook) | interface |  | 1 |  |
| [`IAtomDefinition`](/game-api/types/alta-intelligence/iatomdefinition) | interface |  | 4 | A piece of knowledge in the creature knowledge system: a compound and a goal, with a weight that fades as the event it came from ages. |
| [`IAttackDirectionAnimation`](/game-api/types/alta-intelligence/iattackdirectionanimation) | interface |  | 4 | One animator parameter (bool, float or layer weight) that shows which way a creature is about to attack. `AttackDirectionCore` drives three of them: layer, side and up. |
| [`IBasicActiveAction<in TAgent>`](/game-api/types/alta-intelligence/ibasicactiveaction-intagent) | interface | `IActiveAction` | 1 |  |
| [`ICompoundPart`](/game-api/types/alta-intelligence/icompoundpart) | interface |  | 2 |  |
| [`IData<T>`](/game-api/types/alta-intelligence/idata-t) | interface | `ITerm` | 0 | AI logic term that carries a value of type `T`. Implemented by `Variable<T>` and `DataAtom<T>`. |
| [`IHasViewCone`](/game-api/types/alta-intelligence/ihasviewcone) | interface |  | 1 | Implemented by AI that has a `ViewCone` for sight checks. |
| [`IInteractAgent`](/game-api/types/alta-intelligence/iinteractagent) | interface | `IAgent`, `ITarget`, `ITargetPointer`, +1 more | 1 |  |
| [`IJumpAttacker`](/game-api/types/alta-intelligence/ijumpattacker) | interface |  | 1 | [Combat, damage and death](../creatures/combat-and-damage.md): `ActiveJumpAt` calls it at the start and end of a jump. `Spriggull` charges its beak with it. |
| [`ILinkedAgent`](/game-api/types/alta-intelligence/ilinkedagent) | interface |  | 5 | What `AgentUpdater` needs from a creature AI to schedule it. `Agent` implements it explicitly; agents are kept in a linked list sorted by priority. |
| [`Intelligence`](/game-api/types/alta-intelligence/intelligence) | class | `MonoBehaviour` | 7 |  |
| [`IntelligenceExtensionMethods`](/game-api/types/alta-intelligence/intelligenceextensionmethods) | static class |  | 2 |  |
| [`InverseLerpSenseSelf`](/game-api/types/alta-intelligence/inverselerpsenseself) | class | `TargetOperation` | 3 |  |
| [`InverseLerpSenseTarget`](/game-api/types/alta-intelligence/inverselerpsensetarget) | class | `TargetOperation` | 3 |  |
| [`IReceiveImpulseFromCollision`](/game-api/types/alta-intelligence/ireceiveimpulsefromcollision) | interface |  | 1 | Implemented by things that want to know the strength of a collision impulse they took. |
| [`ITarget`](/game-api/types/alta-intelligence/itarget) | interface | `ITargetPointer` | 13 | [Targets and senses](../creatures/targets-and-senses.md#itarget): Anything a creature can consider. `Target` implements it, so every creature is also a target for other creatures. |
| [`ITargetExtensions`](/game-api/types/alta-intelligence/itargetextensions) | static class |  | 1 |  |
| [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer) | interface |  | 1 | Anything that can name an AI target for itself. Every `ITarget` and agent is one, and so are things like `SeedSpray`; hit code uses it to find who to blame for a hit. |
| [`ITerm`](/game-api/types/alta-intelligence/iterm) | interface |  | 3 | A term in the small Prolog-style logic engine in `Alta.Intelligence` (atoms, variables, compounds). Probably not used by the shipped creatures; nothing outside that namespace uses it. |
| [`KnowledgeHolder`](/game-api/types/alta-intelligence/knowledgeholder) | class |  | 7 | A store of known events and rule definitions for the creature knowledge system. It can have a parent, whose knowledge also counts. |
| [`Lifetime`](/game-api/types/alta-intelligence/lifetime) | class | `TargetOperation` | 2 |  |
| [`LifetimeOperation`](/game-api/types/alta-intelligence/lifetimeoperation) | class | `TargetOperationComponent` | 1 |  |
| [`Not`](/game-api/types/alta-intelligence/not) | class | `Predicate` | 2 |  |
| [`OldSenseOperation`](/game-api/types/alta-intelligence/oldsenseoperation) | class | `TargetOperationComponent` | 2 |  |
| [`Operator`](/game-api/types/alta-intelligence/operator) | abstract class | `Predicate` | 2 | Base for predicates that join two other predicates (such as and), in the creature knowledge system. Evaluates the left side, then the right side with the left's bindings. |
| [`Or`](/game-api/types/alta-intelligence/or) | class | `Operator` | 3 |  |
| [`Phantom`](/game-api/types/alta-intelligence/phantom) | class | `Agent<Phantom>`, `IHasViewCone`, `IListenToMiningEcho` | 9 | [Other creatures](../creatures/other-creatures.md#phantom), [Creature data](../creatures/creature-data.md): A night creature that can be solid or immaterial. Prefabs: Phantom (2 health) and Phantom Head (0.5 health, takes double spiritual damage). |
| [`PickupAgent`](/game-api/types/alta-intelligence/pickupagent) | class | `MonoBehaviour` | 3 | [Other creatures](../creatures/other-creatures.md#pickupagent): `public class PickupAgent : MonoBehaviour`, for creatures you can hold. |
| [`PlayerCharacterTarget`](/game-api/types/alta-intelligence/playercharactertarget) | class | `Target` | 5 | [Targets and senses](../creatures/targets-and-senses.md#playercharactertarget): `PlayerCharacterTarget : Target` is the player's target component. |
| [`PlayerLikeSpectralGhost`](/game-api/types/alta-intelligence/playerlikespectralghost) | class | `Phantom` | 2 | [Other creatures](../creatures/other-creatures.md#playerlikespectralghost), [Creature data](../creatures/creature-data.md): A phantom dressed as a player (prefab "Spectral Ghost", 2 health; it uses the phantom's passive set and destroys itself on death). |
| [`Plus`](/game-api/types/alta-intelligence/plus) | class | `Operator` | 3 |  |
| [`Predicate`](/game-api/types/alta-intelligence/predicate) | abstract class | `ITerm`, `ICompoundPart` | 13 | Base for a logic term in the AI knowledge system: a functor with argument terms that is evaluated against a `KnowledgeHolder` to produce weighted results. Operators combine predicates. |
| [`ProgressStatChangeHook`](/game-api/types/alta-intelligence/progressstatchangehook) | class | `StatChangeHook` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| [`ProjectileShooter`](/game-api/types/alta-intelligence/projectileshooter) | class | `MonoBehaviour` | 3 |  |
| [`ProjectileShooter.AimMode`](/game-api/types/alta-intelligence/projectileshooter-aimmode) | enum |  | 4 | How a `ProjectileShooter` aims: straight forward, at the target, or mixing forward and target direction per axis. |
| [`RandomTimedActionComponent`](/game-api/types/alta-intelligence/randomtimedactioncomponent) | abstract class | `ActionComponent` | 3 | Base for AI action components that run for a random length of time, set in the inspector (5 to 7 seconds by default). |
| [`RaycastGrounded`](/game-api/types/alta-intelligence/raycastgrounded) | class | `TargetOperation` | 3 |  |
| [`RaycastGroundedOperation`](/game-api/types/alta-intelligence/raycastgroundedoperation) | class | `TargetOperationComponent` | 1 |  |
| [`RaycastGroundedOperationType`](/game-api/types/alta-intelligence/raycastgroundedoperationtype) | enum |  | 3 | How the `RaycastGrounded` AI evaluator checks for ground: a ray straight down in world space, a ray down in the agent's local space, or a sphere overlap. |
| [`RepeatIfHasTarget`](/game-api/types/alta-intelligence/repeatifhastarget) | class | `MonoBehaviour` | 2 |  |
| [`Result`](/game-api/types/alta-intelligence/result) | class |  | 5 | One answer to a creature AI logic query: the term bindings that make it true and its weight. |
| [`RotateToTargetWorldXZ`](/game-api/types/alta-intelligence/rotatetotargetworldxz) | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 3 |  |
| [`RVOBlockedOperation`](/game-api/types/alta-intelligence/rvoblockedoperation) | class | `TargetOperationComponent` | 1 |  |
| [`RVOBlockedValue`](/game-api/types/alta-intelligence/rvoblockedvalue) | class | `TargetOperation` | 2 |  |
| [`SameTarget`](/game-api/types/alta-intelligence/sametarget) | class | `TargetOperation` | 3 |  |
| [`SameTargetOperation`](/game-api/types/alta-intelligence/sametargetoperation) | class | `TargetOperationComponent` | 1 |  |
| [`Schmeechee`](/game-api/types/alta-intelligence/schmeechee) | class | `Agent<Schmeechee>` | 16 | [Other creatures](../creatures/other-creatures.md#schmeechee), [Creature data](../creatures/creature-data.md): A mushroom critter that runs about, plants itself in the ground and can be picked up. It's a rigidbody that steers itself with forces, not a walker. |
| [`Schmeechee.Operation`](/game-api/types/alta-intelligence/schmeechee-operation) | class | `TargetOperation` | 2 | [Other creatures](../creatures/other-creatures.md): A scoring rule for "grounded" or "upside down". |
| [`Schmeechee.OperationType`](/game-api/types/alta-intelligence/schmeechee-operationtype) | enum |  | 2 | Which Schmeechee state a Schmeechee AI operation checks: `Grounded` or `UpsideDown`. |
| [`SchmeecheeFleeSettings`](/game-api/types/alta-intelligence/schmeecheefleesettings) | class | `ActionComponent` | 1 |  |
| [`SchmeecheeFlipSettings`](/game-api/types/alta-intelligence/schmeecheeflipsettings) | class | `ActionComponent` | 0 |  |
| [`SchmeecheeOperation`](/game-api/types/alta-intelligence/schmeecheeoperation) | class | `TargetOperationComponent` | 1 |  |
| [`SchmeecheePlantSettings`](/game-api/types/alta-intelligence/schmeecheeplantsettings) | class | `RandomTimedActionComponent` | 0 |  |
| [`SchmeecheePlaySettings`](/game-api/types/alta-intelligence/schmeecheeplaysettings) | class | `ActionComponent` | 0 |  |
| [`SeedSpray`](/game-api/types/alta-intelligence/seedspray) | class | `NetworkEntityBehaviour`, `ITargetPointer` | 6 | [Combat, damage and death](../creatures/combat-and-damage.md) |
| [`SeedSpray.BasicImpactSyncArguments`](/game-api/types/alta-intelligence/seedspray-basicimpactsyncarguments) | struct |  | 11 | Network copy of a seed's hit, sent by the server so clients apply the same impact to the struck entity's `ImpactDetector`. |
| [`SeedSprayManager`](/game-api/types/alta-intelligence/seedspraymanager) | class | `NetworkEntityBehaviour` | 2 | [Combat, damage and death](../creatures/combat-and-damage.md) |
| [`Sense`](/game-api/types/alta-intelligence/sense) | abstract class | `GeneralValue` | 6 | Asset for something an AI agent can measure about a target (distance, visibility and so on) as a number. Sense assets are loaded from `Resources/Senses`. |
| [`SenseOld`](/game-api/types/alta-intelligence/senseold) | enum |  | 20 | Old list of AI senses (noise, movement, danger, distance, view cone and so on), still used by the older sense operations. |
| [`SenseOperation`](/game-api/types/alta-intelligence/senseoperation) | class | `TargetOperationComponent` | 2 |  |
| [`SenseSetup`](/game-api/types/alta-intelligence/sensesetup) | class |  | 3 | A serialized pair of a sense and a value, used in AI settings. Still supports the old `SenseOld` enum for older assets. |
| [`Spriggull`](/game-api/types/alta-intelligence/spriggull) | class | `Agent<Spriggull>`, `IJumpAttacker`, `IInteractAgent`, +4 more | 5 | [Common creatures](../creatures/common-creatures.md#spriggull), [Creature data](../creatures/creature-data.md): It decides every 0.5 s, slower than other creatures (0.1 s). Its sets live in the "Spriggull AI" prefab: |
| [`SpriggullFlail`](/game-api/types/alta-intelligence/spriggullflail) | class | `MonoBehaviour` | 0 |  |
| [`StatChangeHook`](/game-api/types/alta-intelligence/statchangehook) | abstract class | `AiHook` | 0 |  |
| [`StatOperation`](/game-api/types/alta-intelligence/statoperation) | class | `TargetOperationComponent` | 1 |  |
| [`StatValue`](/game-api/types/alta-intelligence/statvalue) | class | `TargetOperation` | 2 |  |
| [`Target`](/game-api/types/alta-intelligence/target) | class | `NetworkEntityBehaviour`, `ITarget`, `ITargetPointer` | 15 | A networked thing that AI creatures can sense and attack, with optional health and interactable links. Only active on the server: on clients it disables itself (and by default its GameObject). |
| [`TargetCollector`](/game-api/types/alta-intelligence/targetcollector) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 4 | Component that gathers targets for an agent within a radius. Registers itself with its agent on `Awake`; `TargetCollectorManager` adds and removes targets by distance. |
| [`TargetCollectorManager`](/game-api/types/alta-intelligence/targetcollectormanager) | static class |  | 3 |  |
| [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation) | abstract class |  | 3 | [Actions and decisions](../creatures/actions-and-decisions.md): One scoring rule. `float Evaluate(Agent agent, ITarget target)`, plus a `Weight`. |
| [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent) | abstract class | `MonoBehaviour` | 1 | Base component that supplies a `TargetOperation` for AI target scoring. Its object is renamed to match the operation in the editor. |
| [`TargetPointer`](/game-api/types/alta-intelligence/targetpointer) | class | `MonoBehaviour`, `ITargetPointer` | 1 |  |
| [`TargetResult`](/game-api/types/alta-intelligence/targetresult) | class |  | 2 | Debug record of how one target scored for an agent's actions. |
| [`TargetResult.Result`](/game-api/types/alta-intelligence/targetresult-result) | class |  | 4 | Debug record of how one AI action scored against a target. `ActionDecider` passes null for it in this build, so it is probably unused. |
| [`Term`](/game-api/types/alta-intelligence/term) | abstract class | `ITerm` | 5 | Base of terms in the AI's logic system (atoms, variables, compounds). `Unify` matches two terms in the Prolog style. |
| [`ThresholdListener`](/game-api/types/alta-intelligence/thresholdlistener) | class |  | 3 |  |
| [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent) | abstract class | `ActionComponent` | 1 | Base for a creature action component that runs for a set duration. |
| [`True`](/game-api/types/alta-intelligence/true) | class | `Predicate` | 2 |  |
| [`Turabada`](/game-api/types/alta-intelligence/turabada) | class | `Agent<Turabada>`, `IHasViewCone` | 6 | [Common creatures](../creatures/common-creatures.md#turabada), [Creature data](../creatures/creature-data.md): On death it turns off collision and sets the animator bool named by `killedAnimatorBoolean` ("Killed" by default) directly on the `Animator`, on each side. |
| [`Variable`](/game-api/types/alta-intelligence/variable) | class | `Term` | 7 |  |
| [`Variable<T>`](/game-api/types/alta-intelligence/variable-t) | class | `Variable`, `IData<T>`, `ITerm` | 1 |  |
| [`VelocityLimit`](/game-api/types/alta-intelligence/velocitylimit) | class | `TargetOperation` | 2 |  |
| [`VelocityLimitOperation`](/game-api/types/alta-intelligence/velocitylimitoperation) | class | `TargetOperationComponent` | 1 |  |
| [`VelocitySense`](/game-api/types/alta-intelligence/velocitysense) | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md): `target.GetVelocity()`, which is always 0. No shipped sense uses it: "Velocity" is a `BasicSense`. |
| [`VelocitySense.Create`](/game-api/types/alta-intelligence/velocitysense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<VelocitySense>` | 0 |  |
| [`ViewConeOperation`](/game-api/types/alta-intelligence/viewconeoperation) | class | `TargetOperationComponent` | 1 |  |
| [`ViewConeSense`](/game-api/types/alta-intelligence/viewconesense) | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md): How far inside the creature's `ViewCone` the target is. Only for creatures with `IHasViewCone` (turabada, gotera, babu, dragonfly, phantom). |
| [`ViewConeSense.Create`](/game-api/types/alta-intelligence/viewconesense-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<ViewConeSense>` | 0 |  |
| [`Wyrm`](/game-api/types/alta-intelligence/wyrm) | class | `Agent<Wyrm>` | 14 | [Common creatures](../creatures/common-creatures.md#wyrm), [Creature data](../creatures/creature-data.md): A wyrm lives underground. Its body and colliders are hidden until it emerges. It has no walker: it turns its body in place toward its target. |
| [`Xor`](/game-api/types/alta-intelligence/xor) | class | `Operator` | 3 |  |

## Alta.Intelligence.Wyrms

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ActiveCatch`](/game-api/types/alta-intelligence/activecatch) | class | `BasicActiveAction<Wyrm, WyrmCatchSettings>` | 2 |  |
| [`ActiveDig`](/game-api/types/alta-intelligence/activedig) | class | `BasicActiveAction<Wyrm, WyrmDigSettings>` | 2 |  |
| [`ActiveDodge`](/game-api/types/alta-intelligence/activedodge) | class | `BasicActiveAction<Wyrm, WyrmDodgeSettings>` | 2 |  |
| [`ActiveEmerge`](/game-api/types/alta-intelligence/activeemerge) | class | `BasicActiveAction<Wyrm, WyrmEmergeSettings>` | 2 |  |
| [`ActiveMeleeAttack`](/game-api/types/alta-intelligence/activemeleeattack) | class | `BasicActiveAction<Wyrm, WyrmMeleeSettings>` | 2 |  |
| [`ActiveSpin`](/game-api/types/alta-intelligence/activespin) | class | `BasicActiveAction<Wyrm, WyrmSpinSettings>` | 2 |  |
| [`ActiveSpit`](/game-api/types/alta-intelligence/activespit) | class | `BasicActiveAction<Wyrm, WyrmSpitSettings>` | 2 |  |
| [`WyrmCatchSettings`](/game-api/types/alta-intelligence/wyrmcatchsettings) | class | `TimedActionComponent` | 1 | Wyrm action component for the catch action. Only targets within reach score. |
| [`WyrmDigSettings`](/game-api/types/alta-intelligence/wyrmdigsettings) | class | `TimedActionComponent` | 4 | Wyrm action component for burrowing. The wyrm switches to its burrowed actions and senses, and gets more likely to dig the longer it has idled. |
| [`WyrmDodgeSettings`](/game-api/types/alta-intelligence/wyrmdodgesettings) | class | `TimedActionComponent` | 1 | Wyrm action component for the dodge action. Only targets within reach score. |
| [`WyrmEmergeSettings`](/game-api/types/alta-intelligence/wyrmemergesettings) | class | `TimedActionComponent` | 6 | Action settings for a burrowed wyrm coming up when a target is close (`ActiveEmerge`). After emerging it switches to its emerged senses. |
| [`WyrmMeleeSettings`](/game-api/types/alta-intelligence/wyrmmeleesettings) | class | `TimedActionComponent` | 6 | Wyrm action component for melee attacks: reach, flurry chance, animator triggers and target weighting for `ActiveMeleeAttack`. |
| [`WyrmSpinSettings`](/game-api/types/alta-intelligence/wyrmspinsettings) | class | `ActionComponent` | 4 | Wyrm action component for the spin action, with range and target weighting for `ActiveSpin`. |
| [`WyrmSpitSettings`](/game-api/types/alta-intelligence/wyrmspitsettings) | class | `TimedActionComponent` | 7 | Action settings for a wyrm's spit attack (`ActiveSpit`), scored by distance, hurt and whether the target is the same as before. |

## Alta.Pathfinding

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Director`](/game-api/types/alta-intelligence/director) | class | `MonoBehaviour` | 15 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md#director): Finds its `Navigator` in its parents on `Awake`. |
| [`Follower`](/game-api/types/alta-intelligence/follower) | class |  | 3 | Makes a `Navigator` keep re-pathing to a moving target on an interval. Made by `Director`. |
| [`IndependentWalker`](/game-api/types/alta-intelligence/independentwalker) | class | `MonoBehaviour` | 2 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): Lets a navigator part of a creature detach from its body and walk on its own (update module "Independent Walker"), then reattach. |
| [`Navigator`](/game-api/types/alta-intelligence/navigator) | class | `MonoBehaviour` | 29 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md#navigator): A `MonoBehaviour` that needs a `Seeker` on the same GameObject. |
| [`NormalizedPath`](/game-api/types/alta-intelligence/normalizedpath) | internal struct |  | 4 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): A path's corners and length, for `NormalizedMove`. |
| [`Walker`](/game-api/types/alta-intelligence/walker) | class | `MonoBehaviour` | 23 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md#walker): A `MonoBehaviour` with a `FixedUpdate`. Moves `topic` (the creature's `Rigidbody`). |
| [`WalkerAnimator`](/game-api/types/alta-intelligence/walkeranimator) | class | `MonoBehaviour` | 0 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): Sets animator values from `Walker.Updated`. |
| [`WalkerState`](/game-api/types/alta-intelligence/walkerstate) | struct |  | 6 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): The struct `Walker.Updated` passes. |
