---
title: "DoorSaveData"
description: "Save data for a Door: just whether it is open."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DoorSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `Door`: just whether it is open.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<Door, DoorSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Door`](/game-api/types/global-c-d/door), [`DoorSaveData`](/game-api/types/global-c-d/doorsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DoorSaveData()"}</code> | Creates a `DoorSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isopen" /><code>{"bool isOpen"}</code> | Whether the door was open when saved. |
