# 📝 Content Editing Guide (Hidden)

This file explains how to edit website content without coding knowledge.

---

## 🔧 How to Edit Content

All editable content is stored in one file:

```
src/content/site-content.json
```

### Step 1: Open the file
- Go to your repository on GitHub
- Navigate to `src/content/site-content.json`
- Click the pencil icon (✏️) to edit

### Step 2: Edit the text
Change any text between the quotes `"..."`:

```json
"title": "Your New Title Here",
"subtitle": "Your new description here",
```

### Step 3: Save changes
- Scroll down and click "Commit changes"
- The website will automatically rebuild (2-3 minutes)

---

## 📋 What You Can Edit

| Section | What to change |
|---------|----------------|
| `hero.title` | Main headline |
| `hero.subtitle` | Description under headline |
| `hero.buttonPrimary` | First button text |
| `hero.buttonSecondary` | Second button text |
| `pricing.plans[].monthlyPrice` | Monthly prices |
| `pricing.plans[].yearlyPrice` | Yearly prices |
| `faq.items[]` | FAQ questions and answers |
| `contact.telegram` | Telegram username |
| `contact.email` | Email address |

---

## ⚠️ Important Rules

1. **Don't delete quotes** — keep `"text"` format
2. **Don't change keys** — only edit values after `:`
3. **Keep commas** — don't remove `,` between items
4. **Test after changes** — wait 2-3 min for rebuild

---

## 🆘 If Something Breaks

If the site stops working after your edit:
1. Go to GitHub → Actions tab
2. Check for red ❌ errors
3. Undo your last commit, or
4. Contact the developer

---

## 💡 Example: Changing Price

Before:
```json
"monthlyPrice": 95,
```

After:
```json
"monthlyPrice": 120,
```

Save → Wait 2-3 minutes → Check the live site!
