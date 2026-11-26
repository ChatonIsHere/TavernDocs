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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<MicroTutorialSystemSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MicroTutorialSystemSettings`](/game-api/types/game-other-namespaces/microtutorialsystemsettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialSystemSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-droptags" /><code><Link to="/game-api/types/alta-items/pickuptag">{"PickupTag"}</Link>{"[] DropTags { get; private set; }"}</code> | Pickup tags of held items a player drops when a micro tutorial starts. Other held items are docked to their back. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | When false, the server's `MicroTutorialOrbInjector` spawns no tutorial orbs. Default true. |

## Used in

Members of other types that take, return or hold a `MicroTutorialSystemSettings`:

[`IMicroTutorialSystem.Settings`](/game-api/types/game-other-namespaces/imicrotutorialsystem#m-settings), [`MicroTutorialSystem.Inject`](/game-api/types/game-other-namespaces/microtutorialsystem#m-inject), [`MicroTutorialSystem.Settings`](/game-api/types/game-other-namespaces/microtutorialsystem#m-settings).
