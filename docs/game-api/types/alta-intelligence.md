---
title: Creatures and AI
description: "Types in Alta.Intelligence, Alta.Creatures, Alta.Combat and Alta.Pathfinding."
sidebar_position: 5
---

# Creatures and AI

Types in Alta.Intelligence, Alta.Creatures, Alta.Combat and Alta.Pathfinding. 267 types, 76 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Combat

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DeadPlugin` | class | `AtmospherePlugin` | 3 |  |
| `DeathAnimationSettings` | class | `ScriptableObject` | 7 |  |
| `DeathAnimationSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Misc.ScriptableObject<DeathAnimationSettings>` | 0 |  |
| `IndoorAmbienceBoost` | class | `AtmospherePlugin` | 3 |  |

## Alta.Creatures

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DeathEffect` | class | `MonoBehaviour` | 1 |  |
| `DeathEvent` | class | `AltaEvent<DeathEffect, DeathUnityEvent>` | 0 |  |
| `DeathUnityEvent` | class | `UnityEvent<DeathEffect>` | 0 |  |
| `Nest` | class | `MonoBehaviour` | 2 |  |
| `NestType` | enum |  | 1 |  |

## Alta.Intelligence

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Action<TAgent>` | abstract class | `IAction<TAgent>`, `IAction` | 9 | [Actions and decisions](../creatures/actions-and-decisions.md), [Docks](../items/docks.md) |
| `ActionComponent` | abstract class | `MonoBehaviour`, `IActionSettings` | 9 | [Actions and decisions](../creatures/actions-and-decisions.md#actioncomponent): The settings every action has: |
| `ActionComponentSet` | class | `MonoBehaviour` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md): A `MonoBehaviour` whose child `ActionComponent`s make up one set of choices. |
| `ActionDecider<TAgent>` | class | `IActionDecider` | 7 | [Actions and decisions](../creatures/actions-and-decisions.md): Holds the possible targets and the current set (`PossibilitySet`), and picks the best action. |
| `ActionFinishedHandler` | delegate |  | 0 |  |
| `ActionSet<TAgent>` | class |  | 4 | [Actions and decisions](../creatures/actions-and-decisions.md): The actions to choose from, split into `BaseActions` (no target) and `TargetActions`. |
| `ActionSettingsUsedHandler` | delegate |  | 0 |  |
| `ActionTarget<TAgent>` | struct | `IActionTarget` | 4 | [Actions and decisions](../creatures/actions-and-decisions.md): A struct: an action, its target (or null) and its score. |
| `ActiveAgentMoveCloser` | class | `BasicActiveAgentMoveCloser<AgentMoveCloserSettings>` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveAgentRotateClose` | class | `BasicActiveAgentMoveCloser<AgentCircleCloserSettings>` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveAttackDirectionReact` | class | `BasicActiveAction<Agent, AgentAttackDirectionReactSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveBlockCanceleableWander` | class | `ActiveWander` | 1 |  |
| `ActiveCircleReposition` | class | `BasicActiveAction<Agent, AgentCircleRepositionSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveCircleTarget` | class | `BasicActiveAction<Agent, AgentCircleTargetSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveCrawl` | class | `BasicActiveAction<Agent, AgentCrawlSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveDelayEnterSet` | class | `BasicActiveAction<Agent, AgentDelayEnterSetSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveDeleted` | class | `BasicActiveAction<Agent, AgentDeletedSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md): Destroys the creature's whole entity, through `AltaCoroutine.DelayCall`. A creature can despawn itself this way. |
| `ActiveDisabled` | class | `BasicActiveAction<Agent, AgentDisabledSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveDistanceFromTarget` | class | `ActiveNavigation<ActiveDistanceFromTarget, Agent, AgentDistanceFromTargetSettings>` | 0 |  |
| `ActiveEat` | class | `BasicActiveAction<IInteractAgent, AgentEatSettings>` | 1 |  |
| `ActiveFaceTarget` | class | `BasicActiveAction<Agent, AgentFaceTargetSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveFollow` | class | `ActiveNavigation<ActiveFollow, Agent, AgentFollowSettings>` | 1 |  |
| `ActiveIdle` | class | `BasicActiveAction<Agent, AgentIdleSettings>` | 2 |  |
| `ActiveInteractApproach` | class | `ActiveNavigation<ActiveInteractApproach, Agent, AgentInteractApproachSettings>` | 1 |  |
| `ActiveJumpAt` | class | `BasicActiveAction<Agent, AgentJumpAtSettings>` | 1 |  |
| `ActiveNavigation<TThis, TAgent, TSettings>` | class | `BasicActiveAction<TAgent, TSettings>` | 1 |  |
| `ActiveNest` | class | `ActiveNavigation<ActiveNest, Agent, AgentNestSettings>` | 1 |  |
| `ActiveRegainControl` | class | `BasicActiveAction<Agent, AgentRegainControlSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveSchmeecheeFlee` | class | `BasicActiveAction<Schmeechee, SchmeecheeFleeSettings>` | 1 |  |
| `ActiveSchmeecheeFlip` | class | `BasicActiveAction<Schmeechee, SchmeecheeFlipSettings>` | 1 |  |
| `ActiveSchmeecheePlant` | class | `BasicActiveAction<Schmeechee, SchmeecheePlantSettings>` | 2 |  |
| `ActiveSchmeecheePlay` | class | `BasicActiveAction<Schmeechee, SchmeecheePlaySettings>` | 1 |  |
| `ActiveSwapActionSet` | class | `BasicActiveAction<Agent, AgentSwapActionSetSettings>` | 2 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ActiveThreaten` | class | `BasicActiveAction<Agent, AgentThreatenSettings>` | 1 |  |
| `ActiveWander` | class | `ActiveNavigation<ActiveWander, Agent, AgentWanderSettings>` | 0 |  |
| `Agent` | abstract class | `Target`, `IAgentDebugger`, `ILinkedAgent`, +4 more | 30 | [Agent](../creatures/agent.md): The AI parts run on the server only. |
| `Agent.ChannelEvent` | class |  | 2 |  |
| `Agent<TThis>` | abstract class | `Agent` | 8 | [Agent](../creatures/agent.md): The AI parts run on the server only. |
| `AgentAttackDirectionReactSettings` | class | `RandomTimedActionComponent` | 1 |  |
| `AgentCircleCloserSettings` | class | `AgentMoveCloserSettings` | 1 |  |
| `AgentCircleRepositionSettings` | class | `TimedActionComponent` | 6 |  |
| `AgentCircleTargetSettings` | class | `RandomTimedActionComponent` | 3 |  |
| `AgentCrawlSettings` | class | `RandomTimedActionComponent` | 8 |  |
| `AgentDelayEnterSetSettings` | class | `ActionComponent` | 2 |  |
| `AgentDeletedSettings` | class | `ActionComponent` | 0 |  |
| `AgentDisabledSettings` | class | `ActionComponent` | 0 |  |
| `AgentDistanceFromTargetSettings` | class | `AgentNavigationSettings` | 2 |  |
| `AgentEatSettings` | class | `ActionComponent` | 2 |  |
| `AgentFaceTargetSettings` | class | `ActionComponent` | 1 |  |
| `AgentFollowSettings` | class | `AgentNavigationSettings` | 4 |  |
| `AgentIdleSettings` | class | `RandomTimedActionComponent` | 10 |  |
| `AgentInteractApproachSettings` | class | `AgentNavigationSettings` | 7 |  |
| `AgentJumpAtSettings` | class | `RandomTimedActionComponent` | 5 |  |
| `AgentMoveCloserSettings` | class | `ActionComponent` | 3 |  |
| `AgentNavigationSettings` | abstract class | `ActionComponent` | 5 |  |
| `AgentNestSettings` | class | `AgentNavigationSettings` | 6 |  |
| `AgentRegainControlSettings` | class | `RandomTimedActionComponent` | 4 |  |
| `AgentRollUpInPlace` | class | `BasicActiveAction<Agent, AgentRollUpInPlaceSettings>` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `AgentRollUpInPlaceSettings` | class | `ActionComponent` | 4 |  |
| `AgentSwapActionSetSettings` | class | `ActionComponent` | 3 |  |
| `AgentThreatenSettings` | class | `RandomTimedActionComponent` | 4 |  |
| `AgentUpdater` | class | `MonoBehaviour` | 8 | [AgentUpdater](../creatures/agent-updater.md), [Update modules](../console-and-utilities/update-modules.md): A scene `MonoBehaviour`. Ticks only on the server. |
| `AgentWanderSettings` | class | `AgentNavigationSettings` | 2 |  |
| `AiHook` | class | `AiHook<ActionComponent>` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Base: runs code when the action starts, finishes or is cancelled. |
| `AiHook<T>` | abstract class | `MonoBehaviour`, `IAiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Base: runs code when the action starts, finishes or is cancelled. |
| `And` | class | `Operator` | 3 |  |
| `AnimatedBoolAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `AnimatedFloatAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `AnimatedFloatTransitionAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `AnimatedLayerAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `AnimatedTriggerAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `Atom` | class | `BaseAtom` | 6 |  |
| `Atom<T1, T2, T3, T4>` | class | `BaseAtom` | 4 |  |
| `Atom<T1, T2, T3>` | class | `BaseAtom` | 4 |  |
| `Atom<T1, T2>` | class | `BaseAtom` | 4 |  |
| `Atom<T>` | class | `BaseAtom` | 4 |  |
| `AttackDirectionAnimationBoolSettings` | class | `AttackDirectionAnimationSettings` | 0 |  |
| `AttackDirectionAnimationBoolSettings.BoolAnimation` | class | `IAttackDirectionAnimation` | 0 |  |
| `AttackDirectionAnimationFloatSettings` | class | `AttackDirectionAnimationSettings` | 0 |  |
| `AttackDirectionAnimationFloatSettings.FloatAnimation` | class | `IAttackDirectionAnimation` | 0 |  |
| `AttackDirectionAnimationLayerLerpSettings` | class | `AttackDirectionAnimationSettings` | 0 |  |
| `AttackDirectionAnimationLayerLerpSettings.LayerAnimation` | class | `IAttackDirectionAnimation` | 0 |  |
| `AttackDirectionAnimationSettings` | abstract class | `ScriptableObject` | 2 |  |
| `AttackDirectionCore` | class |  | 3 |  |
| `AttackDirectionCoreSettings` | class | `ScriptableObject` | 8 |  |
| `AttackDirectionReactAIHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Drives animation from the direction of the target's attacks. |
| `AttackParameters` | struct |  | 3 |  |
| `Babu` | class | `Agent<Babu>`, `IHasViewCone`, `IInteractAgent`, +4 more | 5 | [Other creatures](../creatures/other-creatures.md#babu-dragonfly-deathfern), [Creature data](../creatures/creature-data.md) |
| `BaseAtom` | class | `Term` | 5 |  |
| `BaseAtom.Definition` | class | `IAtomDefinition` | 6 |  |
| `BasicAction<TAgent, TActive, TSettings>` | class | `Action<TAgent>` | 5 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `BasicActiveAction<TAgent, TSettings>` | abstract class | `BasicActiveAction<TAgent>` | 2 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `BasicActiveAction<TAgent>` | abstract class | `IBasicActiveAction<TAgent>`, `IActiveAction` | 10 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `BasicActiveAgentMoveCloser<T>` | abstract class | `BasicActiveAction<Agent, T>` | 1 |  |
| `BasicSense` | class | `Sense` | 5 | [Targets and senses](../creatures/targets-and-senses.md): A fixed value the target gives off, from its `BasicSenseSet`. Up to 32 of these. |
| `BasicSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<BasicSense>` | 0 |  |
| `BasicSenseSet` | class |  | 7 | [Targets and senses](../creatures/targets-and-senses.md#basicsenseset) |
| `Chance` | class | `TargetOperation` | 3 |  |
| `ChanceOperation` | class | `TargetOperationComponent` | 1 |  |
| `Character` | class |  | 5 |  |
| `CollisionImpulseReader` | class | `MonoBehaviour` | 0 |  |
| `Compound` | class | `Predicate`, `ITerm` | 2 |  |
| `CompoundPart` | class | `Term`, `ICompoundPart` | 6 |  |
| `CreateTargetOperation` | static class |  | 12 |  |
| `DataAtom<T>` | class | `Atom`, `IData<T>`, `ITerm` | 4 |  |
| `Day` | class |  | 4 |  |
| `DeathFern` | class | `Agent<DeathFern>` | 1 | [Other creatures](../creatures/other-creatures.md#babu-dragonfly-deathfern), [Creature data](../creatures/creature-data.md): Death Fern, Mother Fern, Vine Attack Fern, Targeted Geyser (also inside Chute Gcore Dynamic), Gotera Ash Bomb, Turabada Spawner Reactive |
| `DebugResults` | class |  | 4 |  |
| `DistanceOperation` | class | `TargetOperationComponent` | 1 |  |
| `DistanceSense` | class | `Sense` | 2 | [Targets and senses](../creatures/targets-and-senses.md) |
| `DistanceSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<DistanceSense>` | 0 |  |
| `DistanceSquaredSense` | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md) |
| `DistanceSquaredSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<DistanceSquaredSense>` | 0 |  |
| `Dragonfly` | class | `Agent<Dragonfly>`, `IHasViewCone` | 4 | [Other creatures](../creatures/other-creatures.md#babu-dragonfly-deathfern), [Creature data](../creatures/creature-data.md): Dragonfly, and the Dais animals: Dais Base, Dais Variant, Dais Red, Antler, Antler Red, Child and Child Red Variant |
| `EmptyAttackDirectionAnimation` | class | `IAttackDirectionAnimation` | 1 |  |
| `Event` | class |  | 7 |  |
| `EventChannelAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Fires a channel event when the action starts and another when it ends. |
| `EventChannelTimedAiHook` | class | `AiHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md): Fires channel events at set delays after the action starts. |
| `FaceTarget` | class | `MonoBehaviour`, `INetworkSerialized` | 5 |  |
| `Facing2DSense` | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md) |
| `Facing2DSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<Facing2DSense>` | 0 |  |
| `Facing3DSense` | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md) |
| `Facing3DSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<Facing3DSense>` | 0 |  |
| `FacingOperation` | class | `TargetOperationComponent` | 1 |  |
| `FailTargetOperation` | class | `TargetOperation` | 2 |  |
| `FireBug` | class | `Agent<FireBug>`, `IReceiveImpulseFromCollision` | 5 | [Other creatures](../creatures/other-creatures.md#firebug), [Creature data](../creatures/creature-data.md): A catchable bug that lights up when shaken. |
| `FixedStatChangeHook` | class | `StatChangeHook` | 0 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `Formula<T>` | class | `TargetOperation` | 3 |  |
| `GizmosHelper` | class | `MonoBehaviour` | 2 |  |
| `Gotera` | class | `Agent<Gotera>`, `IHasViewCone` | 4 | [Common creatures](../creatures/common-creatures.md#gotera-and-greatergotera), [Creature data](../creatures/creature-data.md): Gotera; Gotera Ash, Birch, Redwood and Walnut Variant |
| `GreaterGotera` | class | `Agent<GreaterGotera>`, `IAgent`, `ITarget`, +2 more | 3 | [Common creatures](../creatures/common-creatures.md#gotera-and-greatergotera), [Creature data](../creatures/creature-data.md) |
| `Grounded` | class | `TargetOperation` | 3 |  |
| `GroundedOperation` | class | `TargetOperationComponent` | 1 |  |
| `History` | class |  | 11 |  |
| `HookAction` | internal struct |  | 2 |  |
| `HookEventChannel` | enum |  | 21 |  |
| `HurtSense` | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md): `agent.Hurt` for that target. |
| `HurtSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<HurtSense>` | 0 |  |
| `IAction` | interface |  | 8 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `IAction<in TAgent>` | interface | `IAction` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `IActionDecider` | interface |  | 3 |  |
| `IActionSettings` | interface |  | 9 |  |
| `IActionTarget` | interface |  | 2 |  |
| `IActiveAction` | interface |  | 8 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `IAgent` | interface | `ITarget`, `ITargetPointer`, `INetworkEntityBehaviour` | 24 |  |
| `IAgentDebugger` | interface |  | 0 |  |
| `IAiHook` | interface |  | 1 |  |
| `IAtomDefinition` | interface |  | 4 |  |
| `IAttackDirectionAnimation` | interface |  | 4 |  |
| `IBasicActiveAction<in TAgent>` | interface | `IActiveAction` | 1 |  |
| `ICompoundPart` | interface |  | 2 |  |
| `IData<T>` | interface | `ITerm` | 0 |  |
| `IHasViewCone` | interface |  | 1 |  |
| `IInteractAgent` | interface | `IAgent`, `ITarget`, `ITargetPointer`, +1 more | 1 |  |
| `IJumpAttacker` | interface |  | 1 | [Combat, damage and death](../creatures/combat-and-damage.md): `ActiveJumpAt` calls it at the start and end of a jump. `Spriggull` charges its beak with it. |
| `ILinkedAgent` | interface |  | 5 |  |
| `Intelligence` | class | `MonoBehaviour` | 7 |  |
| `IntelligenceExtensionMethods` | static class |  | 2 |  |
| `InverseLerpSenseSelf` | class | `TargetOperation` | 3 |  |
| `InverseLerpSenseTarget` | class | `TargetOperation` | 3 |  |
| `IReceiveImpulseFromCollision` | interface |  | 1 |  |
| `ITarget` | interface | `ITargetPointer` | 13 | [Targets and senses](../creatures/targets-and-senses.md#itarget): Anything a creature can consider. `Target` implements it, so every creature is also a target for other creatures. |
| `ITargetExtensions` | static class |  | 1 |  |
| `ITargetPointer` | interface |  | 1 |  |
| `ITerm` | interface |  | 3 |  |
| `KnowledgeHolder` | class |  | 7 |  |
| `Lifetime` | class | `TargetOperation` | 2 |  |
| `LifetimeOperation` | class | `TargetOperationComponent` | 1 |  |
| `Not` | class | `Predicate` | 2 |  |
| `OldSenseOperation` | class | `TargetOperationComponent` | 2 |  |
| `Operator` | abstract class | `Predicate` | 2 |  |
| `Or` | class | `Operator` | 3 |  |
| `Phantom` | class | `Agent<Phantom>`, `IHasViewCone`, `IListenToMiningEcho` | 9 | [Other creatures](../creatures/other-creatures.md#phantom), [Creature data](../creatures/creature-data.md): A night creature that can be solid or immaterial. Prefabs: Phantom (2 health) and Phantom Head (0.5 health, takes double spiritual damage). |
| `PickupAgent` | class | `MonoBehaviour` | 3 | [Other creatures](../creatures/other-creatures.md#pickupagent): `public class PickupAgent : MonoBehaviour`, for creatures you can hold. |
| `PlayerCharacterTarget` | class | `Target` | 5 | [Targets and senses](../creatures/targets-and-senses.md#playercharactertarget): `PlayerCharacterTarget : Target` is the player's target component. |
| `PlayerLikeSpectralGhost` | class | `Phantom` | 2 | [Other creatures](../creatures/other-creatures.md#playerlikespectralghost), [Creature data](../creatures/creature-data.md): A phantom dressed as a player (prefab "Spectral Ghost", 2 health; it uses the phantom's passive set and destroys itself on death). |
| `Plus` | class | `Operator` | 3 |  |
| `Predicate` | abstract class | `ITerm`, `ICompoundPart` | 13 |  |
| `ProgressStatChangeHook` | class | `StatChangeHook` | 1 | [Actions and decisions](../creatures/actions-and-decisions.md) |
| `ProjectileShooter` | class | `MonoBehaviour` | 3 |  |
| `ProjectileShooter.AimMode` | enum |  | 4 |  |
| `RandomTimedActionComponent` | abstract class | `ActionComponent` | 3 |  |
| `RaycastGrounded` | class | `TargetOperation` | 3 |  |
| `RaycastGroundedOperation` | class | `TargetOperationComponent` | 1 |  |
| `RaycastGroundedOperationType` | enum |  | 3 |  |
| `RepeatIfHasTarget` | class | `MonoBehaviour` | 2 |  |
| `Result` | class |  | 5 |  |
| `RotateToTargetWorldXZ` | class | `NetworkEntityBehaviour`, `INetworkSerialized` | 3 |  |
| `RVOBlockedOperation` | class | `TargetOperationComponent` | 1 |  |
| `RVOBlockedValue` | class | `TargetOperation` | 2 |  |
| `SameTarget` | class | `TargetOperation` | 3 |  |
| `SameTargetOperation` | class | `TargetOperationComponent` | 1 |  |
| `Schmeechee` | class | `Agent<Schmeechee>` | 16 | [Other creatures](../creatures/other-creatures.md#schmeechee), [Creature data](../creatures/creature-data.md): A mushroom critter that runs about, plants itself in the ground and can be picked up. It's a rigidbody that steers itself with forces, not a walker. |
| `Schmeechee.Operation` | class | `TargetOperation` | 2 | [Other creatures](../creatures/other-creatures.md): A scoring rule for "grounded" or "upside down". |
| `Schmeechee.OperationType` | enum |  | 2 |  |
| `SchmeecheeFleeSettings` | class | `ActionComponent` | 1 |  |
| `SchmeecheeFlipSettings` | class | `ActionComponent` | 0 |  |
| `SchmeecheeOperation` | class | `TargetOperationComponent` | 1 |  |
| `SchmeecheePlantSettings` | class | `RandomTimedActionComponent` | 0 |  |
| `SchmeecheePlaySettings` | class | `ActionComponent` | 0 |  |
| `SeedSpray` | class | `NetworkEntityBehaviour`, `ITargetPointer` | 6 | [Combat, damage and death](../creatures/combat-and-damage.md) |
| `SeedSpray.BasicImpactSyncArguments` | struct |  | 11 |  |
| `SeedSprayManager` | class | `NetworkEntityBehaviour` | 2 | [Combat, damage and death](../creatures/combat-and-damage.md) |
| `Sense` | abstract class | `GeneralValue` | 6 |  |
| `SenseOld` | enum |  | 20 |  |
| `SenseOperation` | class | `TargetOperationComponent` | 2 |  |
| `SenseSetup` | class |  | 3 |  |
| `Spriggull` | class | `Agent<Spriggull>`, `IJumpAttacker`, `IInteractAgent`, +4 more | 5 | [Common creatures](../creatures/common-creatures.md#spriggull), [Creature data](../creatures/creature-data.md): It decides every 0.5 s, slower than other creatures (0.1 s). Its sets live in the "Spriggull AI" prefab: |
| `SpriggullFlail` | class | `MonoBehaviour` | 0 |  |
| `StatChangeHook` | abstract class | `AiHook` | 0 |  |
| `StatOperation` | class | `TargetOperationComponent` | 1 |  |
| `StatValue` | class | `TargetOperation` | 2 |  |
| `Target` | class | `NetworkEntityBehaviour`, `ITarget`, `ITargetPointer` | 15 |  |
| `TargetCollector` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 4 |  |
| `TargetCollectorManager` | static class |  | 3 |  |
| `TargetOperation` | abstract class |  | 3 | [Actions and decisions](../creatures/actions-and-decisions.md): One scoring rule. `float Evaluate(Agent agent, ITarget target)`, plus a `Weight`. |
| `TargetOperationComponent` | abstract class | `MonoBehaviour` | 1 |  |
| `TargetPointer` | class | `MonoBehaviour`, `ITargetPointer` | 1 |  |
| `TargetResult` | class |  | 2 |  |
| `TargetResult.Result` | class |  | 4 |  |
| `Term` | abstract class | `ITerm` | 5 |  |
| `ThresholdListener` | class |  | 3 |  |
| `TimedActionComponent` | abstract class | `ActionComponent` | 1 |  |
| `True` | class | `Predicate` | 2 |  |
| `Turabada` | class | `Agent<Turabada>`, `IHasViewCone` | 6 | [Common creatures](../creatures/common-creatures.md#turabada), [Creature data](../creatures/creature-data.md): On death it turns off collision and sets the animator bool named by `killedAnimatorBoolean` ("Killed" by default) directly on the `Animator`, on each side. |
| `Variable` | class | `Term` | 7 |  |
| `Variable<T>` | class | `Variable`, `IData<T>`, `ITerm` | 1 |  |
| `VelocityLimit` | class | `TargetOperation` | 2 |  |
| `VelocityLimitOperation` | class | `TargetOperationComponent` | 1 |  |
| `VelocitySense` | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md): `target.GetVelocity()`, which is always 0. No shipped sense uses it: "Velocity" is a `BasicSense`. |
| `VelocitySense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<VelocitySense>` | 0 |  |
| `ViewConeOperation` | class | `TargetOperationComponent` | 1 |  |
| `ViewConeSense` | class | `Sense` | 1 | [Targets and senses](../creatures/targets-and-senses.md): How far inside the creature's `ViewCone` the target is. Only for creatures with `IHasViewCone` (turabada, gotera, babu, dragonfly, phantom). |
| `ViewConeSense.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Creatures.ScriptableObject<ViewConeSense>` | 0 |  |
| `Wyrm` | class | `Agent<Wyrm>` | 14 | [Common creatures](../creatures/common-creatures.md#wyrm), [Creature data](../creatures/creature-data.md): A wyrm lives underground. Its body and colliders are hidden until it emerges. It has no walker: it turns its body in place toward its target. |
| `Xor` | class | `Operator` | 3 |  |

## Alta.Intelligence.Wyrms

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ActiveCatch` | class | `BasicActiveAction<Wyrm, WyrmCatchSettings>` | 2 |  |
| `ActiveDig` | class | `BasicActiveAction<Wyrm, WyrmDigSettings>` | 2 |  |
| `ActiveDodge` | class | `BasicActiveAction<Wyrm, WyrmDodgeSettings>` | 2 |  |
| `ActiveEmerge` | class | `BasicActiveAction<Wyrm, WyrmEmergeSettings>` | 2 |  |
| `ActiveMeleeAttack` | class | `BasicActiveAction<Wyrm, WyrmMeleeSettings>` | 2 |  |
| `ActiveSpin` | class | `BasicActiveAction<Wyrm, WyrmSpinSettings>` | 2 |  |
| `ActiveSpit` | class | `BasicActiveAction<Wyrm, WyrmSpitSettings>` | 2 |  |
| `WyrmCatchSettings` | class | `TimedActionComponent` | 1 |  |
| `WyrmDigSettings` | class | `TimedActionComponent` | 4 |  |
| `WyrmDodgeSettings` | class | `TimedActionComponent` | 1 |  |
| `WyrmEmergeSettings` | class | `TimedActionComponent` | 6 |  |
| `WyrmMeleeSettings` | class | `TimedActionComponent` | 6 |  |
| `WyrmSpinSettings` | class | `ActionComponent` | 4 |  |
| `WyrmSpitSettings` | class | `TimedActionComponent` | 7 |  |

## Alta.Pathfinding

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Director` | class | `MonoBehaviour` | 15 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md#director): Finds its `Navigator` in its parents on `Awake`. |
| `Follower` | class |  | 3 |  |
| `IndependentWalker` | class | `MonoBehaviour` | 2 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): Lets a navigator part of a creature detach from its body and walk on its own (update module "Independent Walker"), then reattach. |
| `Navigator` | class | `MonoBehaviour` | 29 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md#navigator): A `MonoBehaviour` that needs a `Seeker` on the same GameObject. |
| `NormalizedPath` | internal struct |  | 4 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): A path's corners and length, for `NormalizedMove`. |
| `Walker` | class | `MonoBehaviour` | 23 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md#walker): A `MonoBehaviour` with a `FixedUpdate`. Moves `topic` (the creature's `Rigidbody`). |
| `WalkerAnimator` | class | `MonoBehaviour` | 0 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): Sets animator values from `Walker.Updated`. |
| `WalkerState` | struct |  | 6 | [Movement and pathfinding](../creatures/movement-and-pathfinding.md): The struct `Walker.Updated` passes. |
