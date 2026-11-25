---
title: Hooks reference
description: Every place an addon can hook into TavernLauncher.
---

# Hooks reference

Call these when your `client.py` or `server.py` is imported. Each one runs your function later, at the right time. A function that raises is reported in the launcher's log, and the launcher carries on.

## Buttons

**Client launcher.** From `client.core.addon_hooks`:

```python
register_launcher_action(key, label, callback, after=None, row="servers")
```

A small button. `callback(launcher)` runs on a click. `row` is `"servers"` (the row under **Destination**) or `"mods"` (next to **Setup** and **Mod Manager**). It goes at the end of its row unless `after` names a button in that row.

```python
register_main_button(key, label, command, after=None)
```

A big button in the row with **Check Server** and **Join Server**. `command(launcher)` runs on a click.

The keys of the built-in buttons, for `after=`:

| Row | Keys |
| --- | --- |
| `mods` | `setup`, `mod_manager` |
| `servers` | `saved`, `community`, `tickets`, `remote_console`, `tavernkeeper` |
| main | `check`, `join`, `menu` |

Your own button's key works as an `after=` for the next addon. `launcher.button(key)` gives you any of these buttons once the window exists.

**Server launcher.** From `server.core.header_registry`:

```python
register_header_button(key, icon_text, label=None, command=None, after=None)
```

A button in the Server launcher's header, next to **Settings** and **Players**. `command(launcher)` runs on a click. Players can reorder header buttons, and yours keeps its place in their order.

## When the window is ready

From `tavern_shared.app_ready`, in both launchers:

```python
register_app_ready(fn)
```

`fn(app)` runs once the launcher window is fully built, addon buttons and tabs included. Use it when you need the window itself, instead of wrapping launcher internals to find it.

## Around a game launch

**Client launcher.** From `client.core.addon_hooks`:

```python
register_before_launch_hook(key, callback)
```

`callback(host, game_exe, log_fn)` runs after the player's login worked and just before the game starts, for normal and headless joins (not the main menu). If it raises, the player sees a short error and the game still starts. Don't log passwords or tokens.

From `client.core.launch_hooks`:

```python
register_post_auth_hook(fn)
```

`fn(host, log_fn, is_local)` runs once per join, right after "Welcomed as..." in the log. `is_local` is `True` when the server is on this PC.

```python
register_launch_hook(key, before=None, after=None)
```

Sees every game the launcher starts: joins, headless joins, the main menu, and games other addons start. `before(ctx)` runs just before, `after(ctx)` once it's running. `ctx` has:

| | |
| --- | --- |
| `ctx.kind` | `"join"`, `"headless"`, `"menu"` or an addon's own word |
| `ctx.argv` | The command line, `argv[0]` is the game. A `before` hook can change it. |
| `ctx.host`, `ctx.port`, `ctx.label` | Where it's joining |
| `ctx.user`, `ctx.platform` | Who and on what |
| `ctx.proc` | The game process, in `after` |
| `ctx.cancel(reason)` | In `before`, stops the launch and shows `reason` |

Registering the same key again replaces the earlier pair.

## TavernKeeper tabs

From `client.core.tavernkeeper.registry`:

```python
register_tab(key, label, build_fn, after=None)
```

`build_fn(parent, window)` builds the tab inside `parent` when TavernKeeper connects. Players can reorder tabs.

Use `window.api` to talk to the server from your tab:

```python
def build_tab(parent, window):
    api = window.api
    api.on_connected(lambda: api.log("connected", "ok"))
    api.run("player list", lambda r: api.log(r.error or str(r.value)))
```

| | |
| --- | --- |
| `api.run(cmd, on_result, timeout=20.0)` | Runs a console command. `on_result(r)` gets `r.ok`, `r.value`, `r.text`, `r.error`, `r.timed_out`. |
| `api.send(cmd)` | Sends a command without waiting for the reply. |
| `api.log(text, tone)` | Writes to TavernKeeper's log. `tone` is `"ok"`, `"warn"`, `"err"`, `"cyan"` or `"normal"`. |
| `api.is_connected`, `api.players`, `api.target`, `api.selection` | What TavernKeeper knows right now. |
| `api.on_connected(fn)`, `api.on_disconnected(fn)`, `api.on_target_changed(fn)` | Run `fn` when that happens. |
| `api.add_toolbar_button(text, command)` | A button in TavernKeeper's toolbar. |

Everything here runs on the window's thread. If your tab's build raises, TavernKeeper shows an error card in its place and removes what it added.

## Looking like the launcher

`tavern_shared.theme` has the launcher's colours (`BG`, `SURF`, `AMBER`, `PARCH`, `MUTED` and more) and `_btn(parent, text, command)` for a launcher-style button. Use them so your addon fits in.
