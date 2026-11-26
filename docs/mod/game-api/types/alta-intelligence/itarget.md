---
title: "ITarget"
description: "Something creature AI can target: a creature (through Target) or a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITarget

An **interface** in `Root.Township`, `Alta.Intelligence`.

Something creature AI can target: a creature (through `Target`) or a player. Gives position, health stats, senses and attacks.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITargetPointer`](/mod/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`Agent`](/mod/game-api/types/alta-intelligence/agent), [`Babu`](/mod/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/mod/game-api/types/alta-intelligence/greatergotera), [`IAgent`](/mod/game-api/types/alta-intelligence/iagent), [`IInteractAgent`](/mod/game-api/types/alta-intelligence/iinteractagent), [`Spriggull`](/mod/game-api/types/alta-intelligence/spriggull), [`Target`](/mod/game-api/types/alta-intelligence/target)
- **Documented in** [Targets and senses](/mod/game-api/creatures/targets-and-senses#itarget)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundposition" /><code>{"Vector3 GroundPosition { get; }"}</code> | Position on the ground used for distances. The transform position in the base `Target`. |
| <Link id="m-interactable" /><code><Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" { get; }"}</code> | The `Interactable` on the target, if any. |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; }"}</code> | Whether the target is alive. |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; }"}</code> | Whether the target is set up and usable. |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Display name of the target. |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Current world position. |
| <Link id="m-senses" /><code><Link to="/mod/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Senses { get; }"}</code> | The target's senses (sight, hearing and so on). |
| <Link id="m-statmanager" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | The target's stat manager, from its health object. Can be null. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The target's transform. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks()"}</code> | The attacks this target can make. Empty in the base `Target`. |
| <Link id="m-getdistance" /><code>{"float GetDistance("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> | Distance between ground positions. `yFlexibility` ignores that much height difference. |
| <Link id="m-getsquaredistance" /><code>{"float GetSquareDistance("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> | Squared distance between ground positions, ignoring up to `yFlexibility` of height difference. |
| <Link id="m-getvelocity" /><code>{"float GetVelocity()"}</code> | The target's speed. 0 in the base `Target`. |

## Used in

Members of other types that take, return or hold a `ITarget`:

[`ActionDecider<TAgent>.AddTarget`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-addtarget), [`ActionDecider<TAgent>.CalculatePreferred`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-calculatepreferred), [`ActionDecider<TAgent>.CalculateRequired`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-calculaterequired), [`ActionDecider<TAgent>.possibleTargetHashSet`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-possibletargethashset), [`ActionDecider<TAgent>.possibleTargets`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-possibletargets), [`ActionDecider<TAgent>.PossibleTargets`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-possibletargets-2), [`ActionDecider<TAgent>.RemoveTarget`](/mod/game-api/types/alta-intelligence/actiondecider-tagent#m-removetarget), [`ActionTarget<TAgent>.ActionTarget<TAgent>`](/mod/game-api/types/alta-intelligence/actiontarget-tagent#m-ctor), [`ActionTarget<TAgent>.Alta.Intelligence.IActionTarget.Target`](/mod/game-api/types/alta-intelligence/actiontarget-tagent#m-alta-intelligence-iactiontarget-target), [`ActionTarget<TAgent>.Target`](/mod/game-api/types/alta-intelligence/actiontarget-tagent#m-target), [`Agent.AddTarget`](/mod/game-api/types/alta-intelligence/agent#m-addtarget), [`Agent.DoAction`](/mod/game-api/types/alta-intelligence/agent#m-doaction), [`Agent.Hurt`](/mod/game-api/types/alta-intelligence/agent#m-hurt), [`Agent.hurtKeys`](/mod/game-api/types/alta-intelligence/agent#m-hurtkeys), [`Agent.ignoreTimers`](/mod/game-api/types/alta-intelligence/agent#m-ignoretimers), [`Agent.providedTargets`](/mod/game-api/types/alta-intelligence/agent#m-providedtargets), [`Agent.RemoveTarget`](/mod/game-api/types/alta-intelligence/agent#m-removetarget), [`Agent.Target`](/mod/game-api/types/alta-intelligence/agent#m-target), [`Agent.tempRemoving`](/mod/game-api/types/alta-intelligence/agent#m-tempremoving), [`Agent<TThis>.DoAction`](/mod/game-api/types/alta-intelligence/agent-tthis#m-doaction), [`Agent<TThis>.Target`](/mod/game-api/types/alta-intelligence/agent-tthis#m-target), [`BasicSense.Get`](/mod/game-api/types/alta-intelligence/basicsense#m-get), [`Chance.Evaluate`](/mod/game-api/types/alta-intelligence/chance#m-evaluate), [`CreateTargetOperation.Formula`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-formula), [`DebugResults.results`](/mod/game-api/types/alta-intelligence/debugresults#m-results), [`DistanceSense.Get`](/mod/game-api/types/alta-intelligence/distancesense#m-get), [`DistanceSense.GetInverseLerp`](/mod/game-api/types/alta-intelligence/distancesense#m-getinverselerp), [`DistanceSquaredSense.Get`](/mod/game-api/types/alta-intelligence/distancesquaredsense#m-get), [`Facing2DSense.Get`](/mod/game-api/types/alta-intelligence/facing2dsense#m-get), [`Facing3DSense.Get`](/mod/game-api/types/alta-intelligence/facing3dsense#m-get), [`FailTargetOperation.Evaluate`](/mod/game-api/types/alta-intelligence/failtargetoperation#m-evaluate), [`Formula<T>.evaluate`](/mod/game-api/types/alta-intelligence/formula-t#m-evaluate), [`Formula<T>.Evaluate`](/mod/game-api/types/alta-intelligence/formula-t#m-evaluate-2), [`Formula<T>.Formula<T>`](/mod/game-api/types/alta-intelligence/formula-t#m-ctor), [`Grounded.Evaluate`](/mod/game-api/types/alta-intelligence/grounded#m-evaluate), [`HurtSense.Get`](/mod/game-api/types/alta-intelligence/hurtsense#m-get), [`IActionDecider.AddTarget`](/mod/game-api/types/alta-intelligence/iactiondecider#m-addtarget), [`IActionDecider.PossibleTargets`](/mod/game-api/types/alta-intelligence/iactiondecider#m-possibletargets), [`IActionDecider.RemoveTarget`](/mod/game-api/types/alta-intelligence/iactiondecider#m-removetarget), [`IActionTarget.Target`](/mod/game-api/types/alta-intelligence/iactiontarget#m-target), [`IAgent.AddTarget`](/mod/game-api/types/alta-intelligence/iagent#m-addtarget), [`IAgent.DoAction`](/mod/game-api/types/alta-intelligence/iagent#m-doaction), [`IAgent.Hurt`](/mod/game-api/types/alta-intelligence/iagent#m-hurt), [`IAgent.RemoveTarget`](/mod/game-api/types/alta-intelligence/iagent#m-removetarget), [`IAgent.Target`](/mod/game-api/types/alta-intelligence/iagent#m-target), [`InverseLerpSenseSelf.Evaluate`](/mod/game-api/types/alta-intelligence/inverselerpsenseself#m-evaluate), [`InverseLerpSenseTarget.Evaluate`](/mod/game-api/types/alta-intelligence/inverselerpsensetarget#m-evaluate), [`ITargetExtensions.Exists`](/mod/game-api/types/alta-intelligence/itargetextensions#m-exists), [`ITargetPointer.Target`](/mod/game-api/types/alta-intelligence/itargetpointer#m-target), [`Lifetime.Evaluate`](/mod/game-api/types/alta-intelligence/lifetime#m-evaluate), [`RaycastGrounded.Evaluate`](/mod/game-api/types/alta-intelligence/raycastgrounded#m-evaluate), [`RVOBlockedValue.Evaluate`](/mod/game-api/types/alta-intelligence/rvoblockedvalue#m-evaluate), [`SameTarget.Evaluate`](/mod/game-api/types/alta-intelligence/sametarget#m-evaluate), [`Schmeechee.Operation.Evaluate`](/mod/game-api/types/alta-intelligence/schmeechee-operation#m-evaluate), [`SeedSpray.Alta.Intelligence.ITargetPointer.Target`](/mod/game-api/types/alta-intelligence/seedspray#m-alta-intelligence-itargetpointer-target), [`SeedSpray.Shooter`](/mod/game-api/types/alta-intelligence/seedspray#m-shooter), [`Sense.Get`](/mod/game-api/types/alta-intelligence/sense#m-get), [`Sense.GetInverseLerp`](/mod/game-api/types/alta-intelligence/sense#m-getinverselerp), [`StatValue.Evaluate`](/mod/game-api/types/alta-intelligence/statvalue#m-evaluate), [`Target.Alta.Intelligence.ITargetPointer.Target`](/mod/game-api/types/alta-intelligence/target#m-alta-intelligence-itargetpointer-target) and 17 more.
