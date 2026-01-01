# 👥 React Day 50 – Derived Data & Render Logic

Mini React app that demonstrates **derived data**, **state-driven rendering**, and when **NOT** to use `useEffect`.

## 🎯 What this app teaches
- React re-renders when **state changes**
- Components are **functions** that re-run on render
- Derived data should **not** be stored in state
- `useEffect` is for **side effects**, not UI calculations

## 🧠 Key concepts
- `useState`
- conditional rendering
- derived data (`filter`)
- controlled checkbox
- reset state logic

## 🚫 No useEffect
Filtering users is a **pure JavaScript operation**, so it runs naturally on every render.

## ✅ Result
Clean logic, minimal state, predictable UI behavior — exactly how React apps should be written.

---

Built as part of a structured **React daily practice routine** 💪


https://codesandbox.io/p/sandbox/m4mh47?file=%2Fsrc%2Fstyles.css%3A1%2C1-56%2C1
