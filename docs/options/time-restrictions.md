---
sidebar_position: 10
title: Time Restrictions
---

# Time Restrictions

Time restrictions control when a collection is active. They are useful for seasonal collections, rotations, or anything you only want visible during specific windows.

## Always Active vs Scheduled

- Collections default to **Always Active**, meaning they remain visible year-round.
- Unchecking the box opens the scheduling controls so you can specify date ranges, weekdays, and inactivity behaviour.
- Scheduled collections evaluate the rules on every sync and automatically toggle visibility or removal states.

## Date Ranges & Weekly Schedule

- Add one or more **Date Ranges** (`DD-MM` format) when the collection should be active across the calendar year.
- Use the **Days of the Week** grid to set which days you want it to be visible
- These options can be used independently, or in conjunction with each other.

## Removing vs Hiding

- Enable **Remove from Plex when inactive** to have Agregarr delete the collection while it is out of season; it is recreated automatically when the schedule reactivates.
- Leave the removal toggle off to keep the collection in Plex but adjust visibility instead.
- An **Inactive Visibility** section appears so you can decide where the inactive collection should be visible (if none selected, will appear in Library Tab only)
