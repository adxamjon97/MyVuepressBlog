---
title: Chiziqli fazo. O'lcham va Bazis. Turli bazislarda vektor orasidagi bog'lanish.
date: 2021-06-05
tags: 
  - chiziqli algebra
  - oliy matematika
  - matematika
  - algebra
author: Adxamjon Nizametdinov
featuredimg: /assets/img/img_6.jpg
summary: Chiziqli algebra va analitik geometrya.
---

# Kirish qismi
## Mavzuning dolzarbligi

Chiziqli fazo. O'lcham va Bazis. Turli bazislarda vektor orasidagi bog'lanish mavzusi bo'yicha o'quv qo'llanma materiallari yetarli emas va matinlarda bazi kamchiliklar mavjud.
			
## Maqsad va vazifalar
Chiziqli fazo. O'lcham va Bazis. Turli bazislarda vektor orasidagi bog'lanish bo'yicha tarif teorema isbot formulalar va misollar keltirib o'tilgan, mavzuni o'zlashtirish qulay bo'lishi uchun bazi o'zgartirishlar kiritildi.
			
# Asosiy qisim
## Chiziqli fazo. O'lcham va bazis.Turli bazislarda vector koordinatalari orasidagi bog'lanish.

Bizga $V$ to'plam berilgan bo'lsin. $\forall x,y \in V$ elementlarga ularning yig'indisi deb ataluvchi $z \in V$ elementni mos qo'yib, uni $z:=x+y$ ko'rinishda belgilab olamiz. Shuningdek, biror $\mathbb K(\mathbb R,\mathbb C)$ maydondan olingan ixtiyoriy $\lambda \in \mathbb K$ sonini $x \in V$ elementga ko'paytmasi sifatida $y \in V$ elementni mos qo'yamiz va uni $y:=\lambda \cdot x$ ko'rinishda belgilaymiz.
			
**Tarif 1.** *Agar $V$ to'plamda aniqlangan qo'shish va songa ko'paytirish amallari quyidagi shartlarini  qanoatlantirsa, $V$ to`plam chiziqli fazo deyiladi:*

1) $x+y=y+x$ (kommutativ sharti);
2) $(x+y)+z=x+(y+z)$ (assosiativlik sharti);
3) shunday $0 \in V$ element mavjud bo`lib, har qanday $x \in V$ uchun $x+0=0+x=x$, bu yerdagi 0 elementi **nol element** deyiladi;
4) har qanday $x \in V$ uchun $-x \in V$ bilan belgilanadigan shunday element mavjud bo`lib, $x+(-x)=(-x)+x=0$;
5) $1 \cdot x=x$;
6) $\alpha\cdot(\beta\cdot x)=\alpha\beta\cdot x= \beta\cdot(\alpha\cdot x)$ 
7) $(\alpha+\beta)\cdot x=\alpha\cdot x+\beta\cdot x$
8) $\alpha\cdot(x+y)=\alpha\cdot x + \alpha\cdot y$.

*bu yerda, $\alpha,\beta\in\mathbb{K}, x,y \in V$.*
			
**Misol 1.**

a) Haqiqiy (kompleks) sonlar maydoni $\mathbb{R}(\mathbb{C})$ o'z ustida chizqli fazo tashkil etadi.
				
b) Teksilkdagi (fazodagi) vektorlar to'plami vektorlarni qo'shish va songa ko'paytirish amallariga nisbatan chiziqli fazo tashkil etadi.
				
c) Darajasi n dan oshmaydigan haqiqiy (kompleks) koeffitseientli barcha ko'phadlar to'plami ko'phadlarni qo'shish va ko'phadni songa ko'paytirish amallariga nisbatan chiziqli fazo tashkil etadi.
				
d) Barcha $n \times m$ - tartibli matritsalar to'plami matritsalarni qo'shish va matritsani songa ko'paytirish amallariga nisbatan chiziqli fazo tashkil etadi.
				
Chiziqli fazo elementlarini __*vektorlar*__ deb atash qabul qilingan. Agar chiziqli fazo haqiqiy (kompleks) sonlar maydonida berilgan bo'lsa __*haqiqiy (kompleks) chiziqli fazo*__ deyiladi.
				
Bizga $V$ chiziqli fazo berilgan bo'lib, $x_1,x_2,\dots, x_n$ vektorlar chiziqli fazoning elementlari bo'lsin. $a_1 x_1+a_2x_2+\dots+a_nx_n$ yig'indi vektorlarning chiziqli kombinatsiyasi deyiladi, bu yerda $a_i\in\mathbb{K}$.
					
