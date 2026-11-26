---
title: TavernLib.ModdingApi
description: Every type in the TavernLib.ModdingApi namespace.
sidebar_position: 11
---

# TavernLib.ModdingApi

Every type in `TavernLib.ModdingApi`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`ModSide`](/mod/tavernlib-api/types/moddingapi/modside) | enum | 4 | Which side a mod says it's for, given to `TavernModAttribute`. `None` means not set. TavernLib itself never reads it. |
| [`Roles`](/mod/tavernlib-api/types/moddingapi/roles) | static class | 4 | Players' roles from `users.json`, kept in memory and re-read about a second after the file changes. Server only: on a client every list is empty. |
| [`RolesChange`](/mod/tavernlib-api/types/moddingapi/roleschange) | class | 4 | What `Roles.RolesChanged` hands its handlers: one user whose roles in `users.json` changed. |
| [`TavernMelonBaseExtension`](/mod/tavernlib-api/types/moddingapi/tavernmelonbaseextension) | static class | 1 | An extension method for reading a melon's `TavernModAttribute`. |
| [`TavernModAttribute`](/mod/tavernlib-api/types/moddingapi/tavernmodattribute) | class | 2 | Put on a mod's `MelonMod` class to label which side it's for. A label only: where a mod loads is decided by its manifest's targets. |
