> 🇬🇪 [ქართული ვერსია](./README_ka.md)

# Homework 9 — Set up Command Code

Welcome to your ninth homework! 🎉

In Workshop 10 you watched **Command Code**, a coding agent, find and fix five bugs on the Supra page, while you guessed, hunted and voted on every diff. This homework puts the tool on **your** computer. You'll install it, give it your own rules, and use it to hunt three bugs, and you'll stay the reviewer the whole time.

There are **three exercises**, and each one produces one file:

| | File | What you do |
|---|---|---|
| 1 | `setup.md` | Install Node 22+ and Command Code, log in, and prove it works |
| 2 | `AGENTS.md` | Give Command Code your own rules with `/init` |
| 3 | `exercise_3.js` | Plan mode → find three bugs → fix them one at a time → explain every fix in your own words |

**Deadline:** before Workshop 11.

---

## 📄 The two pages of this homework

| | |
|---|---|
| **[📚 Exercises](./EXERCISES.md)** | The three exercises, the expected output, and the rules |
| **[📤 How to submit](./SUBMITTING.md)** | Fork, branch, Pull Request — step by step, plus the checklist |

Read the short section below first, then go to the exercises.

---

## Before you start

### 💳 It costs $1

Command Code has **no free plan**. The cheapest plan, **Go**, costs **$1 a month** plus a small processing fee, and it comes with $10 of credits. That's far more than this homework needs. It's a subscription: it renews every month until you cancel it.

> **Can't pay, or don't have a card?** Message me **before the deadline**, and we'll find another way. Don't just skip the homework.

### 🪟 `cmdc` or `cmd`?

| Your computer | The command |
|---|---|
| Windows | `cmdc` |
| macOS, Linux | `cmd` |

On Windows the name `cmd` is already taken by the old Windows terminal, so Command Code uses `cmdc` there. Everywhere this homework says `cmdc`, Mac and Linux users type `cmd`.

### 🧑‍⚖️ You are the reviewer

The five rules from the workshop apply to every exercise:

1. **Plan first.** Anything bigger than one line: start in plan mode.
2. **One change at a time.** A small diff is a diff you can actually read.
3. **Read every diff before you accept it.**
4. **Run it yourself.** "Fixed" is a claim; the output is the proof.
5. **Can't explain a line? Don't keep it.** Ask it to explain, or throw the line out.

And one more: **never paste passwords, tokens or API keys** into Command Code or into `AGENTS.md`.

### The keys you'll need

| To do this | Type |
|---|---|
| start it in the current folder | `cmdc` |
| write the rules file | `/init` |
| switch the mode: default → auto-accept → plan | `Shift+Tab` (the status line at the bottom shows the mode) |
| stop it right now | `Esc` |
| undo to an earlier checkpoint | `Esc Esc` or `/rewind` |
| see your credits | `/usage` |
| quit | `/exit` |

Now open the **[exercises](./EXERCISES.md)**.

---

## Helpful links

* Command Code — Quickstart: https://commandcode.ai/docs/quickstart
* Command Code — Memory (`AGENTS.md`): https://commandcode.ai/docs/memory
* Command Code — Permissions and plan mode: https://commandcode.ai/docs/permissions
* Command Code — Pricing: https://commandcode.ai/pricing
* Node.js downloads (pick the LTS version): https://nodejs.org
