---
title: "MicroTutorialFaceOrbSpawnSettings"
description: "Global settings listing where micro tutorial orbs are injected."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialFaceOrbSpawnSettings

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Global settings listing where micro tutorial orbs are injected. Read by `MicroTutorialOrbInjector`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<MicroTutorialFaceOrbSpawnSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`MicroTutorialFaceOrbSpawnSettings`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFaceOrbSpawnSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allorbinjectordata" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/orbinjectordata">{"OrbInjectorData"}</Link>{"> allOrbInjectorData"}</code> | Orb injector entries, each with a tutorial and spawn point. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getallorbinjectordata" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/game-other-namespaces/orbinjectordata">{"OrbInjectorData"}</Link>{"> GetAllOrbInjectorData()"}</code> | All orb injector entries. |

## Used in

Members of other types that take, return or hold a `MicroTutorialFaceOrbSpawnSettings`:

[`MicroTutorialOrbInjector.Settings`](/mod/game-api/types/game-other-namespaces/microtutorialorbinjector#m-settings), [`MicroTutorialOrbSpawner.Settings`](/mod/game-api/types/game-other-namespaces/microtutorialorbspawner#m-settings).
