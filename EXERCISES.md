> 🇬🇪 [ქართული ვერსია](./EXERCISES_ka.md) · [← Back to the overview](./README.md) · [📤 How to submit](./SUBMITTING.md)

# Homework 9 — Exercises

All three files go inside `submissions/<your-username>/`. Do the exercises in order: each one needs the one before it.

> **First:** do steps 1–4 of [How to submit](./SUBMITTING.md) (fork, clone, branch, create your folder), so you have a folder to work in.

Use only what the [Rules](#rules) at the bottom allow.

---

## `setup.md` — Exercise 1: install Command Code

### Step 1 — Node 22 or newer

Command Code refuses to start on Node 20 and below. Check your version:

```bash
node -v
```

If it prints `v22…` or a higher number, go on. If it prints `v20…` or lower (or `node` is not found), download the **LTS** version from https://nodejs.org, install it, **close the terminal and open a new one**, and check again.

### Step 2 — Install and check

```bash
npm i -g command-code
cmdc --version
```

(On macOS and Linux the second line is `cmd --version`.) It should print a version number.

### Step 3 — Log in and pick the Go plan

```bash
cmdc login
```

It opens the browser. Sign in, click **Authorize**, and go back to the terminal when it says the login worked. Then choose the **Go** plan on https://commandcode.ai/pricing ($1 a month, see the [README](./README.md#-it-costs-1)).

### Step 4 — Write `setup.md`

Go into your folder, `submissions/<your-username>/`, and create `setup.md` with this content. Replace the lines in brackets with what **your** computer printed:

```markdown
# Setup

## My computer
[Windows, macOS or Linux]

## node -v
[paste exactly what node -v printed]

## cmdc --version
[paste exactly what cmdc --version printed]

## What Command Code said about my rules
[leave this empty for now: you fill it in during exercise 2]
```

### When something goes wrong

| You see | Do this |
|---|---|
| `cmdc` is *not recognized* / *command not found* | Close the terminal, open a new one, try again. Check that `npm -v` works. |
| Windows PowerShell: *running scripts is disabled on this system* | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, answer `Y`, and try again. Or use Command Prompt or Git Bash instead. |
| macOS: `EACCES` / *permission denied* during `npm i -g` | Don't use `sudo`. Install Node with nvm (https://github.com/nvm-sh/nvm), then run `npm i -g command-code` again. |
| It says your Node version is too old | Go back to step 1. |

Still stuck? Take a screenshot of the error and message me. **Don't wait until the deadline.**

---

## `AGENTS.md` — Exercise 2: give it your rules

`AGENTS.md` is the file Command Code reads **every time it starts** in a folder. Whatever you write there, it tries to follow.

1. In the terminal, go into your own folder and start Command Code there:

   ```bash
   cd submissions/<your-username>
   cmdc
   ```

   It asks whether you trust the files in this folder. Choose **Yes, proceed**.

2. Type `/init`. Command Code reads the folder and writes an `AGENTS.md` with a starter text.

3. Check **where** the file ended up. Open a second terminal (or type `!git status` inside Command Code) and look for `AGENTS.md`. It must be inside `submissions/<your-username>/`. If `/init` put it somewhere else, for example in the root of the repository, move it into your folder.

4. Open `AGENTS.md` in your editor. At the end, add a section called `## My rules` with **at least three rules that you wrote yourself**. Write them as instructions to the AI. For example:

   ```markdown
   ## My rules
   - I'm a beginner. Explain every change in one short sentence.
   - Only plain JavaScript: no libraries.
   - Never create new files without asking me first.
   ```

   Those three are examples: write your own.

5. Quit with `/exit`, start again with `cmdc` (so it reads the new file), and ask:

   ```text
   What rules do you follow in this project?
   ```

   Copy its answer into `setup.md`, under **What Command Code said about my rules**.

**Expected:** its answer mentions your rules. If it doesn't, check that the file is called exactly `AGENTS.md` (capital letters) and that you started `cmdc` in the same folder.

---

## `exercise_3.js` — Exercise 3: hunt three bugs

The file [`starter/bill.js`](./starter/bill.js) prints a Supra bill, and it has **three bugs**. This time you don't fix them by hand: Command Code finds and fixes them, and you review every step.

1. Copy it into your folder as `exercise_3.js`. From inside `submissions/<your-username>/`:

   ```bash
   cp ../../starter/bill.js exercise_3.js
   ```

   (Windows PowerShell: `Copy-Item ..\..\starter\bill.js exercise_3.js`)

2. Run it and read what goes wrong:

   ```bash
   node exercise_3.js
   ```

3. **Plan mode first.** Start `cmdc` in your folder, press `Shift+Tab` until the status line at the bottom says `plan`, and ask:

   ```text
   exercise_3.js has three bugs. Find them and explain each one in one sentence.
   Don't change anything yet.
   ```

4. **One fix at a time.** Press `Shift+Tab` until the mode is back to `default`, then ask:

   ```text
   Fix bug 1 only.
   ```

   When it asks for permission to edit the file:
   * **read the diff** first: which lines go out, which lines come in?
   * choose the option that allows it **once**, not "allow and remember"
   * run `node exercise_3.js` and see what changed

   Then do the same for bug 2 and bug 3.

5. **Explain every fix in your own words**, not the AI's. Above each line that was fixed, add three comment lines:

   ```javascript
   // Bug: what was wrong, in your own words
   // Fix: what changed
   // Agreed? yes or no, and why
   ```

   If you don't agree with a fix, or you can't explain it, undo it (`Esc Esc` or `/rewind`), ask Command Code to explain, or fix it yourself, and say so in the comment.

Expected output:

```text
1. Khachapuri · 12 ₾
2. Mtsvadi · 15 ₾
3. Lobio · 8 ₾
4. Chakapuli · 14 ₾
5. Pkhali · 7 ₾
total: 56
veggie: [ 'Khachapuri', 'Lobio', 'Pkhali' ]
Mtsvadi costs: 15
```

> Every one of the three bugs is something from Workshops 03–08. If you read the diffs carefully, you'll recognise all of them. That's the point: the AI is fast, and you're the one who knows whether it's right.

---

## Rules

* Run Command Code **only inside your own folder**, `submissions/<your-username>/`.
* Command Code may change only `exercise_3.js` and `AGENTS.md`. If it wants to edit or create any other file, **deny it**.
* Allow every edit **once**. No auto-accept mode and no `--yolo` in this homework: the whole point is that you see every diff.
* The `Bug / Fix / Agreed?` comments are **yours**: write them yourself, in your own words.
* Never paste passwords, tokens or API keys into Command Code or into `AGENTS.md`.
* Before you commit, run `git status`. Only your three files may be new: `setup.md`, `AGENTS.md` and `exercise_3.js`.

---

When your three files are ready, go to **[How to submit](./SUBMITTING.md)**.
