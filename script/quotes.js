
const quotesList = [
    {quotes:"I am able to do all things through him who gives me strength", 
    author:"Philippians 4:13 "}, 
    {quotes:"But he knows what I am doing, and when he tests me, I will be pure as gold.", 
    author:"Job 23:10"}, 
    {quotes:"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life" ,
    author:"John 3:16"}, 
    {quotes:"We make our own plans, but the LORD decides where we will go." ,
    author:"Proverbs 16:9"}, 
    {quotes:"For now there are faith, hope, and love. But of these three, the greatest is love" ,
    author:"1 Corinthians 13:13"}, 
    {quotes:"Respect and obey the LORD! This is the beginning of wisdom. To have understanding, you must know the Holy God" ,
    author:"Proverbs 9:10"}, 
    {quotes:"Yet to all who did received him, to those who believed his name, he gave the right to become children of God " ,
    author:"John 1:12"}, 
    {quotes:"Don't worry about anything, but pray about everything. With thankful hearts offer up your prayers and requests to God " ,
    author:"Philippians 4:6"}, 
    {quotes:"The LORD is my shepherd, I shall not be in want" ,
    author:"Psalms 23:1"}, 
    {quotes:"Be joyful always, pray continually, gibe thanks in all circumstances, for this is God's will for you in Christ Jesus" ,
    author:"1 Thessalonians 5:16 - 18"}
]
quotes = document.querySelector(".greeting #quotes p:first-child");
author = document.querySelector(".greeting #quotes p:last-child");

const chooseQuotes = quotesList[Math.floor(Math.random() * quotesList.length)];
quotes.innerHTML = chooseQuotes.quotes;
author.innerHTML = chooseQuotes.author;