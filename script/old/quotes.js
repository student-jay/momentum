
const quotesList = [
    {quotes:"여호와께서 너를 축복하시고 지키시기 원하며", 
    author:"민수기 6:24 "}, 
    {quotes:"두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라", 
    author:"이사야 41:10"}, 
    {quotes:"주의 말씀은 내 발에 등이요 내 길에 빛이니이다" ,
    author:"시편 119:105"}, 
    {quotes:"아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라" ,
    author:"빌립보서 4:6"}, 
    {quotes:"하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라" ,
    author:"요한복음 3:16"}, 
    {quotes:"수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라" ,
    author:"마태복음 11:28"}, 
    {quotes:"내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라" ,
    author:"빌립보서 4:13"}, 
    {quotes:"하나님은 영이시니 예배하는 자가 영과 진리로 예배할지니라" ,
    author:"요한복음 4:24"}, 
    {quotes:"구하라 그리하면 너희에게 주실 것이요 찾으라 그리하면 찾아낼 것이요 문을 두드리라 그리하면 너희에게 열릴 것이니" ,
    author:"마태복음 7:7"}, 
    {quotes:"그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라" ,
    author:"로마서 10:17"}
]
quotes = document.querySelector("#quotes span:first-child");
author = document.querySelector("#quotes span:last-child");

const chooseQuotes = quotesList[Math.floor(Math.random() * quotesList.length)];
quotes.innerText = chooseQuotes.quotes;
author.innerText = chooseQuotes.author;