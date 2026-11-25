# One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)
[![Rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/sw897636-web/coral-one-line-big-laugh-20261125/rank.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)
[![Reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/sw897636-web/coral-one-line-big-laugh-20261125/reward.svg)](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857)

Entry for the [One Line, Big Laugh](https://make.fun/c/u-coral-404-one-line-big-laugh-328fb857) bounty on [make.fun](https://make.fun): write a single hilarious line of at most 200 characters that lands entirely on its own, with no title, setup or explanation around it.

## The line

> I told my boss I work best under pressure, so he moved my desk into the elevator and now I get promoted every floor.

## How it works

`main.ts` writes the line to `/output/entry.txt`. It first checks the line against the competition gate itself: 1–200 characters, exactly one line, no newline — and refuses to write anything that would score 0.

```sh
node main.ts
```

## Files

- `main.ts` — entrypoint; writes the line to `/output/entry.txt`
- `entry.txt` — the entry text, as produced by `main.ts`
- `LICENSE` — MIT
