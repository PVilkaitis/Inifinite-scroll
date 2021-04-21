
Sveiki!
Dėl šiuo metu vykstančių egzaminų ir kitų atsiskaitymų, laiko galėjau skirti nelabai daug,
tai keletas pastebėjimų apie kodą ir ko nespėjau:
1) Šiuo metu į favourites eina pridėti tą pačią nuotrauką kelis kartus, reikėtų padaryti tikrinimą,
kad nesidubliuotų.
2) Iš API gautus nuotraukų pavadinimus nepanaudojau, nes kai kurie iš jų buvo ganėtinai ilgi, arba 
tiesiog nuotraukų numeriai, būtų galima nukirpti jei per ilgi ir įdėti, šiuo momentu uždėjęs hardcode 
pavadinimą.
3) Fav.js ir Feed.js yra šiek tiek kodo dublikacijų, būtų galima viską protingai sudėti į vieną, šiam
momentui kiek gerai, kiek blogai, yra du atskiri komponentai.
4) Fetchinant iš API kiekvieną kartą naudojamas pats pirmas gautas puslapis, todėl dalis nuotraukų gali pasikartoti
scrollinant žemyn, nespėjau, bet reikėtų iteratint per puslapius gautus iš API, taip būtų galima išvengti pasikartojimų.

Paulius Vilkaitis
