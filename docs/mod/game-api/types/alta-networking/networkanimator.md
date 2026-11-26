---
title: "NetworkAnimator"
description: "Syncs chosen Animator parameters (floats, ints, bools, triggers, layer weights) from the server to clients as streamed state, and sends the current..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAnimator

A **class** in `Root.Township`, `Alta.Networking.Animation`.

Syncs chosen Animator parameters (floats, ints, bools, triggers, layer weights) from the server to clients as streamed state, and sends the current animation states to joining players. Set values through the `Get` methods' objects on the server.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`FloatParameterType`](/mod/game-api/types/alta-networking/networkanimator-floatparametertype)
- **Attributes** `ProfileNetworkSerialized`, `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared profiling timer.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared profiling timer.</span> |

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boolmap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{"> boolMap"}</code> | <span className="api-desc">Bool parameters by name, used by `GetBool`.</span> |
| <Link id="m-bools" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{"> bools"}</code> | <span className="api-desc">Synced bool parameters, set in the inspector.</span> |
| <Link id="m-floatlerpmap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedfloatlerp">{"AnimatedFloatLerp"}</Link>{"> floatLerpMap"}</code> | <span className="api-desc">Lerped float parameters by name, used by `GetFloatLerp`.</span> |
| <Link id="m-floatmap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> floatMap"}</code> | <span className="api-desc">Float parameters by name, used by `GetFloat`.</span> |
| <Link id="m-floats" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{"> floats"}</code> | <span className="api-desc">Synced float parameters, set in the inspector.</span> |
| <Link id="m-floatslerp" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedfloatlerp">{"AnimatedFloatLerp"}</Link>{"> floatsLerp"}</code> | <span className="api-desc">Synced float parameters that clients lerp toward, set in the inspector.</span> |
| <Link id="m-intmap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedint">{"AnimatedInt"}</Link>{"> intMap"}</code> | <span className="api-desc">Int parameters by name, used by `GetInt`.</span> |
| <Link id="m-ints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedint">{"AnimatedInt"}</Link>{"> ints"}</code> | <span className="api-desc">Synced int parameters, set in the inspector.</span> |
| <Link id="m-isawake" /><code>{"private bool isAwake"}</code> | <span className="api-desc">Set once `EnsureAwake` has built the maps.</span> |
| <Link id="m-layerlerpmap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{"> layerLerpMap"}</code> | <span className="api-desc">Lerped layer weights by name, used by `GetLayerWeightLerp`.</span> |
| <Link id="m-layermap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> layerMap"}</code> | <span className="api-desc">Layer weights by name, used by `GetLayerWeight`.</span> |
| <Link id="m-layers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{"> layers"}</code> | <span className="api-desc">Synced layer weights, set in the inspector.</span> |
| <Link id="m-layerslerp" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{"> layersLerp"}</code> | <span className="api-desc">Synced layer weights that clients lerp toward, set in the inspector.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger, used for missing parameter errors.</span> |
| <Link id="m-syncstart" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStart"}</code> | <span className="api-desc">Method sync made in `Initialize` that sends the animator state to a player on connect.</span> |
| <Link id="m-triggermap" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{"> triggerMap"}</code> | <span className="api-desc">Trigger parameters by name, used by `GetTrigger`.</span> |
| <Link id="m-triggers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{"> triggers"}</code> | <span className="api-desc">Synced trigger parameters, set in the inspector.</span> |
| <Link id="m-unityanimator" /><code>{"private Animator unityAnimator"}</code> | <span className="api-desc">Backing field for `Animator`, the Unity Animator on this object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"Animator Animator { get; }"}</code> | <span className="api-desc">The Unity Animator on this object.</span> |
| <Link id="m-haschanged" /><code>{"bool HasChanged { get; private set; }"}</code> | <span className="api-desc">True if any synced value changed and needs sending.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Caps this behaviour's serialized data at 512 bits.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared `prepareForWriteTimer` profiling counter.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared `serializeTimer` profiling counter.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ensureawake" /><code>{"void EnsureAwake()"}</code> | <span className="api-desc">Builds the parameter lookups, logging any listed parameter the animator does not have. Safe to call more than once.</span> |
| <Link id="m-forcechanged" /><code>{"void ForceChanged()"}</code> | <span className="api-desc">Marks the parameters as changed so they are sent.</span> |
| <Link id="m-getbool" /><code><Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GetBool(string name)"}</code> | <span className="api-desc">The synced bool parameter with this name. Throws if not listed.</span> |
| <Link id="m-getfloat" /><code><Link to="/mod/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" GetFloat(string name)"}</code> | <span className="api-desc">The synced float parameter with this name. Throws if not listed.</span> |
| <Link id="m-getfloatlerp" /><code><Link to="/mod/game-api/types/alta-networking/animatedfloatlerp">{"AnimatedFloatLerp"}</Link>{" GetFloatLerp(string name)"}</code> | <span className="api-desc">The synced smoothed float parameter with this name. Throws if not listed.</span> |
| <Link id="m-getint" /><code><Link to="/mod/game-api/types/alta-networking/animatedint">{"AnimatedInt"}</Link>{" GetInt(string name)"}</code> | <span className="api-desc">The synced int parameter with this name. Throws if not listed.</span> |
| <Link id="m-getlayerweight" /><code><Link to="/mod/game-api/types/alta-networking/animatedlayerweight">{"AnimatedLayerWeight"}</Link>{" GetLayerWeight(string name)"}</code> | <span className="api-desc">The synced layer weight with this name. Throws if not listed.</span> |
| <Link id="m-getlayerweightlerp" /><code><Link to="/mod/game-api/types/alta-networking/animatedlayerweightlerp">{"AnimatedLayerWeightLerp"}</Link>{" GetLayerWeightLerp(string name)"}</code> | <span className="api-desc">The synced smoothed layer weight with this name. Throws if not listed.</span> |
| <Link id="m-gettrigger" /><code><Link to="/mod/game-api/types/alta-networking/animatedtrigger">{"AnimatedTrigger"}</Link>{" GetTrigger(string name)"}</code> | <span className="api-desc">The synced trigger with this name. Throws if not listed.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the message that sends current animation states.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player each layer's current state and time.</span> |
| <Link id="m-updatechanged" /><code>{"void UpdateChanged()"}</code> | <span className="api-desc">Recomputes `HasChanged` from the parameters.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `EnsureAwake` to build the parameter maps.</span> |
| <Link id="m-logmissingparameter" /><code>{"private void LogMissingParameter(string parameterType, string parameterName)"}</code> | <span className="api-desc">Logs an error when a configured parameter isn't on the Animator.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build bake hook: initialises every configured parameter against the Animator, logging missing ones.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Returns `HasChanged`, so the animator only writes when a parameter changed.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads floats, layers, ints and lerped values, then bools and triggers behind an any-set flag.</span> |
| <Link id="m-syncstart-2" /><code>{"private void SyncStart("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync: sends each layer's current state hash and normalized time so a joining client plays the same state.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Steps every lerped float and lerped layer weight toward its target.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NetworkAnimator`:

