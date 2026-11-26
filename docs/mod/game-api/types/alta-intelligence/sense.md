---
title: "Sense"
description: "Asset for something an AI agent can measure about a target (distance, visibility and so on) as a number."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Sense

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Asset for something an AI agent can measure about a target (distance, visibility and so on) as a number. Sense assets are loaded from `Resources/Senses`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`BasicSense`](/mod/game-api/types/alta-intelligence/basicsense), [`DistanceSense`](/mod/game-api/types/alta-intelligence/distancesense), [`DistanceSquaredSense`](/mod/game-api/types/alta-intelligence/distancesquaredsense), [`Facing2DSense`](/mod/game-api/types/alta-intelligence/facing2dsense), [`Facing3DSense`](/mod/game-api/types/alta-intelligence/facing3dsense), [`HurtSense`](/mod/game-api/types/alta-intelligence/hurtsense), [`VelocitySense`](/mod/game-api/types/alta-intelligence/velocitysense), [`ViewConeSense`](/mod/game-api/types/alta-intelligence/viewconesense)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Sense()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-all" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"> all"}</code> | <span className="api-desc">Every sense registered by `Initialize`. Exposed as `All`.</span> |
| <Link id="m-oldequivalent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" oldEquivalent"}</code> | <span className="api-desc">The legacy `SenseOld` enum value this sense replaces, or `None`.</span> |
| <Link id="m-oldmapping" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{", "}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"> oldMapping"}</code> | <span className="api-desc">Maps legacy `SenseOld` values to their sense assets, for `GetSense`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-all-2" /><code>{"static List<"}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"> All { get; }"}</code> | <span className="api-desc">Every sense that has been initialized.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"abstract float Get("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">The sense's value for a target, from the asking agent's point of view.</span> |
| <Link id="m-getinverselerp" /><code>{"virtual float GetInverseLerp("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" requester, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target, float from, float to)"}</code> | <span className="api-desc">The value mapped to 0 to 1 between `from` and `to`, clamped.</span> |
| <Link id="m-getsense" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" GetSense("}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" old)"}</code> | <span className="api-desc">The sense that replaces an old `SenseOld` enum value, or null.</span> |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | <span className="api-desc">Adds the sense to `All` and maps its old enum value.</span> |
| <Link id="m-initializeall" /><code>{"static void InitializeAll()"}</code> | <span className="api-desc">Loads every sense under `Resources/Senses` and initializes them.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: re-registers the sense and renames the asset to match its old enum value if it has one.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Sense`:

<div className="api-used-in">

[`CreateTargetOperation.Sense`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-sense-2), [`InverseLerpSenseSelf.InverseLerpSenseSelf`](/mod/game-api/types/alta-intelligence/inverselerpsenseself#m-ctor), [`InverseLerpSenseSelf.sense`](/mod/game-api/types/alta-intelligence/inverselerpsenseself#m-sense), [`InverseLerpSenseTarget.InverseLerpSenseTarget`](/mod/game-api/types/alta-intelligence/inverselerpsensetarget#m-ctor), [`InverseLerpSenseTarget.sense`](/mod/game-api/types/alta-intelligence/inverselerpsensetarget#m-sense), [`SenseOperation.Migrate`](/mod/game-api/types/alta-intelligence/senseoperation#m-migrate), [`SenseOperation.sense`](/mod/game-api/types/alta-intelligence/senseoperation#m-sense).

</div>
