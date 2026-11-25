---
title: "ITarget"
description: "Anything a creature can consider. Target implements it, so every creature is also a target for other creatures."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITarget

An **interface** in `Root.Township`, `Alta.Intelligence`.

Anything a creature can consider. `Target` implements it, so every creature is also a target for other creatures.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`ITargetPointer`](/game-api/types/alta-intelligence/itargetpointer)
- **Derived types** [`Agent`](/game-api/types/alta-intelligence/agent), [`Babu`](/game-api/types/alta-intelligence/babu), [`GreaterGotera`](/game-api/types/alta-intelligence/greatergotera), [`IAgent`](/game-api/types/alta-intelligence/iagent), [`IInteractAgent`](/game-api/types/alta-intelligence/iinteractagent), [`Spriggull`](/game-api/types/alta-intelligence/spriggull), [`Target`](/game-api/types/alta-intelligence/target)
- **Documented in** [Targets and senses](/game-api/creatures/targets-and-senses#itarget)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-groundposition" /><code>{"Vector3 GroundPosition { get; }"}</code> |  |
| <Link id="m-interactable" /><code><Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isalive" /><code>{"bool IsAlive { get; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> |  |
| <Link id="m-senses" /><code><Link to="/game-api/types/alta-intelligence/basicsenseset">{"BasicSenseSet"}</Link>{" Senses { get; }"}</code> |  |
| <Link id="m-statmanager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attacks" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-intelligence/attackparameters">{"AttackParameters"}</Link>{"> Attacks()"}</code> |  |
| <Link id="m-getdistance" /><code>{"float GetDistance("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> |  |
| <Link id="m-getsquaredistance" /><code>{"float GetSquareDistance("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" other, float yFlexibility = 0)"}</code> |  |
| <Link id="m-getvelocity" /><code>{"float GetVelocity()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ITarget`:

[`ActionDecider<TAgent>.AddTarget`](/game-api/types/alta-intelligence/actiondecider-tagent#m-addtarget), [`ActionDecider<TAgent>.CalculatePreferred`](/game-api/types/alta-intelligence/actiondecider-tagent#m-calculatepreferred), [`ActionDecider<TAgent>.CalculateRequired`](/game-api/types/alta-intelligence/actiondecider-tagent#m-calculaterequired), [`ActionDecider<TAgent>.possibleTargetHashSet`](/game-api/types/alta-intelligence/actiondecider-tagent#m-possibletargethashset), [`ActionDecider<TAgent>.possibleTargets`](/game-api/types/alta-intelligence/actiondecider-tagent#m-possibletargets), [`ActionDecider<TAgent>.PossibleTargets`](/game-api/types/alta-intelligence/actiondecider-tagent#m-possibletargets-2), [`ActionDecider<TAgent>.RemoveTarget`](/game-api/types/alta-intelligence/actiondecider-tagent#m-removetarget), [`ActionTarget<TAgent>.ActionTarget<TAgent>`](/game-api/types/alta-intelligence/actiontarget-tagent#m-ctor), [`ActionTarget<TAgent>.Alta.Intelligence.IActionTarget.Target`](/game-api/types/alta-intelligence/actiontarget-tagent#m-alta-intelligence-iactiontarget-target), [`ActionTarget<TAgent>.Target`](/game-api/types/alta-intelligence/actiontarget-tagent#m-target), [`Agent.AddTarget`](/game-api/types/alta-intelligence/agent#m-addtarget), [`Agent.DoAction`](/game-api/types/alta-intelligence/agent#m-doaction), [`Agent.Hurt`](/game-api/types/alta-intelligence/agent#m-hurt), [`Agent.hurtKeys`](/game-api/types/alta-intelligence/agent#m-hurtkeys), [`Agent.ignoreTimers`](/game-api/types/alta-intelligence/agent#m-ignoretimers), [`Agent.providedTargets`](/game-api/types/alta-intelligence/agent#m-providedtargets), [`Agent.RemoveTarget`](/game-api/types/alta-intelligence/agent#m-removetarget), [`Agent.Target`](/game-api/types/alta-intelligence/agent#m-target), [`Agent.tempRemoving`](/game-api/types/alta-intelligence/agent#m-tempremoving), [`Agent<TThis>.DoAction`](/game-api/types/alta-intelligence/agent-tthis#m-doaction), [`Agent<TThis>.Target`](/game-api/types/alta-intelligence/agent-tthis#m-target), [`BasicSense.Get`](/game-api/types/alta-intelligence/basicsense#m-get), [`Chance.Evaluate`](/game-api/types/alta-intelligence/chance#m-evaluate), [`CreateTargetOperation.Formula`](/game-api/types/alta-intelligence/createtargetoperation#m-formula), [`DebugResults.results`](/game-api/types/alta-intelligence/debugresults#m-results), [`DistanceSense.Get`](/game-api/types/alta-intelligence/distancesense#m-get), [`DistanceSense.GetInverseLerp`](/game-api/types/alta-intelligence/distancesense#m-getinverselerp), [`DistanceSquaredSense.Get`](/game-api/types/alta-intelligence/distancesquaredsense#m-get), [`Facing2DSense.Get`](/game-api/types/alta-intelligence/facing2dsense#m-get), [`Facing3DSense.Get`](/game-api/types/alta-intelligence/facing3dsense#m-get), [`FailTargetOperation.Evaluate`](/game-api/types/alta-intelligence/failtargetoperation#m-evaluate), [`Formula<T>.evaluate`](/game-api/types/alta-intelligence/formula-t#m-evaluate), [`Formula<T>.Evaluate`](/game-api/types/alta-intelligence/formula-t#m-evaluate-2), [`Formula<T>.Formula<T>`](/game-api/types/alta-intelligence/formula-t#m-ctor), [`Grounded.Evaluate`](/game-api/types/alta-intelligence/grounded#m-evaluate), [`HurtSense.Get`](/game-api/types/alta-intelligence/hurtsense#m-get), [`IActionDecider.AddTarget`](/game-api/types/alta-intelligence/iactiondecider#m-addtarget), [`IActionDecider.PossibleTargets`](/game-api/types/alta-intelligence/iactiondecider#m-possibletargets), [`IActionDecider.RemoveTarget`](/game-api/types/alta-intelligence/iactiondecider#m-removetarget), [`IActionTarget.Target`](/game-api/types/alta-intelligence/iactiontarget#m-target), [`IAgent.AddTarget`](/game-api/types/alta-intelligence/iagent#m-addtarget), [`IAgent.DoAction`](/game-api/types/alta-intelligence/iagent#m-doaction), [`IAgent.Hurt`](/game-api/types/alta-intelligence/iagent#m-hurt), [`IAgent.RemoveTarget`](/game-api/types/alta-intelligence/iagent#m-removetarget), [`IAgent.Target`](/game-api/types/alta-intelligence/iagent#m-target), [`InverseLerpSenseSelf.Evaluate`](/game-api/types/alta-intelligence/inverselerpsenseself#m-evaluate), [`InverseLerpSenseTarget.Evaluate`](/game-api/types/alta-intelligence/inverselerpsensetarget#m-evaluate), [`ITargetExtensions.Exists`](/game-api/types/alta-intelligence/itargetextensions#m-exists), [`ITargetPointer.Target`](/game-api/types/alta-intelligence/itargetpointer#m-target), [`Lifetime.Evaluate`](/game-api/types/alta-intelligence/lifetime#m-evaluate), [`RaycastGrounded.Evaluate`](/game-api/types/alta-intelligence/raycastgrounded#m-evaluate), [`RVOBlockedValue.Evaluate`](/game-api/types/alta-intelligence/rvoblockedvalue#m-evaluate), [`SameTarget.Evaluate`](/game-api/types/alta-intelligence/sametarget#m-evaluate), [`Schmeechee.Operation.Evaluate`](/game-api/types/alta-intelligence/schmeechee-operation#m-evaluate), [`SeedSpray.Alta.Intelligence.ITargetPointer.Target`](/game-api/types/alta-intelligence/seedspray#m-alta-intelligence-itargetpointer-target), [`SeedSpray.Shooter`](/game-api/types/alta-intelligence/seedspray#m-shooter), [`Sense.Get`](/game-api/types/alta-intelligence/sense#m-get), [`Sense.GetInverseLerp`](/game-api/types/alta-intelligence/sense#m-getinverselerp), [`StatValue.Evaluate`](/game-api/types/alta-intelligence/statvalue#m-evaluate), [`Target.Alta.Intelligence.ITargetPointer.Target`](/game-api/types/alta-intelligence/target#m-alta-intelligence-itargetpointer-target) and 17 more.