<div className="api-used-in">

[`Agent.animator`](/mod/game-api/types/alta-intelligence/agent#m-animator), [`Agent.NetworkAnimator`](/mod/game-api/types/alta-intelligence/agent#m-networkanimator), [`AttackDirectionAnimationBoolSettings.BoolAnimation.Setup`](/mod/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation#m-setup), [`AttackDirectionAnimationFloatSettings.FloatAnimation.Setup`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation#m-setup), [`AttackDirectionAnimationLayerLerpSettings.LayerAnimation.Setup`](/mod/game-api/types/alta-intelligence/attackdirectionanimationlayerlerpsettings-layeranimation#m-setup), [`AttackDirectionAnimationSettings.GetNewAnimation`](/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings#m-getnewanimation), [`EmptyAttackDirectionAnimation.Setup`](/mod/game-api/types/alta-intelligence/emptyattackdirectionanimation#m-setup), [`IAgent.NetworkAnimator`](/mod/game-api/types/alta-intelligence/iagent#m-networkanimator), [`IAttackDirectionAnimation.Setup`](/mod/game-api/types/alta-intelligence/iattackdirectionanimation#m-setup), [`ConsumableLock.animator`](/mod/game-api/types/alta-items/consumablelock#m-animator), [`AnimatedBool.Initialize`](/mod/game-api/types/alta-networking/animatedbool#m-initialize), [`AnimatedBoolAccess.animator`](/mod/game-api/types/alta-networking/animatedboolaccess#m-animator), [`AnimatedFloat.Initialize`](/mod/game-api/types/alta-networking/animatedfloat#m-initialize), [`AnimatedInt.Initialize`](/mod/game-api/types/alta-networking/animatedint#m-initialize), [`AnimatedLayerWeight.Initialize`](/mod/game-api/types/alta-networking/animatedlayerweight#m-initialize), [`AnimatedValue<T>.animator`](/mod/game-api/types/alta-networking/animatedvalue-t#m-animator), [`AnimatedValue<T>.Animator`](/mod/game-api/types/alta-networking/animatedvalue-t#m-animator-2), [`AnimatedValue<T>.Initialize`](/mod/game-api/types/alta-networking/animatedvalue-t#m-initialize), [`WalkerAnimator.animator`](/mod/game-api/types/alta-intelligence/walkeranimator#m-animator), [`MediumBird.Animator`](/mod/game-api/types/global-m-o/mediumbird#m-animator), [`RepairBox.boxAnimation`](/mod/game-api/types/global-q-r/repairbox#m-boxanimation).

</div>
