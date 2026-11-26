---
title: "AltaEvent<T, UnityEventT>"
description: "A serializable event with one argument that fires both an inspector UnityEvent and a C# event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaEvent&lt;T, UnityEventT&gt;

A **class** in `Root.Township`, the global namespace.

A serializable event with one argument that fires both an inspector UnityEvent and a C# event. Exceptions in either are caught and logged, so one bad handler does not stop the other side.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`IAltaEvent<T>`](/mod/game-api/types/global-i-l/ialtaevent-t), [`IAltaEventValidation`](/mod/game-api/types/global-i-l/ialtaeventvalidation)
- **Derived types** [`CookableEvent`](/mod/game-api/types/alta-crafting/cookableevent), [`JointPointEvent`](/mod/game-api/types/alta-crafting/jointpointevent), [`DeathEvent`](/mod/game-api/types/alta-intelligence/deathevent), [`ImpactHitEvent`](/mod/game-api/types/alta-items/impacthitevent), [`KeyItemEvent`](/mod/game-api/types/alta-items/keyitemevent), [`LockableEvent`](/mod/game-api/types/alta-items/lockableevent), [`LockEvent`](/mod/game-api/types/alta-items/lockevent), [`LockItemEvent`](/mod/game-api/types/alta-items/lockitemevent), [`ModifiableStaticEvent`](/mod/game-api/types/alta-networking/modifiablestaticevent), [`PopulationEvent`](/mod/game-api/types/alta-world-generation/populationevent), [`AttachmentEvent`](/mod/game-api/types/alta-crafting/attachmentevent), [`WoodcutTreeEvent`](/mod/game-api/types/alta-crafting/woodcuttreeevent), [`WoodcutTreeModelEvent`](/mod/game-api/types/alta-crafting/woodcuttreemodelevent), [`ArrowEvent`](/mod/game-api/types/global-a-b/arrowevent), [`BoolEvent`](/mod/game-api/types/global-a-b/boolevent), [`BreakOnImpact.TransformProxyEvent`](/mod/game-api/types/global-a-b/breakonimpact-transformproxyevent), [`BuildingAnimationEvent`](/mod/game-api/types/global-a-b/buildinganimationevent), [`BuildupPickupEvent`](/mod/game-api/types/global-a-b/builduppickupevent), [`CharacterControllerEvent`](/mod/game-api/types/global-c-d/charactercontrollerevent), [`ColliderAltaEvent`](/mod/game-api/types/global-c-d/collideraltaevent), [`ColorEvent`](/mod/game-api/types/global-c-d/colorevent), [`EdibleEvent`](/mod/game-api/types/global-e-h/edibleevent), [`EmbeddableEvent`](/mod/game-api/types/global-e-h/embeddableevent), [`FloatEvent`](/mod/game-api/types/global-e-h/floatevent), [`HandleValueEvent`](/mod/game-api/types/global-e-h/handlevalueevent), [`HealthObjectEvent`](/mod/game-api/types/global-e-h/healthobjectevent), [`IntEvent`](/mod/game-api/types/global-i-l/intevent), [`PickupEvent`](/mod/game-api/types/global-p/pickupevent), [`PlayerEvent`](/mod/game-api/types/global-p/playerevent), [`PositionEvent`](/mod/game-api/types/global-p/positionevent), [`ProjectileAltaEvent`](/mod/game-api/types/global-p/projectilealtaevent), [`PullEvent`](/mod/game-api/types/global-p/pullevent), [`ServerElementEvent`](/mod/game-api/types/global-s/serverelementevent), [`ToggleEvent`](/mod/game-api/types/global-t-x/toggleevent), [`TransformEvent`](/mod/game-api/types/global-t-x/transformevent), [`TriggerEnterEvents.ColliderEvent`](/mod/game-api/types/global-t-x/triggerenterevents-colliderevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaEvent()"}</code> | <span className="api-desc">Creates an `AltaEvent` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Shared `AltaEvent` logger, used when a handler throws.</span> |
| <Link id="m-triggered" /><code>{"private UnityEventT triggered"}</code> | <span className="api-desc">The serialized inspector `UnityEvent`, invoked before the C# `Invoked` event.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-haslisteners" /><code>{"bool HasListeners { get; }"}</code> | <span className="api-desc">True if the inspector UnityEvent has persistent listeners. C# handlers added with `+=` do not count.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ialtaeventvalidation-eventbase" /><code>{"private UnityEventBase IAltaEventValidation.EventBase { get; }"}</code> | <span className="api-desc">Exposes the inspector `UnityEvent` so `Validate` can clean it.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-invoked" /><code>{"event Action<T> Invoked"}</code> | <span className="api-desc">The C# side of the event.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke(T argument)"}</code> | <span className="api-desc">Fires the inspector event, then the C# `Invoked` event, logging any exception from each.</span> |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> op_Addition("}<Link to="/mod/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> altaEvent, Action<T> eventHandler)"}</code> | <span className="api-desc">`+` adds a C# handler to `Invoked`.</span> |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> op_Subtraction("}<Link to="/mod/game-api/types/global-a-b/altaevent-t-unityeventt">{"AltaEvent"}</Link>{"<T, UnityEventT> altaEvent, Action<T> eventHandler)"}</code> | <span className="api-desc">`-` removes a C# handler from `Invoked`.</span> |
