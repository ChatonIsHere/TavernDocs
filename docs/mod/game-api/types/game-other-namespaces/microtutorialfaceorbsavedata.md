---
title: "MicroTutorialFaceOrbSaveData"
description: "Save data for MicroTutorialFaceOrb: the orb type and the tutorial it starts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialFaceOrbSaveData

A **internal class** in `Root.Township`, `ATT.MicroTutorial`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `MicroTutorialFaceOrb`: the orb type and the tutorial it starts.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<MicroTutorialFaceOrb, MicroTutorialFaceOrbSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`MicroTutorialFaceOrb`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb), [`MicroTutorialFaceOrbSaveData`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorbsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFaceOrbSaveData()"}</code> | <span className="api-desc">Creates a `MicroTutorialFaceOrbSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-microtutorialsettings" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link></code> | <span className="api-desc">The tutorial the orb starts.</span> |
| <Link id="m-orbtype" /><code><Link to="/mod/game-api/types/game-other-namespaces/microtutorialfaceorbtype">{"MicroTutorialFaceOrbType"}</Link>{" OrbType"}</code> | <span className="api-desc">Whether the orb is an entry or exit orb.</span> |
