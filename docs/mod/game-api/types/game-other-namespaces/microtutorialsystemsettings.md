---
title: "MicroTutorialSystemSettings"
description: "Global settings asset for the micro tutorial system (the tutorial orbs)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialSystemSettings

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Global settings asset for the micro tutorial system (the tutorial orbs). Get it with `GlobalSettings<MicroTutorialSystemSettings>.Instance`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<MicroTutorialSystemSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MicroTutorialSystemSettings`](/mod/game-api/types/game-other-namespaces/microtutorialsystemsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSystemSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-droptags" /><code><Link to="/mod/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"[] DropTags { get; private set; }"}</code> | <span className="api-desc">Pickup tags of held items a player drops when a micro tutorial starts. Other held items are docked to their back.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">When false, the server's `MicroTutorialOrbInjector` spawns no tutorial orbs. Default true.</span> |

## Used in

Members of other types that take, return or hold a `MicroTutorialSystemSettings`:

<div className="api-used-in">

[`IMicroTutorialSystem.Settings`](/mod/game-api/types/game-other-namespaces/imicrotutorialsystem#m-settings), [`MicroTutorialSystem.Inject`](/mod/game-api/types/game-other-namespaces/microtutorialsystem#m-inject), [`MicroTutorialSystem.Settings`](/mod/game-api/types/game-other-namespaces/microtutorialsystem#m-settings).

</div>
