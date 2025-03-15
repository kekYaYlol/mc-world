# Використання шаблону в майбутніх проєктах
Щоб виконати цей шаблон у новому проєкті, виконайте у командному рядкові наступний код:
```bash
git clone https://github.com/kekYaYlol/react-templat.git new-project
```
* `new-project` - назва теки нового проєкту
```bash
cd new-project
```
```bash
rm -rf .git # Видаляємо старий Git-зв'язок
```
* `rm` - працює у PowerShell (якщо не спрацює, використати `del`)
```bash
git init
```
```bash
git add *
```
```bash
git commit -m "Initial commit"
```
* Після, створити репозиторій у Github, та виконати наступні дії:
```bash
git remote add origin https://github.com/kekYaYlol/react-templat.git
```
```bash
git push -u origin main
```
* Далі, додатково встановити Node modules
```bash
npm install
```
## Після виконання всіх дій ваш шаблон готовий до використання!
