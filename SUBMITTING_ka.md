> 🇬🇧 [English version](./SUBMITTING.md) · [← მიმოხილვაზე დაბრუნება](./README_ka.md) · [📚 სავარჯიშოები](./EXERCISES_ka.md)

# როგორ ჩააბაროთ — Pull Request-ით

ეს იგივე პროცესია, რაც წინა საშინაო დავალებაზე. **fork** არის რეპოზიტორიის თქვენი საკუთარი ასლი, **ბრენჩი** (branch) არის ადგილი, სადაც თქვენი ცვლილებები ცხოვრობს, ხოლო **Pull Request (PR)** არის თხოვნა, რომ ეს ცვლილებები თავდაპირველ რეპოზიტორიაში შევიდეს.

მიჰყევით ნაბიჯებს თანმიმდევრობით. თუ ბრძანება ჩავარდა, ყურადღებით წაიკითხეთ შეცდომის ტექსტი — ის ჩვეულებრივ თავად გეუბნებათ, რა არის არასწორად.

> ყველგან, სადაც `<your-username>`-ს ხედავთ, ჩაანაცვლეთ ის **თქვენი GitHub-ის მომხმარებლის სახელით** (კუთხოვანი ფრჩხილების გარეშე). მაგალითად, თუ თქვენი მომხმარებლის სახელია `nino-b`, მაშინ თქვენი ბრენჩიც და ფოლდერიც `nino-b` ერქმევა.

---

## 1. დააფორკეთ ეს რეპოზიტორია

გახსენით https://github.com/JavaScriptADI/javascript-205-homework-9 ბრაუზერში.

დააჭირეთ ღილაკს **Fork** ზედა მარჯვენა კუთხეში, დატოვეთ ნაგულისხმევი პარამეტრები და დააჭირეთ **Create fork**.

GitHub შექმნის რეპოზიტორიის თქვენს საკუთარ ასლს მისამართზე:

```text
https://github.com/<your-username>/javascript-205-homework-9
```

თქვენს fork-ში push-ის გაკეთება შეგიძლიათ. თავდაპირველ რეპოზიტორიაში — ვერა; სწორედ ამისთვისაა Pull Request.

## 2. დააკლონეთ თქვენი fork

**თქვენი fork-ის** გვერდზე დააჭირეთ მწვანე ღილაკს **Code**, დააკოპირეთ URL და გაუშვით:

```bash
git clone https://github.com/<your-username>/javascript-205-homework-9.git
cd javascript-205-homework-9
```

> დარწმუნდით, რომ URL შეიცავს **თქვენს** მომხმარებლის სახელს და არა `JavaScriptADI`-ს. თუ შემთხვევით თავდაპირველი რეპოზიტორია დააკლონეთ, წაშალეთ ფოლდერი და თავიდან დააკლონეთ თქვენი fork-იდან.

## 3. შექმენით ბრენჩი თქვენი GitHub-ის მომხმარებლის სახელით

```bash
git checkout -b <your-username>
```

უნდა ნახოთ:

```text
Switched to a new branch '<your-username>'
```

რომელ ბრენჩზეც ხართ, ნებისმიერ დროს შეგიძლიათ შეამოწმოთ `git branch`-ით — მიმდინარე ბრენჩს წინ `*` უწერია.

## 4. შექმენით თქვენი ფოლდერი

`submissions/` ფოლდერის შიგნით შექმენით ფოლდერი თქვენი GitHub-ის მომხმარებლის სახელით:

```bash
mkdir submissions/<your-username>
cd submissions/<your-username>
```

ახლა შეასრულეთ [სავარჯიშოები](./EXERCISES_ka.md). როცა დაასრულებთ, თქვენი რეპოზიტორია ასე უნდა გამოიყურებოდეს (`<your-username>`-ის ნაცვლად თქვენი საკუთარი მომხმარებლის სახელით):

