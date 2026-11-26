---
title: "AltaEvent<T, UnityEventT>"
description: "A serializable event with one argument that fires both an inspector UnityEvent and a C# event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent&lt;T, UnityEventT&gt;

A **class** in `Root.Township`, no namespace.

A serializable event with one argument that fires both an inspector UnityEvent and a C# event. Exceptions in either are caught and logged, so one bad handler does not stop the other side.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEvent<T>`](/game-api/types/global-i-l/ialtaevent-t), [`IAltaEventValidation`](/game-api/types/global-i-l/ialtaeventvalidation)
- **Derived types** [`CookableEvent`](/game-api/types/alta-crafting/cookableevent), [`JointPointEvent`](/game-api/types/alta-crafting/jointpointevent), [`DeathEvent`](/game-api/types/alta-intelligence/deathevent), [`ImpactHitEvent`](/game-api/types/alta-items/impacthitevent), [`KeyItemEvent`](/game-api/types/alta-items/keyitemevent), [`LockableEvent`](/game-api/types/alta-items/lockableevent), [`LockEvent`](/game-api/types/alta-items/lockevent), [`LockItemEvent`](/game-api/types/alta-items/lockitemevent), [`ModifiableStaticEvent`](/game-api/types/alta-networking/modifiablestaticevent), [`PopulationEvent`](/game-api/types/alta-world-generation/populationevent), [`AttachmentEvent`](/game-api/types/alta-crafting/attachmentevent), [`WoodcutTreeEvent`](/game-api/types/alta-crafting/woodcuttreeevent), [`WoodcutTreeModelEvent`](/game-api/types/alta-crafting/woodcuttreemodelevent), [`ArrowEvent`](/game-api/types/global-a-b/arrowevent), [`BoolEvent`](/game-api/types/global-a-b/boolevent), [`BreakOnImpact.TransformProxyEvent`](/game-api/types/global-a-b/breakonimpact-transformproxyevent), [`BuildingAnimationEvent`](/game-api/types/global-a-b/buildinganimationevent), [`BuildupPickupEvent`](/game-api/types/global-a-b/builduppickupevent), [`CharacterControllerEvent`](/game-api/types/global-c-d/charactercontrollerevent), [`ColliderAltaEvent`](/game-api/types/global-c-d/collideraltaevent), [`ColorEvent`](/game-api/types/global-c-d/colorevent), [`EdibleEvent`](/game-api/types/global-e-h/edibleevent), [`EmbeddableEvent`](/game-api/types/global-e-h/embeddableevent), [`FloatEvent`](/game-api/types/global-e-h/floatevent), [`HandleValueEvent`](/game-api/types/global-e-h/handlevalueevent), [`HealthObjectEvent`](/game-api/types/global-e-h/healthobjectevent), [`IntEvent`](/game-api/types/global-i-l/intevent), [`PickupEvent`](/game-api/types/global-p/pickupevent), [`PlayerEvent`](/game-api/types/global-p/playerevent), [`PositionEvent`](/game-api/types/global-p/positionevent), [`ProjectileAltaEvent`](/game-api/types/global-p/projectilealtaevent), [`PullEvent`](/game-api/types/global-p/pullevent), [`ServerElementEvent`](/game-api/types/global-s/serverelementevent), [`ToggleEvent`](/game-api/types/global-t-x/toggleevent), [`TransformEvent`](/game-api/types/global-t-x/transformevent), [`TriggerEnterEvents.ColliderEvent`](/game-api/types/global-t-x/triggerenterevents-colliderevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaEvent()"}</code> | Creates an `AltaEvent` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Shared `AltaEvent` logger, used when a handler throws. |
| <Link id="m-triggered" /><code>{"private UnityEventT triggered"}</code> | The serialized inspector `UnityEvent`, invoked before the C# `Invoked` event. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haslisteners" /><code>{"bool HasListeners { get; }"}</code> | True if the inspector UnityEvent has persistent listeners. C# handlers added with `+=` do not count. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ialtaeventvalidation-eventbase" /><code>{"private UnityEventBase IAltaEventValidation.EventBase { get; }"}</code> | Exposes the inspector `UnityEvent` so `Validate` can clean it. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<T> Invoked"}</code> | The C# side of the event. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(T argument)"}</code> | Fires the inspector event, then the C# `Invoked` event, logging any exception from each. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> op_Addition("}<Link to="/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> altaEvent, Action<T> eventHandler)"}</code> | `+` adds a C# handler to `Invoked`. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> op_Subtraction("}<Link to="/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> altaEvent, Action<T> eventHandler)"}</code> | `-` removes a C# handler from `Invoked`. |
