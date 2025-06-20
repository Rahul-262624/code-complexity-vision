# ⏱️ Code Complexity Vision

> A web app to analyze the **time complexity** of code, built using Lovable and Bolt  
> 🔗 [Live Project](https://code-complexity-vision.lovable.app)

---

## 🚀 What I Built

This project lets users input Python code and instantly get an estimate of its **Big-O time complexity**, such as:

- `O(1)` for constant time
- `O(n)` for single loops
- `O(n^2)` for nested loops
- `O(2^n)` for recursion

---

## 🧰 Tools & Technologies

| Layer     | Stack                     |
|-----------|---------------------------|
| **Frontend**  | [Lovable](https://lovable.so) – no-code UI with React, Tailwind, Vite |
| **Backend**   | [Bolt](https://bolt.new) – FastAPI server analyzing code |
| **Hosting**   | Lovable App + Bolt.run |

---

## 🔗 Project Details

- 📥 **Frontend UI:** Custom-built with Lovable, includes:
  - Code input box
  - Analyze button
  - Output text box for complexity
- 🔍 **Backend API (Bolt):**
  - Exposes a `/analyze` POST route
  - Parses code using Python’s `ast` module
  - Returns time complexity
- 🔄 **Integrated via API request** from frontend to backend
- 🌐 **CORS** enabled for cross-origin requests from Lovable to Bolt

---

## 🧪 Example Output

**Input Code:**
```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

**Result Displayed:**
```
Time Complexity: O(n^2)
```

---

## 🧠 Future Enhancements

- GPT-powered code explanation
- JavaScript/TypeScript support
- Visual graph of complexity over input size
- VS Code extension version

---

## 🙌 Built With

- [Lovable](https://lovable.so)
- [Bolt](https://bolt.new)
- FastAPI, TypeScript, Tailwind, AST

---

## ✨ Live App

👉 [https://code-complexity-vision.lovable.app](https://code-complexity-vision.lovable.app)
