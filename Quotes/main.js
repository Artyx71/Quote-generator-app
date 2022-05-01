function generate() {
  const quotes = {
    "-Наполеон Хилл":
      "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
    "-Альберт Эйнштейн":
      "Стремитесь не к успеху, а к ценностям, которые он дает",
    "-Майкл Джордан":
      "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.",
    "-Марк Твен":
      "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!",
    "-Зиг Зиглар":
      "Зачастую говорят, что мотивации хватает ненадолго. Но то же самое происходит и с освежающим душем, поэтому и рекомендуют его принимать ежедневно.",
  };
  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];
  const quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