```text
javascript-205-homework-9/
│
├── README.md
├── EXERCISES.md
├── SUBMITTING.md
├── starter/
│   └── bill.js
└── submissions/
    ├── README.md
    └── <your-username>/
        ├── setup.md
        ├── AGENTS.md
        └── exercise_3.js
```

იცვლება მხოლოდ თქვენი საკუთარი ფოლდერი. ნუ შეასწორებთ `README.md`-ს, `EXERCISES.md`-ს, `SUBMITTING.md`-ს, `starter/bill.js`-ს ან სხვა სტუდენტის ფოლდერს.

## 5. commit-ამდე შეამოწმეთ ყველაფერი

თქვენი ფოლდერიდან:

```bash
node exercise_3.js
```

ზუსტად ის უნდა დაიბეჭდოს, რაც [მე-3 სავარჯიშოს](./EXERCISES_ka.md#exercise_3js--სავარჯიშო-3-სამი-ბაგის-ძებნა) **მოსალოდნელ შედეგშია**. შემდეგ კიდევ ერთხელ გახსენით `setup.md` და `AGENTS.md`: ყველა ნაწილი შევსებულია?

შემდეგ შეამოწმეთ, რომ Command Code-ს სხვა ფაილები არ დაუტოვებია:

```bash
git status
```

სიაში მხოლოდ სამი ახალი ფაილი შეიძლება იყოს, სამივე `submissions/<your-username>/`-ის შიგნით: `setup.md`, `AGENTS.md` და `exercise_3.js`. თუ სხვა რამეს ხედავთ (სხვა ფაილს, შეცვლილ `starter/bill.js`-ს, `AGENTS.md`-ს რეპოზიტორიის ძირში), ჯერ ეს გაასწორეთ. თუ დარწმუნებული არ ხართ, მკითხეთ.

## 6. გააკეთეთ commit და push თქვენს ბრენჩზე

დაბრუნდით რეპოზიტორიის ფოლდერში, შემდეგ დაამატეთ, დააკომიტეთ და დაპუშეთ:

```bash
cd ../..
git add submissions/<your-username>
git commit -m "Add homework 9"
git push -u origin <your-username>
```

თუ უკვე აღარ ხართ თქვენს ფოლდერში, გამოტოვეთ `cd ../..` ხაზი — შეამოწმეთ `pwd`-ით, რომ `javascript-205-homework-9`-ში ხართ.

დაახლოებით ასეთი შედეგი უნდა ნახოთ:

```text
[<your-username> 3f2a9c1] Add homework 9
 3 files changed, 70 insertions(+)
...
remote: Create a pull request for '<your-username>' on GitHub by visiting:
remote:      https://github.com/<your-username>/javascript-205-homework-9/pull/new/<your-username>
```

> პირველ push-ს `-u origin <your-username>` სჭირდება, რადგან ბრენჩი ჯერ არ არსებობს GitHub-ზე. იმავე ბრენჩზე შემდგომ push-ებს მხოლოდ `git push` სჭირდება.

## 7. გახსენით Pull Request

1. გახსენით თქვენი fork GitHub-ზე. ყვითელი ბანერი გეტყვით, რომ `<your-username>`-ზე ახლახან იყო push — დააჭირეთ **Compare & pull request**. (თუ ბანერი გაქრა, დააჭირეთ **Pull requests** → **New pull request** და **compare** ჩამონათვალში აირჩიეთ თქვენი ბრენჩი.)
2. შეამოწმეთ გვერდის თავზე მოცემული ოთხი ჩამონათვალი:
   * **base repository:** `JavaScriptADI/javascript-205-homework-9` და **base:** `main`
   * **head repository:** `<your-username>/javascript-205-homework-9` და **compare:** `<your-username>`
3. **სათაური:** "Homework 9 - Your Name" თქვენი ნამდვილი სახელით, მაგალითად "Homework 9 - Nino Beridze".
4. აღწერის ველი უკვე შეიცავს შაბლონს. ჩაწერეთ თქვენი მომხმარებლის სახელი და მონიშნეთ ჩეკლისტის ყველა ის პუნქტი, რომელიც შესრულებულია.
5. დააჭირეთ მწვანე ღილაკს **Create pull request** (და არა *draft* ვარიანტს მის ჩამონათვალში).

თქვენი PR ახლა თავდაპირველი რეპოზიტორიის გვერდზე გამოჩნდება, ლექტორი კი **Reviewers**-ში იქნება მითითებული.

## 8. დაელოდეთ განხილვას — და შეასწორეთ იმავე ბრენჩზე

ლექტორი ავტომატურად ემატება რევიუერად და თქვენს ფაილებზე კომენტარებს დატოვებს.

თუ რამის შესწორებაა საჭირო, შეასწორეთ ფაილები თქვენს ფოლდერში, შემდეგ დააკომიტეთ და დაპუშეთ **იმავე ბრენჩზე**:

```bash
git add submissions/<your-username>
git commit -m "Fix exercise 3"
git push
```

თქვენი Pull Request თავისით განახლდება — ახლის გახსნა **არ** გჭირდებათ. **ნუ გახსნით მეორე PR-ს.** როცა ყველაფერი წესრიგშია, ლექტორი დაამტკიცებს და მოახდენს თქვენი PR-ის merge-ს.

> **კარგია, რომ იცოდეთ**
>
> * **თავდაპირველ** რეპოზიტორიაში (`JavaScriptADI/javascript-205-homework-9`) push ვერ გააკეთებთ და მისი `main` ბრენჩი დაცულია. ეს ასეც უნდა იყოს: თქვენი ნამუშევარი ყოველთვის თქვენს fork-ში, თქვენს ბრენჩზე მიდის და თავდაპირველ რეპოზიტორიას მხოლოდ Pull Request-ით სწვდება.
> * ერთი ფოლდერი ერთ სტუდენტზე. ხელი არ ახლოთ სხვა სტუდენტების ფოლდერებს ან დოკუმენტაციის ფაილებს.
> * თუ გაიჭედეთ, გადაუღეთ შეცდომას სქრინშოტი და გამომიგზავნეთ, ან მოიტანეთ შემდეგ workshop-ზე.

---

## ჩეკლისტი ჩაბარებამდე

* [ ] `setup.md`, `AGENTS.md` და `exercise_3.js` არის `submissions/<your-username>/`-ის შიგნით
* [ ] `setup.md` აჩვენებს Node-ის **v22 ან უფრო მაღალ** ვერსიას და იმას, რაც `cmdc --version`-მა დაბეჭდა
* [ ] `AGENTS.md`-ში არის `## My rules` სექცია მინიმუმ სამი წესით, რომელიც თავად დავწერე
* [ ] `setup.md`-ში არის Command Code-ის პასუხი კითხვაზე "What rules do you follow in this project?"
* [ ] `node exercise_3.js` ზუსტად მოსალოდნელ შედეგს ბეჭდავს
* [ ] `exercise_3.js`-ში ყოველი შესწორების ზემოთ არის `Bug / Fix / Agreed?` კომენტარი, ჩემი სიტყვებით
* [ ] ყოველ ცვლილებას ნება ერთხელ დავრთე და ყოველი diff წავიკითხე (არც auto-accept, არც `--yolo`)
* [ ] `git status`-მა ჩემი ფოლდერის გარეთ არცერთი ფაილი არ აჩვენა
* [ ] ჩემი ბრენჩი ჩემი GitHub-ის მომხმარებლის სახელით არის დასახელებული
* [ ] Pull Request გახსნილია სათაურით "Homework 9 - Your Name"
* [ ] Pull Request-ის აღწერაში ჩეკლისტი შევსებულია

წარმატებები! 🚀

---

## სასარგებლო ბმულები

* GitHub Docs — რეპოზიტორიის fork: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
* GitHub Docs — Pull Request-ის შექმნა fork-იდან: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