**Tarif 2.** *Agar kamida bittaasi noldan farqli bo'lgan $a_1,a_2,\dots,a_n$ sonlar mavjud bo'lib,*
$$a_1x_1+a_2x_2+\dots+a_nx_n=0$$
*tenglik o'rinli bo'lsa, u holda $x_1,x_2,\dots,x_n$ vektorlar **chiziqli bog'liq** vektorlar deyiladi.*
				
Chiziqli bog'liq bo'lmagan vektorlar chiziqli **erkli vektorlar** deyiladi. Ya'ni, (1) tenglik $a_1=a_2=\dots=a_n=0$ bo'lgan holdagina o'rinli bo'lsa, $x_1,x_2,\dots,x_n$ vektorlar chiziqli erkli vektorlar deyiladi.
	
					
**Tasdiq 1.** Agar $x_1,x_2,\dots,x_n$
vektorlar chiziqli bog'liq bo'lsin. U holda (1) chiziqli kombinatsiyadagi koeffitsientlarning kamida bittasi noldan farqli. Umumiylikka ziyon yetkazmagan holda, $a_1\neq0$ deb olishimiz mumkin. U holda $a_1x_1=-a_2x_2-a_3x_3-\dots-a_nx_n$ tenglikdan 
$$ x_1=-\dfrac{a_2}{a_1}x_2-\dfrac{a_3}{a_1}x_3-\dots-\dfrac{a_n}{a_1}x_n$$ 
kelib chiqadi. $\lambda=-\dfrac{a_i}{a_1}$, $2\leq i\leq n$ kabi belgilasak, $x_1$ vektor $x_1,x_2,\dots,x_n$ vektorlarning chiziqli kombinatsiyasi shaklida 
$$x_1 = \lambda_2 x_2 + \lambda_3 x_3 + \dots + \lambda_n x_n $$ 
kabi ifodalanishini hosil qilamiz.
				
Aksincha, agar $x_1$ vektor $x_1,x_2,\dots,x_n$ vektorlarning chiziqli kombinatsiyasi shaklida (3) kabi ifodalansa, 
$$x_1-\lambda_2x_2-\lambda_3x_3-\dots-\lambda_nx_n=0$$
tenglikdan $x_1,x_2,\dots,x_n$ vektorlarning chiziqli bog'liq ekanligi kelib chiqadi.

**Misol 2.** Agar $x_1,x_2,\dots,x_n$ vektorlar orasida nol vektor bo'lsa, u holda bu vektorlar chiziqli bog'liq bo'ladi.

Endi fazoning o'lchami tushunchasini kiritamiz.
			
**Tarif 3.** *Agar V chiziqli fazoda n ta chiziqli erkli vektorlar mavjud bo'lib, bundan ortiq sondagi chiziqli erkli vektorlar mavjud bo'lmasa, V chiziqli fazo n o'lchamli fazo deyiladi. Chiziqli fazoning o'lchami dim(V) kabi belgilanadi.*
				
