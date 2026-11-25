---
title: Your first addon
description: Make an addon that adds a button to the client launcher, then look at a real one.
---

# Your first addon

This makes an addon called `hello` that puts a button in the client launcher. Clicking it writes a line in the launcher's log.

## Run the launcher from source

You can make addons for the released `.exe`, but running from source shows you errors straight away.

```powershell
git clone https://github.com/ModdingTavern/TavernLauncher
cd TavernLauncher
python client\main.py
```

You need Python 3.12. If it complains about a missing package, `pip install` it.

The `addons` folder is in the repo. With the `.exe`, it's next to `TavernLauncher - Client.exe`.

## 1. Make the folder

```
addons/
  hello/
    __init__.py
    author.json
    client.py
```

`__init__.py` can be empty.

`author.json`:

```json
{
    "name": "Hello",
    "author": "Placeholder",
    "version": "1.0.0"
}
```

## 2. Add a button

`client.py`:

```python
from client.core.addon_hooks import register_launcher_action


def say_hello(launcher):
    launcher._print("Hello from my addon!", "ok")


# A small button at the end of the row under Destination.
register_launcher_action("hello", "Hello", say_hello)
```

`register_launcher_action` runs when the launcher imports your file, before the window exists. The launcher makes the button later and calls `say_hello(launcher)` when it's clicked.

## 3. Turn it on

1. Start the launcher.
2. Click **Addons**, tick **Hello**, click **Save (restart required to apply)**.
3. Restart the launcher.

Your **Hello** button is under **Destination**, after the server buttons. Click it and the log says `Hello from my addon!`.

## 4. Put it somewhere else

`after=` puts your button after another one, by key. `row=` picks the row:

```python
register_launcher_action("hello", "Hello", say_hello, after="community")
register_launcher_action("hello", "Hello", say_hello, row="mods")   # next to Setup and Mod Manager
```

The keys of the built-in buttons are in the [Hooks reference](hooks-reference.md#buttons).

## A real one: Macros

The launcher ships with one addon, `macros`, by TheRavenSeb. It adds a **Macros** tab to TavernKeeper for saving and replaying lists of console commands. It's worth reading: `addons/macros/client.py`.

The part that hooks it in is one line at the bottom:

```python
from client.core.tavernkeeper.registry import register_tab

register_tab("macros", "Macros", _build_macros_tab)
```

`_build_macros_tab(parent, window)` builds the tab's widgets inside `parent`. It sends commands with the TavernKeeper connection and writes to its log. Delete the `addons/macros` folder and the tab is gone, with no change anywhere else. That's the idea for every addon.

## Next

- Everything you can hook into: [Hooks reference](hooks-reference.md).
- Getting it to players: [Sharing an addon](sharing-an-addon.md).
