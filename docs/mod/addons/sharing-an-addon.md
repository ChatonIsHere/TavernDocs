---
title: Sharing an addon
description: author.json, mods your addon needs, and getting it to players.
---

# Sharing an addon

## author.json

Every addon needs one. The **Addons** window shows it:

```json
{
    "name": "Hello",
    "author": "Placeholder",
    "version": "1.0.0"
}
```

A missing or broken file doesn't stop your addon loading. The window shows the folder name, "Unknown" and "?" instead, which tells a player something's off.

### Mods your addon needs

If your addon only works with a game mod installed, say so. The **Addons** window checks the player's game folder and tells them what's missing:

```json
{
    "name": "Custom Models",
    "author": "Placeholder",
    "version": "1.0.0",
    "required_mods_title": ["Tavern Models"],
    "required_mods_filename": ["TavernModels"],
    "required_plugins_title": [],
    "required_plugins_filename": []
}
```

- `required_mods_title` is the name to show. `required_mods_filename` is the start of the DLL's name in `Mods`, matched without caring about case, so `TavernModels` also finds `TavernModelsv1.2.dll`.
- `required_plugins_*` work the same for `Plugins`.
- The two lists pair up by position.

## Getting it to players

There's no addon index yet. Share it as a zip of your addon's folder, with a link to its source, and tell players to:

1. Extract it into the `addons` folder next to the launcher's `.exe`, so the path is `addons\<your addon>\author.json`.
2. Turn it on in **Addons** and restart the launcher.

A launcher update replaces the files it ships with. Addons it doesn't ship stay put, but check yours still works after an update.

:::warning

Addons can do anything the launcher can, including reading players' tokens. The launcher warns players to be careful with addons that don't come with the official download. Keep yours open source so people can see what it does.

:::

## Getting it shipped with the launcher

Addons that are useful to everyone can be added to TavernLauncher itself, like Macros. Open a pull request on [TavernLauncher](https://github.com/ModdingTavern/TavernLauncher) that adds your folder under `addons/`.
