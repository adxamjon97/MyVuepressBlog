---
title: C++ boshlash
date: 2021-05-02
tags: 
  - c++
  - cheatsheet
  - cmath
  - math
featuredimg: /assets/img/img_1.jpg
---

# C++ dasturlash tili

Bu dasurlash tili C tilida kelib chiqqan. G++ kompilyator o'rnatamiz. `main.cpp` fayl yaratamiz

```cpp
#include<iostream>
using namespace std;

int main(){
	cout<<"Hello world"<<endl;
	return 0;
}
```
terminal(consol)ga yozamiz `g++ main.cpp` 
(yoki `g++ main.cpp -o main`) teramiz chiquvchi 
fayl `a.out` (yoki `main`) bo'ladi. Dasturni 
ishga tushirish uchun `./a.out` (yoki `./main`) 
terib ishga tushiramiz `Hello world` ekranga chiqadi.

```cpp
const int number = 1; // konstanta o'zgarmas son
```

```cpp
#include<string>

string name = "Adxamjon" // satrli o'zgaruvchi

cout<<name;

name.size();	// satr o'lchami
name.length();	// bu ham

getline(cin, name); // uzun satr qabul
```

```cpp
#include <cmath>

cout << sqrt(64); 	// ildizini husobleydi
cout << round(2.6); // yahlitlash
cout << log(2); 	// logarifmi
```

funksya 	| ma'nosi     |
------------|-------------|
abs(x)		| x ning absolyut qiymati
acos(x)		| x ning arccosinus
asin(x)		| x ning arcsinusi
atan(x) 	| x ning arctg
cbrt(x)		| Returns the cube root of x
ceil(x)		| x ni yuqoriroqga yahlitlaydi
cos(x)		| x cosinus
cosh(x)		| Returns the hyperbolic cosine of x
exp(x)		| Returns the value of Ex
expm1(x)	| Returns ex -1
fabs(x)		| Returns the absolute value of a floating x
fdim(x, y)	| Returns the positive difference between x and y
floor(x)	| x ni kichik qiymat bilan yahlitleydi
hypot(x, y)	| sqrt(x2 +y2) gipatinuzasi
fma(x, y, z)| Returns x*y+z without losing precision
fmax(x, y)	| Returns the highest value of a floating x and y
fmin(x, y)	| Returns the lowest value of a floating x and y
fmod(x, y)	| Returns the floating point remainder of x/y
pow(x, y)	| x ni y-darajasi
sin(x)		| Returns the sine of x (x is in radians)
sinh(x)		| Returns the hyperbolic sine of a double value
tan(x)		| Returns the tangent of an angle
tanh(x)		| Returns the hyperbolic tangent of a double value