*Agar $V$ fazoda cheksiz ko'p chiziqli erkli vektorlar mavjud bo'lsa, u holda V fazo **cheksiz o'lchamli fazo** deyiladi.*

			
**Tarif 4.** *n o`lchamli V fazodagi n ta chizqli erkli $ e_1, e_2, \dots, e_n $ vektorlar V fazoning \textbf{bazisi} deb ataladi.*
				
**Misol 3.**

a) To'g'ri chiziqdagi vektorlar to'plamida har qanday ikki vektor proporsional, ya'ni chiziqli bog'liqdir. Demak, to'g'ri chiziq bir o'lchamli fazoga misol bo'ladi.
				
b) Tekislikda ikkita chiziqli erkli vector mavjud, ammo xar qanday uchta vektor chiziqli bog'liq bo'ladi. Bundan esa, tekislik ikki o'lchamli chiziqli fazo ekanligi kelib chiqadi.
				
Bizga $n$ o'lchamli $V$ chiziqli fazo va uning biror bazisi berilgan bo'lsin.
				
**Teorema 1.** *$n$ o'lchamli $V$ chiziqli fazoning ixtiyoriy elementini bazis vektorlarining chiziqli kombinatsiyasi orqali yagona ravishda ifodalash mumkin.*

**Isobt 1.** Bizga $x\in V$ element va $e_1,e_2,\dots,e_n$ bazis berilgan bo'lsin. Chiziqli fazo $n$ o'lchamli bo'lganligi uchun $n+1$ ta vektordan iborat $x$ $ e_1, e_2, \dots, e_n $ vektorlar chiziqli bo'g'liq bo'ladi. Demak, kamida bittasi noldan farqli bo'lgan $a_0,a_1,a_2,\dots,a_n$ sonlar topilib, 
$$\alpha_0x+\alpha_1e_1+\alpha_2e_2+\dots+\alpha_ne_n=0$$
bo'ladi. Agar $a_0=0$ bo'lsa, $\alpha_1e_1+\alpha_2e_2+ \dots+\alpha_ne_n=0$ tenglikdan va $e_1,e_2,\dots,e_n$ vektorlarning chiziqli erkli ekanligidan $a_1=a_2=\dots=a_n=0$ ekanligi kelib chiqadi. Bu esa yuqoridagi mulohazaga zid. Demak, $a_0\neq 0$ bo'lib,
$$x=-\dfrac{a_1}{a_0}e_1-\dfrac{a_2}{a_0}e_2-\dots-\dfrac{a_n}{a_0}e_n$$
ekanligi kelib chiqadi, ya'ni $x\in V$ vektor $e_1,e_2,\dots,e_n$ vektorlarning chiziqli kombinatsiyasi orqali ifodalanadi.
				
Endi hosil qilingan ifodaning yagona ekanligini ko'rsatamiz. Faraz qilaylik, x vektorning bazis vektorlar orqali ikki hil ifodasi mavjud bo'lsin, ya'ni:
$$x=\xi_1e_1+\xi_2e_2+\dots+\xi_ne_n$$
$$x=\eta_1e_1+\eta_2e_2+\dots+\eta_ne_n$$
Bu (7) va (8) ifodalarni tenglab,
$$(\xi_1-\eta_1)e_1+(\xi_2-\eta_2)e_2+\dots+(\xi_n-\eta_n)e_n=0$$
tenglikni hosil qilamiz.
				
$e_1,e_2,\dots,e_n$ vektorlar chiziqli erkli bo'lgani uchun, bu tenglik $\xi_1=\eta_1,\xi_2=\eta_2,\dots,\xi_n=\eta_n$ bo'lgandagina o'rinlidir.
				
**Tarif 5.** $e_1,e_2,\dots,e_n$ *vektorlar n o'lchamli fazoning bazisi bo'lib, (7) bo'lsa, u holda $\xi_1,\xi_2,\dots,\xi_n$ sonlar* **$x$ vektorning $e_1,e_2,\dots,e_n$ bazisdagi koordinatalari** *deb ataladi.*
			
Teorema 1ga muvofiq, ma'lum $e_1,e_2,\dots,e_n$ bazisda xar bir vektor bir qiymatli aniqlanadigan koordinatalarga ega.
			
Agar $x$ va $y$ vektor $e_1,e_2,\dots,e_n$ bazisda mos ravishda $\xi_1,\xi_2,\dots,\xi_n$ va $v_1,v_2,\dots,v_n$ koordinatalarga ega bo'lsa, ya'ni
$$x=\xi_1e_1+\xi_2e_2+\dots+\xi_ne_n$$
$$y=\nu_1e_1+\nu_2e_2+\dots+\nu_ne_n$$
U holda $x+y$ vektor $\xi_1+\nu_1,\xi_2+\nu_2,\dots,\xi_n+\nu_n$ kordinatalarga ega bo'ladi. ya'ni
$$x+y=(\xi_1+\nu_1)e_1+(\xi_2+\nu_2)e_2+\dots+(\xi_n+\nu_n)e_n$$
Shunday qilib, $x$ va $y$ vektorlarni qo'shishda ularning bir hil bazisdagi koordinatalari yig'indisi olinadi.
			
$x$ vektorni $\lambda$ soniga ko'paytirishda esa uning xar bir koordinatasi shu songa ko'paytiriladi.
			
**Misol 4.**
a) Bizga $V=R^3$ uch o'lchamli haqiqiy vektor fazo berilgan bo'lsin. Bu fazoda $e_1=(1,0,0),e_2=(0,1,0),e_3=(0,0,1)$ vektorlar bazis tashkil qiladi va ixtiyoriy $x=(x_1,x_2,x_3)$ vektorning ushbu bazisdagi kordinatalari $x_1,x_2,x_3$ bo'ladi.
				
b) $V=P_n(t) $ darajasi n dan oshmaydigan ko'phadlardan iborat bo'lgan fazo bo'lsin. Bu fazoda $e_1=1,e_2=t,\dots,e_{n+1}=t^n$ vektorlar to'plami bazis tashkil qiladi, ya'ni $dimP_n(t)=n+1$. Ushbu bazisda ixtiyoriy $f(t)=a_0t^n+a_1t^{n-1}+\dots+a_n$ ko'phad koordinatalari uning $a_0,a_1,\dots,a_n$ koeffitsientlaridan iborat bo'ladi.

Agar $P_n(t)$ fazoda boshqa bazis 
$$e_1^\prime=1,e_2^\prime=t-a,\dots,e_{n+1}^\prime=(t-a)^n$$
tanlasak, u holda $f(t)$ ko'phadning bu bazisdagi koordinatalarini topish uchun uni Teylor qatoriga yoyiladi:
$$f(t)=f(a)+f^\prime(a)(t-a)+\dots+\dfrac{f^{(n)}}{n!}(t-a)^n$$
Demak, $f(t)$ ko'phadning (13) bazisdagi kordinatalari $f(a),f^\prime(a),\ddots,\dfrac{f^{(n)}(a)}{n!}$ ko'rinishda bo'ladi.
				
Endi chiziqli fazolar izomorfizmi tushunchasini kiritamiz.
				
**Tarif 6.** Bizga $V$ va $V^\prime$ chiziqli fazolar berilgan bo'lsin. Agar $x\in V$ va $x^\prime\in V^\prime$ vektorlar orasida shunday o'zaro bir qiymatli $x\leftrightarrow x^\prime$ moslik o'rnatish mumkin bo'lib, $x$ va $x^\prime$, hamda $y$ va $y^\prime$ vektorning mosligidan

1) $x+y$ vektor $ x^\prime + y^\prime $ vektorga mosligi;
2) $\lambda x$ vektor $\lambda x^\prime $ vektorga mosligi;

kelib chiqsa, u holda $V$ va $V^\prime$ chiziqli fazolar **izomorf fazolar** deyiladi.

**Teorema 2.** Bir hil o'lchamga ega bo'lgan barcha chiziqli fazolar bir-birlariga izomorfdir.

**Isbot 2.** Aytaylik, $V$ va $V^\prime$ chiziqli fazolar $n$ o'lchamli fazolar bo'lsin. $V$ va $V^\prime$ fazolar mos ravishda $e_1,e_2,\dots e_n$ va $e^\prime_1,e^\prime_2,\dots,e^\prime_n$ bazislarni tanlab olamiz. $V$ fazodan olingan ixtiyoriy (10) vektorga $V^\prime$ fazodagi $x^\prime=\xi_1e^\prime_1+\xi_2e^\prime_2+\dots+\xi_ne^\prime_n$ vektorni mos qo'yamiz.

Bu moslik o'zaro bir qiymatli bo'ladi. Haqiqatan ham, har bir $x$ vektor (10) ko'rinishida yagona ravishda tasvirlangani uchun $x^\prime$ vektor ham bir qiymatli aniqlangadi. $V$ va $V^\prime$ fazolarning teng o'lchamli ekanligini e'tiborga olsak, xar bir $x^\prime\in V^\prime$ vektorlarga V ning faqat bittagina elementi to'g'ri keladi. Demak, bu moslik bir qiymatli moslik ekan.
				
Agar $x\leftrightarrow x^\prime$ va $y\leftrightarrow y^\prime$ bo'lib, $x=\xi_1e_1+\xi_2e_2+\dots+\xi_ne_n$ va $x=\eta_1e_1+\eta_2e_2+\dots+\eta_ne_n$ bo'lsa, u holda
$$x+y=(\xi_1+\eta_1)e_1+(\xi_2+\eta_2)e_2+\dots+(\xi_n+\eta_n)e_n$$
ekanligidan $x+y\leftrightarrow x^\prime+y^\prime$ kelib chiqadi. Xuddi shunday $\lambda x\leftrightarrow\lambda x^\prime$ moslik ham osongina kelib chiqadi.
				
Endi vektor fazoning bazisi o'zgarganda vektorning koordinatalarini qanday o'zgarishi keltiramiz.
				
Aytaylik, $n$ o'lchamli $V$ vektor fazoda $e_1,e_2,\dots,e_n$ va $e^\prime_1,e^\prime_2,\dots,e^\prime_n$ bazislar berilgan bo'lib, x vektorning birinchi bazisdagi koordinatalari$\xi_1,\xi_2,\dots,\xi_n$ ikkinchi bazisdagi koordinatalari $\xi^\prime_1,\xi^\prime_2,\dots,\xi^\prime_n$ bo'lsin. U holda
$$x=\xi_1e_1+\xi_2e_2+\dots+\xi_ne_n=\xi^\prime_1e^\prime_1+\xi^\prime_2e^\prime_2+\dots+\xi^\prime_ne^\prime_n$$
Xar bir $e^\prime_i$ vektor $e_1,e_2,\dots,e_n$ vektorlar orqali quyidagicha ifodalansin:

$$
 \left\{
  \begin{array}{l}
	e^\prime_1=a_{1,2}e_1+a_{2,1}+\dots+a_{n,1}e_n,\\
	e^\prime_1=a_{1,2}e_1+a_{2,1}+\dots+a_{n,1}e_n,\\
	\dotfill\\
	e^\prime_1=a_{1,2}e_1+a_{2,1}+\dots+a_{n,1}e_n.
  \end{array}
 \right. 
$$
				
U holda birinchi bazisdan ikkinchi bazisga o'tish matritsasi $A=(a_{i,j})$ orqali ifodalanadi. Ma'lumki, ushbu matritsaning determinanti noldan farqli.
				
Yuqoridagi tenglikdan
\[ 
 \begin{array}{c}
   x=\xi_1e_1+\xi_2e_2+\dots+\xi_ne_n=\\
   =\xi^\prime_1(a_{1,1}e_1+a_{2,1}e_2+\dots+a_{n,1}e_n)+\\
   +\xi^\prime_2(a_{1,2}e_1+a_{2,2}e_2+\dots+a_{n,2}e_n)+\\
   +\dotfill+\\
   +\xi^\prime_n(a_{1,n}e_1+a_{2,n}e_2+\dots+a_{n,n}e_n).
  \end{array}
\]
				
Demak, berilgan $x$ vektorning kordinatalari orasida quyidagi munosabat o'rinli:
				
\[
 \left(
  \begin{array}{c}
   \xi_1\\
   \xi_2\\
   \vdots\\
   \xi_n
  \end{array}
 \right)
 =
 \left(
  \begin{array}{llll}
   a_{1,1} & a_{1,2} & \dots & a_{1,n} \\
   a_{2,1} & a_{2,2} & \dots & a_{2,n} \\
   \vdots & \vdots & \ddots & \vdots \\
   a_{n,1} & a_{n,2} & \dots & a_{n,n} \\
  \end{array}
 \right)
 \left(
  \begin{array}{c}
   \xi^\prime_1\\
   \xi^\prime_2\\
   \vdots \\
   \xi^\prime_n
  \end{array}
 \right)
\]

Bundan esa, 

\[
 \left(
  \begin{array}{c}
   \xi^\prime_1\\
   \xi^\prime_2\\
   \vdots \\
   \xi^\prime_n
  \end{array}
 \right)
 =
 \left(
  \begin{array}{llll}
   a_{1,1} & a_{1,2} & \dots & a_{1,n} \\
   a_{2,1} & a_{2,2} & \dots & a_{2,n} \\
   \vdots & \vdots & \ddots & \vdots \\
   a_{n,1} & a_{n,2} & \dots & a_{n,n} \\
  \end{array}
 \right)^{-1}
 \cdot
 \left(
  \begin{array}{c}
   \xi_1\\
   \xi_2\\
   \vdots\\
   \xi_n
  \end{array}
 \right)
\]
hosil bo`ladi.
				
# Yakuniy qisim
## Xulosa	
Shunday qilib, $x$ vektorning ikkinchi bazisdagi koordinatalari, birinchi bazisdan ikkinchi bazisga o'tish matritsasi teskarisi bilan birinchi bazisdagi koordinatalari ko'paytmasiga teng.
			
## Foydalanilgan adabiyotlar
Darsda ko'rsatilgan \mavzu mavzusi bo'yicha qo'llanmani nushasini \LaTeX da qaytadan yozib chiqdim asosiy foydalanilgan adabiyotni aniqlashtirganimdan keyin yozib qo'yaman. 
		
P.S. Bu olingan materialdan bir qancha hato kamchiliklarini to'g'irlab yozdim.








