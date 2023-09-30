## Web Post-Its
This is a basic post-it note project using react and the [Next.js](https://nextjs.org/) framework.

### Setup
1. Clone onto your local machine using:
``` bash
git@github.com:jonathanguven/crud.git
```
2. Install dependencies
```bash
npm install
```
3. Start PocketBase database:
``` bash
./pocketbase serve
```

4. Open the [Admin UI](http://127.0.0.1:8090/_/), create a collection called notes with two text fields
   - title
   - content
5. Then, update API rules to allow read/write access from all users.

7. Start the dev server using:
```bash
npm run dev
```

8. Open `http://localhost:3000` in your browser.


